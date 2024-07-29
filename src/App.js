import "./App.css";
import About from "./Components/About";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar title={"MyBlog"} />
      {/* <div className="container">
        <Form heading={"Enter the text to Analyze"} />
      </div> */}
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
