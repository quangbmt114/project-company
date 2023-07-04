import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import "./contactus.css";
function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
              <p className="content-heading-2">
                Please feel free to get in touch with us via any convenient
                means (phone, whatsapp, email, submit a contact form). We will
                be glad to answer your questions as soon as possible.
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row className="group-2" lg={12}>
          <Col>
            <div className="group-2-1"></div>
            <div  className="group-2-2">
              <div className="group-2-2-1">
                <h1
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    width: "80%",
                  }}
                >
                  Connect With Your Next Great Hire Today!
                </h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                   
                  </Row>
                  <Row>
                  <Form.Group as={Col} md="12" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control as="textarea" placeholder="Zip" required  style={{ height: '100px' }}/>
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Submit form</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUs;
