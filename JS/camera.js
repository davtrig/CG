function createCamera() {
      'use strict';  
      camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 750;
      //scene.position.y = -50;
      camera.lookAt(scene.position);
      scene.add(camera);
}
