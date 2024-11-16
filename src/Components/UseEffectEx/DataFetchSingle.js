
// This program is used to fetch single data from the url
import React , {useState , useEffect} from "react";
import axios from 'axios';

function DataFetchSingle()
{

    const [post,setPost] = useState({});
    const[id,setId] = useState(1)
   
  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        console.log("The success data result is :" ,res.data)
       setPost(res.data)
    }).catch(error => {
        console.log("The error data result is :" ,error)
    })
  },[id])
 
   return(
    <>
    <input type="text" value ={id} onChange={(e =>setId(e.target.value))} />
     <div>{post.title}</div>
    </>

 )

}
export default DataFetchSingle;