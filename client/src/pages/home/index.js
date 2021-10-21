import "./style.css";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Video from "../../components/video";
import video from './FromPolitical.mp4';
import v2 from './Technology.mp4';
const Home = () => {
  return (
    <div id="head">
      <Container fluid>
  <Row>
    <Col></Col>
    <Col>Welcome To LAW</Col>
    <Col></Col>
  </Row>


  <Row>
  <Col></Col>
  <Col></Col>
  <Col>Logic At Work</Col>
</Row>

<Row>
<Col></Col>
<Col ><Video
sample={video}/></Col>
<Col ><Video sample2={v2}/></Col>
</Row>



</Container>
       
      
    </div>
  );
};
export default Home;
