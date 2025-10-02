const User = ({ isLoggedIn }) => {
  return (
    <>{isLoggedIn ? <p>Hello User</p> : <p>Please log in to your account</p>}</>
  );
};

export default User;
