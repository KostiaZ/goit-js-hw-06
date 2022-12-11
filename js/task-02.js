const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
list.style.listStyle = 'none';
[...ingredients].map(item => {
  const itemList = document.createElement('li');
  itemList.textContent = `${item}`;
  itemList.classList.add('item');
  list.append(itemList);
});
