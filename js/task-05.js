const input = document.querySelector("#name-input");
const h1 = document.querySelector("h1");
const output = document.querySelector("#name-output")
input.addEventListener('input', changeName)
function changeName() {
    if(input.value === '') {
    output.textContent = 'незнакомец';
    } else {
        output.textContent = input.value;
    }
}
