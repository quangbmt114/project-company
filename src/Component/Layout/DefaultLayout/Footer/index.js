import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="component-1">
            <div className="image-1 m-3">
              <img src="logo1.png" />
            </div>
            <div class="paragraph-1">
              Expertly trained, battle-tested, elite software developers on
              demand
            </div>
            <div class="paragraph-2">
              <FontAwesomeIcon icon={faPhone} width={40} />
              +94 713249222
            </div>
            <div class="paragraph-2">
              <FontAwesomeIcon icon={faEnvelope} width={40} />
              hello@courtney.lk
            </div>
            <div class="paragraph-3">
              <FontAwesomeIcon icon={faLocationDot} width={40} />
              Courtney Lanka (Private) Limited
              <br />
              Level 35
              <br />
              World Trade Center
              <br />
              Colombo
            </div>
            <div class="paragraph-2">Follow us</div>
            <div class="paragraph-2">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </Col>
          <Col className="component-1">
            <div className="tittle-1">Company</div>
            <div class="paragraph-2">About Us</div>
            <div class="paragraph-2">Success Stories</div>
            <div class="paragraph-2">Privacy Policy</div>
            <div class="paragraph-2">Terms &amp; Conditions</div>
            <div class="paragraph-2">Contact Us</div>
          </Col>
          <Col className="component-1">
            <div className="tittle-1">Services</div>
            <div class="paragraph-2">Hire Permanent Staff</div>
            <div class="paragraph-2">Staff Augmentation</div>
            <div class="paragraph-2">Software Outsourcing</div>
            <div class="paragraph-2">Build Remote Office</div>
          </Col>
          <Col className="component-1">
            <div className="tittle-1">How to Start</div>
            <div class="paragraph-2">You Asked</div>
            <div class="paragraph-2">We Proceed</div>
            <div class="paragraph-2">Negotiate</div>
            <div class="paragraph-2">You Get</div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
