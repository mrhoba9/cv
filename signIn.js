let main_div = document.querySelector(".main");
let first_h1 = document.querySelector(".first_h1");
let email_input = document.getElementById("email");
let password_input = document.getElementById("password");
let email_visible_error = document.querySelector(".email-visible-error");
let password_visible_error = document.querySelector(".password-visible-error");
let checkbox = document.getElementById("checkbox");
let remember = document.querySelector(".remember");
let forget = document.querySelector(".forget");
let btn = document.getElementById("btn");
let password_toggle = document.getElementById("password-toggle");
let email_array = [];
let password_array = [];
let successful_login = document.querySelector(".successful-login");
let click_here = document.querySelector(".click-here");
/*
sign in decelration
*/



function confirm_finish() {
	let userValid = false;
	for (let i = 0; i < email_array.length; i++) {
		if (email_array[i] === email_input.value && password_array[i] === password_input.value){
			userValid = true;
            break;
		}
	}
	if(userValid == true){
		email_input.value = "";
		password_input.value = "";
		successful_login.style.opacity = "1";
		successful_login.style.zIndex = "3";
		setTimeout(() => {
			successful_login.style.opacity = "0";
			successful_login.style.zIndex = "-1";
		}, 1300);
	}
	else{
			first_h1.innerHTML = "Invalid email or password";
			first_h1.style.color = "red";
			first_h1.style.background = "#ffffff46";
		}
}
function email_input_click() {
	first_h1.innerHTML = "sign in";
	first_h1.style.color = "white";
	first_h1.style.background = "transparent";
}
function password_input_click() {
	first_h1.innerHTML = "sign in ";
	first_h1.style.color = "white";
	first_h1.style.background = "transparent";
}


/**
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------        SIGN IN PAGE FINISHED        ---------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------          REG PAGE STARTS           ---------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */


let REG_name = document.querySelector('.full-name');
let REG_username = document.querySelector('.username');
let REG_email = document.getElementById('email-reg');
let REG_phone = document.querySelector('.phone');
let REG_password= document.querySelector('.password-reg ');
let REG_confirm_password = document.querySelector('.confirm-password');
let Registration_btn = document.querySelector('.Registration-btn');
let REG_text = document.querySelector('.REG-text');
let male_input = document.querySelector('.male-input');
let female_input = document.querySelector('.female-input');

let capitalLetter = /[A-Z]/;
let specialCha = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
let numberReg = /[0-9]/;


// Initialize email and password arrays for registration
let show_email_worn = ["Email must ends with @...com","Fill The Email","your email must contain more than 13 character"];
let show_password_worn = ["Fill The Password"];










function Registration_btn_click() {


    if (REG_email.value != "" && (REG_email.value.endsWith("@gmail.com") || REG_email.value.endsWith("@yahoo.com") || REG_email.value.endsWith("@edu.com")) && REG_email.value.replace(/\s/g, "").length >= 13){

           if (REG_password.value.replace(/\s/g, "").length > 8 && capitalLetter.test(REG_password.value) && specialCha.test(REG_password.value) && numberReg.test(REG_password.value)){
                if(REG_password.value == REG_confirm_password.value){

                    email_array.push(REG_email.value);
                    password_array.push(REG_password.value);
                    REG_text.innerHTML = "Sign Up Successful";
                    REG_text.style.color = "green";

					localStorage.setItem("email_array", JSON.stringify(email_array));
					localStorage.setItem("password_array", JSON.stringify(password_array));
            }else {
                REG_text.innerHTML = "Confirm password is incorrect";
                REG_text.style.color = "red";
            }
        } else {
                REG_text.innerHTML = "Password must contain at least 8 characters including uppercase letters, special characters, and numbers.";
                REG_text.style.color = "red";
            }} else {
            REG_text.innerHTML = "Please enter a valid email address ending with @gmail.com, @yahoo.com, or @edu.com with at least 13 characters.";
            REG_text.style.color = "red";
    }
} 
function email_input_click() {
    REG_text.innerHTML = "Registration";
	REG_text.style.color = "white";
	REG_text.style.background = "transparent";
}

window.onload = () => {
    let storedEmailArray = localStorage.getItem("email_array");
    let storedPasswordArray = localStorage.getItem("password_array");

    if (storedEmailArray && storedPasswordArray) {
        email_array = JSON.parse(storedEmailArray);
        password_array = JSON.parse(storedPasswordArray);
    }
};