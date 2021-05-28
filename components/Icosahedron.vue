<template>
    <div class="menu__icosahedron" ref="menuIcosahedron"></div>
</template>

<script>
import * as THREE from 'three'
export default {
    beforeMount() {
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('mousemove', this.onMouseMove, false);
    },
    mounted() {
        this.init()
        this.animate()
    },
    data() {
       return {
           group: null,
           camera: null,
           scene: null,
           renderer: null,
           distance: null,
           mouse: null,
           target: null,
           light: null,
           icosahedron: null
       }
    },
    methods: {
        init() {
            this.icosahedron = this.$refs.menuIcosahedron
            this.renderer = new THREE.WebGLRenderer()
            this.group = new THREE.Group()
            this.scene = new THREE.Scene()
            this.mouse = new THREE.Vector2()
            this.target = new THREE.Vector2()
            this.light = new THREE.PointLight(0xffffff, 1)

            if (window.innerWidth <= 600) {
                this.distance = 110 
            } else if (window.innerWidth <= 800) {
                this.distance = 104 
            } else if (window.innerWidth <= 1100) {
                this.distance = 84 
            } else if (window.innerWidth <= 1800) {
                this.distance = 70 
            } else if (window.innerWidth <= 2200) {
                this.distance = 90
            } else {
                this.distance = 105
            }
            if (window.innerWidth === 1024 && window.innerHeight === 1366) { // for ipad pro
                this.distance = 105
            }

            this.camera = new THREE.PerspectiveCamera( this.distance, window.innerWidth / window.innerHeight, 0.001, 1000 )
                
            // scene.background = new THREE.Color( 0x1b1b1b );

            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( this.icosahedron.offsetWidth, this.icosahedron.offsetHeight );
            this.icosahedron.appendChild( this.renderer.domElement );
            
            this.camera.position.z = 2;
            this.scene.add(this.camera);

            this.camera.add(this.light);

            const material = new THREE.MeshLambertMaterial( {
                color: 0x333333,
                opacity: 1,
                transparent: true
            });

            const geometry = new THREE.IcosahedronBufferGeometry(1, 0);

            let mesh1 = new THREE.Mesh( geometry, material );
            mesh1.material.side = THREE.BackSide; // back faces
            mesh1.renderOrder = 0;
            this.group.add( mesh1 );

            let mesh2 = new THREE.Mesh( geometry, material.clone() );
            mesh2.material.side = THREE.FrontSide; // front faces
            mesh2.renderOrder = 1;
            this.group.add( mesh2 );

            this.scene.add( this.group );
        },
        animate() {
            requestAnimationFrame(this.animate)
            this.group.rotation.y += 0.05 / 10
            this.group.rotation.x = 0.3

            this.target.x -= 0.02 * (this.target.x - this.mouse.x);
            this.target.y -= 0.02 * (this.target.y - this.mouse.y);
            this.group.position.x = -0.4 * this.target.x;
            this.group.position.y = -0.4 * this.target.y;

            this.renderer.render( this.scene, this.camera );
        },
        onMouseMove(e) {
            e.preventDefault();
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize( window.innerWidth, window.innerHeight )
        }
    },
    beforeDestroy() {
		window.removeEventListener('resize',  this.onWindowResize)
		window.removeEventListener('mousemove',  this.onMouseMove, false)
	}
}
</script>


<style lang="scss">
.menu {
    &__icosahedron {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        transition: opacity .5s ease;
    }
}
</style>