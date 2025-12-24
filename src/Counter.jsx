import React, { useState } from 'react'

function Counter() {
    const [count,Setcount] = useState(0)


    const incre=()=>{
        Setcount(count+1)
    }

    const decre=()=>{
        Setcount(count-1)
    }
    let reset=()=>{
        Setcount(0)
    }

  return (
    <div style={{border:"2px solid",color:"red",backgroundColor:"yellow"}}>

      <h1>Counter-App</h1>
      <div>{count}</div>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
