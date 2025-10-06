// 장면 생성
const scene = new THREE.Scene();

// 카메라 설정 (FOV, 화면 비율, near, far)
const camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
);

// 렌더러 생성 (WebGL 사용)
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // 캔버스(renderer.domElement)를 HTML body에 추가

// 큐브(Mesh) 생성
const geometry = new THREE.BoxGeometry(1, 1, 1); // 큐브 형상
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 녹색 기본 재질
const cube = new THREE.Mesh(geometry, material); // 형상과 재질을 결합하여 Mesh 생성
scene.add(cube); // 큐브를 장면에 추가

// 카메라 위치 설정 (큐브가 보이도록)
camera.position.z = 5;

// 애니메이션 루프 함수 (매 프레임마다 호출)
function animate() {
    requestAnimationFrame(animate); // 다음 프레임에 animate 함수를 호출하도록 요청

    // 큐브 회전
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 장면 렌더링
    renderer.render(scene, camera);
}

// 창 크기 변경 시 렌더러 및 카메라 업데이트
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 애니메이션 시작
animate();