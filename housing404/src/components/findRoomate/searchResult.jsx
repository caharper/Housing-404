import React, { Component }  from 'react'

export class SearchResults extends Component {

  state = {
    notif: null
  }

  render() {
    return(
        <div className="container pt-0">
          <div className="row justify content-center justify-content-between">
            <div className="searchCard">
              <div className="card-body">
                <div> Gender: {this.props.item.gender}</div>
                <div> Smoker: {this.props.item.smoker.data[0] === 1 ? "Yes" : "No"}</div>
                <div> Tidyness: {this.props.item.tidynessP}</div>
                <div> Year: {this.props.item.year}</div>
                <div> Pets: {this.props.item.pets}</div>

              <div className="form-group w-100 ">
                <label htmlFor="description"></label>
                <textarea type="textarea"
                       id="notif"
                       name="nofif"
                       placeholder="Send Message"
                       maxLength={50}
                       className="form-control"
                       value={this.state.notif}
                       onChange={e => this.setState({notif: e.target.value})}>
                 </textarea>
              </div>

              <button className="resetButton" onClick={(e,x) => this.props.contactUser(this.props.item.id, this.state.notif)}>Contact</button>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default SearchResults
