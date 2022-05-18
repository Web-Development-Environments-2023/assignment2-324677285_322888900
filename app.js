var context;
var shape = new Object();
var board;
var score;
var start_time;
var time_elapsed;
var time_left;
var interval;
var food_counter;
var base_image = new Image();
var currDirection = "L"
var fails;
var pac_img = new Image();
pac_img.src = 'media/pacman_icon_L-removebg-preview.png';
var currentTime;
var rnd_i
var rnd_j
var drawn_balls = false
var is_pink_available
var is_red_available
var is_yellow_available
var available_board
var skull_img=new Image()
var heart_img=new Image()
var clock_img=new Image()



function Start() {
	is_pink_available = false
	is_yellow_available = false
	is_red_available = false
	context = canvas.getContext("2d");
	board = new Array();
	score = 0;
	fails = 5;
	pac_color = "yellow";
	food_counter = 0;
	start_time = new Date();
	time_elapsed = 0;
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
		['X','.','.','.','.','.','.','.','.','.','X','.','.','.','.','.','.','X','.','.','.','.','.','.','.','.','.','X'],
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
	   rnd_i = 2
	   rnd_j = 2
	available_board = []
	for (var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length ; j++){
			if(board[i][j] === '.'){
				food_counter++;
				available_board.push([i,j])
			}
		}
	}
	fill_food()
	shape.i = getRndInteger(13,15);//random number between
	shape.j = getRndInteger(11,16);
	console.log("i:"+shape.i)
	console.log("j:"+shape.j)
	setUpMonsters()
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
			e.preventDefault();
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
			e.preventDefault();
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

////TODO-ADD KEYS CHOOSING OPTIONALITY
// function setKey(event) {
// 	var max_chars = 1;
// 	if(key.length > max_chars) {
// 		alert("Only one character is needed")
// 	}
// 	else{
//
// 	}
//
// 	// If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
// }

function GetKeyPressed() {

	if(type_of_keys === "updown") {
		//LEFT
		if (keysDown[38]) {
			return 1;
		}
		//RIGHT
		if (keysDown[40]) {
			return 2;
		}
		//UP
		if (keysDown[37]) {
			return 3;
		}
		//DOWN
		if (keysDown[39]) {
			return 4;
		}
	}
	else{ //fix the numbers - keys are wrong
		//A
		if (keysDown[65]) {
			return 1;
		}
		//D
		if (keysDown[68]) {
			return 2;
		}
		//W
		if (keysDown[87]) {
			return 3;
		}
		//S
		if (keysDown[83]) {
			return 4;
		}
	}


}

function Draw() {
	canvas.width = canvas.width; //clean board
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			let center = new Object();
			center.x = i * 30 + 5;
			center.y = j * 30 + 5;
			let rnd = getRndInteger(0,10000)
			if(rnd<3){
				drawMonsters(true)
			}
			else{
				drawMonsters(false)
			}

			if(board[i][j] === '5'){
				drawFivePointBall(center, color_five_point_ball);
			}
			else if(board[i][j] === '15'){
				drawFifteenPointBall(center, color_fifteen_point_ball);
			}
			else if(board[i][j] === '25'){
				drawTwentyFivePointBall(center, color_twenty_five_point_ball);
			}
			else if(board[i][j]==='clock'){
				drawClock()
			}
			else if(board[i][j]==='skull'){
				drawSkull()
			}
			else if(board[i][j]==='heart'){
				drawHeart()
			}
			else if (board[i][j] === 'X') {
				context.beginPath();
				context.rect(center.x - 20, center.y - 20, 40, 40);
				context.lineWidth = "50";
				context.strokeStyle = "blue";
				context.fillStyle = "blue"; //color
				context.fill();
			}
			 else if( board[i][j] === '_' ){
				 if(i === shape.i && j === shape.j){
					if(currDirection === "R") {
						base_image.src = 'media/pacman_icon_R-removebg-preview.png';
						context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
					}
					else if (currDirection === "L"){
						base_image.src = 'media/pacman_icon_L-removebg-preview.png';
						context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
					}
					else if (currDirection === "D"){
						base_image.src = 'media/pacman_icon_D-removebg-preview.png';
						context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
					}
					else if (currDirection === "U"){
						base_image.src = 'media/pacman_icon_U-removebg-preview.png';
						context.drawImage(base_image, shape.i * 30 - 5, shape.j * 30 - 5, 20, 20);
					}
				}
			 }
		}
	}
	drawn_balls = true;

}

