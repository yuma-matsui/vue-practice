const app = Vue.createApp({
  data () {
    return {
      items: []
    }
  },
  methods: {
    addItem () {
      const id = this.items.length + 1
      const text = `myItem-${id}`
      this.items.push({ id, text })
    }
  },

  computed: {
    existItem () {
      return this.items.length > 0
    },

    oddItems () {
      return [...this.items].filter(item => item.id % 2 === 1)
    },

    evenItems () {
      return [...this.items].filter(item => item.id % 2 === 0)
    }
  }
})

const vm = app.mount('#app')
