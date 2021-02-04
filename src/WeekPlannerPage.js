import { Navigation } from './components/Navigation';
import { TabNavigation } from './components/TabNavigation';


export function WeekPlannerPage() {

  return (
    <div>
      <header className="App-header">
        <Navigation activePageKey="weekplanner" />
      </header>
      <h1>Week planner page</h1>
        <TabNavigation />
    </div>
  );
};
