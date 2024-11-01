import React , {useState} from "react";

function ExampleUseState()
{

    const [count,setCount] = useState(4);
   
   function decrementCount(){
    setCount(count => count - 1)
   }

   function incrementCount(){
      setCount(count => count + 1)
   }

   return(
    <>
    <button onClick={decrementCount} > decrement </button>
   <span>{count}</span>

    <button onClick={incrementCount} > increment </button>
    </>
 )

}
export default ExampleUseState;