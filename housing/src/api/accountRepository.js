import axios from 'axios'


export class AccountRepository {
  url = "http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:3000"
  config = {
    headers: {
      username: 'housing404',
      password: 'housingpass'
    }
  }

  // User functions

  // Login function
  login(attemptUser) {
    return new Promise((resolve, reject) => {
        axios.post(`http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:3000/user/login`, attemptUser)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Create Account functions
  createAccount(newUser){
    return new Promise((resolve, reject) => {
        axios.post(`http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:3000/user/register`, newUser)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // logout
  logout() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/logout`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Edit name, email, password
  editUser(editInfo) {
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/edit`, editInfo)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Add delete user post
  // deleteAccount(user) {
  //   return new Promise((resolve, reject) => {
  //       axios.delete(`${this.url}/user/edit`, user)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }

  // Get notifications for ALL users
  getUserNotifications() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/notifications`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // // Delete ALL user notifications for ALL users
  // deleteUserNotifications() {
  //   return new Promise((resolve, reject) => {
  //       axios.delete(`${this.url}/user/notifications`)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }

  // Get notifications for a SINGLE user
  getUserNotifications(uId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/notifications/${uId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // // Delete ALL user notifications for a SINGLE user
  // deleteUserNotifications() {
  //   return new Promise((resolve, reject) => {
  //       axios.delete(`${this.url}/user/notifications/${accountId}`)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }

  // Get user profile
  getUserProfile(uId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/profile?sessuid=${uId}`)
      .then(resp => {
        resolve(resp.data)
        console.log(`${this.url}/user/profile?sessuid=${uId}`)
      })
      .catch(resp => alert(resp))
    })
  }

  // Edit user information like gender, age, etc.
  editUserProfile(editInfo){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/profile/edit`, editInfo)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Get all events a user is going to  ------ ****** doesn't this need a user id ?
  getUserGoingEvents(sessuid) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/events?sessuid=${sessuid}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Get a specific event a user is going to
  getSingerUserGoingEvents(eId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/events/${eId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Delete a single event a user is going to
  // deleteSingleGoingEvent(eId) {
  //   return new Promise((resolve, reject) => {
  //       axios.delete(`${this.url}/user/events/${eId}`, eId)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }


  // Get all events owned by a user  ------ ****** doesn't this need a user id ?
  getUserOwnedEvents(sessuid) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/myEvents?sessuid=${sessuid}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Creates an event owned by a user
  createUserOwnedEvent(eData){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/myEvents`, eData)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Get a SINGLE event owned by a user
  getUserOwnedEvent(eId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/myEvents/${eId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Get who is going to a user owned event
  getAttendingUserEvent(eId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/myEvents/${eId}/attending/`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Delete people attending user owned event
  // deleteAttendingUserEvent(eId, uId) {
  //   return new Promise((resolve, reject) => {
  //       axios.delete(`${this.url}/user/myEvents/${eId}/attending`, uId)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }

  // Edits an event owned by a user
  editUserOwnedEvent(eId, editInfo){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/myEvents/${eId}/edit`, editInfo)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Gets ALL apartment listings for a single user
  getSingleUserApartments() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/apartments`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Creates an apartment listing
  createApartment(aData){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/apartments`, aData)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Gets a SINGLE apartment with a given id associated with a user
  getUserApartment(aId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/apartments/${aId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Gets the previous rent information for a specific apartment associated with a user
  getUserApartmentRent(aId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/apartments/${aId}/prevRents`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  editUserApartmentRent(aId, editInfo){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/apartments/${aId}/prevRents`, editInfo)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Edits an apartment listing with a given id associated with a user
  editUserApartment(aId, editInfo){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/user/apartments/${aId}/edit`, editInfo)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Deletes an apartment listing with a given id
  // deleteApartment(aId) {
  //   return new Promise((resolve, reject) => {
  //       axios.delete(`${this.url}/user/apartments/${aId}/edit`)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }



  // Users functions

  // Gets all users on the app
  getUsers() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/users`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Get a user on the app with a specific id
  getUserWithId(uId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/users/${uId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Contact a user with a specific id from a user -----******This needs to receive an object with comment, sender, receiver
  contactUser(contactInfo){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/users/${contactInfo.receiver}`, contactInfo)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Filter users for certain characteristics
  filterUsers(filters){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/users/results`, filters)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Finds a user with the EXACT matching traits as current user
  getPerfectMatch() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/users`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Gets ALL apartment listings
  getAllApartments() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/apartments`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Gets an apartment with a given id
  getApartmentsWithId(aId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/apartments/${aId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Get apartment's previous rents with a given id
  getApartmentRent(aId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/apartments/${aId}/pastRents`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Filter out apartments with given filters
  filterApartments(filters){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/apartments/results`, filters)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Get ALL events
  getAllEvents() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/events`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Get event with a given id
  getEventWithId(eId){
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/events/${eId}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Get who is attending an event with a given id
  getAttendingEventWithId(eId){
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/events/${eId}/attending`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // Add a user to attend an event  -----********* I think this is what this does
  addUserToEvent(eId, eventToPost){
    return new Promise((resolve, reject) => {
        axios.post(`${this.url}/events/${eId}/attending`, eventToPost)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // // Filters out events with given filters
  // filterEvents(filters){
  //   return new Promise((resolve, reject) => {
  //       axios.post(`${this.url}/events/results`, filters)
  //       .then(resp => resolve(resp.data))
  //       .catch(resp => alert(resp))
  //     })
  // }




  // ************ DELETE LATER **********************



  // Good stuff from class
  //
  // getAccount(accountId){
  //   return new Promise((resolve, reject) => {
  //     axios.get(`${this.url}/${accountId}`)
  //     .then(resp => resolve(resp.data))
  //     .catch(resp => alert(resp))
  //   })
  // }
  //
  // updateAccount(accountId, account){
  //   return new Promise((resolve, reject) => {
  //     axios.put(`${this.url}/${accountId}`, account)
  //     .then(resp => resolve(resp.data))
  //     .catch(resp => alert(resp))
  //   })
  // }
  //
  // addAccount(account) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(this.url, account)
  //     .then(resp => resolve(resp.data))
  //     .catch(resp => alert(resp))
  //   })
  // }
  //
  // deleteAccount(accountId){
  //   return new Promise((resolve, reject) => {
  //     axios.delete(`${this.url}/${accountId}`)
  //     .then(resp => resolve(resp.data))
  //     .catch(resp => alert(resp))
  //   })
  // }


}

export default AccountRepository