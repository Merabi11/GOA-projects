import Form from './ContactForm';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';

function App() {
  return (
    <>
      <Nav />
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default App;

// ჩვენ ვიცით რომ HTML-ში ელემენტს როდესაც გვინდა მივანიჭოთ class="div" -მაგალითად ესე მაგრამ რეაქთში ყველაფერი სხვაგვარადარის ჩვენრომ რეაქთში ელემენტს მივანიჭოთ კლასი ჯავასკრიპრი აღიქვამს როგორც class constructor-ად ამიდომ ეს ყველაფერი რომ თავიდანა ვიცილოთ ვანიჭებტ ესე className="div"
