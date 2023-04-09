let vm = Vue.createApp({})

// components are kind of similar to mini-instances, but cannot be mounted
vm.component('hello-world', { // component name can be anything. best practices: namespaced and either kebab or pascal cased
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: 'hello world'
    }
  }
}) 

vm.mount('#app')

/* Vue dev tools will show the <root> component with three <hello-world> subcomponents now */