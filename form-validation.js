// DOM elements
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const tournamentQuantity = document.getElementById('quantity');
const locationRadio = document.querySelector("input[name='location']");
const acceptTerms = document.getElementById('checkbox1');
// Thank You for signing up Message 
const thankYouForSigningUp = document.querySelector(".thanks-msg-wrap");

// Error messages
// const errorMsg = document.getElementsByClassName("error");

const ErrorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const ErrorLastName = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErrorEmail = "Veuillez renseigner une adresse électronique.";
const ErrorBirthdate = "Vous devez entrer votre date de naissance.";
const ErrorBirthdate18 = "Vous devez être majeur.";
const ErrorQuantity = "Vous devez entrer votre nombre de participation.";
const ErrorLocation = "Vous devez choisir une ville.";
const ErrorAcceptTerms = "Veuillez lire et accepter les termes et conditions.";

// REGEX
const nameFormat = /^[a-zA-Zéèà ]+$/;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;


const showError = (input, message) => {
    input.parentElement.lastElementChild.innerHTML = message;
    input.classList.add('error');
}
const hideError = (input) => {
    input.parentElement.lastElementChild.innerHTML = "";
    input.classList.remove('error');
}

// Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateForm();
});

// VALIDATE FIRST NAME
const checkFirstName = () => {
    let value = first.value.trim();
    if (!value || value.length < 2) {
        showError(first, ErrorFirstName);
        return false;
    }
    else {
        hideError(first);
        return true;
    }
}

// VALIDATE LAST NAME
const checkLastName = () => {
    let value = last.value.trim();
    if (!value || value.length < 2 || !value.match(nameFormat)) {
        showError(last, ErrorLastName);
        return false;
    }
    else {
        hideError(last);
        return true;
    }
}

// VALIDATE EMAIL
const checkEmail = () => {
    let value = email.value.trim();
    if (!value || !value.match(mailformat)) {
        showError(email, ErrorEmail);
        return false;

    }
    else {
        hideError(email);
        return true;
    }
}

// VALIDATE BIRTHDATE
const checkBirthdate = () => {
    let value = birthdate.value;
    if (!value || !value.match(birthdateFormat)) {
        showError(birthdate, ErrorBirthdate);
        return false;
    } else {
        hideError(birthdate);
        return true;
    }
}

// VALIDATE TOURNAMENTS QTY
const checkTournamentsQuantity = () => {
    let value = tournamentQuantity.value;
    if (!value || value < 1) {
        showError(tournamentQuantity, ErrorQuantity);
        return false;
    }
    else {
        hideError(tournamentQuantity);
        return true;
    }
}

// VALIDATE LOCATION RADIO BUTTONS
const checkLocation = () => {
    let checkedLocation = document.querySelector('input[name="location"]:checked');
    if (!checkedLocation) {
        locationRadio.parentElement.lastElementChild.innerHTML = ErrorLocation;
        return false;
    }
    else {
        locationRadio.parentElement.lastElementChild.innerHTML = "";
        return true;
    }
}


// VALIDATE CHECKED ACCEPT TERMS AND CONDITIONS BOX
const checkAcceptTerms = () => {
    let checkedAcceptTerms = document.getElementById('checkbox1').checked;
    if (!checkedAcceptTerms) {
        acceptTerms.parentElement.lastElementChild.innerHTML = ErrorAcceptTerms;
        return false;
    }
    else {
        acceptTerms.parentElement.lastElementChild.innerHTML = "";
        return true;
    }
}


// VALIDATE ALL FORM INPUTS

function validateForm() {

    let boolFirstName = checkFirstName();
    let boolLastName = checkLastName();
    let boolEmail = checkEmail();
    let boolBirthdate = checkBirthdate();
    let boolTournamentsQuantity = checkTournamentsQuantity();
    let boolLocation = checkLocation();
    let boolAcceptTerms = checkAcceptTerms();
    if (boolFirstName && boolLastName && boolEmail && boolTournamentsQuantity && boolLocation && boolBirthdate &&boolAcceptTerms) {
        thankYouForSigningUp.style.display = "block";
    } else{
        thankYouForSigningUp.style.display = "none";
    }

}


