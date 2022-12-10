const cat = categories.querySelectorAll('li.item');
console.log('Number of categories:', cat.length);
console.log('');
cat.forEach(element => {
  const h2 = element.querySelector('h2');
  const li = element.querySelectorAll('li');
  console.log('Category:', h2.textContent);
  console.log('Elements:', li.length);
  console.log('');
});
