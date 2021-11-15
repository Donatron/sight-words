import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import SightWords from './components/SightWords';
import RandomWords from './components/RandomWords'
import UpdateWordList from './components/UpdateWordList';
import Phrases from './components/Phrases'
import RandomPhrases from './components/RandomPhrases'
import UpdatePhraseList from './components/UpdatePhraseList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/update-phrase-list" component={UpdatePhraseList} />
        <Route path="/random-phrases" component={RandomPhrases} />
        <Route path="/phrases" component={Phrases} />
        <Route path="/update-word-list" component={UpdateWordList} />
        <Route path="/random-words" component={RandomWords} />
        <Route path="/" component={SightWords} />
      </Switch>
    </div>
  );
}

export default App;
