

//   FORM VALIDATION


// DOM elements

let id = (id) => document.getElementById(id);

const first = id('first'),
    last = id('last'),
    email = id('email'),
    birthdate = id('birthdate'),
    tournamentQuantity = id('quantity'),
    acceptTerms = id('checkbox1');

const locationRadio = document.querySelector("input[name='location']");

// const first = document.getElementById('first');
// const last = document.getElementById('last');
// const email = document.getElementById('email');
// const birthdate = document.getElementById('birthdate');
// const tournamentQuantity = document.getElementById('quantity');
// const locationRadio = document.querySelector("input[name='location']");
// const acceptTerms = document.getElementById('checkbox1');


// Error messages
const ErrorFirstNameMinimumCharacters = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const ErrorFirstName = "Veuillez entrer des caractères autorisés";
const ErrorLastNameMinimumCharacters = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErrorLastName = "Veuillez entrer des caractères autorisés";
const ErrorEmail = "L'adresse électronique n'est pas valide.";
const ErrorBirthdate = "Vous devez entrer votre date de naissance.";
const ErrorBirthdate18 = "Vous devez être majeur.";
const ErrorQuantity = "Veuilez entrer votre nombre de participation.";
const ErrorLocation = "Veuillez choisir une ville.";
const ErrorAcceptTerms = "Veuillez lire et accepter les termes et conditions.";

// Thank You for signing up Message
const thankYouForSigningUp = document.querySelector(".thanks-msg-wrap");

// REGEX
const nameFormat = /^([A-Za-zÀ-ÖØ-öø-ÿ-'])+$/u;
// /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$/u;
// ([A-Za-zÀ-ÖØ-öø-ÿ\-])+
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;

/**
 * 
 * @param {HTMLElement} input 
 * @param {*} message 
 */
const showError = (input, message) => {
    input.parentElement.lastElementChild.innerHTML = message;
    input.classList.add('error');
}
/**
 * hide error function
 * @param {HTMLElement} input 
 */
const hideError = (input) => {
    input.parentElement.lastElementChild.innerHTML = "";
    input.classList.remove('error');
}

// Form Submit Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateForm();
});

// VALIDATE FIRST NAME

/**
 * 
 * @returns 
 */
const checkFirstName = () => {
    // checking input live while typing
    first.addEventListener('input', checkFirstName);
    // checking input value
    let value = first.value.trim();
    if (!value || value.length < 2) {
        showError(first, ErrorFirstNameMinimumCharacters);
        return false;
    } 
    else if (!value.match(nameFormat)){
        showError(first, ErrorFirstName);
        return false;
    } 
    else {
        hideError(first);
        return true;
    }
}

// VALIDATE LAST NAME
/**
 * 
 * @returns 
 */
const checkLastName = () => {
    // checking input live while typing
    last.addEventListener('input', checkLastName);
    // checking input value
    let value = last.value.trim();
    if (!value || value.length < 2) {
        showError(last, ErrorLastNameMinimumCharacters);
        return false;
    }
    else if (!value.match(nameFormat)) {
        showError(last, ErrorLastName);
        return false;
    }
    else {
        hideError(last);
        return true;
    }
}

// VALIDATE EMAIL
/**
 * 
 * @returns 
 */
const checkEmail = () => {
    // checking input live while typing
    email.addEventListener('input', checkEmail);
    // checking input value
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
/**
 * 
 * @returns 
 */
const checkBirthdate = () => {
    // checking input live while typing
    birthdate.addEventListener('input', checkBirthdate);
    // checking input value
    let value = birthdate.value;
    let now = new Date();
    let [year, month, day] = value.split('-');
    const birthday = new Date(year, month-1, day);

    if (!birthdateFormat.test(value)) {
        showError(birthdate, ErrorBirthdate);
        return false;
    } else if (birthday > new Date(now.setFullYear(now.getFullYear() - 18))) {
        showError(birthdate, ErrorBirthdate18);
        return false;
    } else {
        hideError(birthdate);
        return true;
    }
}

// VALIDATE TOURNAMENTS QTY
const checkTournamentsQuantity = () => {
    // checking input live while typing
    tournamentQuantity.addEventListener('input', checkTournamentsQuantity);
    // checking input value
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
/**
 * 
 * @returns 
 */
const checkLocation = () => {
    // // checking input live while typing
    locationRadio.addEventListener('input', checkLocation);
    // checking input value
    let checkedLocation = document.querySelector('input[name="location"]:checked');
    // const changeCheckedLocations = document.querySelectorAll('input[name="location"]');

    // for (const changeCheckedLocation of changeCheckedLocations){
    //     changeCheckedLocation.onclick = (e) => {

            

    //     }
    // }

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
/**
 * 
 * @returns 
 */
const checkAcceptTerms = () => {
    // checking input live while typing
    acceptTerms.addEventListener('input', checkAcceptTerms);
    // checking input value
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
/**
 * 
 */
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


