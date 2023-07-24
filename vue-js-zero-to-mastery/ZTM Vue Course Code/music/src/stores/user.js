import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth
      // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      // token is not available until user is created, so must wait for previous creation to succeed
      // document name is now the uid of the user that was just created
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await userCred.user.updateProfile({
        displayName: values.name
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    }
  }
})
