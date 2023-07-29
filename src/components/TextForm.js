import React, { useState } from 'react'

export default function TextForm(Props) {
  
  const[text,setText]= useState("")
  function handleup() {
      setText(text.toUpperCase())
      if (text!=""){
        Props.convert("Converted","primary")
      }
  }
  function handlechange(event){
      setText(event.target.value)

      console.log("changing"+text)
  }
  function handleclear(){
      setText("")
      if (text != ""){
      Props.convert("Cleared!!","danger")
      }
  }
  function handledo(){
      setText(text.toLowerCase())
      if (text != ""){
      Props.convert("Lowered!!","success")
      }
  }
  return (
            <>
            <div className={`text-${(Props.tog==="dark")?"light":"dark"}`}>
            <h1>{Props.name}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="Kar" placeholder="Write Anything" rows="8"  onChange={handlechange} value={text} > </textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleup}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handledo}>Convert to lowercase</button>
            <button type="button" className="btn btn-danger mx-1" onClick={handleclear}>Clear text</button>
            <h5 className='my-3'>{(text==="")? 0 : (text.split(" ")).length} number of words, {text.length} number of characters</h5>
            <br />
            <h6 className="my-1">Time taken to read a the text: {(text==="")?  0 :text.split(" ").length *0.005} minutes</h6>
            
            <h2 className='my-3'>Preview</h2>
            
            <p className='border'>{text}</p>
            </div>
            </>
            
  )
  
}

