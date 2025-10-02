import Nav from './Nav';

const Header = ({ isLoggedIn }) => {
  return (
    <>
      <Nav isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Header;
