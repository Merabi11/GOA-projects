const myFetch = async () => {
  // async ფუქცია რომელსაც გამოვუყენებთ ასინქრონულ ოპერაციების შესასრულებლად
  try {
    // try უშვებს კოდის მოთხოვნას რათა უფრო უსაფრთხოდ მოხდეს მოთხვონა
    const resolve = await fetch('https://fakestoreapi.com/products');
    const jsonData = await resolve.json(); // წამოღებულ ინფორმაციას ვკრავთ ჯეისონის ფორმატში
    console.log(jsonData);
  } catch (err) {
    // try-ში თუ მოხდა რაიმე დარღვევა და catch- იჭერს ზუსტად ამ ერორებს და შეცდონას რასაც შეგვატყობინებს
    console.log(err);
  }
};

myFetch();
