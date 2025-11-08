import { useState } from "react";

function Message1 ()
{


    const [normalMessage,updateMessage] = useState("This is a normal message ");
    function clickEvent ()
    {
        updateMessage("This is updated Message");
    }



    return(
        <>
        <h1>{normalMessage}</h1>
        <button onClick = {() => clickEvent()}>Clickme!</button>
        </>
    )
}
export default Message1;