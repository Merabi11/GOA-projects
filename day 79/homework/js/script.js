const fectchData = async () => {
  //   alert('წარმატებით დასრულდა!');

  try {
    const resolve = await fetch('https://fakestoreapi.com/products');
    const data = await resolve.json();
    renderElenets(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fectchData();

function renderElenets(elements) {
  const section = document.querySelector('.products');

  elements.forEach((element) => {
    const div = document.createElement('div');

    div.innerHTML += `
        <p>category: ${element.category}</p>
        <p>description: ${element.description}</p>
        <img src="${element.image}" width="300px"/>
        <p>price: $${element.price}</p>
        <button class="addBtn">Add To Cart</button>

        <br />
        <br />
        <br />
        <br />
        `;

    section.appendChild(div);

    const addBtn = div.querySelector('.addBtn');

    addBtn.addEventListener('click', () => {
      addToCart(element);
    });
  });
}

let cart = [];

const addToCart = (element) => {
  cart.push(element);

  localStorage.setItem('მაღაზიის პროდუქტები', JSON.stringify(cart));

  renderCart();
};

function renderCart() {
  const secondSection = document.querySelector('.products-2');
  secondSection.innerHTML = '';

  cart.forEach((element, index) => {
    const div = document.createElement('div');

    div.innerHTML = `
        <p>category: ${element.category}</p>
        <p>description: ${element.description}</p>
        <img src="${element.image}" width="300px"/>
        <p>price: $${element.price}</p>
        <button class="deleteBtn">Delete From Cart</button>
        <br />
        <br />
        <br />
        <br />
    `;

    secondSection.appendChild(div);

    // Delete ღილაკი
    const deleteBtn = div.querySelector('.deleteBtn');

    deleteBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      renderCart();
    });
  });

  console.log(cart);
}
