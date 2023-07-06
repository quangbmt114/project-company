import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import logo1 from "./cube1.png"
import logo2 from "./software-application1.png"
import logo3 from "./technical-support1.png"
function Home() {
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
              <div className="button-build-team mt-3">Build a team</div>
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
                        <img src={logo1}/>
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
                        <img src={logo2}/>
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
                        <img src={logo3}/>
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
      <Container fluid>
        <div className="home-group-3">

        </div>
      </Container>
    </>
  );
}

export default Home;
