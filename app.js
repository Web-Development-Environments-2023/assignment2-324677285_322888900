var context;
var shape = new Object();
var blue_monster_location = new Object();
var pink_monster_location = new Object();
var yellow_monster_location = new Object();
var red_monster_location = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var food_counter;
var base_image = new Image();
var currDirection = "L"
var fails;
var pac_img = new Image();
pac_img.src = 'media/pacman_icon_L.png';
var currentTime = new Date();
var rnd_i
var rnd_j

function Start() {
	context = canvas.getContext("2d");
	board = new Array();
	score = 0;
	fails = 3;
	pac_color = "yellow";
	var cnt = 100;
	food_counter = 0;
	var pacman_remain = 1;
	start_time = new Date();
	board = [
		['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
		['X','.','.','.','.','.','.','.','.','.','.','.','.','X','X','.','.','.','.','.','.','.','.','.','.','.','.','X'],
		['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
		['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
		['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
		['X','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','X'],
		['X','.','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','.','X'],
		['X','.','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','.','X'],
		['X','.','.','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','.','.','X'],
		['X','X','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','.','.','.','.','.','.','.','.','.','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','X','X','X','.','.','X','X','X','.','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','X','.','.','.','.','.','.','X','.','X','X','.','X','X','X','X','X','X'],
		['X','.','.','.','.','.','.','.','.','.','X','.','.','1','.','.','.','X','.','.','.','.','.','.','.','.','.','X'],
		['X','X','X','X','X','X','.','X','X','.','X','.','.','.','.','.','.','X','.','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','.','.','.','.','.','.','.','.','.','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X'],
		['X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X'],
		['X','.','.','.','.','.','.','.','.','.','.','.','.','X','X','.','.','.','.','.','.','.','.','.','.','.','.','X'],
		['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
		['X','.','X','X','X','X','.','X','X','X','X','X','.','X','X','.','X','X','X','X','X','.','X','X','X','X','.','X'],
		['X','.','.','.','X','X','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','X','X','.','.','.','X'],
		['X','X','X','.','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','.','X','X','X'],
		['X','X','X','.','X','X','.','X','X','.','X','X','X','X','X','X','X','X','.','X','X','.','X','X','.','X','X','X'],
		['X','.','.','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','X','X','.','.','.','.','.','.','X'],
		['X','.','X','X','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','X','X','.','X'],
		['X','.','X','X','X','X','X','X','X','X','X','X','.','X','X','.','X','X','X','X','X','X','X','X','X','X','.','X'],
		['X','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','X'],
		['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
		]
	   rnd_i=getRndInteger(1,5)
	   rnd_j=getRndInteger(1,5)
	for (var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length ; j++){
			if(board[i][j] === '.'){
				food_counter++;
			}
		}
		showPage("settings")

	}

	shape.i = getRndInteger(13,15);//random number between
	shape.j = getRndInteger(11,16);
	console.log("i:"+shape.i)
	console.log("j:"+shape.j)

	blue_monster_location.i = 1
	blue_monster_location.j = 1
	pink_monster_location.i = board.length - 2
	pink_monster_location.j = 1
	yellow_monster_location.i = 1
	yellow_monster_location.j = board[0].length - 2
	red_monster_location.i = board.length - 2
	red_monster_location.j = board[0].length - 2

	pacman_remain--;
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] !== 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	let n5=number_of_fives
	let n15=number_of_fifteens
	let n25=number_of_twenty_fives
	canvas.width = canvas.width; //clean board
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			var center = new Object();
			center.x = i * 30 + 5;
			center.y = j * 30 + 5;
			let rnd = getRndInteger(0,10000)
			if(rnd<15){
				drawMonsters(true)
			}
			else{
				drawMonsters(false)
			}
			//TODO - add random generator for good spread of balls.
			// According to the number of balls chosen by the user.
			if (board[i][j] === '.') {
				let which_ball=PaintBalls(i,j,center,n5,n15,n25)
				if(which_ball==5)
					n5--
				else if(which_ball==15)
					n15--
				else if(which_ball==25)
					n25--
			} else if (board[i][j] === 'X') {
				context.beginPath();
				context.rect(center.x - 20, center.y - 20, 40, 40);
				context.lineWidth = "50";
				context.strokeStyle = "blue";
				context.fillStyle = "blue"; //color
				context.fill();
			}

			 else if(board[i][j] === '1' || board[i][j] === '_' ){
				 if(i === shape.i && j === shape.j){
				// x=Math.random()
				// if (x>0.2) {
				if(currDirection === "R") {
					base_image.src = 'media/pacman_icon_R.png';
					context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
				}
				else if (currDirection === "L"){
					base_image.src = 'media/pacman_icon_L.png';
					context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
				}
				else if (currDirection === "D"){
					base_image.src = 'media/pacman_icon_D.png';
					context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
				}
				else if (currDirection === "U"){
					base_image.src = 'media/pacman_icon_U.png';
					context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
				}
				}
			 }
		}
	}

}


function catched_by_monster() {

	if(shape.i === pink_monster_location.i && shape.j === pink_monster_location.j){
		return true
	}
	if(shape.i === blue_monster_location.i && shape.j === blue_monster_location.j){
		return true
	}
	if(shape.i === red_monster_location.i && shape.j === red_monster_location.j){
		return true
	}
	if(shape.i === yellow_monster_location.i && shape.j === yellow_monster_location.j){
		return true
	}
}

function UpdatePosition() {
	lblScore.value = score;
	lblTime.value = time_elapsed;
	lblFails.value = fails
	board[shape.i][shape.j] = '_';
	context.drawImage(base_image, shape.i , shape.j , 40, 40);
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 'X') {
			shape.j--;
			board[shape.i][shape.j] = '1';
			currDirection="U"
		}
	}
	if (x === 2) {
		if (shape.j < board[0].length && board[shape.i][shape.j + 1] !== 'X') {
			shape.j++;
			board[shape.i][shape.j] = '1';
			currDirection="D"
		}
	}
	if (x === 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] !== 'X') {
			shape.i--;
			board[shape.i][shape.j] = '1';
			currDirection="L"
		}
	}
	if (x === 4) {
		if (shape.i < board.length && board[shape.i + 1][shape.j] !== 'X') {
			shape.i++;
			board[shape.i][shape.j] = '1';
			currDirection="R"

		}
	}
	//TODO - check why the score is not updated in thr screen.
	if (board[shape.i][shape.j] === '.') {
		score++;
		lblScore.value = score
		board[shape.i][shape.j] = '_';
	}

	//TODO - check why timer is not shown properly
	time_elapsed = (currentTime - start_time) / 1000;
	// if (score >= 20 && time_elapsed <= 10) {
	// 	pac_color = "green";
	// }
	// if(time_counter>=time_elapsed){
	// 	if(score<100){
	// 	window.clearInterval(interval);
	// 	window.alert("You are better then " + score + " points!");
	// 	fails++
	// 	}
	// 	else{
	// 		window.clearInterval(interval);
	// 		window.alert("Winner!");
	//
	// 	}
	// }
	// if (score === food_counter) {
	// 	window.clearInterval(interval);
	// 	window.alert("Game completed");
	// }

	//TODO - check why game is keep going when the fails are 0.
	if(catched_by_monster()){
		if(fails === 0 ){
			window.alert("Game Over!")
			window.clearInterval(interval);
			Start()
			switchScreens("settings")
		}
		else{
			fails--;
			lblFails.value = fails
			shape.i = getRndInteger(13,15);//random number between
			shape.j = getRndInteger(11,16);
			UpdatePosition()

		}
	}
	else {
		Draw();
	}

}