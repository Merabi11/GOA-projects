import './App.css';

const Nav = () => {
  const message = () => {
    alert('Wait support callback you.');
  };

  return (
    <>
      <header>
        <h1>HERO</h1>

        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <button onClick={message}>Support</button>
        </nav>
      </header>
    </>
  );
};

export default Nav;
