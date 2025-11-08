import Message from "./components/Message_state";
import Message1 from "./components/Message_function.js"
import Controlled1 from "./components/ControlledComponents1.js"
import UnControlled1 from "./components/UncontrolledComponents.js"
function App ()
{
  return(
    <>
    <Message />
    <Message1 />
    <Controlled1 />
    <UnControlled1 />
    </>
  )
}


export default App;