import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { TABS } from '../common/Tabs';
import WeekPlanner from '../WeekPlannerPage';

export function TabNavigation() {

  const tabs = Object.values(TABS['tabs']);

  const [ currentTab, setCurrentTab ] = useState('');
  const handleTabClick = (currentTab) => setCurrentTab(currentTab);

  



  return (
    <Container fluid>
      <Nav variant="tabs" >
        {tabs.map((tab) => (
          <Nav.Item >
            <Nav.Link 
              onClick={ () => handleTabClick(tab.tab_category) }
            >
              {tab.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
}
