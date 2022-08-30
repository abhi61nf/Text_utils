
import React , {useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCLearCLick = ()=>{
        let newText = '';
        setText(newText)
    }


    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
 
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text , setText] = useState('');
    return (
        <>
        <div className = "container">
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
               </div>
              <button className="btn btn-success " onClick = {handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-success mx-3" onClick = {handleLoClick}>Convert to Lowercase</button>
              <button className="btn btn-success mx-2" onClick = {handleCopy}>Copy text</button>
              <button className="btn btn-primary mx-2" onClick = {handleCLearCLick}>Clear Text</button>
            </div>
            <div className = "conatiner my-3">
               <h2>Your text summary</h2> 
               <p> {text.split(" ").length} words and {text.length} characters </p>
               <p>{0.008 * text.split(" ").length } Minutes read</p>
               <h2>Preview</h2>
               <p>{text}</p>
            </div>
            </>
            )
}
