import React, { useReducer,useEffect } from "react";
import axios from "axios";

const initialState={
    loading : true,
    post : {},
    error :''
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'FetchSuccess':
            return{
                loading : false,
                post: action.payload,
                error :''
            }
        case 'FetchError':
            return{
                loading : false,
                post: {},
                error :'Something went wrong' 
            }
        default :
        return state
    }

}
function DataFetchingTwo(){

    const[state,dispatch]=useReducer(reducer,initialState)

    useEffect(() =>
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            dispatch({type:'FetchSuccess', payload:response.action})
        })
        .catch(error => {
            dispatch({type:'FetchErroe'})
        }
        ))

return(
    <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
    </div>
)
}

export default DataFetchingTwo