function checkIfItsFood(x, y){
	if( board[x][y] === '5') {
		return 5;
	}
	else if(board[x][y] === '25'){
		return 25;
	}
	else if(board[x][y] === '15'){
		return 15;
	}
	else if(board[x][y]=='clock'){
		return -1
	}
	else if(board[x][y]=='heart'){
		return -2
	}
	else if(board[x][y]=='skull'){
		return -3
	}
	else return 1;
}

function caughtByMonster() {

	if(is_pink_available&& shape.i === pink_monster_location.i && shape.j === pink_monster_location.j){
		return true
	}
	if( shape.i === blue_monster_location.i && shape.j === blue_monster_location.j){
		return true
	}
	if(is_red_available&& shape.i === red_monster_location.i && shape.j === red_monster_location.j){
		return true
	}
	if(is_yellow_available&& shape.i === yellow_monster_location.i && shape.j === yellow_monster_location.j){
		return true
	}
}



function UpdatePosition() {
	let food;
	currentTime = new Date()
	time_elapsed = (currentTime - start_time) / 1000;
	time_left = game_timer - time_elapsed

	if(time_left <= 0){
		if(score <= 100){
			alert("You are better then "+score);
			window.clearInterval(interval);
			switchScreens("settings")
		}
		else{
			alert("Winner!!");
			window.clearInterval(interval);
			switchScreens("settings")
		}
	}
	document.getElementById("lblTime").value = time_left
	document.getElementById("lblFails").value = fails
	document.getElementById("lblScore").value = score

	context.drawImage(base_image, shape.i , shape.j , 40, 40);
	let keyPressed = GetKeyPressed();
	if (keyPressed === 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] !== 'X') {
			shape.j--;
			currDirection="U"
			food = checkIfItsFood(shape.i, shape.j)
			if(food !== 1){
				if(food<0) {checkSpecialFood(food)}
				else {
					score += food;
					document.getElementById("lblScore").value = score
				}
			}
			board[shape.i][shape.j] = '_';
		}
	}
	if (keyPressed === 2) {
		if (shape.j < board[0].length && board[shape.i][shape.j + 1] !== 'X') {
			shape.j++;
			currDirection="D"
			food = checkIfItsFood(shape.i, shape.j)
			if(food !== 1){
				if(food<0) {checkSpecialFood(food)}
				else {
				score+= food;
				document.getElementById("lblScore").value = score
			}
			}
			board[shape.i][shape.j] = '_';
		}
	}
	if (keyPressed === 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] !== 'X') {
			shape.i--;
			currDirection="L"
			food = checkIfItsFood(shape.i, shape.j)
			if(food !== 1) {
				if (food < 0) {
					checkSpecialFood(food)
				} else {
					score += food;
					document.getElementById("lblScore").value = score
				}
			}
			board[shape.i][shape.j] = '_';
		}
	}
	if (keyPressed === 4) {
		if (shape.i < board.length && board[shape.i + 1][shape.j] !== 'X') {
			shape.i++;
			currDirection="R"
			food = checkIfItsFood(shape.i, shape.j)
			if(food !== 1) {
				if (food < 0) {
					checkSpecialFood(food)
				} else {
					score += food;
					document.getElementById("lblScore").value = score
				}
			}
			board[shape.i][shape.j] = '_';


		}
	}
	board[shape.i][shape.j] = '_';
	if(caughtByMonster()){
		fails--;
		document.getElementById("lblFails").value = fails;
		score-=10;
		document.getElementById("lblScore").value = score;
		if(fails === 0 ){
			window.alert("Loser!")
			window.clearInterval(interval);
			switchScreens("settings")
		}
		else {
			shape.i = getRndInteger(13,15);//random number between
			shape.j = getRndInteger(11,16);
			setUpMonsters();
			UpdatePosition();
		}

	}
	else {
		Draw();
	}

}