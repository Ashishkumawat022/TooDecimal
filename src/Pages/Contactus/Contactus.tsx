import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-router-dom'

const Contactus = (prop: { xy: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  
  const[show , setShow]=useState("hello");


  const arr=[1,2,3,4,5];

  const arr2= arr.pop();



  return (
    <>
    <form>
        <input type='text'/>
        <input type='number'/>
        <button type='submit'>{prop.xy}</button>
        <p>{show}</p>
        <button onClick={()=>{setShow("hello Dear")}}>click</button>
        
          <div>
            <ul>
              {
              arr.map( (info) => 
                <li>{info}</li> 
              )}
            </ul>
          </div>
        
    </form>
    </>
  )
}

export default Contactus
