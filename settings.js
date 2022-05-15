var up_button;
var down_button;
var left_button;
var right_button;
var number_of_balls;
var color_five_point_ball;
var color_fifteen_point_ball;
var color_twenty_five_point_ball;
var number_of_fives;
var number_of_fifteens;
var number_of_twenty_fives;
var number_of_monsters;
var time_counter;
//TODO: add option to choose keys with keyboard

function Random_Settings_Generator(){
    let Monsters = document.getElementsByClassName("monster_picker")
    let Keys = document.getElementsByClassName("keys_picker")
    let NumOfBalls = document.getElementById("NumOfBalls");
    let Timer = document.getElementById("GameTime");
    let fives = document.getElementsByClassName("choose_5")
    let fifteens = document.getElementsByClassName("choose_15")
    let twenty_fives = document.getElementsByClassName("choose_25")

    Timer.value = "" + getRndInteger(60, 200);
    NumOfBalls.value = "" + getRndInteger(50, 90);
    selectRandomRadioButton(Monsters)
    selectRandomRadioButton(Keys)
    selectRandomRadioButton(fives)
    selectRandomRadioButton(fifteens)
    selectRandomRadioButton(twenty_fives)

}
function selectRandomRadioButton(radioButtons) {
    const index = Math.floor(Math.random() * radioButtons.length);
    const element = radioButtons[index];
    element.checked = true;
}

//TODO: switch to game and pass and validate values
function start_Game(){
    let timer = $("#GameTime").val()
    let numOfBalls = $("#NumOfBalls").val()
    let Monsters = document.getElementsByClassName("monster_picker")
    let fives = document.getElementsByClassName("choose_5")
    let fifteens = document.getElementsByClassName("choose_15")
    let twenty_fives = document.getElementsByClassName("choose_25")
    number_of_monsters = get_number_of_monsters(Monsters)
    color_twenty_five_point_ball = get_Color(fives)
    color_fifteen_point_ball = get_Color(fifteens)
    color_five_point_ball = get_Color(twenty_fives)
    if(+timer == NaN || +numOfBalls == NaN || number_of_monsters == 0 || color_fifteen_point_ball == null ||
    color_five_point_ball == null || color_twenty_five_point_ball == null){
        alert("please enter valid details")
    }
    else{
        if(parseInt($("#NumOfBalls").val()) > 90 || parseInt($("#NumOfBalls").val()) <50 || parseInt($("#GameTime").val())<60){
            alert("please enter valid details")
        }
        else {
            time_counter = parseFloat(time_counter)
            number_of_balls = parseInt(numOfBalls)
            number_of_fives = 0.6 * number_of_balls
            number_of_fifteens = 0.3 * number_of_balls
            number_of_twenty_fives = 0.1 * number_of_balls
            Start()
            switchScreens("game_screen")
        }
    }
}

function get_Color(radio_buttons){
    for(i = 0; i<radio_buttons.length; i++){
        if (radio_buttons[i].checked == true){
            return radio_buttons[i].value
        }}
    return null;

}

function get_number_of_monsters(Monsters){
    for(i = 0; i < Monsters.length; i++){
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