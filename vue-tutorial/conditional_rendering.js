const ConditionalRendering = {
  data () {
    return {
      seen: true
    }
  },
  methods: {
    clickOn () {
      this.seen = !this.seen
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
