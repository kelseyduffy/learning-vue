<template>
  <form>
      <div class="help">
        <slot name="help"></slot>
      </div>
      <div class="fields">
        <slot name="fields"></slot>
      </div>
      <div class="buttons">
        <slot name="buttons"></slot>
      </div>
    <slot> <!-- render content passed in from parent -->
        default content
    </slot>
  </form>
</template>

<script>
export default {

}
</script>
