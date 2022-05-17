var color_five_point_ball;
var color_fifteen_point_ball;
var color_twenty_five_point_ball;

function paintFood(i, j, center, n5, n15, n25){
    let random_number = getRndInteger(1,4)
    // console.log(random_number)
    let ball_color;
    let flag = false
    if(i % rnd_i === 0 && j % rnd_j === 0) {
        if(random_number === 1 && n15>0){
            ball_color = color_fifteen_point_ball
            flag=true
            board[i][j] = '15'
        }
        if(random_number === 2 && n25>0){
            ball_color = color_twenty_five_point_ball
            flag=true
            board[i][j] = '25'

        }
        if(random_number === 3 && n5>0){
            flag=true
            ball_color = color_five_point_ball
            board[i][j] = '5'
        }
    }

    if( flag && ball_color === color_fifteen_point_ball){
        drawFifteenPointBall(center, color_fifteen_point_ball)
        return 15
    }
    if(flag && ball_color === color_twenty_five_point_ball){
        drawTwentyFivePointBall(center, color_twenty_five_point_ball)
        return 25
    }
    else{
        if(flag && ball_color === color_five_point_ball && flag)
            drawFivePointBall(center, color_five_point_ball)
            return 5
    }
    return 1
}

function drawFivePointBall(center, color) {
    context.beginPath();
    context.arc(center.x, center.y, 3, 0, 2 * Math.PI); // circle
    context.fillStyle = color; //color
    context.fill();
    food_counter++;
}

function drawFifteenPointBall(center, color) {
    context.beginPath();
    context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
    context.fillStyle = color; //color
    context.fill();
    food_counter++;
}

function drawTwentyFivePointBall(center, color) {
    context.beginPath();
    context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
    context.fillStyle = color; //color
    context.fill();
    food_counter++;
}