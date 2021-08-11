import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Write } from './pages/Write';
import { GlobalStyle } from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={Write} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
