
const counterValue = document.querySelector('#value') 
const decr = document.querySelector('#counter button[data-action="decrement"]')
const incr = document.querySelector('#counter button[data-action="increment"]')
let sum = 0
counterValue.textContent = sum
function increment() {
    sum+=1
    counterValue.textContent = sum
}
function decrement() {
    sum-=1
    counterValue.textContent = sum
}
incr.addEventListener('click', increment);
decr.addEventListener('click', decrement)

