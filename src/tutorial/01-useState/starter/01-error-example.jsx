const ErrorExample = () => {
  let count = 0;
  const handleClick = () =>{
    count = count + 1;
    console.log(count);
  }
  return <div>
    {count}
    <button type="button" onClick={handleClick} className="btn">increase</button>
    </div>;
};

export default ErrorExample;
