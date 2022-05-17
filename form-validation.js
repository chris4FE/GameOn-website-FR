// DOM elements
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
// const location = document.querySelector(".location");
const acceptTerms = document.getElementById('checkbox1');

// Error messages
// const errorMsg = document.getElementsByClassName("error");

const ErrorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const ErrorLastName = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErrorEmail = "L'adresse électronique n'est pas valide.";
const ErrorBirthdate = "Vous devez entrer votre date de naissance.";
const ErrorQuantity ="Vous devez entrer votre nombre de participation.";
const ErrorLocation ="Vous devez choisir une ville.";
const ErrorAcceptTerms = "Veuillez lire et accepter les termes et conditions.";

// Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateForm();
});

// Validate form inputs

function validateForm() {
    // get values of inputs
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();
    const emailValue = email.value.trim();
    const birthdateValue = birthdate.value.trim();
    const tournamentQuantityValue = tournamentQuantity.value.trim();
    // const locationValue = location.value.trim();
    const acceptTermsValue = acceptTerms.value.trim();


    // VALIDATE FIRST NAME 
    if(firstValue === '') {
        // show error
        // errorMsg[0].innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        setErrorFor(first, ErrorFirstName)
    } else {
        // errorMsg[0].innerHTML = "";
    }

    // VALIDATE LAST NAME 
    if(lastValue === '') {
        setErrorFor(last, ErrorLastName)
    }


    // VALIDATE EMAIL
    if(emailValue === '') {
        setErrorFor(email, ErrorEmail)
    }
}

function setErrorFor(input, message) {
    const formData = input.parentElement; 
    const span = formData.querySelector('span');

    // add error message inside span
    span.innerText = message;

    // add error class
    formData.className = 'formData error';
}

