import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        <Row className="group-2 mb-5" lg={12} >
          <Col>
            <div className="group-2-1"></div>
            <div className="group-2-2">
              <div className="group-2-2-1">
                <h1 style={{textAlign: "left",fontWeight: "bold",width: "80%"}}>
                  Connect With Your Next Great Hire Today!
                </h1>
                <form className="py-5">
                  <div
                    className="row"
                    style={{ fontSize: "16px", lineHeight: "24px" }}
                  >
                    <div className="col col-md-6 form-group text-start mb-3">
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        className="form-control"
                        placeholder="Enter company"
                        required
                      ></input>
                    </div>
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="number">Phone Number</label>
                      <input
                        id="number"
                        className="form-control"
                        placeholder="Enter phone number"
                        required
                      ></input>
                    </div>
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                      ></input>
                    </div>
                    <div className="col-12 form-group text-start mb-3">
                      <label htmlFor="project-detail">Project Detail</label>
                      <textarea
                        id="project-detail"
                        className="form-control"
                        rows={5}
                        placeholder="Enter project detail"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group form-check py-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-start"
                      htmlFor="exampleCheck1"
                      style={{ fontSize: "16px", lineHeight: "24px" }}
                    >
                      By sending this form I confirm that I have read and accept
                      the
                      <span className="fw-bold"> Privacy Policy</span>
                    </label>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button
                      className="btn btn-warning"
                      style={{ borderRadius: "8px" }}
                    >
                      GET CONSULTATION <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <div className="group-3">
        <Row >
          <Col>
          <div className="group-3-1">
             <img src="logo1.png" /> 
             <div className="group-3-1-1">
              <h4>Office</h4>
              <p>info@courtney.lk</p>
              <p>+94 011 283 744</p>
              </div>      
          </div>
          </Col>
          <Col>
          <div>
            
          </div>
          </Col>
          <Col>
          <div>
            
          </div>
          </Col>
        </Row>
        </div>
      </Container>
    </>
  );
}

export default ContactUs;
