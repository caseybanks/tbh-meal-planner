import { Navigation } from './components/Navigation';


export function ContactPage() {
  return (
    <div>
      <header className="App-header">
        <Navigation activePageKey="contact" />
      </header>
      <h1>Contact page</h1>
    </div>
  );
}