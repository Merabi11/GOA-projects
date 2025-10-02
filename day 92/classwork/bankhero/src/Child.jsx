import Grandchild from './Grandchild';

const Child = ({ message }) => {
  return (
    <>
      <p>
        <Grandchild message={message} />
      </p>
    </>
  );
};

export default Child;
