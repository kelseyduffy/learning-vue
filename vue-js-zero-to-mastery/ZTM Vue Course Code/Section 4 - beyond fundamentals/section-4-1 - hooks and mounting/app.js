let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  // lifecycle hook functions exist at the same level as data
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message) // message is undefined here
  },
  created() {
    console.log('create() function called!', this.message) // message is defined here
  },
  beforeMount() {
    console.log('beforeMount() function called!', this.$el) // $el is the element vue is mounted to, available once it's mounted (so it's null here)
  },
  mounted() {
    console.log('mounted() function called!', this.$el) // $el is not null here anymore because it's mounted
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!') // any change to any data, but unknonwn which data was changed
  },
  updated() {
    console.log('updated() function called!') 
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called')
  },
  unmounted() {
    console.log('unmounted() function called') // vue can't be accessed here
  }
}) // removing the mount function prevents it from mounting anywhere, but it still exists in js

// can be cleaner to mount after so it's not chained
// vm.mount('#app')

// could alternatively mount the vue app on a timer
setTimeout(() => {
  vm.mount('#app')
}, 3000)

// Vue lifecycle docs: https://vuejs.org/guide/essentials/lifecycle.html

/* manual interactions */

/* trigger the data updates:
    in browser dev tools, change the value of message in the Vue tab
    - see that the two update methods are triggered. */

/* trigger the unmounts:
    in browser dev tools, execute vm.unmount('#app') from the console
    - see that the two unmount methods are triggered. */