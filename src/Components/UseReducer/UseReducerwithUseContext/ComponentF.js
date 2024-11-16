import React ,{useContext}from "react";
import { countContext } from "./UseReducerContext";


function ComponentF() {

const counterContext = useContext(countContext)
       return(
        <div>
            ComponentF
            <button onClick={()=> counterContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=> counterContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=> counterContext.countDispatch('reset')}>Reset</button>
        </div>
       )
}

export default ComponentF