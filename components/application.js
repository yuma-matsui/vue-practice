const app = Vue.createApp({
  data () {
    return {
      count: 1,
      isButtonDisabled: true,
      items: [
        { id: 1, text: 'myItem-1' },
        { id: 2, text: 'myItem-2' },
        { id: 3, text: 'myItem-3' },
        { id: 4, text: 'myItem-4' },
        { id: 5, text: 'myItem-5' }
      ]
    }
  },
  methods: {
    countUp () {
      this.count++
      console.log(this.count)
    },

    toggleButton () {
      this.isButtonDisabled = !this.isButtonDisabled
    },

    toTitleDate (date) {
      return new Date(date).toLocaleDateString()
    },

    formatDate (date) {
      return `今日は${this.toTitleDate(date)}です。`
    },

    addItem () {
      const id = this.items.length + 1
      const text = `myItem-${id}`
      this.items.push({ id, text })
    }
  },

  computed: {
    oddItems () {
      return [...this.items].filter(item => item.id % 2 === 1)
    },

    evenItems () {
      return [...this.items].filter(item => item.id % 2 === 0)
    }
  }
})

const vm = app.mount('#app')
