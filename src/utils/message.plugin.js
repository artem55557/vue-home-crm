import miniToastr from 'mini-toastr'
export default {
  install(Vue, options) {
    miniToastr.init()
    Vue.prototype.$message = {
      success: function(text) {
        miniToastr.setIcon('success', 'img', {src: '/img/check-circle-regular.svg', style: 'heigt: 17px; width: 17px; vertical-align: bottom'})
        miniToastr.success(text)
      },
      info: function(text) {
        miniToastr.setIcon('info', 'img', {src: '/img/info-circle-solid.svg', style: 'heigt: 17px; width: 17px; vertical-align: bottom'})
        miniToastr.info(text)
      },
      warn: function(text) {
        miniToastr.warn(text)
      }
    },
    Vue.prototype.$error = function(text) {
      miniToastr.setIcon('error', 'img', {src: '/img/exclamation-triangle-solid.svg', style: 'heigt: 17px; width: 17px; vertical-align: bottom'})
      miniToastr.error(text)
    }
  }
}