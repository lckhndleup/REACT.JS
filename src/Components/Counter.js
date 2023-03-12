import React from 'react';
import { useState } from 'react'; 

function Counter() {
    const [count,setCount]=useState(0)

    const İncrease = ()=>{
        setCount(count+1)
    }

    const Decrease = ()=>{
        setCount(count-1)
    }
  return (
    <div>
      <h1>☞  {count}  ⛄︎</h1>
      <button onClick={İncrease  }>İncrease</button>
      <br></br>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default Counter; 
