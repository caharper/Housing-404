import React, { Component } from 'react';
import { ProgressBar } from './../ProgressBar'
import { LoginNav } from './LoginNav'
import { AccountRepository } from './../../api/accountRepository'




export class Homepage extends React.Component {
  accountRepository = new AccountRepository

  state = {
      userName: '',
      rating: 0,
      comment: '',
      emails: []
    }


  render() {

    // The markup for the Step 1 UI
    return(

      <>
        <LoginNav></LoginNav>

        <div className="container">
          <div className="row">
            <ProgressBar></ProgressBar>
          </div>
          <div className="row">
            <div class="card">
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div>
                        <div className="row">
                          <div className="form-group col-8">
                            <label htmlFor="userName">Your Name</label>
                            <input type="text"
                                   id="userName"
                                   name="userName"
                                   className="form-control"
                                   value={this.state.userName}
                                   onChange={e => this.setState({userName: e.target.value})}/>
                          </div>


                          <div className="form-group col-2">
                            <label htmlFor="rating">Rating</label>
                            <select type="number"
                                   id="rating"
                                   name="rating"
                                   className="form-control"
                                   value={this.state.rating}
                                   onChange={e => this.setState({rating: e.target.value})}>
                                   // options
                                   <option></option>
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                                   <option>5</option>
                            </select>
                          </div>
                        </div>


                      </div>
                        <div className="form-group ">
                          <label htmlFor="comment">Comment</label>
                          <textarea type="textarea"
                                 id="comment"
                                 name="comment"
                                 className="form-control"
                                 value={this.state.comment}
                                 onChange={e => this.setState({comment: e.target.value})}>
                           </textarea>
                        </div>
                    </form>
                  </div>
                </div>


                <div className="row">
                  <div className="col-12">
                    <button onClick={e => this.onSubmit()} className="btn btn-primary">Submit</button>
                  </div>
                </div>






              </div>
            </div>


          </div>



          <table className="table table-striped table-condenced">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Employee</th>
                <th>Department</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.emails.map((a, i) =>
                  <tr key={i}>
                    <td>{a}</td>
                  </tr>
                )
              }
            </tbody>
          </table>







        </div>
      </>
    )
  }

  componentDidMount() {
  this.accountRepository.getAccounts()
    .then(emails => this.setState({ emails }))
  }
}

export default Homepage
