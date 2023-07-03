import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faLocationDot,faLinkedIn} from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";
function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="component-1">
            <div className="image-1 m-3"><img src="logo1.png" /></div>
            <div class="paragraph-1">
              Expertly trained, battle-tested, elite software developers on
              demand
            </div>
            <div class="paragraph-2">
            <FontAwesomeIcon icon={faPhone} width={40}/>
            +94 713249222
            </div>
            <div class="paragraph-2">
            <FontAwesomeIcon icon={faEnvelope} width={40}/>
            hello@courtney.lk
            </div>
            <div class="paragraph-3">
            <FontAwesomeIcon icon={faLocationDot} width={40}/>
            Courtney Lanka (Private) Limited<br />Level 35<br />World Trade Center<br />Colombo
            </div>
            <div class="paragraph-2">
            Follow us
            </div>
            <div class="paragraph-2">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
