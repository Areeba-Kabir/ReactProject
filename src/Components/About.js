import React, { useState } from "react";

export default function About(props) {
  const [Mode, setMode] = useState("Light Mode");

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
  });

  const handleModeClick = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      setMode("Light Mode");
    } else if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setMode("Dark Mode");
    }
  };

  return (
    <>
      <h1 className={`text-${props.toggle} text-center my-3`}>About Us</h1>
      <div className="accordion my-3" id="accordionPanelsStayOpenExample">
        <div className="accordion-item ">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button fw-bolder text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Welcome to TextAnalyzer!
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body ">
              TextAnalyzer is your ultimate tool for text manipulation and
              analysis. Our powerful features allow you to:
              <ul>
                <li>Convert text to UPPER CASE or lower case</li>
                <li>Remove extra spaces for clean and concise text</li>
                <li>Extract emails effortlessly from your content</li>
                <li>
                  Count words and characters to keep track of your writing
                </li>
                <li>Preview your text before making any changes</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header " id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed fw-bolder text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Enhance Your Text Effortlessly
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              With TextAnalyzer, you can streamline your text processing needs
              in a user-friendly interface. Whether you're editing a document,
              cleaning up data, or simply analyzing text, our tools are designed
              to make your tasks easier and more efficient. Start using
              TextAnalyzer today and take control of your text!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
