// var React         = require('react')
// var AccountFields = require('./AccountFields')
// // var SurveyFields  = require('./SurveyFields')
// // var Confirmation  = require('./Confirmation')
// // var Success       = require('./Success')
//
//
// export class Registration extends React.Component{
//
// 	getInitialState = function() {
// 		return {
// 			step: 1
// 		}
// 	}
//
//   fieldValues = {
//     name     : '',
//     email    : '',
//     password : '',
//     age      : '',
//     colors   : []
//   }
//
//
//
//   saveValues = function(fields) {
//   return function() {
//     // Remember, `fieldValues` is set at the top of this file, we are simply appending
//     // to and overriding keys in `fieldValues` with the `fields` with Object.assign
//     // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//     fieldValues = Object.assign({}, fieldValues, fields)
//   }()
// }
//
// nextStep = function() {
//   this.setState({
//     step : this.state.step + 1
//   })
// }
//
// // Same as nextStep, but decrementing
// previousStep = function() {
//   this.setState({
//     step : this.state.step - 1
//   })
// }
//
// render() {
//   switch (this.state.step) {
//     case 1:
//       return <AccountFields fieldValues={fieldValues}
//                             nextStep={this.nextStep}
//                             saveValues={this.saveValues} />
//     // case 2:
//     //   return <SurveyFields fieldValues={fieldValues}
//     //                        nextStep={this.nextStep}
//     //                        previousStep={this.previousStep}
//     //                        saveValues={this.saveValues} />
//   }
// }
// }
//
// export default Registration



var React         = require('react')
var AccountFields = require('./AccountFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')
var SurveyFields  = require('./SurveyFields')
var assign        = require('object-assign')

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

var Registration = React.createClass({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <SurveyFields fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <Confirmation fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
})

module.exports = Registration
