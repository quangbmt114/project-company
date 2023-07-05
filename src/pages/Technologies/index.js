import "../Technologies/style.css"
import JS from '../Technologies/img/js.png'
import React from '../Technologies/img/react_logo.png'
import VueJS from '../Technologies/img/logo-vuejs.png'
import E from '../Technologies/img/e-icon.png'
import HTML from '../Technologies/img/html.png'
import CSS from '../Technologies/img/css.png'
import NodeJs_Logo from '../Technologies/img/Node.js_logo.png'

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
                <div className="row" style={{color: "#16205F"}}>
                    <div className="col col-md-4 text-start">
                        <h1 className="fw-bold">Technologies</h1>
                        <p>Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light" style={{backgroundColor: "#FFF856"}}>All</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Frontend</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Backend</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Frameworks</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Mobile App</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">DataBase</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Google</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Data Science</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">Machine Learning</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">DevOps</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">CMS</button>
                    </div>
                    <div className="col-4 col-md-2">
                        <button className="btn btn-light">ECommerce</button>
                    </div>
                </div>

                <div className="row btn-with-shadow py-5">
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={JS} alt="" />
                        </button>
                    </div>
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={React} alt="" />
                        </button>
                    </div>
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={VueJS} alt="" />
                        </button>
                    </div>
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={E} alt="" />
                        </button>
                    </div>
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={HTML} alt="" />
                        </button>
                    </div>
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={CSS} alt="" />
                        </button>
                    </div>
                    <div className="col-6 col-md-auto ">
                        <button type="button" className="btn btn-link">
                            <img src={NodeJs_Logo} alt="" />
                        </button>
                    </div>
                </div>

            </div>
        </> 
        );
}

export default Technologies ;