let menu_icon = document.getElementById("menu-icon");
let menu_section = document.getElementById("menu-section");
let cover_div = document.getElementById("cover");
let X_icon = document.getElementById("X_icon");
let main = document.querySelector(".main");
let rating_input = document.getElementById("rating_input");
let show_rating_input = document.getElementById("show_rating_input");
let array_text_show = ["BAD", "GOOD", "VERY GOOD", "EXCELLENT"];
let submit_rating_input = document.getElementById("submit_rating_input");
let bottom_right = document.getElementById("bottom_right");
bottom_right;
menu_icon.onclick = () => {
	menu_section.classList.remove("hide");
	cover_div.classList.remove("hide");
	cover_div.classList.remove("cover");
	menu_icon.style.opacity = "0";
};
X_icon.onclick = () => {
	menu_section.classList.add("hide");
	cover_div.classList.add("hide");
	cover_div.classList.add("cover");
	menu_icon.style.opacity = "1";
};
rating_input.addEventListener("input", function while_rating() {
	if (rating_input.value == 2) {
		show_rating_input.value = array_text_show[0];
		show_rating_input.style.color = "red";
	} else if (rating_input.value == 3) {
		show_rating_input.value = array_text_show[1];
		show_rating_input.style.color = "orange";
	} else if (rating_input.value == 4) {
		show_rating_input.value = array_text_show[2];
		show_rating_input.style.color = "yellow";
	} else if (rating_input.value == 5) {
		show_rating_input.value = array_text_show[3];
		show_rating_input.style.color = "#66FF66";
	} else {
		show_rating_input.value = "";
	}
});
document.body.onscroll = () => {
    let value = window.scrollY;
    let bottom_right = document.getElementById("bottom_right");

    if (value < 909) {
        bottom_right.href = "#main2";
        bottom_right.style.transform = "rotateZ(360deg)";
    } else if (value >= 909) {
        bottom_right.href = "#main";
		bottom_right.style.transform = "rotateZ(180deg)";
    }
};

