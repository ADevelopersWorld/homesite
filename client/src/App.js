import "./style.css";
import Terminal from "./components/terminal";
import Matrix from "./components/matrix";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      Loaded
      {/*Positioning of terminal background */}
      <div style={{ zIndex: "3", position: "absolute" }}>
        <Terminal />
      </div>
      <div style={{ zIndex: "5", position: "relative" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
