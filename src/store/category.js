import firebase from 'firebase/app'
export default {
  actions: {
    async fetchCategory({commit, dispatch}) {
      try {
        const uid = await dispatch('getUid')
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
        return Object.keys(categories).map(key => ({...categories[key],  id: key}))
      } catch (e) {
        throw e
      }
    },
    async categoryCreate({dispatch, commit}, {title, type}) {
      try {
        const uid = await dispatch('getUid')
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, type})
        return {title, type, id: category.id}
      } catch (e) {
        throw e
      }

    },
    async updateCategory({dispatch, commit}, {title, type, id}) {
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/categories`).child(id).update({title, type})
      } catch (e) {
        throw e
      }
    }
  }
}