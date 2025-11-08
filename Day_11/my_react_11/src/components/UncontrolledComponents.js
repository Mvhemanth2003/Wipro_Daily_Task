import { useRef } from "react";

function UnControlled1() {
  const nameRef = useRef();

  function handleSubmit() {
    alert(`Your name: ${nameRef.current.value}`);
  }

  return (
    <>
      <input type="text" ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}





export default UnControlled1;