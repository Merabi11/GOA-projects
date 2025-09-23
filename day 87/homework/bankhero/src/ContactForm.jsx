const Form = () => {
  const messageAlert = () => {
    alert('succesfull login!');
  };

  return (
    <form>
      <h1>Login in</h1>

      <input type='text' placeholder='Enter your Firtname' required />

      <input type='email' placeholder='Enter your email' required />

      <textarea type='message' placeholder='send message suport' required />

      <input
        type='password'
        placeholder='Enter your password'
        required
        maxLength={8}
      />

      <button onClick={messageAlert}>Login in</button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro natus ex
        perferendis eveniet tempora aliquam quas libero qui fugiat cupiditate
        temporibus hic odio pariatur rem ratione laudantium, nihil ipsum
        deleniti!
      </p>
    </form>
  );
};

export default Form;
