import React, { useState } from 'react'

function Calculator() {
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");

    const a=Number(num1)
    const b=Number(num2)
  return (
    <div>
        <h1>Calculator</h1>
        <input 
        placeholder='Enter the First Value' onChange={(e)=>setNum1(e.target.value)} />

        <input 
        placeholder='Enter the Second Value' onChange={(e)=>setNum2(e.target.value)} />

        <div style={{height:"100px",
            width:"250px",
            border:"1px solid",
             backgroundColor:"lightgrey",
             marginLeft:"600px",
             marginTop:"20px"}}>
        
        <p>Addition:{a+b}</p>
        <p>Subtraction:{a-b}</p>
        <p>Multiplication:{a*b}</p>
        <p>Division:{b==0 ? "can't divided by zero":a/b}</p>
        </div>
        </div>
  )
}

export default Calculator