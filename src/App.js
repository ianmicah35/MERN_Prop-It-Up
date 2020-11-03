import './App.css';
import PersonCard from './components/PersonCard.jsx';


function App() {
  return (
    <div className="App">
      <PersonCard lastName="Brown" firstName="Ian" age={40} hairColor="Brown"/>
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Brown"/>
      <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown"/>
      <PersonCard lastName="Fillmore" firstName="Maria" age={50} hairColor="Brown"/>
    </div>
  );
}

export default App;
