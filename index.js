window.addEventListener("load", init);
const width = 960;
const height = 540;

function init() {

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });
  renderer.setSize(width, height);
  // renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
  );
  camera.position.set(0, 0, +1000);

  //　立方体を作成
  // const geometry = new THREE.BoxGeometry(500, 500, 500);
  // 球体を作成
  const geometry = new THREE.SphereGeometry(300, 30, 30);

  const loader = new THREE.TextureLoader();
  const texture = loader.load('img/poker_rec.png');

  const material = new THREE.MeshStandardMaterial({
    // color: 0x0000ff
    map: texture
  });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  const light = new THREE.DirectionalLight(0xFFFFFF);
  // light.intensity = 2;
  light.position.set(0, 0, 1);
  scene.add(light);

  tick();

  function tick() {

    mesh.rotation.y += 0.05;

    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }
  
}
