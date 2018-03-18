import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import Callback from './components/Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Root = () => {
  return (
    <div className="container">
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={FoodJokes} />
          <Route path="/special" component={CelebrityJokes} onEnter={requireAuth} />
          <Route path="/callback" component={Callback} />
        </Router>
      </MuiThemeProvider>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));