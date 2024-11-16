import React from "react";

function Button(props) {
    
    console.log ('Rendering button - ',props)
    return(

       <button onClick={props.handleClick}>
        {props.children}
        </button> 
    )
}

export default React.memo(Button)