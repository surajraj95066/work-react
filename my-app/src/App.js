import { useState } from 'react';
import './App.css';
// import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//Wheather darkmode is enable or not
  const [val,setVal]=useState('Enable dark mode')
  
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      setVal('Enable light mode');
      document.body.style.backgroundColor = "grey";
      // setInterval(()=>{
      //   document.title="textutils is amazing";
      // },1000);
      // setInterval(()=>{
      //   document.title="textutils download";
      // },2000);
    }else{
      setMode('light');
      setVal('Enable dark mode');
      document.body.style.backgroundColor = "white";
    }
  }



  return (
    <>   
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} val={val}/>
    {/* <Navbar title="TextUtils2" /> */}
    {/* <Alert alert="This is alert"/> */}
    <div className='container my-3'>     
      {/* <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>} /> 
       
        <Route exact path="/about" element={<About/>} />
      </Routes> */}
      <TextForm heading="Enter the text to analyze" mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
