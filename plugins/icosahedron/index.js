import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const createInputEvents = require('simple-input-events');

import fragment from "./shader/fragment.glsl";
import fragment1 from "./shader/fragment1.glsl";
import vertex from "./shader/vertex.glsl";
// import * as dat from "dat.gui";
import gsap from "gsap";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


function getBg() {
  // let url = document.body.dataset.url;
  let url = "";

  let images = {
    home: {
      en: {
        desktop: 'iqosahedron/Main_en.png',
        tablet: 'iqosahedron/Main 769-1024 en.png',
        mobile: 'iqosahedron/Main page 375-414 en.png'
      },
      ru: {
        desktop: 'iqosahedron/Main ru.png',
        tablet: 'iqosahedron/Main 769-1024 ru.png',
        mobile: 'iqosahedron/Main page 375-414 ru.png'
      },
      ua: {
        desktop: 'iqosahedron/Main ua.png',
        tablet: 'iqosahedron/Main 769-1024 ua.png',
        mobile: 'iqosahedron/Main page 375-414 ua.png'
      }
    },
    contacts: {
      en: {
        desktop: 'iqosahedron/Contacts en.png',
        tablet: 'iqosahedron/Contacts 769-1024 en.png',
        mobile: 'iqosahedron/Contacts 375-414 en.png',
      },
      ru: {
        desktop: 'iqosahedron/Contacts ru.png',
        tablet: 'iqosahedron/Contacts 769-1024 ru.png',
        mobile: 'iqosahedron/Contacts 375-414 ru.png',
      },
      ua: {
        desktop: 'iqosahedron/Contacts ua.png',
        tablet: 'iqosahedron/Contacts 769-1024 ua.png',
        mobile: 'iqosahedron/Contacts 375-414 ua.png',
      }
    },
    error: {
      en: {
        desktop: 'iqosahedron/error en.png',
        tablet: 'iqosahedron/error page 769-1024 en.png',
        mobile: 'iqosahedron/error page 375-414 en.png'
      },
      ru: {
        desktop: 'iqosahedron/error ru.png',
        tablet: 'iqosahedron/error page 769-1024 ru.png',
        mobile: 'iqosahedron/error page 375-414 ru.png'
      },
      ua: {
        desktop: 'iqosahedron/error ua.png',
        tablet: 'iqosahedron/error page 769-1024 ua.png',
        mobile: 'iqosahedron/error page 375-414 ua.png'
      }
    }
  }

  let page_name = "";
  let size = "";
  let lang = getCookie("pll_language") || "en";
  const container = document.querySelector(`[data-barba="container"]`);

  // if (container.dataset.barbaNamespace === 'index') {
  //   page_name = "home"
  // } else if (container.dataset.barbaNamespace === 'contacts') {
  //   page_name = "contacts"
  // } else {
  //   page_name = "error"
  // }

  // if (window.innerWidth > 1024) {
  //   size = "desktop"
  // } else if (window.innerWidth > 600) {
  //   size = "tablet"
  // } else {
  //   size = "mobile"
  // }

  // return images[page_name][lang][size];
  return images["home"]["en"]["desktop"];

}

