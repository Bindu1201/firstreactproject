import React from "react";
import UseComponentC from "./UseComponentC";

export let UserContext = React.createContext()
export let ChannelContext = React.createContext()



function UseContextExample() {
    
       return(
        <div className="ContextValue">
            <UserContext.Provider  value ={"Bindu"}>
                <ChannelContext.Provider value ={"GopiReddy"}>
                <UseComponentC/> 
                </ChannelContext.Provider>
                </UserContext.Provider>
        </div>
       )
}

export default UseContextExample

