
localStorage.setItem("k","k")


function hidePages(){
    $(".screen").hide()
}

function showPage(pageName){
    $("#"+pageName).show()
}

function switchScreens(id){
    hidePages()
    showPage(id)
}


