import { useState } from 'react'
import './Add.css'

function Add() {
 
  const [num1 , setnum1]=useState(0)
  const[num2,setnum2]=useState(0)
  const[num3,setnum3]=useState("")

  let calc=(e)=>{
   e.preventDefault();
   let num=Number(num1)+Number(num2);
   setnum3(num);
   
}

 let reload=()=>{
  window.location.reload();
 }

  return(
    <div className="Add">
      <form onSubmit={calc}>
        <div className="header">
          <h1>This is the addition</h1>
        </div>
        <div className="cal">
        <label>Enter number</label>
        <input type="number"
         placeholder="Enter value"  
         value={num1} 
         onChange={(e)=>setnum1(e.target.value)}></input>
        <label>Enter number</label>
        <input type="number" 
          placeholder="Enter value" 
          value={num2}
         onChange={(e)=>setnum2(e.target.value)}></input>
         </div>
         <div className="btn">
              <button type="Submit"  >Enter</button>
         </div>
         <div className="btn-1">
              <button type="button" onClick={reload} >Refresh</button>
         </div>
         <div className="res">
           <p> The result is {num3}</p>
         </div>
      </form>
      
    </div>


  )
  
}

export default Add
