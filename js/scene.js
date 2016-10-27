var aliensGap = 70; //space between each alien
var enemyLines = 4;
var enemiesPerLine = 4;
var contAlien = 8;
var contSquid = 8;

function createAlienSquad(x, y, z) {
	var i, j;
	for (i = 1; i <= enemyLines; i++){
		for(j = 1; j <= enemiesPerLine; j++){
			var random = Math.random() * 100;
			if((random < 50 || contSquid == 0) && contAlien != 0){
				createAlien(x + (aliensGap*j), y + (aliensGap*i), z);
				contAlien--;
			}
			else{
				createSquid(x + (aliensGap*j), y + (aliensGap*i), z);
				contSquid--;
			}
		}
	}
	console.log("# of aliens: "+(8-contAlien));
	console.log("# of squids: "+(8-contSquid));
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();
	scene.add(new THREE.AxisHelper(100));


	createAlienSquad(-190, 0, 0);
	createShip(0, -400 ,0);
	createBullet();
}