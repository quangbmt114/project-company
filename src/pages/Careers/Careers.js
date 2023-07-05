import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Img from "../Careers/img.png";
function Careers() {
  return (
    <>
      <div className="career-banner">
        <div className="heading">
          <div className="page-name">Careers</div>
        </div>
        <div className="paragraph">
          <div className="content">
            {" "}
            Do you want to learn more about Courtney? Our team is looking for
            people who want to work on interesting international projects,
            develop and learn new skills, and share what they've learned with
            others.
          </div>
        </div>
      </div>
      <div className="container-lg py-3">
        <div className="header-career">
          <div className="col-sm-4 text-start">
            <h3 className="title">Please join us</h3>
            <p>
              Take a look at the open positions below. If none of them suit you,
              or you feel you could help us in other ways, please fill out the
              form below or contact us directly at carrers@courtney.lk
            </p>
          </div>
        </div>
        <div className="text-start">
          <div
            className="col-12 col-md-4"
            style={{ color: "#16205F", marginTop: "100px" }}
          >
            <h3 className="fw-bold">Developer</h3>
          </div>
        </div>
        <div className="rectangle1">
          <p className="role">Role</p>
          <p className="role">Skill</p>
          <p className="location">Location</p>
          <div className="line"></div>
          <div className="group1">
            <div className="left-side">
              <p className="role-name">Senior Web Full Stack Developer</p>
              <p className="role-content">
                Seniority in development is not just about how much time you
                have already spent behind the computer screen. It's the way you
                think, how you approach problems and their solutions, the
                responsibility you take on and feel.
              </p>
              <button className="apply">
                APPLY NOW{" "}
                <FontAwesomeIcon icon={faArrowAltCircleRight} width={40} />
              </button>
              <button className="learn">LEARN MORE</button>
            </div>
            <div className="center">
              <button className="nodejs">Node.js</button>
              <button className="reactjs">React.js</button>
              <button className="reactjs">Vue.js</button>
              <button className="reactjs">Typescript</button>
              <button className="js">Javascript</button>
              <button className="nextjs">Next JS</button>
              <button className="nextjs">Amplify</button>
              <button className="nextjs">AWS</button>
              <button className="terraform">Terraform</button>
              <button className="c"> C# and .NET</button>
              <button className="c">GraphSQL</button>
              <button className="server">Serverless Framework</button>
            </div>
            <div className="right-side">
              <p className="right-content">Remote ,</p>
              <p className="right-content">Ostrava - Czech Republic,</p>
              <p className="right-content">Brno - Czech Republic,</p>
              <p className="right-content">Barcelona - Spain,</p>
              <p className="right-content">Prague - Czech Republic,</p>
              <p className="right-content">Zlin - Czech Republic,</p>
            </div>
          </div>
        </div>
        <div className="row custom-group position-relative" style={{marginTop:"350px"}}>
          <div className="col">
            <div className="d-flex">
              <img src={Img} alt="" className="img-fluid" />
            </div>
            <div className="custom-group-overlay">
              <div className="custom-group-content">
                <h1 className="fw-bold text-start">
                  Connect With Your Next Great Hire Today!
                </h1>
                <form
                  className="py-3"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  <div className="row">
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Company</label>
                      <input
                        className="form-control"
                        placeholder="Enter company"
                        required
                      ></input>
                    </div>
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Your Name</label>
                      <input
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Phone Number</label>
                      <input
                        className="form-control"
                        placeholder="Enter phone number"
                        required
                      ></input>
                    </div>
                    <div className="col-md-6 form-group text-start mb-3">
                      <label htmlFor="">Email</label>
                      <input
                        className="form-control"
                        placeholder="Enter email"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 form-group text-start mb-3">
                      <label htmlFor="">Project Detail</label>
                      <textarea
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
