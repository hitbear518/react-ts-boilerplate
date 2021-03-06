import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import { Provider, Store, connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { RootState } from './reducers';
import Counter from './Counter';
import Home from './Home';

const App = ({ store }: { store: Store<RootState> }) => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <Home foo="foo" />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </Provider>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }: RouteComponentProps<{}>) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }: RouteComponentProps<{ topicId: string }>) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default hot(module)(App);
