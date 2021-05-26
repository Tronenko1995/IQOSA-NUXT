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
    let group, camera, scene, renderer, distance;

    const init = () => {

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

        const icosahedron = this.$refs.menuIcosahedron

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

        // controls
        // const controls = new OrbitControls(camera, icosahedron);
        // controls.minDistance = 20;
        // controls.maxDistance = 50;
        // controls.maxPolarAngle = Math.PI / 2;

        // ambient light
        scene.add( new THREE.AmbientLight( 0x222222 ) );

        // point light
        const light = new THREE.PointLight( 0xffffff, 1 );
        camera.add( light );

        // helper
        // scene.add( new THREE.AxesHelper( 20 ) );

        // textures
        // const loader = new THREE.TextureLoader();
        // const texture = loader.load( 'https://threejs.org/examples/textures/sprites/disc.png' );

        group = new THREE.Group();
        scene.add( group );

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
            opacity: 0.8,
            transparent: true
        } );

        // const meshGeometry = new ConvexGeometry( vertices );
        const meshGeometry = new THREE.IcosahedronBufferGeometry(1, 0);

        const mesh1 = new THREE.Mesh( meshGeometry, meshMaterial );
        mesh1.material.side = THREE.BackSide; // back faces
        mesh1.renderOrder = 0;
        group.add( mesh1 );

        const mesh2 = new THREE.Mesh( meshGeometry, meshMaterial.clone() );
        mesh2.material.side = THREE.FrontSide; // front faces
        mesh2.renderOrder = 1;
        group.add( mesh2 );

        //
        window.addEventListener( 'resize', onWindowResize );

    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
        requestAnimationFrame( animate );
        group.rotation.y += 0.005;
        render();
    }

    function render() {
        renderer.render( scene, camera );
    }

    init()
    animate()
    }
}
}
</script>