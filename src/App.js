import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './components/layout/Header';
import Register from './components/user/Register';
import ConfirmEmail from './components/user/ConfirmEmail';
import ForgotPassword from './components/user/ForgotPassword';
import Login from './components/user/Login';
import SightWords from './components/sightWords/SightWords';
import RandomWords from './components/sightWords/RandomWords'
import UpdateWordList from './components/sightWords/UpdateWordList';
import Phrases from './components/phrases/Phrases'
import RandomPhrases from './components/phrases/RandomPhrases'
import UpdatePhraseList from './components/phrases/UpdatePhraseList';
import LoadingSpinner from './components/utils/LoadingSpinner';
import NotFound from './components/utils/NotFound';

function App(props) {
  const { loading, token } = props;

  return (
    <div className="App">
      <Header />
      {loading && <LoadingSpinner />}
      <Switch>
        <Route exact path="/update-phrase-list">
          {token ? <UpdatePhraseList /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/random-phrases">
          {token ? <RandomPhrases /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/phrases">
          {token ? <Phrases /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/update-word-list">
          {token ? <UpdateWordList /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/random-words">
          {token ? <RandomWords /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/register">
          {token ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/confirm-email/:token">
          {token ? <Redirect to="/" /> : <ConfirmEmail />}
        </Route>
        <Route exact path="/forgot-password">
          {token ? <Redirect to="/" /> : <ForgotPassword />}
        </Route>
        <Route exact path="/login">
          {token ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/">
          {token ? <SightWords /> : <Redirect to="/login" />}
        </Route>
        <Route exact component={NotFound} />
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
