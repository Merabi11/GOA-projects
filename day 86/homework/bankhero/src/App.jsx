import Nav from './Nav';

function App() {
  return (
    <>
      <Nav />

      <section>
        <h1>My Car❤️</h1>

        <img
          src='https://cdn.sanity.io/images/c8ihu5xk/production/1b2dd6b08680dc278d18c792902c3d81c868039d-3917x2611.jpg?fm=webp&w=2880&q=80&fit=min'
          alt='car image'
          width={500}
        />
      </section>

      <section>
        <h2>Car short information</h2>
        <ul>
          <li>✅ Brand: BMW</li>
          <li>✅ Model: F36</li>
          <li>✅ Year: 2017</li>
          <li>✅ Engine: 2.0 Twin Turbo</li>
          <li>✅ Horse Power: 252HP</li>
          <li>✅ Country Make: Germany</li>
          <li>✅ Color: Black Saphire Metalic (Black)</li>
        </ul>
      </section>
    </>
  );
}

export default App;
