const app = Vue.createApp({
  data () {
    return {
      message: '',
      checked: false,
      checkedName: [],
      selected: []
    }
  }
})

app.mount('#app')
