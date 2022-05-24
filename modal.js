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

// ------ Christine's code below ------
// DOM Elements
const closeModal = document.querySelector('.close');
const closeThanksModal = document.querySelector('.close-thanks-btn');
// const thankYouMsg = document.querySelector('.thanks-msg-wrap');
// const ThanksBtn = document.querySelector(".close-thanks-btn");
// const modalCloseBtn = document.querySelectorAll(".close");


// close modal event
// modalCloseBtn.addEventListener("click", closeModal);

// close modal form with X 
closeModal.onclick = function(){
  modalbg.style.display = "none";

}

closeThanksModal.onclick = function(){
  modalbg.style.display = "none";
}


// closeBtns = document.getElementsByClassName("close");
// for (var i = 0; i < closeBtns.length; i++) {
//   closeBtns[i].addEventListener("click", function () {
//     function closeWindow() {
//       modalbg.style.display = "none";
//     }
//   });
// }

// let closeBtns = document.getElementsByClassName('close');

// closeBtns.forEach(function (i) {
//   i.addEventListener('click', function() {
//     console.log(i);
//   });
// });



// // launch modal event
// ThanksBtn.forEach((btn) => btn.addEventListener("click", closeThanksModal));

// // close modal thanks message with Thanks button
// function closeThanksModal() {
  
//   thankYouMsg.classList.add('visible');
// }

// function closeModal() {
//   closeModalBg.style.display = "none";
// }


