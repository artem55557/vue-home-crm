export default {
  install(Vue, options) {
    Vue.prototype.$meta = {
      setTitle(title) {
        document.title = title
      }
    }
  }
}