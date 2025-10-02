import User from './User';

const Nav = ({ isLoggedIn }) => {
  return (
    <>
      <User isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Nav;
