<template>
  <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsible-accordion header="Degree" />
      <job-filters-sidebar-job-types />
      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import JobFiltersSidebarOrganizations from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import JobFiltersSidebarJobTypes from '@/components/jobResults/jobFiltersSidebar//JobFiltersSidebarJobTypes.vue';

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobTypes
  }
};
</script>
