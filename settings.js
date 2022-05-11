var up_button;
var down_button;
var left_button;
var right_button;
var number_of_balls;
var color_five_point_ball;
var color_fifteen_point_ball;
var color_twenty_five_point_ball;
var time_counter;
var number_of_monsters;
//TODO: fill all values randmomely
function Random_Settings_Generator(){
    let Monsters= document.getElementsByClassName("monster_picker")
    let Keys=document.getElementsByClassName("keys_picker")
    let NumOfBalls = document.getElementById("NumOfBalls");
    let Timer=document.getElementById("GameTime");
    Timer.value=""+getRndInteger(60,200);
    NumOfBalls.value = ""+getRndInteger(50,90);
    selectRandomRadioButton(Monsters)
    selectRandomRadioButton(Keys)

}
function selectRandomRadioButton(radioButtons) {
    const index = Math.floor(Math.random() * radioButtons.length);
    const element = radioButtons[index];
    element.checked = true;
}

//TODO: switch to game and pass and validate values
function start_Game(){
    let timer=$("#GameTime").val()
    let numberofballs=$("#GameTime").val()
    if(+timer==NaN || +numberofballs==NaN){
        alert("please enter valid numbers")
    }
    else{
        if(parseInt($("#NumOfBalls").val())>90||parseInt($("#NumOfBalls").val())<50||parseInt($("#GameTime").val())<60){
            alert("please enter valid details")
        }
        else {
        switchScreens("game_screen")
        }
    }
}