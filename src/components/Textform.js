import React, {useState} from 'react'

export default function Textform(props) {
    const handleupclick = ()=>{
       // console.log("set upper text");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Upper case!","success");
    }
    const handleloclick = ()=>{
        // console.log("set upper text");
         let newtext = text.toLowerCase();
         setText(newtext);
         props.showalert("Converted to Lower case!","success");
     }
     const Clearinput = ()=>{
        // console.log("set upper text");
         let newtext = '';
         setText(newtext);
         props.showalert("The text is Cleared!","success");
     }
    const handleonchange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Spaces are removed","success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
       <div className="mb-3">
  <textarea className ="form-control" value ={text} onChange = {handleonchange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"> </textarea>
   </div>
<button className="btn btn-primary mx-1"   onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1"  onClick={handleloclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1"  onClick={Clearinput}>Clear Text</button>
<button className="btn btn-primary mx-1"  onClick={handleExtraSpaces}>Handle Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p> {text.length>0?text:"Enter Something to Preview it here"}</p>
</div>
 </>

  )
}
