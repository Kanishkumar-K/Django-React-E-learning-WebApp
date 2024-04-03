import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p><br />
      <button style={{backgroundColor:"#0dd943" , padding:"13px", borderRadius:"10px",backgroundColor:"#0dd943", color:"black",  marginLeft:"340px"}} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseState;
