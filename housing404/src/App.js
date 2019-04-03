import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Registration } from './components/Registration';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import { UserForm } from './components/UserForm';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <UserForm />
//       </div>
//     );
//   }
// }
//
// export default App;
