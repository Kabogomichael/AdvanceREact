import React ,{ useState } from "react";




const UseStateBasics = () => {
  const [count,setCount] = useState(0)
  const [name , setName] = React.useState()
  const handleClick = () =>{
    setCount(count + 1);
  }
  return <div>

    <h4>You clicked {count}</h4>
  <button type="button" className="btn" onClick={handleClick}>Increase</button>

  </div>
  
};

export default UseStateBasics;
