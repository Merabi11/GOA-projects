const AboutMe = () => {
  const link =
    'https://globalmotors.pl/wp-content/uploads/2022/08/IMG_9261-scaled.jpg';
  return (
    <section>
      <h1>About me section </h1>

      <img src={link} width={500} />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi rem
        tempore facilis dignissimos eius quia minus magni beatae placeat aliquam
        aliquid, corporis consectetur, nam quaerat minima assumenda debitis ut
        necessitatibus!
      </p>
    </section>
  );
};

export default AboutMe;
