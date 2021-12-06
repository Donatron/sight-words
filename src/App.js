import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './components/Header';
import Login from './components/Login';
import SightWords from './components/SightWords';
import RandomWords from './components/RandomWords'
import UpdateWordList from './components/UpdateWordList';
import Phrases from './components/Phrases'
import RandomPhrases from './components/RandomPhrases'
import UpdatePhraseList from './components/UpdatePhraseList';
import LoadingSpinner from './components/LoadingSpinner';
import Register from './components/Register';

function App(props) {
  const { loading, token } = props;
  return (
    <div className="App">
      <Header />
      {loading && <LoadingSpinner />}
      <Switch>
        <Route path="/update-phrase-list">
          {token ? <UpdatePhraseList /> : <Redirect to="/" />}
        </Route>
        <Route path="/random-phrases">
          {token ? <RandomPhrases /> : <Redirect to="/" />}
        </Route>
        <Route path="/phrases">
          {token ? <Phrases /> : <Redirect to="/" />}
        </Route>
        <Route path="/update-word-list">
          {token ? <UpdateWordList /> : <Redirect to="/" />}
        </Route>
        <Route path="/random-words">
          {token ? <RandomWords /> : <Redirect to="/" />}
        </Route>
        <Route path="/register">
          {token ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/login">
          {token ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/">
          {token ? <SightWords /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(App);
