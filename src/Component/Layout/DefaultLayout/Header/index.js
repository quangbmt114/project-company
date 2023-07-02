import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{marginRight:"10%",padding:0}}>
            <Link to="/"><img src="logo1.png" width={110}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="link">
                <Link to="/howtostart" className="link">How To Start</Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/services" className="link">Services</Link>
              </Nav.Link>
              <Nav.Link className="link"><Link to="/technologies" className="link">Technologies</Link></Nav.Link>
            </Nav>
            <Nav className="d-flex">
                <div className="build-a-team">
                   <span  className="font-a-team">BUILD A TEAM <img src="arrow_forward.svg"className="svg-a-team" width={20}/></span>
                </div>
                <Nav.Link className="link">
                <Link to="/contactus" className="link">Contact US</Link>
              </Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
