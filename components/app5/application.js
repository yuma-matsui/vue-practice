const app = Vue.createApp({
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    }
  },
  methods: {
    onEnlargeText (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})


app.component('blog-post', {
  props: ['title'],
  emits: ['enlargeText'],
  template: `
    <div class="blog-post">
      <h4>{{ title }}</h4>
      <button @click="$emit('enlargeText', 0.02)">
        Enlarge text
      </button>
      <slot></slot>
    </div>
  `
})

app.mount('#app')
