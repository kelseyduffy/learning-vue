
// with compiler 
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  template: `{{ message }}` // template is injected here. easy to do, but scales poorly
})

vm.mount('#app')


// without compiler - gives a performance boost
let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  render() {
    // optional property, but if you declare it, you can override what Vue was doing
    return Vue.h( // h = 'h'yperscript (shortened for file size minimization)
      'h1',
      this.message
    ) 
  }
})

vm2.mount('#manually-compiled-app')




