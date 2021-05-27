<template>
<div>
    <div class="icosahedron" ref="icosahedron"></div>
</div>
</template>

<script>
import * as THREE from 'three'
export default {
mounted() {
    this.icosahedronStart()
},
methods: {
    icosahedronStart() {
        let group, camera, scene, renderer, distance

        const icosahedron = this.$refs.icosahedron,
              mouse = new THREE.Vector2(),
              target = new THREE.Vector2()

        init()
        animate()

        function init() {
            if (window.innerWidth <= 600) {
                distance = 110 
            } else if (window.innerWidth <= 800) {
                distance = 104 
            } else if (window.innerWidth <= 1100) {
                distance = 84 
            } else if (window.innerWidth <= 1800) {
                distance = 70 
            } else if (window.innerWidth <= 2200) {
                distance = 90
            } else {
                distance = 105
            }
            if (window.innerWidth === 1024 && window.innerHeight === 1366) { // for ipad pro
                distance = 105
            }
            
            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0x1b1b1b );

            renderer = new THREE.WebGLRenderer( { antialias: false } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( icosahedron.offsetWidth, icosahedron.offsetHeight );
            icosahedron.appendChild( renderer.domElement );
            
            camera = new THREE.PerspectiveCamera( distance, window.innerWidth / window.innerHeight, 0.001, 1000 );
            camera.position.z = 2;
            scene.add( camera );


            const light = new THREE.PointLight( 0xffffff, 1 );
            camera.add( light );

            group = new THREE.Group();

            const material = new THREE.MeshLambertMaterial( {
                color: 0x333333,
                opacity: 0.85,
                transparent: true
            } );

            const geometry = new THREE.IcosahedronBufferGeometry(1, 0);

            let mesh1 = new THREE.Mesh( geometry, material );
            mesh1.material.side = THREE.BackSide; // back faces
            mesh1.renderOrder = 0;
            group.add( mesh1 );

            let mesh2 = new THREE.Mesh( geometry, material.clone() );
            mesh2.material.side = THREE.FrontSide; // front faces
            mesh2.renderOrder = 1;
            group.add( mesh2 );

            scene.add( group );

            window.addEventListener( 'resize', onWindowResize );
            window.addEventListener( 'mousemove', onMouseMove, false );
        }
        function onMouseMove(e) {
            e.preventDefault();
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
        }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize( window.innerWidth, window.innerHeight )
        }
        function animate() {
            requestAnimationFrame(animate)
            group.rotation.y += 0.05 / 10
            group.rotation.x = 0.3

            target.x -= 0.02 * (target.x - mouse.x);
            target.y -= 0.02 * (target.y - mouse.y);
            group.position.x = -0.4 * target.x;
            group.position.y = -0.4 * target.y;

            renderer.render( scene, camera );
        }
    }
}
}
</script>

<style lang="scss">
    .icosahedron {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        transition: opacity .5s ease;
    }
</style>