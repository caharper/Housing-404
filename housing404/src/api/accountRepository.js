import axios from 'axios'


export class AccountRepository {
  url = "http://ec2-18-224-138-138.us-east-2.compute.amazonaws.com:4000"
  config = {
    headers: {
      username: 'housing404',
      password: 'housingpass'
    }
  }

  getAccounts() {
    return new Promise((resolve, reject) => {
      axios.get(this.url)
      .then(resp => resolve(resp.data))
      .catch(resp => alert(resp))
    })
  }

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
