const User = ({ name, age, email }) => {
  return (
    <section
      style={{
        color: '#ffffff',
        backgroundColor: '#0b0b0b',
        padding: 20,
        fontFamily: 'sans-serif',
        textDecoration: 'underline',
        borderRadius: 10,
      }}
    >
      <h1>My short information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quis
        obcaecati fugit sed aliquid nam enim aliquam voluptas quod amet aut
        aspernatur rem accusantium, ad, cupiditate ducimus voluptate expedita
        ut? Aspernatur rerum repellendus, tempora cumque deserunt sit minima
        unde explicabo adipisci ut sapiente eos? Deserunt doloremque adipisci
        sint distinctio laboriosam earum consequatur, voluptatum excepturi,
        dolorem, quidem cumque incidunt officiis. Eius.
      </p>
    </section>
  );
};

export default User;
