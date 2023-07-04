import "../HowToStart/style.css"
import Banner from "../HowToStart/img/banner.png"
import Banner2 from "../HowToStart/img/banner2.png"
import Img from "../HowToStart/img/img.png"

import G1 from "../HowToStart/img/g1.png"
import G2 from "../HowToStart/img/g2.png"
import G3 from "../HowToStart/img/g3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

function HowToStart() {
    return (
        <>
            <div id="hero-banner-wrap">
                <div className="hero-banner">
                    <h2 className="title mb-3 fw-bold">How to Start</h2>
                    <p className="content">We specialize in helping you build a team of expert developers.</p>
                </div>
            </div>

            <div className="container py-5">
                <div className="header-howtostart">
                    <div className="col-sm-4 text-start">
                        <h3 className="title">How to Get Started with Courtney</h3>
                        <p> From full-time remote engineering teams to hourly
                            contractors, work with remote devs as needed
                        </p>
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
                    <div className="row py-3" style={{ color: "#16205F" }}>
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

                <img src={Banner2} className="w-100" alt="" />
            </div>
        </>
    );
}

export default HowToStart;