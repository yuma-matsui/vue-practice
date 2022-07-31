export const FavoriteButton = {
  template: `
    <button @click="addFavorite">+</button>
  `,
  props: {
    totalFavorites: {
      type: Number,
      required: true
    }
  },

  emits: ['plus-favorite'],

  methods: {
    addFavorite () {
      this.$emit('plus-favorite', this.totalFavorites)
    }
  }
}
