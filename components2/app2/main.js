import { BlogTitle } from './BlogTitle.js'
import { FavoriteButton } from './FavoriteButton.js'

const app = Vue.createApp({
  components: {
    BlogTitle,
    FavoriteButton
  },
  data () {
    return {
      blogTitles: [
        '7/29の日記',
        '7/30の日記',
        '7/31の日記',
      ],
      totalFavorites: 0
    }
  },
  methods: {
    addFavorite (totalFavorites) {
      this.totalFavorites = totalFavorites + 1
    }
  }
}).mount('#app')
