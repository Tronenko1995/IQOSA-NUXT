<template>
<div>
    <div class="menu__icosahedron" ref="menuIcosahedron"></div>
</div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry.js"
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils.js"
export default {
mounted() {
    this.icosahedronStart()
},
methods: {
    icosahedronStart() {
        let group, camera, scene, renderer, distance, controls, mesh1, mesh2;

        const icosahedron = this.$refs.menuIcosahedron
        const mouse = new THREE.Vector2();
        const target = new THREE.Vector2();

        init();
        animate();

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

            renderer = new THREE.WebGLRenderer( { antialias: false } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( icosahedron.offsetWidth, icosahedron.offsetHeight );
            icosahedron.appendChild( renderer.domElement );

            // camera
            camera = new THREE.PerspectiveCamera( distance, window.innerWidth / window.innerHeight, 0.001, 1000 );
            // camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
            // camera.position.set( 15, 20, 30 );
            camera.position.z = 2;
            scene.add( camera );

            // ambient light
            // scene.add( new THREE.AmbientLight( 0x000000 ) );

            //fog
            // scene.background = new THREE.Color( 0x1b1b1b );
            scene.fog = new THREE.Fog( 0xffffff, 1, 2000 );

            // point light
            const light = new THREE.PointLight( 0xffffff, 1 );
            camera.add( light );

            // helper
            // scene.add( new THREE.AxesHelper( 20 ) );

            // textures
            // const loader = new THREE.TextureLoader();
            // const texture = loader.load( 'https://threejs.org/examples/textures/sprites/disc.png' );

            group = new THREE.Group();

            // points
            let dodecahedronGeometry = new THREE.DodecahedronGeometry( 10 );

            // if normal and uv attributes are not removed, mergeVertices() can't consolidate indentical vertices with different normal/uv data
            dodecahedronGeometry.deleteAttribute( 'normal' );
            dodecahedronGeometry.deleteAttribute( 'uv' );
            dodecahedronGeometry = BufferGeometryUtils.mergeVertices( dodecahedronGeometry );

            // const vertices = [];
            // const positionAttribute = dodecahedronGeometry.getAttribute( 'position' );

            // for ( let i = 0; i < positionAttribute.count; i ++ ) {
                // const vertex = new THREE.Vector3();
                // vertex.fromBufferAttribute( positionAttribute, i );
                // vertices.push( vertex );
            // }

            // const pointsMaterial = new THREE.PointsMaterial({
            //     color: 0x0080ff,
            //     map: texture,
            //     size: 1,
            //     alphaTest: 0.5
            // });

            // const pointsGeometry = new THREE.BufferGeometry().setFromPoints( vertices );

            // const points = new THREE.Points( pointsGeometry, pointsMaterial );
            // group.add( points );

            // convex hull
            const meshMaterial = new THREE.MeshLambertMaterial( {
                color: 0x333333,
                opacity: 0.85,
                transparent: true
            } );

            // const geometry = new ConvexGeometry( vertices );
            const geometry = new THREE.IcosahedronBufferGeometry(1, 0);
            // var geometry = new THREE.SphereBufferGeometry( 1, 300, 1);

            mesh1 = new THREE.Mesh( geometry, meshMaterial );
            mesh1.material.side = THREE.BackSide; // back faces
            mesh1.renderOrder = 0;
            group.add( mesh1 );

            mesh2 = new THREE.Mesh( geometry, meshMaterial.clone() );
            mesh2.material.side = THREE.FrontSide; // front faces
            mesh2.renderOrder = 1;
            group.add( mesh2 );

            // scene.add( mesh1 );
            scene.add( group );

            //
            window.addEventListener( 'resize', onWindowResize );



            // controls
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false
            controls.enableRotate = false
            controls.enablePan = false


            // controls.update();

            // controls.minDistance = 20;
            // controls.maxDistance = 50;
            // controls.maxPolarAngle = Math.PI / 2;

            window.addEventListener( 'mousemove', onMouseMove, false );

        }

        function onMouseMove(e) {
            e.preventDefault();
            mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize( window.innerWidth, window.innerHeight )
        }

        function animate() {
            requestAnimationFrame( animate )
            group.rotation.y += 0.05 / 10
            group.rotation.x = 0.3
            // group.position.y += 0.05 / 10;
            // group.position.y += 0.001;
            // group.position.x += 0.001;

            // mesh2.position.x = mesh2.position.x + target.x

            // console.log('target.x', target.x)
            // console.log('target.y', target.y)
            // console.log('mouse.x', mouse.x)
            // console.log('mouse.y', mouse.y)

            // renderer.clearDepth();

            //code
            target.x -= 0.02 * (target.x - mouse.x);
            target.y -= 0.02 * (target.y - mouse.y);
            group.position.x = -0.4 * target.x;
            group.position.y = -0.4 * target.y;
            // controls.update();
            renderer.render( scene, camera );
        }
    }
}
}
</script>