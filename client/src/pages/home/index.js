import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import TechL from "../../landing/technology/landing";
import NewsL from "../../landing/news/landing";
const Home = () => {
  return (
    <div id="head">
      <Container>
    

        <Row style={{alignContent:'center'}}>
          <Col lg={6}>  
          <NewsL/> </Col>
          <Col lg={6}><TechL/></Col>
        </Row>
        
      </Container>
   
    </div>
  );
};
export default Home;
