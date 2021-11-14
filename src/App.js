import Header from './components/Header';
import SightWords from './components/SightWords';
import sightWords from './data/wordsData.json';


function App() {
  const { words } = sightWords;

  return (
    <div className="App">
      <Header />
      <SightWords words={words} />
    </div>
  );
}

export default App;
