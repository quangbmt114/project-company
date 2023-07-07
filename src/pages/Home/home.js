import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import Group1_Img from '../Home/images/group1.png'
import Group2_Img from '../Home/images/group2.png'
import HandShake_Img from '../Home/images/handshake3.png'
import Medal_Img from '../Home/images/medal3.png'
import Link1 from '../Home/images/link1.png'
import Management_Img from '../Home/images/management.png'
import OutSourcing_Img from '../Home/images/outsourcing.png'
import Shield_Img from '../Home/images/shield.png'
import logo1 from "./cube1.png"
import logo2 from "./software-application1.png"
import logo3 from "./technical-support1.png"
function Home() {
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleBuildTeamClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleOption1Click = () => {
        setSelectedOption("option1");
    };

    const handleOption2Click = () => {
        setSelectedOption("option2");
    };

    return (
        <>
            <Container>
                <div className="home-group-1">
                    <div className="home-group-1-1">
                        <div className="home-group-1-1_1">
                            <div className="home-group-title">
                                Building dev team, Quickly and <br />
                                Affordably
                            </div>
                            <div className="home-group-content mt-3">
                                We specialize in helping you build a team of expert developers,
                                testers, and leaders. We are setup to deliver long term
                                solutions, or scale to different needs quickly.
                            </div>
                            <div className="build-team mt-3" >
                                <button className='button-build-team' onClick={handleBuildTeamClick}>
                                    <span className="button-text">Build a team</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="home-group-1-2_1 ">
                        <div className="home-group-1-2_images"></div>
                    </div>
                </div>
                <div className="home-group-2">
                    <Row>
                        <Col>
                            <div className="home-group-2-1 me-4">
                                <div className="home-group-2-2_1">
                                    <div className="home-group-2-2_2">
                                        <img src={logo1} />
                                    </div>
                                </div>
                                <div className="home-group-2-1_2">
                                    <h3>Engineer your Solution</h3>
                                    <p>
                                        We promptly put together your nearshore engineering dream
                                        team to fulfill your specific requirements. We create the
                                        most elegant solution for your difficulties by combining our
                                        deep tech expertise, Top 1% Tech Talent, and
                                        industry-specific experience.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>

                            <div className="home-group-2-1 me-4">
                                <div className="home-group-2-2_1">
                                    <div className="home-group-2-2_2">
                                        <img src={logo2} />
                                    </div>
                                </div>
                                <div className="home-group-2-1_2">
                                    <h3>Architect your Solution</h3>
                                    <p>
                                        Our team in on your operational, technological, and
                                        strategic challenges through an in-depth understanding of
                                        your business. We design a strategic roadmap to guide your
                                        result-oriented goals.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            {" "}
                            <div className="home-group-2-1">
                                <div className="home-group-2-2_1">
                                    <div className="home-group-2-2_2">
                                        <img src={logo3} />
                                    </div>
                                </div>
                                <div className="home-group-2-1_2">
                                    <h3>ReEngineer your Business Process</h3>
                                    <p>
                                        Bolster by our team, your digital transformation swiftly
                                        gains speed and evolves into a digital acceleration. This
                                        process places the foundation for a more efficient and
                                        strong business that can meet demands at scale.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="container-fluid">
                <div className="background-banner py-5">
                    <div className='row'>
                        <div className="content">
                            <h5 className='title1 fw-bold'>How to Start</h5>
                            <h2 className='fw-bold' style={{ color: "#16205F" }}>Easy Process</h2>
                            <div className='paragraph'>
                                <p>
                                    We specialize in helping you build a team of expert developers, testers, and leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='content-layout d-flex justify-content-center align-items-center flex-wrap'>
                            <div className='col-6 col-md-3'>
                                <img src={Group1_Img} alt='' className='img-fluid' />
                                <p>01 YOU ASK</p>
                            </div>
                            <div className='col-6 col-md-3'>
                                <img src={Group2_Img} alt='' className='img-fluid' />
                                <p>02 WE PROCEED</p>
                            </div>
                            <div className='col-6 col-md-3'>
                                <img src={HandShake_Img} alt='' className='img-fluid' />
                                <p>03 Negotiate</p>
                            </div>
                            <div className='col-6 col-md-3'>
                                <img src={Medal_Img} alt='' className='img-fluid' />
                                <p>04 YOU GET</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='heading1'>
                    <h4>Expertise</h4>
                </div>
                <div className='heading2'>
                    <h2 className='title'>Hire Permanent and Remote Developers</h2>
                </div>
                <div className='paragraph2'>
                    <h2 className='para'>
                        From full-time remote engineering teams to hourly contractors, work with remote devs as needed
                    </h2>
                </div>

                <div className='row py-5 layout'>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={Link1} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Dedicated Teams</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Find your next team member</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={Management_Img} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Staff Augmentation</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Build a distributed development team</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={OutSourcing_Img} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Software Outsourcing</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>End-to-End Software Development Outsourcing Solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='image-container'>
                            <img src={Shield_Img} alt='' className='img-fluid' />
                        </div>
                        <div className='layout-content'>
                            <div className='layout-content-heading'>
                                <h4>Remote Office</h4>
                            </div>
                            <div className='layout-content-paragraph'>
                                <p>Open your own remote development center and grow your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={closeModal} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className='fw-bold' style={{ color: "#16205F", fontSize: "46px" }}>Build a Team</h2>
                        <p style={{ color: "#16205F", fontSize: "18px" }}>We specialize in helping you build a team.</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="button-modal-container py-3">
                        <Button variant="default" size='lg' 
                            onClick={handleOption1Click} 
                            className={selectedOption === "option1" ? "active" : ""}>
                            Option 1
                        </Button>
                        <Button variant="default" size='lg' 
                            onClick={handleOption2Click} 
                            className={selectedOption === "option2" ? "active" : ""}>
                            Option 2
                        </Button>
                    </div>
                    {selectedOption === "option1" && (
                        <div>
                            <h4>Option 1 Content</h4>
                            <p>This is the content for Option 1.</p>
                        </div>
                    )}
                    {selectedOption === "option2" && (
                        <div>
                            <h4>Option 2 Content</h4>
                            <p>This is the content for Option 2.</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Home;