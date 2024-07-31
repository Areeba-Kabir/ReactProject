import React, { useState } from "react";

export default function Form(props) {
  const handleupClick = () => {
    console.log("UpperCase was clicked!");
    let newtext = text.toUpperCase();
    setText(newtext);
    document.getElementById("myBox").value = newtext;
    props.showAlert("converted to uppercase!", "success");
  };

  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    console.log("LowerCase button is clicked!");
    let newtext = text.toLowerCase();
    setText(newtext);
    document.getElementById("myBox").value = newtext;
    props.showAlert("converted to lowercase!", "success");
  };

  const handleclearTextClick = () => {
    console.log("clear button is being clicked.");
    let newText = " ";
    setText(newText);
    document.getElementById("myBox").value = " ";
    props.showAlert("Text cleared!", "success");
  };

  const handleEmailExtractorClick = () => {
    console.log("Email Extractor is clicked!");
    const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const valueMail = text.match(email);
    if (!valueMail || valueMail.length === 0) {
      document.getElementById("matchEmail").textContent = "Email not found!";
      console.log("Email not found!");
      props.showAlert("Email not found!", "success");
    } else {
      document.getElementById("matchEmail").innerHTML =
        valueMail.join("<br>") + " ";
      console.log("Email found! " + valueMail);
      props.showAlert("Email Found!", "success");
    }
  };

  const handleESClick = () => {
    let newtext = text.split(/\s+/).join(" ");
    setText(newtext);
    document.getElementById("myBox").value = newtext;
    props.showAlert("Removed extra spaces!", "success");
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <>
      <div className="container">
        <h1
          className={`text-center font-family-monospace text-${props.toggle}`}
        >
          {props.heading}
        </h1>
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
          <button
            className="btn btn-success mx-2 fw-bold"
            onClick={handleupClick}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-success mx-2 fw-bold"
            onClick={handleLowClick}
          >
            LowerCase
          </button>
          <button
            className="btn btn-success mx-2 fw-bold"
            onClick={handleclearTextClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-success mx-2 fw-bold"
            onClick={handleEmailExtractorClick}
          >
            Extract E-mail
          </button>
          <button
            className="btn btn-success mx-2 fw-bold"
            onClick={handleESClick}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className={`container text-${props.toggle}`}>
        <h1 className={`text-center my-3 `}>Text Summary</h1>
        <h4>Words and charcters in text:</h4>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <h4>Total reading Time:</h4>
        <p>
          The time it would take to read the complete text is: minutes.
          {0.008 * text.split(" ").length}{" "}
        </p>
        <h4>Extracted Email:</h4>
        <p id="matchEmail"> click the button to check for email/s.</p>
        <h2 className="text-center">Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview!"}</p>
      </div>
    </>
  );
}
