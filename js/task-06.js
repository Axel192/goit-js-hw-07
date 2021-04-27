const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', Validation);
function Validation(event) {
    if (Number(inputValidation.dataset.length) === event.target.value.length) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    }   else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
 
     
};

