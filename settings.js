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
    let Monsters= document.getElementsByClassName("monster_picker")
    number_of_monsters=get_number_of_monsters(Monsters)
    if(+timer==NaN || +numberofballs==NaN||number_of_monsters==0){
        alert("please enter valid numbers")
    }
    else{
        if(parseInt($("#NumOfBalls").val())>90||parseInt($("#NumOfBalls").val())<50||parseInt($("#GameTime").val())<60){
            alert("please enter valid details")
        }
        else {
            number_of_balls=numberofballs
        switchScreens("game_screen")
        }
    }
}

function get_number_of_monsters(Monsters){
    for(i=0;i<Monsters.length;i++){
        if (Monsters[i].checked==true){
            if (Monsters[i].value=="one_monsters"){
                return 1
            }
            if (Monsters[i].value=="two_monsters"){
                return 2
            }
            if (Monsters[i].value=="three_monsters"){
                return 3
            }
            if (Monsters[i].value=="four_monsters"){
                return 4
            }
        }

    }
    return 0





}