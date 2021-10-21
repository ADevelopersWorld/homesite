import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Terminal from "./components/terminal";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    
<Container fluid>
<div className="App">
Loaded
{/*Positioning of terminal background */}
<div style={{ zIndex: "2", position: "absolute" }}>
  <Terminal />
</div>
<Container fluid style={{ zIndex: "5", position: "relative" }}>
<div >
<div>

<Row style={{paddingTop: "1cm"}}>
<Col></Col>
<Col>
<Nav className="justify-content-end" activeKey="/home">
<Nav.Item>
<Nav.Link>
 <Link to="/">Home</Link>
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link>
 <Link to="/info">Contact</Link>
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="disabled" >
 Disabled
</Nav.Link>
</Nav.Item>
</Nav>
</Col>
<Col></Col>
</Row>

<Container style={{paddingTop: "3cm"}}>
<Switch>

<Route exact path="/">

<Home/>
</Route>
<Route exact path="/info">
<Contact/>
</Route>
</Switch>
</Container>
</div>
</div>
</Container>
</div>
</Container>
  </BrowserRouter>
  );
}

export default App;
