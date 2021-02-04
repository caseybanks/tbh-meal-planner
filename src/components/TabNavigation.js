import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { TablePlanner } from './TablePlanner';
import { Planner } from './Planner';
import { ShoppingList } from './ShoppingList';
import { TABS } from '../common/Tabs';
import { useStoredRecipes } from './useStoredRecipes';
import { plannerChoices } from './PlannerChoices';


export function TabNavigation() {
  const tabs = Object.values(TABS["tabs"]);
  const storedRecipeChoices = useStoredRecipes();
  const [savedPlannerMeals, setSavedPlannerMeals] = useState(plannerChoices);

  function renderTab(tab) {
    switch (tab.tab_category) {
      case "weekday":
        return <Planner tab={tab} savedPlannerMeals={savedPlannerMeals}/>;
      case "shoppinglist":
        return <ShoppingList />;
      default:
        return <TablePlanner savedPlannerMeals={savedPlannerMeals}/>;
    };
  };

  useEffect(
    () => {
        setSavedPlannerMeals(storedRecipeChoices);
    }, [storedRecipeChoices]
  );

  return (
    <Container fluid>
      <Tabs
        defaultActiveKey="planner"
        id="plannertable-tab"
        unmountOnExit={true}
        transition={false}
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
