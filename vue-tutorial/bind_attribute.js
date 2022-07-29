const AttributeBinding = {
  data () {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleDateString()
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')
