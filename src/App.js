import { useState } from 'react';
import './App.css';

import TextForm from "./components/TextForm.js";
import Nav from "./components/Nav"
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)
  const togglemode= () =>{
    if(mode === "dark"){
      setMode("light")
      showAlert("Light mode is on","success")
      document.body.style.backgroundColor="white"
    }else if (mode === "light"){
      setMode("dark")
      showAlert("Dark mode is on","success")
      document.body.style.backgroundColor ="black"
    }
  }

  const convert = (message,type) =>{
    showAlert(message,type)
  }
  
  const showAlert = (message,type)=>{
       setAlert({
        msg:message,
        type:type
       }) 
       setTimeout(() => {
          setAlert(null)
       }, 1500);
  }
  return (
    <>
    
    <div className="App">
        <Nav india = "Kuber" modee={mode} tog={togglemode}/>

        <div className='container my-3'>
          <div className='text-danger'></div>
          <Alert alert={alert} />
          <TextForm name="Word Counter" tog={mode} convert={convert} />
        </div>
    </div>
    </>
  );
}

export default App;
