import React from 'react'

export default function FunctionEvent() {
 const Shot =()=>{
    alert("Great Shot!");
 }
  return (
    <div>
        <h1>Function Event Shot</h1>
        <button onClick={Shot}>Shot me</button>
    </div>
  )
}

