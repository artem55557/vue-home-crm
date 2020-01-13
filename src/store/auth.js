import firebase from 'firebase/app'
export default {
  actions: {
   async login({dipatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        throw e
      }
    },
    async register({dispatch, commit}, {name, email, password}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({name})
      } catch (error) {
        throw error
      }
      
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async logout(){
      await firebase.auth().signOut()
    }
  }
}