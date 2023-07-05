import "./style-services.css";
import Img from "../Services/img/img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import G1 from "../Services/img/G1.png";
import G2 from "../Services/img/G2.png";
import G3 from "../Services/img/G3.png";
import G4 from "../Services/img/G4.png";

import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

                <div class="container py-5">
                <div class="row">
                    <div class="col">`
                        <img src={G1}></img>
                    </div>
                    <div class="col">
                        <img src={G2}></img>
                        </div>
                    <div class="w-100"></div>
                    <div class="col">
                        <img src={G3}></img>
                        </div>
                    <div class="col">
                        <img src={G4}></img>
                       </div>
                </div>
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

export default Services;