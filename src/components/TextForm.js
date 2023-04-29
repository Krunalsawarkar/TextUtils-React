import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!','success')
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!','success')
    }

    const handleClearClick = () =>{
        setText("");
        props.showAlert('Cleared the text area!','success')

    }

    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text); 
        props.showAlert('Copy to Clipboard!','success')

    }

    const handleSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaces!','success')

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState(''); 
    return (
        <>
        <div className='container'style={{color : props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#131518':'white', color :  props.mode==='dark'?'white':'black' }} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove Space</button>
        </div>
        <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Word Counts</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter text in area to preview"}</p>
        </div>

        </>

    )
}
