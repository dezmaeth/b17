'use strict';

var B17 = function () {
    var camera, scene, renderer;
    var geometry, material, mesh, models;

    var init = function () {
        models = {};

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

    };
    var loader = new THREE.JSONLoader;
    loader.load( "js/models/b17g.json", function( geometry ) {

    //var geometry = new THREE.CubeGeometry(5,10,5);
    models.b17 = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
    models.b17.scale.set( 2, 2, 2 );
    models.b17.position.y = 0;
    models.b17.position.x = 0;
    models.b17.rotation.x = 0.4;
    scene.add( models.b17 );
    } );

    var adjustRenderer = function (){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    };

    var animate = function () {
        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );
        models.b17.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    $(window).resize(adjustRenderer);
    init();
    animate();
};

var B17 = new B17;