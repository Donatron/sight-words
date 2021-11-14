import Header from './components/Header';
import SightWords from './components/SightWords';
import RandomWords from './components/RandomWords';

import sightWordsData from './data/wordsData.json';


function App() {
  const { words } = sightWordsData;

  return (
    <div className="App">
      <Header />
      {/*<SightWords words={words} /> */}
      <RandomWords words={words} />
    </div>
  );
}

export default App;
