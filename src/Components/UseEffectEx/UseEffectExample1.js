import React , {useState , useEffect} from "react";

function UseEffectExample1()
{

    const [count,setCount] = useState(0);
   
   useEffect(() =>{
    document.title = `You clicked ${count} times`;
   })

   return(
    <>
    <button onClick={ () => setCount (count + 1 )} > Clicked {count} </button>
    </>
 )

}
export default UseEffectExample1;