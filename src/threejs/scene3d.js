import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(1330, 665);

const modal = document.querySelector("#modal-content");
modal.appendChild(renderer.domElement);

// Adicionando uma luz ambiente
let ambientLight = new THREE.AmbientLight(0xf5f5dc);
scene.add(ambientLight);

// Adicionando uma luz direcional
let directionalLight = new THREE.DirectionalLight(0xf5f5dc, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Adicionando uma luz direcional 2
// let directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight2.position.set(-1, -1, -1);
// scene.add(directionalLight2);

// const loader = new GLTFLoader();
// loader.load(
//   "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario_engenharia/img_temp/Coluna+leve.glb",
//   function (gltf) {
//     scene.add(gltf.scene);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );

let skull;
const loader = new GLTFLoader();
loader.load(
  "https://liaser.s3.sa-east-1.amazonaws.com/praticas/cenario-saude/modelos-3d/visible_interactive_human_-_exploding_skull.glb",
  function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    skull = new THREE.AnimationMixer(model);

    const clips = gltf.animations;
    clips.forEach(function (clip) {
      const action = skull.clipAction(clip);
      action.play();
    });
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.z = 30;

// Cor do fundo
scene.background = new THREE.Color(0x1f1f1f);
// Adicionando controles de órbita para interatividade
const controls = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);

  if (skull) skull.update(clock.getDelta());

  controls.update();

  renderer.render(scene, camera);
}
animate();
