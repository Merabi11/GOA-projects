import AboutMe from './AboutMe';

const UserStatus = () => {
  const isLoggedIn = true;
  return (
    <>
      <p>
        {isLoggedIn ? <AboutMe /> : 'You are not logged in to your account'}
      </p>
    </>
  );
};

export default UserStatus;
