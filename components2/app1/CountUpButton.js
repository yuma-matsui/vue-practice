export const CountUpButton = {
  template: '#count-up-button',

  props: {
    counter: {
      type: Number,
      required: true
    }
  },
  emits: [
    'increment'
  ],

  methods: {
    increment () {
      this.$emit('increment', this.counter)
    }
  }
}
