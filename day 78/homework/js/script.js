const fetchPromise = async () => {
  // შევქმენი ასინქრონული ფუნქცია

  try {
    // try ში მეშვეობით გავუშვი მოთხოვნა რადგან რაიმე შეფერხება რომარ მომხდარიყო ინფორაციის წამოღების დროს

    const res = await fetch('https://fakestoreapi.com/products'); // fetch მეშვეობით გავუშვი მოთხოვნა სერვერზე ინფორმაციების წამოსარებად

    const data = await res.json(); // წამოღებული ინფორმაცია რადგან არის ნაწილ ნაწილ და არის ტექტების სახით და მე ის გადავაქციე ჯავასკრიპტის ოებიექტად რადგან ყველა წამოღებული ინფორმაცია იყოს დანაწილებული და გასაგები.

    console.log(data); // კონსოლსი რომ დავინახოთ წამოღებული ინფორმაცია

    const ul = document.getElementById('products'); // html დან წამოვირე დაულაგაბელი სია

    data.forEach((Element) => {
      // forEach გადავუარე იმ ობიქტს სადაც ინფცომაციებია

      const li = document.createElement('li'); // ყველა იტერაციაზე იქმნება ახალი სია

      // ამ სიაში ვამატებთ წამოღებულ ინფორმაციას
      li.innerHTML += `
        <p>${Element.category}</p>
        <p>${Element.description}</p>
        <p>${Element.title}</p>
        <p>$${Element.price}</p>
        <img src="${Element.image}" width="300px"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      `;

      ul.appendChild(li); // დაულაგებელ სიაში ვამატებთ იმ ინფორმაციას რა li ში ჩავდეთ
    });
  } catch (err) {
    // თუ სერვერის მიერ წამოღებულ ინფორმაციას რაიმე შეფერხება შეცდომა მოხდება tach ამყველაფერს იჭერს და გვაცნობებს იმ პრპბლემას რა პრობლემაც მოხდა
    console.log(err);
  }
};

fetchPromise(); // ვიძახებტ ასიქრონულ ფუნქციას.
