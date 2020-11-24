import { Navigation } from './components/Navigation';


export function HowToUse() {
  return (
    <div>
      <header className="App-header">
        <Navigation activePageKey="howtouse" />
      </header>
      <h1>How to use page</h1>
    </div>
  );
}