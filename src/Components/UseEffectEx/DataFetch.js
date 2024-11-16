
//This program is used to fetch entire data from the url
import React , {useState , useEffect} from "react";
import axios from 'axios';

function DataFetch()
{

    const [posts,setPosts] = useState([]);
   
  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
        console.log("The success data result is :" ,res.data)
       setPosts(res.data)
    }).catch(error => {
        console.log("The error data result is :" ,error)
    })
  },[])
 
   return(
    <>
    <ul>{posts.map(post => (<li Key={post.id}>{post.title})</li>
    ))}
     </ul> 
    </>

 )

}
export default DataFetch;