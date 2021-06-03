uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;
varying vec3 eyeVector;
varying vec3 vNormal;
varying vec3 worldNormal;
uniform sampler2D envMap;
float Fresnel(vec3 eyeVector, vec3 worldNormal) {
	return pow( 1.0 + dot( eyeVector, worldNormal), 3.0 );
}
// uniform mat3 normalMatrix;
void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	// gl_FragColor = vec4(vUv,0.0,1.);
	vec2 uv = 0.5*gl_FragCoord.xy / resolution.xy ;
	

	// vec3 normal = worldNormal;
	vec3 X = dFdx(worldNormal);
	vec3 Y = dFdy(worldNormal);
	// vec3 normal = normalize(cross(X,Y));
	vec3 normal = worldNormal;
	// calculate refraction and add to the screen coordinates
	vec3 refracted = refract(eyeVector, normal, 1.0/2.2);
	uv += refracted.xy;

	// sample the background texture
	vec4 final = texture2D(envMap, uv);

	// calculate the Fresnel ratio
	float f = Fresnel(eyeVector, normal);

	// mix the refraction color and reflection color
	final.rgb = mix(final.rgb, vec3(1.0), f);

	gl_FragColor = vec4(final.rgb, 1.0);
	gl_FragColor = vec4(worldNormal, 1.0);
	// gl_FragColor = vec4(abs(refracted), 1.0);
	// gl_FragColor = vec4(normal*vec3(1.,1.,1.), 1.0);
	// gl_FragColor = vec4(1.,0.,0.,1.);
}