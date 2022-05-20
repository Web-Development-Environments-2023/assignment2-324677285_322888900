

function hidePages(){
    $(".screen").hide()
}

function showPage(pageName){
    $("#"+pageName).show()

    if(pageName === "game_screen"){
        let str = "Good Luck " + logged_in + ", and don't mess it up!"
        document.getElementById("game_label").innerHTML = str

    }
}

function switchScreens(id){
    if($("#game_screen").is(":visible")){
        window.clearInterval(interval);
        song.pause();
    }
    hidePages()
    showPage(id)
}


