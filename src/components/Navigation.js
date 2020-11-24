import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { MENU } from '../common/Menu';
import logo from '../assets/tbh-logo.png';


export function Navigation() {
  const menuItems = Object.values(MENU['menuItems']);

  return (
    <Container fluid>
      <Navbar variant="light" expand="md" sticky="top">
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="The Busy Home Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end Nav-Menu"
          id="responsive-navbar-nav"
        >
          <Nav defaultActiveKey="weekplanner">
            {menuItems.map((menuItem) => (
              <Nav.Item key={menuItem.key}>
                <Nav.Link href={menuItem.href} eventKey={menuItem.key}>
                  {menuItem.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
