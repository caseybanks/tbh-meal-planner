import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../assets/tbh-logo.png";

export function Navigation() {
  // const updateActiveKey = (eventKey) => Nav.activeKey(`${eventKey}`);

  return (
    <Container fluid>
      <Navbar bg="light" variant="light" expand="md" sticky="top">
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="The Busy Home Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end Nav-Menu"
          id="responsive-navbar-nav"
        >
          <Nav activeKey="weeklyplanner">
            <Nav.Item>
              <Nav.Link eventKey="weekplanner" href="/">
                Week Planner
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="howtouse" href="/howtouse">
                How to Use
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contact" href="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
