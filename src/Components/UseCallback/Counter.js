import React from "react";

function Counter({text,count}) {
    
//console.log ('props' ,props)
    return(
       <>{text} - {count}</> 
    )
}

export default React.memo(Counter)