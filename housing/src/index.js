import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
//import Main from './views/Main';
//import Archive from './views/Archive';
//import FindRoomate from './views/FindRoomate';
//import Profile from './views/Profile';
//import ListApt from './views/ListApt';
//import FindApt from './views/FindApt';
//import Event from './views/Event';

import Homepage from './components/homepage/Homepage';
import Mainpage from './components/mainpage/Mainpage';
import Archive from './components/archive/Archive';
import FindRoomate from './components/findRoomate/FindRoomate';
import Profile from './components/profile/Profile';
//import ListApt from './components/listApartments/ListApt';
import FindApt from './components/findApt/FindApt';
import MyEvents from './components/myEvents/Myevents';
import Event from './components/event/Event';



const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/main" component={Mainpage} />
        <Route path="/profile" component={Profile} />
        <Route path="/archive" component={Archive} />
        <Route path="/findroomate" component={FindRoomate} />
        <Route path="/findApt" component={FindApt} />
        <Route path="/myevent" component={MyEvents} />
        <Route path="/event" component={Event} />


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
