import React, { useState, useEffect } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default Hooks;