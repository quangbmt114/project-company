import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";


function Careers() {
  return (
    <>
      <div className="image">
        <div className="backgroundimage">
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
      </div>
      <div className="header-content">Please join us</div>
      <div className="wrapper">
        <div className="paragraph2">
          Take a look at the open positions below.
        </div>
        <div className="paragraph3">
          If none of them suit you, or you feel you could help us in other
          ways,please fill out the form below
        </div>
        <div className="paragraph4">
          or contact us directly at carrers@courtney.lk
        </div>
      </div>
      <div className="head">
        <h3 className="developers">Developers</h3>
      </div>
      <div className="rectangle1">
        <p className="role">Role</p>
        <p className="skill">Skill</p>
        <p className="location">Location</p>
        <div className="line"></div>
        <div className="group1">
        <div className="left-side">
          <p className="role-name">Senior Web Full Stack Developer</p>
          <p className="role-content">
            Seniority in development is not just about how much time you have
            already spent behind the computer screen. It's the way you think,
            how you approach problems and their solutions, the responsibility
            you take on and feel.
          </p>
          <button className="apply">APPLY NOW <FontAwesomeIcon icon={faArrowAltCircleRight} width={40} /></button>
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
    </>
  );
}

export default Careers;
