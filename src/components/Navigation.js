import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { MENU } from "../common/Menu";

import logo from "../assets/tbh-logo.png";

export function Navigation() {
  // const updateActiveKey = (eventKey) => Nav.activeKey(`${eventKey}`);

  const menuItems = Object.values(MENU["menuItems"]);

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
            {menuItems.map((menuItem) => (
              <Nav.Item key={menuItem.id}>
                <Nav.Link href={menuItem.href} eventKey={menuItem.eventKey} >{menuItem.label}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}