import Hero from './Hero';

function App() {
  return (
    <div>
      <Hero title='Hero' description='This is Hero Component'>
        <p>merab</p>
        <p>jiqidze</p>
      </Hero>
    </div>
  );
}

// კომპონენტის გამოძახების დროს ჩვენ მას შეგვიძლია გადავცეთ რაომე ელემენტი ოღონდ ის უნდა გამოვიძახოთ კონტეინერ ელემენტის სახით
// კონტეინერ ელემენტის სახით გადაცემული მნიშვნელობას გამივიტანთ { props.childner } - გამოგვიტანს კომპონენტის შვილობილი ელემენტს რასაც გადავცემთ
// კომპონენტის თეგის შორის ვსვავთ ელემენტებს რაც გვინდა რომ გახდეს children
export default App;
