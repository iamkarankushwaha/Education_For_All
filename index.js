// alert("Hello !!! You are welcome to our Website .....")

// alert("Now you can check new Time Table of your Classes. Click to 'Time-Table' in Navigation Menu.")

// prompt("What is your Name?", "Student")

// let menuicon = document.getElementById("menuicon")
// let menuitems = document.getElementById("midheader")
// let show = menuitems.style.display = "block";
// let hide = menuitems.style.display ="none"

// function menuclick(){
//     if (menuitems.style.display === "none") {
//         menuitems.style.display = "block"
//     }
//     else{
//         menuitems.style.display = "none"
//     }
// }

// function menuicon() {
//     var menu = document.getElementById("midheader");
//     if(menu.style.display === "none"){
//         menu.style.display = "block";
//     }
//     else{
//         menu.style.display = "none";
//     }
// }

setInterval(showtime, 10);
function showtime() {
  let ampmhrs = new Date().getHours();
  let hrs = new Date().getHours() % 12 || 12;
  let mnt = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let hrsbox = document.getElementById("hours");
  let mntbox = document.getElementById("minutes");
  let secbox = document.getElementById("seconds");
  let ampm = document.getElementById("session");

  if (hrs < 10) {
    let twodigithrs = "0" + hrs;
    hrsbox.innerText = twodigithrs;
  } else {
    hrsbox.innerText = hrs;
  }
  if (mnt < 10) {
    let twodigitmnt = "0" + mnt;
    mntbox.innerText = twodigitmnt;
  } else {
    mntbox.innerText = mnt;
  }
  if (sec < 10) {
    let twodigitsec = "0" + sec;
    secbox.innerText = twodigitsec;
  } else {
    secbox.innerText = sec;
  }

  if (ampmhrs >= 12) {
    ampm.innerText = "PM";
  } else {
    ampm.innerText = "AM";
  }
}

// function menuclick() {
//   let menuitems = document.getElementById("midheader");
//   if (menuitems.style.display != "block") {
//     menuitems.style.display = "block";
//   } else {
//     menuitems.style.display = "none";
//   }
// }

let menuitems = document.getElementById("midheader");
let menubutton = document.getElementById("menuicon");
menubutton.onclick = function(){
  menuitems.classList.toggle("onofff");
}