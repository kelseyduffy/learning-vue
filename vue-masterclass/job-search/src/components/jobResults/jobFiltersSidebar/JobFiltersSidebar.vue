<template>
  <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <collapsible-accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>

      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>

      <collapsible-accordion header="Organization">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import CollapsibleAccordion from '@/components/shared/CollapsibleAccordion.vue';
import JobFiltersSidebarDegrees from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarDegrees.vue';
import JobFiltersSidebarJobTypes from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarJobTypes.vue';
import JobFiltersSidebarOrganizations from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import JobFiltersSidebarPrompt from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarPrompt.vue';
</script>
