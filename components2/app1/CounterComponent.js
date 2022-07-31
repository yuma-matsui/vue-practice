import { CountUpButton } from './CountUpButton.js'

export const CounterComponent = {
  template: '#counter-component',
  components: {
    CountUpButton
  },
  props: {
    counter: {
      type: Number,
      required: true
    }
  },
  emits: ['increment'],
  computed: {
    halfCounter () {
      return this.counter / 2
    },
    doubleCounter () {
      return this.counter * 2
    }
  },
  methods: {
    countUp (counter) {
      this.$emit('increment', counter)
    }
  }
}
