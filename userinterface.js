let userbox = document.getElementById("userbox");
let menubox = document.getElementById("menubox");
userbox.onclick = function () {
  menubox.classList.toggle("menuonoff");
};


let btn = document.getElementById("toggle-btn");
btn.onclick = function(){
    btn.classList.toggle("onoff")
}