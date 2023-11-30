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


function openDropdown(call, drop){
  call.onclick = () =>{
    if (drop.style.display == "block"){
      drop.style.display = "none";
    }
    else{
      drop.style.display = "block";
    }
  }
}

function closeDropdown(event, drop, call, id){
  if (event.target !== drop && event.target !== call && !event.target.closest(id) && drop.style.display === "block"){
    drop.style.display = "none";
  }
}


openDropdown(call1, drop1);
openDropdown(call2, drop2);
openDropdown(call3, drop3);
openDropdown(call4, drop4);


window.onclick = function(event) {
  closeDropdown(event, drop1, call1, "#student");
  closeDropdown(event, drop2, call2, "#learn");
  closeDropdown(event, drop3, call3, "#work");
  closeDropdown(event, drop4, call4, "#news");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
