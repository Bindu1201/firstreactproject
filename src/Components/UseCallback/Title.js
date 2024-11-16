import React from "react";

function Title() {
    console.log ("Title UseCallBack")

    return(
        <h2> USE CALLBACK</h2>
    )
}

export default React.memo(Title)