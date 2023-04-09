let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  },
  methods: {
    moveFirstToEnd() {
      const first = this.people.shift()

      this.people.push(first)
    }
  }
}).mount('#app')
