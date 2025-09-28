const App = () => {
  const myFriens = ['gio', 'irakli', 'beto', 'rezi', 'saba', 'nika'];

  const names = myFriens.map((value) => {
    return <li>{value}</li>;
  });

  return (
    <section>
      <h1>Friends Names</h1>
      <ul>{names}</ul>
    </section>
  );
};

export default App;
