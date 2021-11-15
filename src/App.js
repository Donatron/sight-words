import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import SightWords from './components/SightWords';
import RandomWords from './components/RandomWords'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/random-words" component={RandomWords} />
        <Route path="/" component={SightWords} />
      </Switch>
    </div>
  );
}

export default App;
