import React , {useState , useEffect} from "react";

function UseEffectExample2()
{

    const [count,setCount] = useState(0);
    const [name,setName] = useState('')
   

    // When ever the state is passed in the aaray it will exceute accordingly
   useEffect(() =>{
    console.log("update the name:",name)
    document.title = `You clicked ${count} times`;
   },[count])

// When ever the state is passed empty in the aaray it will execute only at the initial time as the state is empty
// useEffect(() =>{
//     console.log("update the name:",name)
//     document.title = `You clicked ${count} times`;
//    },[])
   

   return(
<>
    <input type = "text" value = {name}  onChange={(ggg) => setName(ggg.target.value)}></input>
    <button onClick={ () => setCount (count + 1 )} > Clicked {count} </button>
 </>
 )

}
export default UseEffectExample2;