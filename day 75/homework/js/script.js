let promises = async () => {
  try {
    let resolve = await fetch('https://fakestoreapi.com/products');
    let dataJson = await resolve.json();
    render(dataJson);
    console.log(dataJson);
  } catch (error) {
    console.log(error);
  }
};

promises();

function render(products) {
  const main = document.getElementById('products');

  products.forEach((product) => {
    const div = document.createElement('div');

    div.innerHTML += `
     <p>price: $${product.price}</p> 
     <p> ${product.description}</p> 
     <p>rating: ${product.rating.rate}, ${product.rating.count}</p> 
     <p> ${product.category}</p> 
     <p> ${product.title}</p> 
     <img src="${product.image}" width="200px"/>

    <br/>

     <button class="addBtn">Add Cart</button>

    <br/>
    <br/>
    `;

    const button = div.querySelector('.addBtn');

    button.addEventListener('click', () => {
      addCart(product);
    });
    main.appendChild(div);
  });
}

let cart = [];

const addCart = (product) => {
  cart.push(product);

  cartRender(cart);
};

const cartRender = () => {
  const cartDiv = document.getElementById('carts');
  cartDiv.innerHTML = '';

  cart.forEach((element) => {
    const div = document.createElement('div');

    div.innerHTML += `
     <p>price: $${element.price}</p> 
     <p> ${element.description}</p> 
     <p>rating: ${element.rating.rate}, ${element.rating.count}</p> 
     <p> ${element.category}</p> 
     <p> ${element.title}</p> 
     <img src="${element.image}" width="200px"/>
     
     <button class="dlt">Delete cart</button>
     
     <br/>
     <br/>

     
    `;

    cartDiv.appendChild(div);
  });
};

// 2

// promise- (დაპირება) არის ობიექტი რომელიც გამოიყენება ასინქრონული იპერაციების შესასრულებლად
// promise - გააჩნია სამი მდგომარება

// pending - პროცესი მიმდინარეა მომლოდინე რეჟიმშია
// resolved - პროცესი წარმატებით შესრულდა
// rejected - პროცესი წარუმატებლად შესრულდა

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('დავალება შესრულებულია');
//   }, 2000);
// });

// firstPromise
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((rej) => {
//     console.log(rej);
//   });

// 3

// const number = 9;

// const secondPromise = new Promise((resolve, reject) => {
//   if (number % 2 === 0) {
//     resolve('რიცხვი ლუწია.');
//   } else {
//     reject('რიცხვი კენტია.');
//   }
// });

// secondPromise
//   .then((res) => {
//     console.log(res);
//   })

//   .catch((rej) => {
//     console.log(rej);
//   });
