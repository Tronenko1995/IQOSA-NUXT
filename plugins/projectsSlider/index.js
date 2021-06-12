import * as THREE from "three"
import gsap from "gsap"

import fragment from "./shader/fragment.glsl"
import vertex from "./shader/vertex.glsl"

export default class  {
  constructor(options) {
    this.shaderObj = options.shaderObj
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(
      this.shaderObj.offsetWidth / -2,
      this.shaderObj.offsetWidth / 2,
      this.shaderObj.offsetHeight / 2,
      this.shaderObj.offsetHeight / -2,
      1,
      1000
    )

    let shaderObjImgs = [],
    shaderObjImgsActive = 0,
    shaderAnimation,
    shaderFlag = false,
    thisIndex

    this.camera.position.z = 1

    this.renderer = new THREE.WebGLRenderer({
      antialias: false
    })

this.renderer.setPixelRatio(window.devicePixelRatio)
this.renderer.setClearColor(0xffffff, 0.0)
this.shaderObj.append(this.renderer.domElement)

this.loader = new THREE.TextureLoader()
this.loader.crossOrigin = ""

this.shaderObj.querySelectorAll('.multi-textures__area').forEach(item => {
  shaderObjImgs.push(this.loader.load(item.dataset.img))
})

let textureActive = shaderObjImgs[0]
let textureNext = shaderObjImgs[1]

let disp = this.loader.load(this.shaderObj.dataset.displacement)
disp.wrapS = disp.wrapT = THREE.RepeatWrapping

textureActive.magFilter = textureNext.magFilter = THREE.LinearFilter
textureActive.minFilter = textureNext.minFilter = THREE.LinearFilter

textureActive.anisotropy = this.renderer.getMaxAnisotropy()
textureNext.anisotropy = this.renderer.getMaxAnisotropy()

this.mat = new THREE.ShaderMaterial({
uniforms: {
    effectFactor: {type: "f", value: 0.2},
    dispFactor: {type: "f", value: 0.0},
    texture: {type: "t", value: textureActive},
    texture2: {type: "t", value: textureNext},
    disp: {type: "t", value: disp}
},

vertexShader: vertex,
fragmentShader: fragment,
transparent: true,
opacity: 1.0
})

  this.geometry = new THREE.PlaneBufferGeometry(
  this.shaderObj.offsetWidth,
  this.shaderObj.offsetHeight,
  1
)
  this.object = new THREE.Mesh(this.geometry, this.mat)
  this.scene.add(this.object)

setTimeout(() => {
this.renderer.setSize(textureActive.image.naturalWidth, textureActive.image.naturalHeight)
}, 1000)

window.addEventListener("resize", () => {
this.renderer.setSize(textureActive.image.naturalWidth, textureActive.image.naturalHeight)
})

this.changeImg = function changeImg(index) {
    thisIndex = index

    if (shaderObjImgsActive != thisIndex) {
        shaderObjImgsActive = thisIndex
        textureNext = shaderObjImgs[shaderObjImgsActive]
        this.mat.uniforms.disp = {type: "t", value: shaderObjImgs[shaderObjImgsActive]}
        textureActive.magFilter = textureNext.magFilter = THREE.LinearFilter
        textureActive.minFilter = textureNext.minFilter = THREE.LinearFilter

        this.mat.uniforms.dispFactor.value = 0.0
        this. mat.uniforms.texture.value = textureActive
        this.mat.uniforms.texture2.value = textureNext

        if (shaderFlag) {
            shaderAnimation.paused(0)
        }
        shaderFlag = true
        shaderAnimation = gsap.to(this.mat.uniforms.dispFactor, {
            duration: 0.75,
            value: 1,
            onComplete: getActiveTexture
        })
    }
  }
}
}



render = function render() {
  // requestAnimationFrame(animate)
  requestAnimationFrame(render.bind(this))
  this.renderer.render(this.scene, this.camera)
}
animate()

getActiveTexture = function getActiveTexture() {
  textureActive = shaderObjImgs[shaderObjImgsActive]
  shaderFlag = false
}
