uniform float time;
varying vec2 vUv;
uniform vec2 pixels;
float PI = 3.141592653589793238;
varying vec3 eyeVector;
varying vec3 worldNormal;
varying vec3 vNormal;
varying vec3 vBary;
varying vec3 vCenter;
varying vec3 vPosition;
attribute vec3 aBary;
attribute vec3 aCenter;
// uniform mat3 normalMatrix;

void main() {
  vUv = uv;
  vBary = aBary;
  vNormal = normal;
  vec4 worldPosition = modelMatrix * vec4( position, 1.0);
  eyeVector = normalize(worldPosition.xyz - cameraPosition);
  // worldNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;
  // worldNormal = normalize( normalMatrix * vec4(normal, 0.0)).xyz;
  worldNormal = normalize((modelViewMatrix*vec4(normal,0.)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vCenter = (projectionMatrix * modelViewMatrix * vec4(aCenter, 1.0)).xyz;
  vPosition = gl_Position.xyz;
}