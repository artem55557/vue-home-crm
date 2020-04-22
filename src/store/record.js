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
    },
    async updateRecord({dispatch, commit}, data) {
      try {
        const updateData = {... data}
        delete updateData.id, updateData.categoryName, updateData.billNameFrom ,updateData.billNameTo ,updateData.currency
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/records/${data.id}`).update(updateData)
        commit('setRecord', data)
      } catch (e) {
        console.log(e);
      }
    }
  },
  mutations: {
    updateRecord(state, records) {
      state.records = records
    },
    createRecord(state,record) {
      state.records.push(record)
    },
    setRecord(state, record) {
      state.records = state.records.map(r => {
        if (r.id === record.id) {
          return record
        } else{ return r}
      })
    }
  },
  state: {
    records: []
  },
  getters: {
    allRecords(state) {
      return state.records
    },
    filtersRecords(state, dateFrom, dateTo) {
      return state.records.filter(r => r.date >= dateFrom.toJSON() && r.date <= dateTo.toJSON())
      .sort((prev, next) => new Date(prev.date) - new Date(next.date))
      .reverse()
    }
  }
}