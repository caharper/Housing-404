import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { ProgressBar } from './components/ProgressBar'
import { LoginInformation } from './components/homepage/LoginInformation'

import { AccountRepository} from './api/accountRepository'
import { Homepage } from './components/homepage/Homepage'




import Background from './smu_background.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};



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


  accountRepository = new AccountRepository


  state = {
      userName: '',
      rating: 0,
      comment: ''
    }


    onSubmit(){
      // let accountId = +this.props.match.params.accountId
      // if(accountId) {
      //   this.accountRepository.updateAccount(accountId, this.state)
      //     .then(() => this.setState({ redirect: '/', message: `${this.state.name} has been saved successfully.` }))
      // } else {
      //   this.accountRepository.addAccount(this.state)
      //     .then(() => this.setState({ redirect: '/' , message: `${this.state.name} has been added successfully.`}))
      // }
    }


  render() {
    return (
      <>
        <div className="App">
          <Homepage></Homepage>
        </div>
      </>
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
