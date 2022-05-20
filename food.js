var color_five_point_ball;
var color_fifteen_point_ball;
var color_twenty_five_point_ball;
var skull_location=new Object()
var clock_location=new Object()
var heart_location=new Object()
clock_img.src = 'media/pill.png';
heart_img.src = 'media/heart.png';
skull_img.src = 'media/green_skull.png';


function fill_food(){
    cntr = food_counter
    while(cntr > 0){
        let index=getRndInteger(0, available_board.length-1)
        let indexes=available_board[index]
        if(number_of_fifteens > 0){
            board[indexes[0]][indexes[1]] = '15'
            available_board.splice(indexes, 1)
            number_of_fifteens--;
            balls_remain++;

        }
        else if(number_of_twenty_fives > 0){

            board[indexes[0]][indexes[1]] = '25'
            available_board.splice(indexes, 1)
            number_of_twenty_fives--;
            balls_remain++;

        }
        else if(number_of_fives>0){

            board[indexes[0]][indexes[1]] = '5'
            available_board.splice(indexes, 1)
            number_of_fives--;
            balls_remain++;

        }
        cntr--
    }
    extra_functionality()
}
function create_clock(){
    let i=1
    let j=1
    console.log(shape)
    while(board[shape.i+i][shape.j+j]==='X'){
        i++
        j++
    }
    board[shape.i+i][shape.j+j] = 'clock'
    clock_location.i = shape.i+i
    clock_location.j = shape.j+j
}

function extra_functionality(){
    create_clock()
    let index = getRndInteger(0, available_board.length-1)
    let indexes = available_board[index]
    available_board.splice(indexes, 1)
    board[indexes[0]][indexes[1]] = 'heart'
    heart_location.i = indexes[0]
    heart_location.j = indexes[1]
    available_board.splice(indexes,1)
    index = getRndInteger(0,available_board.length-1)
    indexes = available_board[index]
    board[indexes[0]][indexes[1]] = 'skull'
    available_board.splice(indexes,1)
    skull_location.i = indexes[0]
    skull_location.j = indexes[1]
}

function checkSpecialFood(food){
    if(food === -1){
        let game_score = parseInt(score+50);
        score+=game_score
        document.getElementById("lblScore").value += game_score

    }
    else if(food === -2){
        fails++;
        document.getElementById("lblFails").value = fails

    }
    else {
        fails--;
        document.getElementById("lblFails").value = fails

    }


}



function drawClock(){
    context.drawImage(clock_img, clock_location.i * square_size - border_size, clock_location.j * square_size - border_size, pacman_size, pacman_size);
    board[clock_location.i][clock_location.j]="."
    clock_location=moveRandomExtra(clock_location)
    board[clock_location.i][clock_location.j]="clock"
}
function drawSkull(){
    context.drawImage(skull_img, skull_location.i * square_size - border_size, skull_location.j * square_size - border_size, pacman_size, pacman_size);
}
function drawHeart(){
    context.drawImage(heart_img, heart_location.i * square_size - border_size, heart_location.j * square_size - border_size, pacman_size, pacman_size);
}
function drawFivePointBall(center, color) {
    context.beginPath();
    context.arc(center.x - border_size, center.y- border_size, 3, 0, 2 * Math.PI); // circle
    context.fillStyle = color; //color
    context.fill();
    food_counter++;
}

function drawFifteenPointBall(center, color) {
    context.beginPath();
    context.arc(center.x - border_size, center.y - border_size, 5, 0, 2 * Math.PI); // circle
    context.fillStyle = color; //color
    context.fill();
    food_counter++;
}

function drawTwentyFivePointBall(center, color) {
    context.beginPath();
    context.arc(center.x - border_size, center.y - border_size, 8, 0, 2 * Math.PI); // circle
    context.fillStyle = color; //color
    context.fill();
    food_counter++;
}

function moveRandomExtra(location){
    let temp=getRndInteger(0,3)
    if(getRndInteger(0,10000)>4) {
        if (temp && board[location.i - 1][location.j] === '.') {
            location.i -= 1
            return location
        }
        if (temp && board[location.i + 1][location.j] === '.') {
            location.i += 1
            return location
        }
        if (temp && board[location.i][location.j - 1] === '.') {
            location.j -= 1
            return location
        }
        if (temp && board[location.i][location.j + 1] === '.') {
            location.j += 1
            return location
        }
    }
    return location
}
