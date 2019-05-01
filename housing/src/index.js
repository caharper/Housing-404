import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
//import Main from './views/Main';
//import Archive from './views/Archive';
//import FindRoomate from './views/FindRoomate';
//import Profile from './views/Profile';
//import ListApt from './views/ListApt';
//import FindApt from './views/FindApt';
//import Event from './views/Event';
//<PrivateRoute path="/profile" component={Profile} />


import Homepage from './components/homepage/Homepage';
import Mainpage from './components/mainpage/Mainpage';
import FindRoomate from './components/findRoomate/FindRoomate';
import Profile from './components/profile/Profile';
import CreateApartmentListings from './components/listApartments/CreateApartmentListing';
import FindApt from './components/findApt/FindApt';
import MyEvents from './components/myEvents/Myevents';
import Event from './components/event/Event';
import Notification from './components/notification/Notification';



//check cookie or state if logged in
function isAuthenticated(){    
  const token = localStorage.getItem('sessuid');
    console.log(token)
    if(token){
      return true;
    }   
  return false;
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <PrivateRoute exact path="/main" component={Mainpage} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/findroomate" component={FindRoomate} />
        <PrivateRoute path="/listApt" component={CreateApartmentListings} />
        <PrivateRoute path="/findApt" component={FindApt} />
        <PrivateRoute path="/myevent" component={MyEvents} />
        <PrivateRoute path="/event" component={Event} />
        <PrivateRoute path="/notification" component={Notification} />

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
