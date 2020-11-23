import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { TABS } from '../common/Tabs';

export function TabNavigation() {
  const tabs = Object.values(TABS['tabs']);

  return (
    <Container fluid>
      <Nav variant="tabs" defaultActiveKey="planner">
        {tabs.map((tab) => (
          <Nav.Item key={tab.id}>
            <Nav.Link eventKey={tab.eventKey}>{tab.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
}
