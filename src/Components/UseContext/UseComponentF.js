import React, { useContext } from "react";
import {UserContext,ChannelContext} from './UseContextExample';





function UseComponentF() {

    let UserName = useContext(UserContext)
let ChannelName= useContext(ChannelContext)

       return(
        <div>
            {UserName} - {ChannelName}
        </div>
       )
}

export default UseComponentF