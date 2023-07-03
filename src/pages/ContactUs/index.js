import { Col, Container, Row } from "react-bootstrap";
import "./contactus.css";
function ContactUs() {
  return (
    <>
    <div className="container-flud banner">
      <div className="contact-banner">
        <h1 className="tittle-banner">CONTACT</h1>
          We specialize in helping you build a team of expert developers.
      </div>
    </div>
    <Container>
        <Row>
            <Col>
                <div className="heading-2">
                <p className="tittle-heading-2">Get in touch</p>
                <p className="content-heading-2">Please feel free to get in touch with us via any convenient means 
                  (phone, whatsapp, email, submit a contact form). We will be glad to 
                  answer your questions as soon as possible.</p>
                </div>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    </>
  );
}

export default ContactUs;
