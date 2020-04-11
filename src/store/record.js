import firebase from 'firebase/app'
export default {
  actions: {
    async createRecord({dispatch, commit}, record) {
      try {
        const uid = await dispatch('getUid')
        return await firebase.database().ref(`/users/${uid}/records`).push(record)
      } catch (e) {
        throw e
      }

    },
    async fetchRecord({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const categories = await dispatch('fetchCategory')
        const bills = await dispatch('fetchBills')
        const records = (await firebase.database().ref(`/users/${uid}/records`).once('value')).val()
        const recordsModified = Object.keys(records)
          .map(key => ({...records[key], id: key}))
          .map(record => {
            let categoryName
            let billNameFrom
            let billNameTo
            let currency
            if(record.category) {
              categoryName = categories.find(c => c.id === record.category).title
            }
            if(record.billIdFrom) {
              billNameFrom = bills.find(b => b.id === record.billIdFrom).name
              currency = bills.find(b => b.id === record.billIdFrom).currency
            }
            if(record.billIdTo) {
              billNameTo = bills.find(b => b.id === record.billIdTo).name
            }
            return{
              ...record,
              categoryName: categoryName || '',
              billNameFrom: billNameFrom || '',
              billNameTo: billNameTo || '',
              currency: currency
            }
          })
          commit('updateRecord', recordsModified)
          return recordsModified
      } catch (e) {
        throw e
      }
    }
  },
  mutations: {
    updateRecord(state, records) {
      state.records = records
    },
    createRecord(state,record) {
      state.records.push(record)
    }
  },
  state: {
    records: []
  },
  getters: {
    allRecords(state) {
      return state.records
    }
  }
}