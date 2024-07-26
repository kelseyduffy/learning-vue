import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { CreatePinia, createTestingPinia } from '@pinia/testing';

import JobFiltersSidebarOrganizations from '@/components/JobResults/jobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import { useJobsStore } from '@/stores/jobs';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

describe('JobFiltersSidebarOrganizations', () => {
  it('renders unique list of organizations from jobs', async () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Microsoft']);

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });

    const button = screen.getByRole('button', { name: /organizations/i });
    await userEvent.click(button);

    const organizationListItems = screen.getAllByRole('listitem');
    const organizations = organizationListItems.map((node) => node.textContent);
    expect(organizations).toEqual(['Google', 'Microsoft']);
  });
});
