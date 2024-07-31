import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const handleModeClick = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d1c1c";
      showAlert("Dark Mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#efefec";
      showAlert("Light Mode has been enabled!", "success");
    }
  };

  const toggle = Mode === "dark" ? "light" : "dark";

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title={"TextAnalyzer"}
          handleModeClick={handleModeClick}
          Mode={Mode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Form
                  heading={"Enter the text to Analyze"}
                  toggle={toggle}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About toggle={toggle} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
