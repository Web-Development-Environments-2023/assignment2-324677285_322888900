var up_button;
var down_button;
var left_button;
var right_button;
var left_key_letter;
var right_key_letter;
var up_key_letter;
var down_key_letter;
var number_of_balls;
var number_of_fives;
var number_of_fifteens;
var number_of_twenty_fives;
var number_of_monsters;
var game_timer;
var type_of_keys;
var keyboard_choise = "set_keys";
var music = new Audio();
var song;

function keyChosenUp(event) {
    let letter = event.key;
    let key_code = event.keyCode;
    alert("You chose the " + letter + " key for Up move!");
    up_key_letter = letter;
    up_button = key_code;
}

function keyChosenDown(event) {
    let letter = event.key;
    let key_code = event.keyCode;
    alert("You chose the " + letter + " key for Down move!");
    down_key_letter = letter;
    down_button = key_code;
}

function keyChosenLeft(event) {
    let letter = event.key;
    let key_code = event.keyCode;
    alert("You chose the " + letter + " key for Left move!");
    left_key_letter = letter;
    left_button = key_code;
}

function keyChosenRight(event) {
    let letter = event.key;
    let key_code = event.keyCode;
    alert("You chose the " + letter + " key for Right move!");
    right_key_letter = letter;
    right_button = key_code;
}


function hideDiv(){
    $(".keyboard_setting_div").hide()
}

function showDiv(div_name){
    $("#"+div_name).show()
}

function switchKeysDiv(div_name) {
    hideDiv()
    showDiv(div_name)
    keyboard_choise = div_name
}

function selectDefaultKeys() {
    keyboard_choise = "set_keys"
    type_of_keys = "updown"
    $('#default_key').prop("checked", true);
    switchKeysDiv('set_keys')
}

function randomSettingsGenerator() {
    let Monsters = document.getElementsByClassName("monster_picker");
    let NumOfBalls = document.getElementById("NumOfBalls");
    let Timer = document.getElementById("GameTime");
    let fives = document.getElementById("5_ball_color");
    let fifteens = document.getElementById("15_ball_color");
    let twenty_fives = document.getElementById("25_ball_color");
    Timer.value = "" + getRndInteger(60, 200);
    NumOfBalls.value = "" + getRndInteger(50, 90);
    selectRandomRadioButton(Monsters)
    selectDefaultKeys()
    selectRandomScrollDown(fives.options, "5_ball_color");
    selectRandomScrollDown(fifteens.options, "15_ball_color");
    selectRandomScrollDown(twenty_fives.options, "25_ball_color");

}

function selectRandomScrollDown(arr, id) {
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

function getTypeOfKeys(keys) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].checked === true) {
            return keys[i].value;
        }
    }
    return "updown" //default
}

function updateSettingsOnScreenGame() {
    document.getElementById("const_num_of_monsters").innerHTML = number_of_monsters
    document.getElementById("const_game_time").innerHTML = game_timer
    document.getElementById("25_color").innerHTML = color_twenty_five_point_ball
    document.getElementById("15_color").innerHTML = color_fifteen_point_ball
    document.getElementById("5_color").innerHTML = color_five_point_ball
    // document.getElementById("5_quantity").innerHTML = number_of_fives
    // document.getElementById("15_quantity").innerHTML = number_of_fifteens
    // document.getElementById("25_quantity").innerHTML = number_of_twenty_fives
    document.getElementById("total_quantity").innerHTML = number_of_balls
    if(keyboard_choise === "set_keys"){
        if(type_of_keys === "updown"){
            let keys_str = "You chose to play with the arrow keys"
            document.getElementById("show_what_keys_chosen").innerHTML = keys_str
        }
        else{
            let keys_str = "You chose to play with the 'WSAD' keys"
            document.getElementById("show_what_keys_chosen").innerHTML = keys_str
        }
    }
    else{

        let manual_key_str = "You chose '" + up_key_letter + "' to move up." +
            "" +
            "You chose '" + down_key_letter + "' to move down." +
            "" + "You chose '" + left_key_letter + "' to move left." +
            "" + "You chose '" + right_key_letter + "' to move right."
        document.getElementById("show_what_keys_chosen").innerHTML = manual_key_str;
    }

}

function startGame() {
    song = $('#audio')[0]
    song.play();
    game_timer = document.getElementById("GameTime").value
    let num_of_balls = document.getElementById("NumOfBalls").value
    let monsters = document.getElementsByClassName("monster_picker");
    let keys = document.getElementsByClassName("keys_picker");
    number_of_monsters = get_number_of_monsters(monsters);
    type_of_keys = getTypeOfKeys(keys);
    color_five_point_ball = $('#5_ball_color').val();
    color_fifteen_point_ball = $('#15_ball_color').val();
    color_twenty_five_point_ball = $('#25_ball_color').val();
    if (isNaN(game_timer) || isNaN(+num_of_balls) || number_of_monsters === 0 || color_fifteen_point_ball == null ||
        color_five_point_ball == null || color_twenty_five_point_ball == null) {
        alert("Missing field!")
    } else {
        if (parseInt($("#NumOfBalls").val()) > 90 || parseInt($("#NumOfBalls").val()) < 50 || parseInt($("#GameTime").val()) < 60) {
            alert("Invalid number of balls or game time is too short!")
        } else {
            if(keyboard_choise == "manual_keys") {
                if (typeof left_button === 'undefined' || typeof right_button === 'undefined'
                    || typeof down_button === 'undefined'
                    || typeof up_button === 'undefined') {
                    alert("Please choose the keys from keyboard!")
                }
                else{
                    game_timer = parseFloat(game_timer)
                    number_of_balls = parseInt(num_of_balls)
                    number_of_fives = parseInt(0.6 * number_of_balls)
                    number_of_fifteens = parseInt(0.3 * number_of_balls)
                    number_of_twenty_fives = parseInt(0.1 * number_of_balls)
                    updateSettingsOnScreenGame()
                    Start()
                    switchScreens("game_screen")

                }
            }
            else {
                game_timer = parseFloat(game_timer)
                number_of_balls = parseInt(num_of_balls)
                number_of_fives = parseInt(0.6 * number_of_balls)
                number_of_fifteens = parseInt(0.3 * number_of_balls)
                number_of_twenty_fives = parseInt(0.1 * number_of_balls)
                updateSettingsOnScreenGame()
                Start()
                switchScreens("game_screen")
            }
            }
    }

}

function get_number_of_monsters(monsters) {
    for (let i = 0; i < monsters.length; i++) {
        if (monsters[i].checked === true) {
            if (monsters[i].value === "one_monsters") {
                return 1
            }
            if (monsters[i].value === "two_monsters") {
                return 2
            }
            if (monsters[i].value === "three_monsters") {
                return 3
            }
            if (monsters[i].value === "four_monsters") {
                return 4
            }
        }
    }
    return 0
}


function clearInput(id,event){
    document.getElementById(id).value+=event.key
}


function resetAllSettings(){
    $('#GameTime').val(null);
    $('#NumOfBalls').val(null);
    $('#5_ball_color').val(null);
    $('#15_ball_color').val(null);
    $('#25_ball_color').val(null);
}