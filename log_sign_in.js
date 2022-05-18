
localStorage.setItem("k","k")
// let today = new Date();
// $("#date_box").maxDate = today;

function log_into_system(){
    let user_name = $("#user_name_login_box").val()
    let password =  $("#password_login_box").val()
    let result = localStorage.getItem(user_name)
    if (result === password){
        switchScreens('settings')
    }
    else{
        alert("Wrong username or password")
    }
}

function sign_into_system() {
    let user_name = $("#user_name_signin_box").val();
    let password = $("#password_signin_box").val()
    let full_name = $("#full_name_box").val()
    let email = $("#email_box").val()
    let date = $("#date_box").val()

    if (check_empty(user_name, password, full_name, email, date )) {
        let user_name_valid = validateUsername(user_name)
        if (user_name_valid) {
            let password_valid = validatePassword(password);
            if (password_valid) {
                let name_valid = validateName(full_name);
                if(name_valid){
                    let email_valid = validate_email(email)
                    if (email_valid) {
                        let date_valid = validate_date(date);
                        if(date_valid){
                            localStorage.setItem(user_name, password)
                            console.log("New user was added!")
                            switchScreens('settings')
                        }
                    }
                }
            }
        }
    }

}
function check_empty(user_name, password, full_name, email, date) {
    if (user_name === "" || password === "" || full_name === "" || email === "" || date === "") {
        alert("One or more details are missing.")
        return false;
    }
    return true;
}

function validate_email(email) {
    let regex =
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if(regex.test(email)){
        return true
    }
    else{
        alert("Invalid email address - email address must be in the form: hello@world.com")
        return false;
    }


}

function validatePassword(passwordValue) {
    if ((passwordValue.length < 6)) {
        alert("Invalid password - must be at least 6 characters")
        return false;
    } else {
        let letters = containsLetter(passwordValue)
        let nums = containsNumber(passwordValue)
        if(!letters || !nums){
            alert("Invalid password - must contains letters and numbers (example: 123abc)")
            return false;
        }
        return true;
    }
}

function containsNumber(str) {
    let str_to_check = str
    let res = /\d/.test(str_to_check);
    return res;
}


function containsLetter(str) {
    return /[a-zA-Z]/.test(str);
}

function validateName(name){
    let name_valid = containsNumber(name);
    if (name_valid){
        alert("Name can't contain numbers");
        return false;
    }
    return true;

}
function validateUsername(usernameValue) {
    let user_check = localStorage.getItem(usernameValue)
    if (user_check == null) {
        return true
    }
    alert("This username is already taken.")
    return false;
}

function validate_date(birthday) {
    // let today = new Date();
    // $("#date_box").maxDate = today;
    // let bd = Date.parse(birthday)
    // if(bd > today){
    //     alert("Can't choose future dates")
    //     return false;
    // }
    // return false
    return true
}