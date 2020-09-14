import firebase from 'firebase/app'
export default {
  actions: {
    async crteateBill({ commit, dispatch }, bill) {

      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/bills`).push(bill)
      } catch (e) {
        throw e
      }

    },

    async fetchBills({dispatch, commit}) {

      try {
        const uid = await dispatch('getUid')
        const bills = (await firebase.database().ref(`/users/${uid}/bills`).once('value')).val() || {}
        return Object.keys(bills).map(key => ({...bills[key], id: key}))
      } catch (e) {
        throw e
        }
    },

    async fetchBillById({dispatch, commit}, id) {
      try {
        const uid = await dispatch('getUid')
        const bill = (await firebase.database().ref(`/users/${uid}/bills`).child(id).once('value')).val() || {}
        return {...bill, id}
      } catch (e) {
        
      }
    },

    async updateBill({dispatch, commit}, toUpdate ) {
      const uid = await dispatch('getUid')
      const updateData = { ...toUpdate }
      await firebase.database().ref(`/users/${uid}/bills/${updateData.id}`).update(updateData)
    }

  }
}