export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    this.ratio = window.devicePixelRatio
    this.renderer.setPixelRatio(this.ratio);
    this.renderer.setSize(this.width, this.height);
    // this.renderer.setClearColor(0xeeeeee, 1);
    // this.renderer.physicallyCorrectLights = true;
    // this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.event = createInputEvents(options.eventContainer);
    this.container.appendChild(this.renderer.domElement);

    const camera_distance = window.innerWidth <= 600 ? 100 : 70;

    this.camera = new THREE.PerspectiveCamera(
      camera_distance,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    // var frustumSize = 10;
    // var aspect = window.innerWidth / window.innerHeight;
    // this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
    this.camera.position.set(0, 0, 2);


    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;

    this.mouse = new THREE.Vector2(0, 0)

    this.mouseTarget = new THREE.Vector2(0, 0)

    this.isPlaying = true;
    this.addQuad();
    this.backSide();
    this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
    this.settings();
    this.mouseEvents();
  }

  mouseEvents() {
    let self = this;
    this.event.on('move', ({ position, event, inside, dragging }) => {
      self.mouse.x = (position[0]) / this.width * 2 - 1;
      self.mouse.y = -((position[1]) / this.height) * 2 + 1;
    })
  }

  addQuad() {
    let width = this.width;
    let height = this.height;
    this.envFBO = new THREE.WebGLRenderTarget(width, height);
    this.orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    this.orthoCamera.position.set(0, 0, 2);
    this.orthoCamera.lookAt(0, 0, 0);
    this.orthoCamera.layers.set(1);

    // const tex = new THREE.TextureLoader().load(bg);
    this.tex = new THREE.TextureLoader().load(getBg(), () => {
      this.resize();
    });
    // tex.needsUpdate = true;
    this.cover = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        tex: { value: this.tex },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      transparent: true,
      vertexShader: `uniform float time;
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform vec2 pixels;
      float PI = 3.141592653589793238;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
      fragmentShader: `
      uniform float time;
      uniform float progress;
      uniform sampler2D tex;
      uniform vec4 resolution;
      varying vec2 vUv;
      varying vec3 vPosition;
      float PI = 3.141592653589793238;
      void main()	{
        vec3 bg = vec3(0.106, 0.106, 0.106);
        vec2 newUV = (vUv - vec2(0.5))/resolution.wz + vec2(0.5);

        gl_FragColor = texture2D(tex,newUV);
        gl_FragColor = mix(gl_FragColor, vec4(bg,1.),1. -gl_FragColor.a);
        if(max(abs(newUV.x), abs(newUV.y)) > 1.0 || newUV.y<0. ) {gl_FragColor = vec4(0.106, 0.106, 0.106,1.);}
      }
      `,
    });
    this.quad = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
      this.cover
      // new THREE.MeshBasicMaterial({color: 0xff0000})
    );

    // this.quad.scale.set(2.6*width, width, 1);
    // also move the plane to layer 1
    this.quad.layers.set(1);
    this.scene.add(this.quad);



    this.renderer.autoClear = false;
  }

  settings() {
    let that = this;
    this.settings = {
      progress: 0,
      color: 0x333333
    };
    // this.gui = new dat.GUI();
    // this.gui.add(this.settings, "progress", 0, 1, 0.01);
    // this.gui.addColor( this.settings, 'color' )
    // .onChange( function(value) {
    //   that.material.uniforms.color.value = new THREE.Color(that.settings.color);
    // } );
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;


    // image cover
    if (this.tex && this.tex.image && this.tex.image.height) {
      this.imageAspect = this.tex.image.height / this.tex.image.width;
    } else {
      if (this.width < this.height) {
        this.imageAspect = 1 / 1.714;
      } else {
        this.imageAspect = 1280 / 720;
      }
    }
    let a1; let a2;
    if (this.height / this.width > this.imageAspect) {
      a1 = (this.width / this.height) * this.imageAspect;
      a2 = 1;

    } else {
      a1 = 1;
      a2 = (this.height / this.width) / this.imageAspect;
    }
    this.material.uniforms.resolution.value.x = this.width;
    this.material.uniforms.resolution.value.y = this.height;
    this.material.uniforms.resolution.value.z = a1;
    this.material.uniforms.resolution.value.w = a2;

    this.cover.uniforms.resolution.value.x = this.width;
    this.cover.uniforms.resolution.value.y = this.height;

    this.cover.uniforms.resolution.value.z = a1;
    this.cover.uniforms.resolution.value.w = a2;


    // optional - cover with quad
    // const dist  = this.camera.position.z;
    // const height = 1;
    // this.camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist));

    // // if(w/h>1) {
    // if(this.width/this.height>1){
    //   this.plane.scale.x = this.camera.aspect;
    //   // this.plane.scale.y = this.camera.aspect;
    // } else{
    //   this.plane.scale.y = 1/this.camera.aspect;
    // }

    this.camera.updateProjectionMatrix();


  }

  backSide() {
    this.backFBO = new THREE.WebGLRenderTarget(this.width, this.height);
    this.backfaceMaterial = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      transparent: true,
      vertexShader: vertex,
      fragmentShader: fragment1,
      side: THREE.BackSide
    });
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        ratio: { value: this.ratio },
        envMap: { value: this.envFBO.texture },
        color: { value: new THREE.Color(0x333333) },
        backMap: { value: this.backFBO.texture },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      transparent: true,
      vertexShader: vertex,
      fragmentShader: fragment,
      flatShading: true
    });

    this.geometry = new THREE.IcosahedronBufferGeometry(1, 0);
    let length = this.geometry.attributes.position.array.length;
    let ar = this.geometry.attributes.position.array;
    let bary = [];
    let centers = [];
    for (let i = 0; i < length / 3; i++) {
      bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0)
    }
    for (let i = 0; i < length; i += 9) {
      let a1 = [ar[i], ar[i + 1], ar[i + 2]]
      let a2 = [ar[i + 3], ar[i + 1 + 3], ar[i + 2 + 3]]
      let a3 = [ar[i + 3 + 3], ar[i + 1 + 3 + 3], ar[i + 2 + 3 + 3]]
      let c = [
        (a1[0] + a2[0] + a3[0]) / 3,
        (a1[1] + a2[1] + a3[1]) / 3,
        (a1[2] + a2[2] + a3[2]) / 3,
      ]
      centers.push(c[0], c[1], c[2])
      centers.push(c[0], c[1], c[2])
      centers.push(c[0], c[1], c[2])
    }
    let aBary = new Float32Array(bary);
    let aCenter = new Float32Array(centers);
    this.geometry.setAttribute('aBary', new THREE.BufferAttribute(aBary, 3),)
    this.geometry.setAttribute('aCenter', new THREE.BufferAttribute(aCenter, 3),)

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.render()
      this.isPlaying = true;
    }
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    // this.renderer.render(this.scene, this.camera);

    this.mesh.rotation.y = this.time / 10;
    this.mesh.rotation.x = 0.3;

    this.renderer.clear();

    // // render background to fbo
    this.renderer.setRenderTarget(this.envFBO);
    this.renderer.render(this.scene, this.orthoCamera);

    // render diamond back faces to fbo
    this.mesh.material = this.backfaceMaterial;
    this.renderer.setRenderTarget(this.backFBO);
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);

    // // render background to screen
    this.renderer.setRenderTarget(null);
    // this.renderer.render( this.scene, this.orthoCamera );
    this.renderer.clearDepth();
    // console.log(this.settings.color);
    // render geometry to screen
    this.mesh.material = this.material;
    this.renderer.render(this.scene, this.camera);


    this.mouseTarget.x -= 0.02 * (this.mouseTarget.x - this.mouse.x)
    this.mouseTarget.y -= 0.02 * (this.mouseTarget.y - this.mouse.y)

    this.mesh.position.x = -0.4 * this.mouseTarget.x;
    this.mesh.position.y = -0.4 * this.mouseTarget.y;

    // this.camera.position.x = -0.6 + 2*this.mouseTarget.x*this.settings.cameraRotation
    // this.camera.position.y = 2*this.mouseTarget.y*this.settings.cameraRotation
  }
}


