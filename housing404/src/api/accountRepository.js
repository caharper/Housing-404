import axios from 'axios'


export class AccountRepository {
  url = "`http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:3000"
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
        axios.post(`http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:3000/users/login`, attemptUser)
        .then(resp => resolve(resp.data))
        .catch(resp => alert(resp))
      })
  }

  // Create Account functions
  createAccount(newUser){
    return new Promise((resolve, reject) => {
        axios.post(`http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:3000/users/register`, newUser)
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
  getUserProfile() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/profile`)
      .then(resp => {
        resolve(resp.data)
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
  getUserGoingEvents() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/events`)
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
  getUserOwnedEvents() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/user/myEvents`)
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




  // Users functions

  getUsers() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/users`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(resp => alert(resp))
    })
  }

  // ************ DELETE LATER **********************



  // Good stuff from class
  //
  getAccount(accountId){
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/${accountId}`)
      .then(resp => resolve(resp.data))
      .catch(resp => alert(resp))
    })
  }
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
