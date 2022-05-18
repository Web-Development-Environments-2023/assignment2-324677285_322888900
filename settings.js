var up_button;
var down_button;
var left_button;
var right_button;
var number_of_balls;
var number_of_fives;
var number_of_fifteens;
var number_of_twenty_fives;
var number_of_monsters;
var time_counter;
var game_timer;
//TODO: add option to choose keys with keyboard

function randomSettingsGenerator(){
    let Monsters = document.getElementsByClassName("monster_picker");
    let Keys = document.getElementsByClassName("keys_picker")
    let NumOfBalls = document.getElementById("NumOfBalls");
    let Timer = document.getElementById("GameTime");
    let fives = document.getElementById("5_ball_color");
    let fifteens = document.getElementById("15_ball_color");
    let twenty_fives = document.getElementById("25_ball_color");
    Timer.value = "" + getRndInteger(60, 200);
    NumOfBalls.value = "" + getRndInteger(50, 90);
    selectRandomRadioButton(Monsters)
    selectRandomRadioButton(Keys)
    selectRandomScrollDown(fives.options, "5_ball_color");
    selectRandomScrollDown(fifteens.options, "15_ball_color");
    selectRandomScrollDown(twenty_fives.options, "25_ball_color");

}

function selectRandomScrollDown(arr, id){
    let index = Math.floor(Math.random() * arr.length);
    let element = arr[index];
    console.log(element)
    document.getElementById(id).value = element.value;

}

function selectRandomRadioButton(arr) {
    let index = Math.floor(Math.random() * arr.length);
    let element = arr[index];
    element.checked = true;
}

//TODO: switch to game and pass and validate values
function startGame(){
    game_timer = $('#GameTime').val()
    let num_of_balls = $('#NumOfBalls').val()
    let Monsters = document.getElementsByClassName("monster_picker")
    number_of_monsters = get_number_of_monsters(Monsters)
    color_five_point_ball = $('#5_ball_color').val();
    color_fifteen_point_ball = $('#15_ball_color').val();
    color_twenty_five_point_ball = $('#25_ball_color').val();
    if(isNaN(game_timer) || isNaN(+num_of_balls) || number_of_monsters === 0 || color_fifteen_point_ball == null ||
    color_five_point_ball == null || color_twenty_five_point_ball == null){
        alert("please enter valid details")
    }
    else{
        if(parseInt($("#NumOfBalls").val()) > 90 || parseInt($("#NumOfBalls").val()) <50 || parseInt($("#GameTime").val())<60){
            alert("please enter valid details")
        }
        else {
            game_timer = parseFloat(game_timer)
            number_of_balls = parseInt(num_of_balls)
            number_of_fives = parseInt(0.6 * number_of_balls)
            number_of_fifteens = parseInt(0.3 * number_of_balls)
            number_of_twenty_fives = 0.1 * number_of_balls
            Start()
            switchScreens("game_screen")
        }
    }
}

function get_number_of_monsters(Monsters){
    for(let i = 0; i < Monsters.length; i++){
        if (Monsters[i].checked == true){
            if (Monsters[i].value == "one_monsters"){
                return 1
            }
            if (Monsters[i].value == "two_monsters"){
                return 2
            }
            if (Monsters[i].value == "three_monsters"){
                return 3
            }
            if (Monsters[i].value == "four_monsters"){
                return 4
            }
        }
    }
    return 0
}