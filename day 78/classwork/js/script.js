const asyncAwait = async () => {
  // async არის ფუნქცია ასინქრონული ოპერაციების შესასრულებლად

  try {
    // try გამოვიყენებთ იმისათვის რომ შევამოწმოთ რაიმე ხარვეზია თუ არა ჩენს კოდში
    const response = await fetch(
      // await გამოიყენება იმისათვის რომ დაველოდოთ fetch-ის პასუხს. ის იგივეა რაც .then()
      'https://jsonplaceholder.typicode.com/users/1/posts'
    );
    const jsonData = await response.json();
    console.log(jsonData);

    const ul = document.querySelector('ul');

    jsonData.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.title;
      li.style.color = 'red';
      ul.appendChild(li);
    });
  } catch (err) {
    // catch გამოიყენება შეცდომების დასაჭერად
    console.log(err);
  }
};

asyncAwait();
