import React, { useState } from "react";

export default function About() {
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
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          onClick={handleModeClick}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          {Mode}
        </label>
      </div>
      <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
