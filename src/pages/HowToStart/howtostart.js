import "../HowToStart/howtostart.css";
import Banner from "../HowToStart/images/banner.png";
import Banner2 from "../HowToStart/images/banner2.png";
import Img from "../HowToStart/images/img.png";
import G1 from "../HowToStart/images/g1.png";
import G2 from "../HowToStart/images/g2.png";
import G3 from "../HowToStart/images/g3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HowToStart() {
    return (
        <>
            <div className="hero-banner-howwtostart">
                <div className="howwtostart-banner">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            <h1 className="title mb-3 fw-bold">How to Start</h1>
                            <p className="content">We specialize in helping you build a team of expert developers.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container py-5">
                <div className="header_howtostart">
                    <div className="col-sm-4 text-start">
                        <h3 className="title fw-bold">How to Get Started with Courtney</h3>
                        <p>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-sm-4">
                        <div className="d-inline-block">
                            <div className="d-flex align-items-end">
                                <img src={G1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-inline-block">
                            <div className="d-flex align-items-end">
                                <img src={G2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-inline-block">
                            <div className="d-flex align-items-end">
                                <img src={G3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-start">
                    <div className="col-12 col-md-4" style={{ color: "#16205F" }}>
                        <h3 className="fw-bold">Why You Need To Hire Remote Developers</h3>
                    </div>
                </div>

                <div className="text-start">
                    <div className="row py-3" style={{ color: "#16205F", fontSize:"16px" }}>
                        <div className="col-6 col-md-4">
                            <FontAwesomeIcon icon={faChevronRight} /> Talent shortage
                        </div>
                        <div className="col-6 col-md-4">
                            <FontAwesomeIcon icon={faChevronRight} /> Lack of Expertise
                        </div>
                        <div className="col-6 col-md-4">
                            <FontAwesomeIcon icon={faChevronRight} /> Quick Kick-Off
                        </div>
                        <div className="col-6 col-md-4">
                            <FontAwesomeIcon icon={faChevronRight} /> Cost Optimization
                        </div>
                        <div className="col-6 col-md-4">
                            <FontAwesomeIcon icon={faChevronRight} /> Talen Accessibility
                        </div>
                        <div className="col-6 col-md-4">
                            <FontAwesomeIcon icon={faChevronRight} /> Administrative Hassle
                        </div>
                    </div>
                </div>

                <div className="row banner2-howToStart">
                    <img src={Banner2} className="img-fluid w-100" alt="" />
                </div>

                <div className="row custom-group position-relative">  
                    <div className="col">
                        <div className="d-flex">
                            <img src={Img} alt="" className="img-fluid"/>
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

export default HowToStart;