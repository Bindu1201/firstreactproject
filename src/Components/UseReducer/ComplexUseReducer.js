import React ,{useReducer} from "react";


const initialState = {
    firstCounter :0,
    secondCounter:10
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment': 
       return  {...state, firstCounter : state.firstCounter + action.value}
       case 'decrement': 
       return  {...state, firstCounter : state.firstCounter - action.value}
       case 'increment1': 
       return  {...state, secondCounter : state.secondCounter + action.value}
       case 'decrement1': 
       return  {...state, secondCounter : state.secondCounter - action.value}
       case 'reset': 
       return  initialState;
       default:
        return state
    }
    
}
function ComplexUseReducer() {
    const [count ,dispatch] = useReducer(reducer,initialState)

    return(
        <div>
        <div>firstCount = {count.firstCounter}</div>
        <div>secondCount = {count.secondCounter}</div>
        <button onClick={()=> dispatch({type :'increment' ,value : 2})}>Increment</button>
        <button onClick={()=> dispatch({type :'decrement' ,value : 1})}>Decrement</button>
        <button onClick={()=> dispatch({type :'increment1' ,value : 5})}>Increment1</button>
        <button onClick={()=> dispatch({type :'decrement1' ,value : 1})}>Decrement1</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
        )
}

export default ComplexUseReducer
