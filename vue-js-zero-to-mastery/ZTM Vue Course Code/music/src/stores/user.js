import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth
      await auth.createUserWithEmailAndPassword(values.email, values.password)

      // token is not available until user is created, so must wait for previous creation to succeed
      await usersCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      this.userLoggedIn = true
    }
  }
})
