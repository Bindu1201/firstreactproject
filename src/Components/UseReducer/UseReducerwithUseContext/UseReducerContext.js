import React ,{useReducer}from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const countContext=React.createContext()

const initialState = 0
const reducer = (state,action) =>{
    switch(action){
        case 'increment': 
       return  state + 1;
       case 'decrement': 
       return  state - 1;
       case 'reset': 
       return  initialState;
       default:
        return state
    }
}

function UseReducerContext() {
    const [count ,dispatch] = useReducer(reducer,initialState)

       return(
        <countContext.Provider value={{countState:count , countDispatch:dispatch}}>
        <div className="Reduce">
            Count - {count}
           <ComponentA/>
           <ComponentB/>
           <ComponentC/> 
        </div>
        </countContext.Provider>
       )
}

export default UseReducerContext