//nav decleration starts
let ul_forth = document.getElementById("ul-forth");
let menu_active = document.getElementById("menu_active");
let header = document.getElementById("header");

//nav decleration ends

//style starts
function contact() {
    ul_forth.style.display = (ul_forth.style.display === 'flex') ? 'none' : 'flex';
}
function active_menu(){
    header.style.display = (header.style.display === 'flex') ? 'none' : 'flex';
}
//style finishes

