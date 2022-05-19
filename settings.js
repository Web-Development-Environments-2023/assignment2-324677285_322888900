var up_button;
var down_button;
var left_button;
var right_button;
var number_of_balls;
var number_of_fives;
var number_of_fifteens;
var number_of_twenty_fives;
var number_of_monsters;
var game_timer;
var type_of_keys;
var keyboard_choise;
//TODO: add option to choose keys with keyboard

    function keyChosenUp(event){
        let x = event.key;
        let key_code = event.keyCode;
        alert ("You chose the " + x + " key for Up move!");
        up_button = key_code;
    }

    function keyChosenDown(event){
        let x = event.key;
        let key_code = event.keyCode;
        alert ("You chose the " + x + " key for Down move!");
        down_button = key_code;
    }

    function keyChosenLeft(event){
        let x = event.key;
        let key_code = event.keyCode;
        alert ("You chose the " + x + " key for Left move!");
        left_button = key_code;
    }

    function keyChosenRight(event){
        let x = event.key;
        let key_code = event.keyCode;
        alert ("You chose the " + x + " key for Right move!");
        right_button = key_code;
    }



    function randomSettingsGenerator() {
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

//TODO: switch to game and pass and validate values
    function startGame() {

        let keys_chooser = document.getElementsByClassName("auto_or_manual_key_chooser");
        keyboard_choise = getTypeOfKeys(keys_chooser);
        console.log(keyboard_choise)

        game_timer = $('#GameTime').val()
        let num_of_balls = $('#NumOfBalls').val()
        let monsters = document.getElementsByClassName("monster_picker")
        let keys = document.getElementsByClassName("keys_picker")
        number_of_monsters = get_number_of_monsters(monsters)
        type_of_keys = getTypeOfKeys(keys);
        color_five_point_ball = $('#5_ball_color').val();
        color_fifteen_point_ball = $('#15_ball_color').val();
        color_twenty_five_point_ball = $('#25_ball_color').val();
        if (isNaN(game_timer) || isNaN(+num_of_balls) || number_of_monsters === 0 || color_fifteen_point_ball == null ||
            color_five_point_ball == null || color_twenty_five_point_ball == null) {
            alert("please enter valid details")
        } else {
            if (parseInt($("#NumOfBalls").val()) > 90 || parseInt($("#NumOfBalls").val()) < 50 || parseInt($("#GameTime").val()) < 60) {
                alert("please enter valid details")
            } else {
                game_timer = parseFloat(game_timer)
                number_of_balls = parseInt(num_of_balls)
                number_of_fives = parseInt(0.6 * number_of_balls)
                number_of_fifteens = parseInt(0.3 * number_of_balls)
                number_of_twenty_fives = parseInt(0.1 * number_of_balls)
                Start()
                switchScreens("game_screen")
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
