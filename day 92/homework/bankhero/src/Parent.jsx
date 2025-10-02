import Child from './Child';

const Parent = ({ handleClick }) => {
  return (
    <>
      <Child handleClick={handleClick} />
    </>
  );
};

export default Parent;
