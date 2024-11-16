
// This program is used to fetch  data from the button
import React , {useState , useEffect} from "react";
import axios from 'axios';

function DataFetchButton()
{

    const [post,setPost] = useState({});
    const[id,setId] = useState(1)
    const[button,setButton]=useState(1)

    const handleClick= ()=>{
      setButton(id)
    }
   
  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${button}`).then(res => {
        console.log("The success data result is :" ,res.data)
       setPost(res.data)
    }).catch(error => {
        console.log("The error data result is :" ,error)
    })
  },[button])
 
   return(
    <>
    <input type="text" value ={id} onChange={(e =>setId(e.target.value))} />
    <button type="button"  onClick={(handleClick)}>Fetch Button</button>
     <div>{post.title}</div>
    </>

 )

}
export default DataFetchButton;