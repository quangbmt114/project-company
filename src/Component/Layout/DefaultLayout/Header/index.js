import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header" lg={12}>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand style={{marginRight:"10%",padding:0}}>
            <Link to="/"><img src="logo1.png" width={110} alt="..." /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll >
              <Nav.Link className="link">
                <Link to="/howtostart" className="link">How To Start</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/services" className="link">Services</Link>
              </Nav.Link>
              <Nav.Link className="link"><Link to="/technologies" className="link">Technologies</Link></Nav.Link>
              <Nav.Link className="link">
                <Link to="/careers" className="link">Careers</Link>
              </Nav.Link>
            </Nav>
            <Nav>
                <div className="build-a-team d-flex justify-content-center">
                  <button className="font-a-team ">
                    BUILD A TEAM <img src="arrow_forward.svg" className="svg-a-team" width={20} alt="..." />
                  </button>
                </div>
                <Nav.Link className="link">
                <Link to="/contactus" className="link">Contact us</Link>
              </Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
