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

              <button className="resetButton" onClick={(e,x) => this.props.contactUser(this.props.item.id, this.state.notif)}>Send My Information</button>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default SearchResults
