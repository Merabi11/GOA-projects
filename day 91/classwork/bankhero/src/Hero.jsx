const Hero = (props) => {
  return (
    <div>
      <h1>description: {props.description}</h1>
      <h2>title: {props.title}</h2>
      <p>{props.children}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        minima, quas odio nulla assumenda quam rerum temporibus deserunt soluta
        totam voluptates quasi ex saepe, praesentium minus necessitatibus eaque
        alias perferendis?
      </p>
    </div>
  );
};

export default Hero;
