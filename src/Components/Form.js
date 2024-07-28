import React, { useState } from "react";

export default function Form(props) {
  const handleupClick = () => {
    console.log("UpperCase was clicked!");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    console.log("LowerCase button is clicked!");
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder={text}
            id="myBox"
            rows="8"
            onChange={handleonChange}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success mx-2" onClick={handleupClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-success mx-2" onClick={handleLowClick}>
            LowerCase
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>
          The time it would take to read the complete text:{" "}
          {0.008 * text.split(" ").length}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}