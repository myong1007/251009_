import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 1. 장면(Scene) 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // 배경색을 검정색으로 변경

// 2. 카메라(Camera) 설정
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. 렌더러(Renderer) 설정
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. 큐브(Cube) 생성 및 재질 변경
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. AmbientLight (주변광)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 6. DirectionalLight (태양광)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 7. OrbitControls 추가
const controls = new OrbitControls(camera, renderer.domElement);

// 8. 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);

    // 조명의 위치를 카메라의 위치로 업데이트
    directionalLight.position.copy(camera.position);

    controls.update();
    renderer.render(scene, camera);
}
animate();

// 9. 윈도우 크기 변경 시 렌더러와 카메라 업데이트
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
