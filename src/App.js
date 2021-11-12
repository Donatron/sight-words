import './App.css';

import SightWords from './components/SightWords';
import sightWords from './data/wordsData.json';

function App() {
  const { words } = sightWords;

  return (
    <div className="App">
      <SightWords words={words} />
    </div>
  );
}

export default App;
