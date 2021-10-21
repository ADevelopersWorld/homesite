import "./style.css";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Video from "../../components/video";
import video from './FromPolitical.mp4';
const Home = () => {
  return (
    <div id="head">
      <Container>
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
<Video
sample={video}/>
</Container>
       
      
    </div>
  );
};
export default Home;
