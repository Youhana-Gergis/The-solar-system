import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from './img/stars.jpg';
import moonTexture from './img/moon.jpg';
import sunTexture from './img/sun.jpg';
import mercuryTexture from './img/mercury.jpg';
import venusTexture from './img/venus.jpg';
import earthTexture from './img/earth.jpg';
import marsTexture from './img/mars.jpg';
import jupiterTexture from './img/jupiter.jpg';
import saturnTexture from './img/saturn.jpg';
import saturnRingTexture from './img/saturn ring.png';
import uranusTexture from './img/uranus.jpg';
import uranusRingTexture from './img/uranus ring.png';
import neptuneTexture from './img/neptune.jpg';
import plutoTexture from './img/pluto.jpg';
// import { toHalfFloat } from 'three/src/extras/datautils';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
  );

  const orbit = new OrbitControls(camera, renderer.domElement);
  
  camera.position.set(-90, 140, 140);
  orbit.update();
  
  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);
  
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

const textureLoader = new THREE.TextureLoader();

const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureLoader.load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);


const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30);
const mercuryMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(mercuryTexture),
});
const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);
mercury.position.x = 28;


const venusGeo = new THREE.SphereGeometry(5.8, 30, 30);
const venusMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(venusTexture)
});
const venus = new THREE.Mesh(venusGeo, venusMat);
const venusObj = new THREE.Object3D();
venusObj.add(venus);
scene.add(venusObj);
venus.position.x = 44;

const earthGeo = new THREE.SphereGeometry(6, 30, 30);
const earthMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(earthTexture)
});
const earth = new THREE.Mesh(earthGeo, earthMat);
const earthObj = new THREE.Object3D();
earthObj.add(earth);
scene.add(earthObj);
earth.position.x = 62;




const moonGeo = new THREE.SphereGeometry(2, 30, 30);
const moonMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(moonTexture)
});
const moon = new THREE.Mesh(moonGeo, moonMat);
const moonObj = new THREE.Object3D();
moonObj.add(moon);
earth.add(moonObj);
moon.position.x =12;


const marsGeo = new THREE.SphereGeometry(4, 30, 30);
const marsMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(marsTexture)
});
const mars = new THREE.Mesh(marsGeo, marsMat);
const marsObj = new THREE.Object3D();
marsObj.add(mars);
scene.add(marsObj);
mars.position.x = 78;


const jupiterGeo = new THREE.SphereGeometry(12, 30, 30);
const jupiterMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load(jupiterTexture)
});
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMat);
const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);
scene.add(jupiterObj);
jupiter.position.x = 100;

const saturnGeo = new THREE.SphereGeometry(10, 30, 30);
const saturnMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load([
    saturnTexture,
  ]),
});
const saturn = new THREE.Mesh(saturnGeo, saturnMat);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
scene.add(saturnObj);
saturn.position.x = 138;


const saturnRingGeo = new THREE.RingGeometry(10,20,32);
const saturnRingMat = new THREE.MeshBasicMaterial({
  map:textureLoader.load(saturnRingTexture),
  side: THREE.DoubleSide,
});
const saturnRing = new THREE.Mesh(saturnRingGeo,saturnRingMat);
saturnObj.add(saturnRing);
saturnRing.position.x = 138;
saturnRing.rotation.x = -0.5 * Math.PI;

const uranusGeo = new THREE.SphereGeometry(7, 30, 30);
const uranusMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load([
    uranusTexture,
  ]),
});
const uranus = new THREE.Mesh(uranusGeo, uranusMat);
const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);
scene.add(uranusObj);
uranus.position.x = 176;


const uranusRingGeo = new THREE.RingGeometry(7,15,30);
const uranusRingMat = new THREE.MeshBasicMaterial({
  map:textureLoader.load(uranusRingTexture),
  side: THREE.DoubleSide,
  innerRadius: 10,
  outerRadius: 20,
});
const uranusRing = new THREE.Mesh(uranusRingGeo,uranusRingMat);
uranusObj.add(uranusRing);
uranusRing.position.x = 176;
uranusRing.rotation.x = -0.5 * Math.PI;


const neptuneGeo = new THREE.SphereGeometry(7, 30, 30);
const neptuneMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load([
    neptuneTexture,
  ]),
});
const neptune = new THREE.Mesh(neptuneGeo, neptuneMat);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
scene.add(neptuneObj);
neptune.position.x = 200;


const plutoGeo = new THREE.SphereGeometry(2.8, 30, 30);
const plutoMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load([
    plutoTexture,
  ]),
});
const pluto = new THREE.Mesh(plutoGeo, plutoMat);
const plutoObj = new THREE.Object3D();
plutoObj.add(pluto);
scene.add(plutoObj);
pluto.position.x = 216;


  const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
  scene.add(pointLight);
  
  function animate() {

    sun.rotateY(0.004);
    mercury.rotateY(0.004);
    mercuryObj.rotateY(0.04);
    venus.rotateY(0.002);
    venusObj.rotateY(0.015);
    earth.rotateY(0.02);
    earthObj.rotateY(0.01);
    moon.rotateY(0.01);
    moonObj.rotateY(0.03);
    mars.rotateY(0.018);
    marsObj.rotateY(0.008);
    jupiter.rotateY(0.04);
    jupiterObj.rotateY(0.002);
    saturn.rotateY(0.038);
    saturnObj.rotateY(0.0009);
    uranus.rotateY(0.03);
    uranusObj.rotateY(0.0004);
    neptune.rotateY(0.032);
    neptuneObj.rotateY(0.0001);
    
    renderer.render(scene, camera);
  }
  
  renderer.setAnimationLoop(animate);
  
  
  
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    