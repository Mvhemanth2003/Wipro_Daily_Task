import { useState } from "react"
import Controlled2 from "./ControlledComponents2"

function Controlled1 ()
{
    const [name,changeName] = useState(' ');

   const onChange1 = (e) =>
    {

        changeName(e.target.value)
    }



    return(
        <>
        <h1>Name: {name}</h1>
        <input type='text' onChange={onChange1}></input>
        <Controlled2 onChange={onChange1} />
        </>
    )
}
export default Controlled1;