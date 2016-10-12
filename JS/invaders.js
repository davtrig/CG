var camera, scene, renderer;
var ship, squid, alien;
var squidscale = 4;
var actualVelocity = 5;
var momentaneousAcceleration = 0;
var maximumVelocity = 15;

function render() {
      'use strict';
      renderer.render(scene, camera);
}

/*function createPlayField(x, y, z) {
	'use strict';
	var material = new THREE.NoColors();
	var geometry = new THREE.BoxGeometry(x, y, z);
	var playField = new THREE.Mesh(geometry, material);
	
	scene.add(playField);
	playField.position.x = 0;
	playField.position.y = 0;
	playField.position.z = 0;
}*/
function onResize() {
	'use strict';
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		camera.aspect = renderer.getSize().width / renderer.getSize().height;
		camera.updateProjectionMatrix();
	}

	//render();
}



function animate() {
	'use strict';

	if(window.isLeftDown) {
		if(momentaneousAcceleration<= maximumVelocity)
		{
			momentaneousAcceleration = momentaneousAcceleration + 1;
		}
		ship.position.x -= actualVelocity + momentaneousAcceleration;

	}
	else if(window.isRightDown) {
		console.log("ship position x: " + ship.position.x);
		console.log("acceleration: "+momentaneousAcceleration);
		console.log("initial velocity: "+actualVelocity);
		if(momentaneousAcceleration <= maximumVelocity)
		{
			momentaneousAcceleration = momentaneousAcceleration + 1;
		}
		ship.position.x += actualVelocity + momentaneousAcceleration;
	}
	else if(window.isLeftUp){
		momentaneousAcceleration = 0;
	}
	else if(window.isRightUp){
		momentaneousAcceleration = 0;
	}
	render();
	requestAnimationFrame(animate);
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild(renderer.domElement);

       createScene();
	   createCamera();
	   render(); 

       window.addEventListener("resize", onResize);   
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}
