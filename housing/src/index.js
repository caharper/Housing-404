import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Main from './views/Main';
import Archive from './views/Archive';
import FindRoomate from './views/FindRoomate';
import Profile from './views/Profile';
import ListApt from './views/ListApt';
import FindApt from './views/FindApt';
import Homepage from './components/homepage/Homepage';



const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/main" component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="//archive" component={Archive} />
        <Route path="/findroomate" component={FindRoomate} />
        <Route path="/listApt" component={ListApt} />
        <Route path="/findApt" component={FindApt} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
