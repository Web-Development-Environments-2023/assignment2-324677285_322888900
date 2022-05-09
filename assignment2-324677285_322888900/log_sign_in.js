
localStorage.setItem("k","k")


function log_into_system(){
    let user_name = $("#user_name_login_box").val()
    let password =  $("#password_login_box").val()
    let result = localStorage.getItem(user_name)
    if (result == password){
        switchScreens('game_screen')
    }
}

function sign_into_system(){
    let user_name = $("#user_name_signin_box").val()
    let password =  $("#password_signin_box").val()
    let full_name = $("#full_name_box").val()
    let email =  $("#email_box").val()
    let result = localStorage.getItem(user_name)
    if (result == null){
        localStorage.setItem(user_name,password)
        switchScreens('game_screen')
    }

}