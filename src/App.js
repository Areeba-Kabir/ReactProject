import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

function App() {
  const [Mode, setMode] = useState("light");
  const handleModeClick = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d1c1c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#efefec";
    }
  };

  const toggle = Mode === "dark" ? "light" : "dark";

  return (
    <>
      <Navbar
        title={"TextAnalyzer"}
        handleModeClick={handleModeClick}
        Mode={Mode}
      />
      <div className="container">
        <Form heading={"Enter the text to Analyze"} toggle={toggle} />
      </div>
      {/* <div className="container">
        <About />
      </div> */}
    </>
  );
}

export default App;
