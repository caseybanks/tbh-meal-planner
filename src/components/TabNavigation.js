import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { TablePlanner } from './TablePlanner';
import { MealDetails } from './MealDetails';
import { ShoppingList } from './ShoppingList';
import { TABS } from '../common/Tabs';


export function TabNavigation() {
  const tabs = Object.values(TABS["tabs"]);

  function renderTab(tab) {
    switch (tab.tab_category) {
      case "weekday":
        return <MealDetails tab={tab}/>;
      case "shoppinglist":
        return <ShoppingList />;
      default:
        return <TablePlanner recipeItem={undefined} />;
    };
  };

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
            {renderTab(tab)}
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};
