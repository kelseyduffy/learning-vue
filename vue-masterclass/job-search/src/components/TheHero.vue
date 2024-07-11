<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1">1 column</div>
        <div class="col-start-2 col-span-5">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5">5 columns</div>
        <div class="col-start-12 col-span-1">1 column</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/TheHeadline.vue';
import JobSearchForm from '@/components/JobSearchForm.vue';

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm
  }
};
</script>
