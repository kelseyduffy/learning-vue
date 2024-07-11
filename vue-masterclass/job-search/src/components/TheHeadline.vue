<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Corp.</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList';

export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null,
      actions: ['Build', 'Create', 'Design', 'Code']
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      };
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    if (this.interval) clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        this.action = nextElementInList(this.actions, this.action);
      }, 3000);
    }
  }
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
