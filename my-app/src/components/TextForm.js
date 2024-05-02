import React,{ useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);                                          // ye help kerta hai text ko change kerne me
    };
    const handleLoClick=()=>{
      let newText= text.toLowerCase();
      setText(newText);                                          // ye help kerta hai text ko change kerne me
    };
    const handleClearClick=()=>{
      let newText= '';
      setText(newText);                                          // ye help kerta hai text ko change kerne me
    };
    

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">  
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase </button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase </button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the area</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
    </>
  )
}
