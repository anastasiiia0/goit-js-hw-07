function getInfoFromCategories() {
  const categories = document.querySelector('#categories');
  const categoryItems = categories.querySelectorAll('li.item');

  console.log(`Number of categories: ${categoryItems.length}`);

  categoryItems.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const number = category.querySelectorAll('li').length;
    console.log(`Category: ${title}\nElements: ${number}`);
  });
}

getInfoFromCategories();
