const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients')
const pEl = document.querySelector('p')
ingredients.forEach(ingr => ingredientsEl.innerHTML+=`<li>${ingr}</li>`)
 pEl.append(ingredientsEl) 