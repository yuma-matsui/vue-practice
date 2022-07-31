import { CounterComponent } from './CounterComponent.js'

const app = Vue.createApp({
  data () {
    return {
      counter: 100
    }
  },
  components: {
    'counter-component': CounterComponent
  },
  methods: {
    increment (counter) {
      this.counter = counter + 1
    }
  }
}).mount('#app')
