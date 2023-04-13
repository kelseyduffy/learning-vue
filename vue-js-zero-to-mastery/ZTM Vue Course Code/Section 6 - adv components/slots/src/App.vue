<template>
  <div>
    <!-- using named slots -->
    <app-form>
      <template v-slot:help>
        <p>{{ help }}</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </template>
      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>
      <p>Dummy text</p> <!-- can use named slots and default slots -->
    </app-form>

    <app-form>
      <div class="help">
        <p>Contact.</p>
      </div>
      <div class="fields">
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
      </div>
      <div class="buttons">
        <button type="submit">Submit</button>
      </div>
    </app-form>
  </div>
</template>


<script>
import AppForm from "./components/Form.vue"
export default {
  name: 'App',
  components: {
    AppForm // naming it 'AppForm' to avoid the naming collision with 'form'
  },
  data() {
    return {
      help: 'This is some help text.'
    }
  }
}
</script>

