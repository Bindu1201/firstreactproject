import React ,{useContext}from "react";
import { countContext } from "./UseReducerContext";


function ComponentA() {

const counterContext = useContext(countContext)

       return(
        <div>
            ComponentA
        <button onClick={()=> counterContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=> counterContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=> counterContext.countDispatch('reset')}>Reset</button>
        </div>
       )
}

export default ComponentA