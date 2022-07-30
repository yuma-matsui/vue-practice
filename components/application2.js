const app = Vue.createApp({
  data () {
    return {
      isActive: true,
      isFinished: true
    }
  },
  computed: {
    todoClass () {
      return {
        active: this.isActive && !this.isFinished,
        done: this.isFinished
      }
    }
  }
})

const vm = app.mount('#app')
