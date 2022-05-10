
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
    let date =$("#date_box").val()

    if(submit_valid(user_name,password,full_name,email,date)) {
        let result = localStorage.getItem(user_name)
        if (result == null) {
            localStorage.setItem(user_name, password)
            switchScreens('game_screen')
        }
    }


}

function submit_valid(user_name,password,full_name,email,date){
    if(user_name==""||password==""||full_name==""||email==""||date==""){
        alert("Please enter valid details")
        return false;
    }
    if(localStorage.getItem(user_name)!=null){
        alert("This username is taken")
        return false;
    }

    if(validate_date(date) && validate_password(password)&&!containsNumber(full_name)&&validate_email(email)){
        return true
    }
    alert("Please enter valid details")
    return false
}

function validate_email(email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


function validate_password(password){
    if(password.length<6 ||!containsNumber(password) || !containsLetter(password)){
        return false
    }
    return true
}
function containsNumber(str) {
    return /\d/.test(str);
}
function containsLetter(str) {
    return  /[a-zA-Z]/ .test(str);
}

function validate_date(birthday) {
    var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/; // add anchors; use literal
    var Test = regexVar.test(birthday);
    return Test
}
