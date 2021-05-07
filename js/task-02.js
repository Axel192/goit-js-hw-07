const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = ingredients.map(food => {
  const ingredientsLi = document.createElement('li');
  ingredientsLi.textContent = food;
  
  return ingredientsLi;
});
ingredientsList.append(...ingredientsItems);

console.log(ingredientsItems);