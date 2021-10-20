import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Terminal from "./components/terminal";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    
  <div className="App">
  Loaded
  {/*Positioning of terminal background */}
  <div style={{ zIndex: "3", position: "absolute" }}>
    <Terminal />
  </div>
  <div style={{ zIndex: "5", position: "relative" }}>
  <div>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link>
        {" "}
        <Link to="/">Home</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        {" "}
        <Link to="/info">Contact</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <Switch>
 
  <Route exact path="/">
  
  <Home/>
  </Route>
  <Route exact path="/info">
    <Contact/>
  </Route>
</Switch>
</div>
  </div>
</div>
  </BrowserRouter>
  );
}

export default App;
