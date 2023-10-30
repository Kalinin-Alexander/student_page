let modal = document.getElementById("modal");

let btn = document.getElementById("contact_btn");

let span = document.getElementsByClassName("modal_close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* для студента */

let drop1 = document.getElementById("student");
let call1 = document.getElementById("student_call");

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


/* обучение*/

let drop2 = document.getElementById("learn");
let call2 = document.getElementById("learn_call");

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

/* сотрудничество */

let drop3 = document.getElementById("work");
let call3 = document.getElementById("work_call");

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


/* новости */

let drop4 = document.getElementById("news");
let call4 = document.getElementById("news_call");

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

/*
body.onclick = function() {
  drop4.style.display = "none";
  drop3.style.display = "none";
  drop2.style.display = "none";
  drop1.style.display = "none";
}
*/
