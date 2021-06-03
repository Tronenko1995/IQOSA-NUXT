uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform vec3 color;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;
varying vec3 eyeVector;
varying vec3 vNormal;
varying vec3 worldNormal;
uniform sampler2D envMap;
uniform float ratio;
uniform sampler2D backMap;
varying vec3 vBary;
varying vec3 vCenter;
float Fresnel(vec3 eyeVector, vec3 worldNormal) {
	return pow( 1.0 + dot( eyeVector, worldNormal), 3.0 );
}
// uniform mat3 normalMatrix;
float rand(float n){return fract(sin(n) * 43758.5453123);}
float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}
float noise(vec2 n) {
	const vec2 d = vec2(0.0, 1.0);
  	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}
void main()	{
	vec3 bg = color;
	vec3 red = vec3(0.724, 0.552, 0.430);
	vec3 blue = vec3(0.235, 0.449, 0.606);
	float grad = clamp(0.,1.,smoothstep(0.2,1.3,vPosition.z/3.));

	// vec3 green = vec3(0.04, 0., 0.03);
	
	// float width = 10.;
	// vec3 d = fwidth(vBary);
	// vec3 s = smoothstep( d*(width + 0.5), d*(width - 0.5),vBary);
	vec3 s = smoothstep( 0.3,-0.2,vBary);
	float line = max(s.x,max(s.y,s.z));
	line *=line*line*line;
	vec3 s1 = smoothstep( 0.01,0.,vBary);
	float line1 = max(s1.x,max(s1.y,s1.z));
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	// gl_FragColor = vec4(vUv,0.0,1.);
	vec2 uv = gl_FragCoord.xy / resolution.xy/ratio;
	// vec2 newUV = (uv - vec2(0.5))*resolution.wz + vec2(0.5);
	vec4 b = texture2D(backMap, uv);

	// vec3 normal = worldNormal;
	float a = 0.6;
	vec3 X = dFdx(worldNormal);
	vec3 Y = dFdy(worldNormal);
	vec3 normal = worldNormal*a + (1. - a)*b.rgb;
	float rando = noise(vNormal.xy);
	// calculate refraction and add to the screen coordinates
	vec3 refracted = refract(eyeVector, normal, 1.0/2.2);
	vec3 refracted1 = refract(eyeVector, b.rgb, 2.2/1.);
	refracted.xy = refracted.xy*a + (1.-a)*refracted1.xy;
	uv += 0.05*refracted.xy;
	vec2 temp = normalize(vCenter.xy - vPosition.xy);
	vec2 move = 0.05*vec2(sin(2.*PI*rando  + time/10.),cos(2.*PI*rando + time/10.));
	uv += 0.01*line*temp + move;
	vec2 uv1 = uv- 0.02*line*temp - 0.005*line1*temp;
	vec2 uv2 = uv-0.02*line*temp - 0.005*line1*temp;

	// sample the background texture
	vec4 final = texture2D(envMap, uv);
	vec4 final1 = texture2D(envMap, uv1);
	vec4 final2 = texture2D(envMap, uv2);
	final.rgb = vec3(final.r,final1.g,final2.b);
	// final.rgb = final.r*red + final1.r*blue;

	
	
	// calculate the Fresnel ratio
	float f = Fresnel(eyeVector, normal)*(1. - grad);

	// mix the refraction color and reflection color
	final.rgb = mix(final.rgb, bg, f);

	gl_FragColor = vec4(final.rgb, 1.0);
	// gl_FragColor = vec4(vec3(grad), 1.0);
	

	
	// if(line<0.1) discard;
	
	
	// gl_FragColor = b;
	// gl_FragColor = vec4(uv,0., 1.0);
	// gl_FragColor = vec4(abs(refracted), 1.0);
	// gl_FragColor += vec4(line);
	// gl_FragColor = vec4(temp,0., 1.0);
}