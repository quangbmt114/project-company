import "./style-services.css";
import Img from "../Services/img/img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from "react-bootstrap";
import G1 from "../Services/img/G1.png";
import G2 from "../Services/img/G2.png";
import G3 from "../Services/img/G3.png";
import G4 from "../Services/img/G4.png";

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Services() {
    return (
        <>
            <div className="banner-ourservices">
                <div className="banner-ourservices1">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-9">
                            <h1 className="title mb-3 fw-bold">Our Services</h1>
                            <p className="content">We specialize in helping you build a team of expert developers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="header_ourservices">
                    <div className="col-sm-6 text-start">
                        <h1 className="title fw-bold">Hire Permanent and Remote Developers</h1>
                    </div>
                    <div className="col-sm-5 text-start">
                        <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
                    </div>
                </div>

                <Row>
                    <p></p>
                    <p></p>
                </Row>
                <div className="service py-5">
                    <Row>
                        <Col>
                            <div className="service-groups me-4">
                                <div className="service-group">
                                    <div className="service-group-img">
                                        <img src={G1} />
                                    </div>
                                </div>
                                <div className="service-group-text">
                                    <h1>Dedicated Teams</h1>
                                    <p>Building an extended team with Courtney is just like opening your own remote development center, but without the hassle.</p>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="service-groups me-4">
                                <div className="service-group">
                                    <div className="service-group-img">
                                        <img src={G2} />
                                    </div>
                                </div>
                                <div className="service-group-text">
                                    <h1>Staff Augmentation</h1>
                                    <p>IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="service-groups me-4">
                                <div className="service-group">
                                    <div className="service-group-img">
                                        <img src={G3} />
                                    </div>
                                </div>
                                <div className="service-group-text">
                                    <h1>Software Outsourcing</h1>
                                    <p>Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting.</p>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="service-groups me-4">
                                <div className="service-group">
                                    <div className="service-group-img">
                                        <img src={G4} />
                                    </div>
                                </div>
                                <div className="service-group-text">
                                    <h1>Remote Office</h1>
                                    <p>Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>



                <div className="row custom-group position-relative">
                    <div className="col">
                        <div className="d-flex">
                            <img src={Img} alt="" className="img-fluid" />
                        </div>
                        <div className="custom-group-overlay">
                            <div className="custom-group-content">
                                <h1 className="fw-bold text-start">
                                    Connect With Your Next Great Hire Today!
                                </h1>
                                <form className="py-3" style={{ fontSize: "16px", lineHeight: "24px" }}>
                                    <div className="row">
                                        <div className="col-md-6 form-group text-start mb-3">
                                            <label htmlFor="">Company</label>
                                            <input className="form-control" placeholder="Enter company" required></input>
                                        </div>
                                        <div className="col-md-6 form-group text-start mb-3">
                                            <label htmlFor="">Your Name</label>
                                            <input className="form-control" placeholder="Enter your name" required></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 form-group text-start mb-3">
                                            <label htmlFor="">Phone Number</label>
                                            <input className="form-control" placeholder="Enter phone number" required></input>
                                        </div>
                                        <div className="col-md-6 form-group text-start mb-3">
                                            <label htmlFor="">Email</label>
                                            <input className="form-control" placeholder="Enter email" required></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 form-group text-start mb-3">
                                            <label htmlFor="">Project Detail</label>
                                            <textarea className="form-control" rows={5} placeholder="Enter project detail"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group form-check py-3">
                                        <input className="form-check-input" type="checkbox" id="exampleCheck1" />
                                        <label className="form-check-label text-start" htmlFor="exampleCheck1" style={{ fontSize: "16px", lineHeight: "24px" }}>
                                            By sending this form I confirm that I have read and accept the
                                            <span className="fw-bold"> Privacy Policy</span>
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <button className="btn btn-warning" style={{ borderRadius: "8px" }}>
                                            GET CONSULTATION <FontAwesomeIcon icon={faArrowRight} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Services;