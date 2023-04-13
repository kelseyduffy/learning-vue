<template>
  <app-form />  <!-- you can choose to use kebab-case instead of PascalCase here -->
</template>


<script>
import AppForm from "./components/Form.vue"
export default {
  name: 'App',
  components: {
    AppForm // naming it 'AppForm' to avoid the naming collision with 'form'
  }
}
</script>

