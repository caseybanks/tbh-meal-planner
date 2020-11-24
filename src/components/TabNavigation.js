import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { TablePlanner } from './TablePlanner';
import { RecipeList } from './RecipeList';
import { ShoppingList } from './ShoppingList';
import { TABS } from '../common/Tabs';


export function TabNavigation() {
  const tabs = Object.values(TABS["tabs"]);

  function renderTab(category) {
    switch (category) {
      case "weekday":
        return <RecipeList />;
      case "shoppinglist":
        return <ShoppingList />;
      default:
        return <TablePlanner />;
    }
  }

  return (
    <Container fluid>
      <Tabs
        defaultActiveKey="planner"
        id="plannertable-tab"
        unmountOnExit={true}
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} eventKey={tab.key} title={tab.label}>
            <h3>{tab.label}</h3>
            {renderTab(tab.tab_category)}
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
}
