import React, { Component }  from 'react'

export class SearchResults extends Component {

  state = {
    notif: null
  }

  render() {
    return(
        <div className="searchResult">
          <div className="searchRoomCard mt-3">
            <div className="card-body">
              <div> Gender: {this.props.item.gender === "M" ? "Male" : (this.props.item.gender === "F" ? "Female" : "Other")}</div>
              <div> Smoker: {this.props.item.smoker.data[0] === 1 ? "Yes" : "No"}</div>
              <div> Tidyness: {this.props.item.tidynessP === 1 ? "Not Tidy" : (this.props.item.tidynessP === 2 ? "Tidy" : "Very Tidy")}</div>
              <div> Year: {this.props.item.year === 1 ? "Freshman" : (this.props.item.year === 2 ? "Sophomore" : (this.props.item.year === 3 ? "Junior" : "Senior"))}</div>
              <div> Pets: {this.props.item.pets === "Y" ? "Yes" : "No"}</div>

            <button className="resetButton" onClick={(e,x) => this.props.contactUser(this.props.item.id, this.state.notif)}>Send My Information</button>
          </div>
        </div>
      </div>
      );
  }
}

export default SearchResults
