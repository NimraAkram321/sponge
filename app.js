var camera, scene, renderer, controls;
var sphere, cube,cylinder,cube1;
init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 5, 1.5).setLength(60);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //renderer.setClearColor(0xcccccc);
  document.body.appendChild(renderer.domElement);
 
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  var plane = new THREE.GridHelper(40, 10);
  scene.add(plane);
	
 
  cube = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 10), new THREE.MeshBasicMaterial({color: "yellow"}));
  cube.position.set(2, 10, 0);
  cube1 = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 10), new THREE.MeshBasicMaterial({color: "white"}));
  cube1.position.set(2, 6, 0);
  cube2 = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 10), new THREE.MeshBasicMaterial({color: "brown"}));
  cube2.position.set(2, 4, 0);
  
  
  cylinder = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2), new THREE.MeshBasicMaterial({color: "yellow"}));
  cylinder.position.set(2, 2, 2);
  cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2), new THREE.MeshBasicMaterial({color: "yellow"}));
  cylinder1.position.set(2, 2, -2);
  
 

  scene.add(cube);
  scene.add(cube1);
  scene.add(cube2);
  scene.add(cylinder);
  scene.add(cylinder1);
  
}

var delta;
function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}
