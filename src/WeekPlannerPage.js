import { Navigation } from './components/Navigation';
import { TabNavigation } from './components/TabNavigation';


export function WeekPlanner() {

  return (
    <div>
      <header className="App-header">
        <Navigation />
      </header>
      <h1>Week planner page</h1>
        <TabNavigation />
    </div>
  );
};
