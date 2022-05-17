function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ------ Christine's code below
// DOM Elements
const closeModal = document.querySelector(".close");
// const modalCloseBtn = document.querySelectorAll(".close")


// close modal event
// modalCloseBtn.addEventListener("click", closeModal);

// close modal form
closeModal.onclick = function(){
  modalbg.style.display = "none";
}
// function closeModal() {
//   closeModalBg.style.display = "none";
// }


