// const ul = document.getElementById('products');

function createProductLI(products) {
  let liString = '';

  for (let i = 0; i < products.length; i++) {
    liString += `<li>
      <strong>${products[i].title}</strong> - ${products[i].price}$
    </li>`;
  }

  return liString;
}

function render(htmlString) {
  let ul = document.getElementById('Products');
  ul.innerHTML = htmlString;
}

fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    let liHTML = createProductLI(data);
    render(liHTML);
  })
  .catch((error) => {
    console.log('შეცდომა:', error);
  });
