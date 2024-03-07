

function togglePasswordVisibility() {
	if (password_input.type === "password") {
		password_input.type = "text";
		password_toggle.textContent = "lock_open";
	} else {
		password_input.type = "password";
		password_toggle.textContent = "lock";
	}
}

password_toggle.addEventListener("click", function () {
	togglePasswordVisibility();
});


email_input.addEventListener("keydown", function (e) {
	if (e.key === "ArrowDown") {
		e.preventDefault();
		password_input.focus();
	}
});
password_input.addEventListener("keydown", function (e) {
	if (e.key === "ArrowDown") {
		e.preventDefault();
		checkbox.focus();
		checkbox.style.opacity = "0.5";
		remember.style.opacity = "0.5";
	}
});
checkbox.addEventListener("keydown", function (e) {
	if (e.key === "ArrowUp") {
		e.preventDefault();
		password_input.focus();
        checkbox.style.opacity = "1";
		remember.style.opacity = "1";
	}
});
checkbox.addEventListener("keydown", function (e) {
	if (e.key === "ArrowRight") {
		e.preventDefault();
		forget.focus();
        checkbox.style.opacity = "1";
		remember.style.opacity = "1";
        forget.style.opacity = "0.5";
    }
});
forget.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") {
		e.preventDefault();
		checkbox.focus();
        checkbox.style.opacity = "0.5";
		remember.style.opacity = "0.5";
        forget.style.opacity = "1";
    }
});
checkbox.addEventListener("keydown", function (e) {
	if (e.key === "ArrowDown") {
		e.preventDefault();
		btn.focus();
        checkbox.style.opacity = "1";
		remember.style.opacity = "1";
        btn.style.opacity = "0.5";
	}
});
forget.addEventListener("keydown", function (e) {
	if (e.key === "ArrowDown") {
		e.preventDefault();
		btn.focus();
        forget.style.opacity = "1";
        btn.style.opacity = "0.5";
	}
});
btn.addEventListener("keydown", function (e) {
	if (e.key === "ArrowUp") {
		e.preventDefault();
		checkbox.focus();
        checkbox.style.opacity = "0.5";
		remember.style.opacity = "0.5";
        btn.style.opacity = "1";
	}
});
checkbox.addEventListener("keydown", function (e) {
	if (e.key === "Enter") {
		e.preventDefault();
		checkbox.checked = !checkbox.checked;
	}
});
password_input.addEventListener("keyup", function (e) {
	if (e.key === "ArrowUp") {
		e.preventDefault();
		email_input.focus();
	}
});
email_input.onclick = () =>{
        checkbox.style.opacity = "1";
		remember.style.opacity = "1";
        btn.style.opacity = "1";
        forget.style.opacity = "1";
}
password_input.onclick = () =>{
    checkbox.style.opacity = "1";
    remember.style.opacity = "1";
    btn.style.opacity = "1";
    forget.style.opacity = "1";
}
function email_input_click() {
    first_h1.innerHTML = "sign in";
    first_h1.style.color = "white";
    first_h1.style.background = "transparent";
}
function password_input_click() {
    first_h1.innerHTML = "sign in";
    first_h1.style.color = "white";
    first_h1.style.background = "transparent";
}
email_input.addEventListener("click", email_input_click);
password_input.addEventListener("click", password_input_click);
email_input.addEventListener("focus", email_input_click);
password_input.addEventListener("focus", password_input_click);
