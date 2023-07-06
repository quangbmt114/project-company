import "../Technologies/style.css"
import { Link} from 'react-router-dom';
import JS from '../Technologies/img/js.png'
import React from '../Technologies/img/react_logo.png'
import VueJS from '../Technologies/img/logo-vuejs.png'
import E from '../Technologies/img/e-icon.png'
import HTML from '../Technologies/img/html.png'
import CSS from '../Technologies/img/css.png'
import NodeJs_Logo from '../Technologies/img/Node.js_logo.png'
import JavaLogo from '../Technologies/img/Java_logo 1.png'
import PythonLogo from '../Technologies/img/PythonLogo.png'
import PHP from '../Technologies/img/PHP-logo.png'
import C1 from '../Technologies/img/c++.png'
import C2 from '../Technologies/img/C++_Logo 1.png'
import Laravel from '../Technologies/img/laravel-logo.png'
import Symfony from '../Technologies/img/symfony-logo.png'
import django from '../Technologies/img/Django-logo.png'
import expressJs from '../Technologies/img/expressJs.png'
import Spring from '../Technologies/img/Spring-logo.png'
import IOS from '../Technologies/img/iOS-Logo.png'
import reactNative from '../Technologies/img/react-native.png'
import flutter from '../Technologies/img/flutter-logo.png'
import kotlin from '../Technologies/img/Kotlin_logo 1.png'
import lonic from '../Technologies/img/Ionic_Logo.png'
import Mysql from '../Technologies/img/MySQL-Logo.png'
import Sqlsever from '../Technologies/img/sql-server-logo.png'
import postgresql from '../Technologies/img/postgresql-icon.png'
import mariadb from '../Technologies/img/mariadb-logo.png'
import mongodbLogo from '../Technologies/img/mongodb_logo.png'
import redis from '../Technologies/img/Redis-Logo.png'
import Oracle from '../Technologies/img/Oracle-Logo.png'
import go from '../Technologies/img/Go_Logo.png'
import angular from '../Technologies/img/angular-logo.png'
import androilogo from '../Technologies/img/android_logo.png'
import studioLogo from '../Technologies/img/studiologo.png'
import hadoop from '../Technologies/img/hadoop-logo.png'
import PowerBi from '../Technologies/img/powerBI.png'
import OpenCv from '../Technologies/img/OpenCV_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Img from "../Technologies/img/img.png";

function Technologies() {
    return (
        <>
            <div className="hero-banner-technologies">
                <div className="technologies-banner">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            <h1 className="title mb-3 fw-bold">Technologies</h1>
                            <p className="content">We specialize in helping you build a team of expert developers.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5">
                <div className="row" style={{ color: "#16205F" }}>
                    <div className="col col-md-4 text-start">
                        <h1 className="fw-bold">Technologies</h1>
                        <p>Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity</p>
                    </div>
                </div>

                <div class="button-container">
                    <Link to="/">
                        <button class="btn btn-light" style={{ backgroundColor: "#FFF856" }}>All</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Frontend</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Backend</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Frameworks</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Mobile App</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">DataBase</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Google</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Data Science</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">Machine Learning</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">DevOps</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">CMS</button>
                    </Link>
                    <Link to="#">
                        <button class="btn btn-light">ECommerce</button>
                    </Link>
                </div>

                <div className="buttons py-5">
                    <div className='buttons-row d-flex align-items-center flex-wrap'>
                        <Link to="/">
                            <button type="button" className="btn btn-link">
                                <img src={JS} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={React} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={VueJS} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={E} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={HTML} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={CSS} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={NodeJs_Logo} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={JavaLogo} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={PythonLogo} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={PHP} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={C1} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={C2} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={Laravel} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={Symfony} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={django} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={expressJs} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={Spring} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={IOS} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={reactNative} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={flutter} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={kotlin} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={lonic} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={Mysql} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={Sqlsever} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={postgresql} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={mariadb} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={mongodbLogo} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={redis} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={Oracle} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={go} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={angular} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={androilogo} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={studioLogo} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={hadoop} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={PowerBi} alt="" className="img-fluid" />
                            </button>
                        </Link>
                        <Link to="#">
                            <button type="button" className="btn btn-link">
                                <img src={OpenCv} alt="" className="img-fluid" />
                            </button>
                        </Link>
                    </div>
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

export default Technologies;