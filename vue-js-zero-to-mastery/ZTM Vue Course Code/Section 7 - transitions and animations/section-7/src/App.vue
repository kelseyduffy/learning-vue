<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition name="fade">   <!-- Vue detects how long the animations will be from looking at the css -->
      <h2 v-if="flag" key="main">Hello world!</h2>
      <h2 v-else key="secondary">Another hello</h2> <!-- notice how the two transition simulatenously and reposition themselves when theyre done -->
    </transition>
    <hr/>
    <transition name="fade" duration="1000"> <!-- you tell Vue how long the animations will be, in ms. Notice that Vue ripped this element out before its 2.5s animation was done -->
      <h2 v-show="flag">Hello again</h2>
    </transition>
    <hr/>
    <transition name="fade" mode="out-in">   <!-- Vue detects how long the animations will be from looking at the css -->
      <h2 v-if="flag" key="main">Hello world!</h2>
      <h2 v-else key="secondary">Another hello</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    }
  }
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 2.5s linear;
  opacity: 0;
}
</style>
