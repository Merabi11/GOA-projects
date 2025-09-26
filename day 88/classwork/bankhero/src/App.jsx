const App = () => {
  const myAge = 21;
  const messages = true;
  return (
    <div>
      <h1>
        {myAge > 20 ? 'შენ ხარ 20-წელზე მეტის' : 'შენ არ ხარ 20-წელზე ზევით'}

        {/*// && React-ში – Conditional Rendering, თუ messages-არის true, <h1>Enable</h1>-ეს ტექსტი გამოჩნდება ეკრანზე და არის false არაფერი არ გამოვა მხოლოდ true მნიშვნელობაზე მუშაობს  */}
        {messages === true && <h1>Enable</h1>}
      </h1>
    </div>
  );
};

// && React-ში – Conditional Rendering
// რატომ არის კაი როდესაც გვინდა მხოლოდ ერთი პირობის მიხედვით გვინდა რაღაცის შესრულება მაგ: თუ პირობა აბრუნსბს true-ს რაღაც მოხდეს თუ არადა false-ის შემთხვევაში არმოხდეს არაფერი
// მოკლე და მარტივი სინტაქსია არ გჭირდებ if else და Ternary მხოლოდ ერთ პასუხზე მუშაობს True-მოხდეს False-არაფერი მოხდეს

export default App;
