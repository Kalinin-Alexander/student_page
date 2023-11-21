/*Для модального окна*/

let modal = document.getElementById("modal");

let btn = document.getElementById("contact_btn");

let span = document.getElementsByClassName("modal_close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

/*Не срабатывает вместе с другим window.onclick*/

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



/* Для Dropdown*/

/* задание переменных*/ 
let drop1 = document.getElementById("student");
let call1 = document.getElementById("student_call");

let drop2 = document.getElementById("learn");
let call2 = document.getElementById("learn_call");

let drop3 = document.getElementById("work");
let call3 = document.getElementById("work_call");

let drop4 = document.getElementById("news");
let call4 = document.getElementById("news_call");



/* функции*/
function openDropdown(drop){
  if (drop.style.display == "block"){
    drop.style.display = "none";
  }
  else{
    drop.style.display = "block";
  }
}


function closeDropdown(drop){
  
}


/* Перенести в функцию closeDropdown*/
window.onclick = function(event) {
  if (event.target !== drop1 && event.target !== call1 && !event.target.closest('#student') && drop1.style.display === "block") {
    drop1.style.display = "none";
  }
  if (event.target !== drop2 && event.target !== call2 && !event.target.closest('#learn') && drop2.style.display === "block") {
    drop2.style.display = "none";
  }
  if (event.target !== drop3 && event.target !== call3 && !event.target.closest('#work') && drop3.style.display === "block") {
    drop3.style.display = "none";
  }
  if (event.target !== drop4 && event.target !== call4 && !event.target.closest('#news') && drop4.style.display === "block") {
    drop4.style.display = "none";
  }
}


/* Перенесено в функцию openDropdown

call1.onclick = function() {
  if (drop1.style.display == "block"){
    drop1.style.display = "none";
  }
  else{
    drop1.style.display = "block";
  }
  drop4.style.display = "none";
  drop3.style.display = "none";
  drop2.style.display = "none";
}


call2.onclick = function() {
  if (drop2.style.display == "block"){
    drop2.style.display = "none";
  }
  else{
    drop2.style.display = "block";
  }
  drop4.style.display = "none";
  drop3.style.display = "none";
  drop1.style.display = "none";
}


call3.onclick = function() {
  if (drop3.style.display == "block"){
    drop3.style.display = "none";
  }
  else{
    drop3.style.display = "block";
  }
  drop4.style.display = "none";
  drop2.style.display = "none";
  drop1.style.display = "none";
}


call4.onclick = function() {
  if (drop4.style.display == "block"){
    drop4.style.display = "none";
  }
  else{
    drop4.style.display = "block";
  }
  drop3.style.display = "none";
  drop2.style.display = "none";
  drop1.style.display = "none";
}

*/
