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
const errorMessages = document.getElementsByClassName('error');


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
const thankYouMsg = document.querySelector('.thanks-msg-wrap');
const form = document.getElementById('form');

// close modal form with X
closeModal.onclick = function() {
  modalbg.style.display = "none";
  // reset form fields when reopening it
  form.reset();
  // hide error messages after form is closed
  hideError(first);
  hideError(last);
  hideError(email);
  hideError(birthdate);
  hideError(tournamentQuantity);
  hideError(locationRadio);
  hideError(acceptTerms);
};

closeThanksModal.addEventListener("click", closeModalFct);
function closeModalFct() {
  modalbg.style.display = "none";
  thankYouMsg.style.display = "none";
  // reset form fields when reopening it
  form.reset();
  // hide error messages after form is closed
  hideError(first);
  hideError(last);
  hideError(email);
  hideError(birthdate);
  hideError(tournamentQuantity);
  hideError(locationRadio);
  hideError(acceptTerms);
}