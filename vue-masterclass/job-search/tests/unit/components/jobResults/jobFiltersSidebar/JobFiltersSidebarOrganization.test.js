import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { CreatePinia, createTestingPinia } from '@pinia/testing';

import JobFiltersSidebarOrganizations from '@/components/JobResults/jobFiltersSidebar/JobFiltersSidebarOrganizations.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

describe('JobFiltersSidebarOrganizations', () => {
  const renderJobFiltersSidebarOrganizations = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();
    const jobsStore = useJobsStore();
    const $router = { push: vi.fn() };

    render(JobFiltersSidebarOrganizations, {
      global: {
        mocks: {
          $router
        },
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });

    return { jobsStore, userStore, $router };
  };
  it('renders unique list of organizations from jobs', async () => {
    const { jobsStore } = renderJobFiltersSidebarOrganizations();
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Microsoft']);

    const button = screen.getByRole('button', { name: /organizations/i });
    await userEvent.click(button);

    const organizationListItems = screen.getAllByRole('listitem');
    const organizations = organizationListItems.map((node) => node.textContent);
    expect(organizations).toEqual(['Google', 'Microsoft']);
  });
  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for organization', async () => {
      const { jobsStore, userStore } = renderJobFiltersSidebarOrganizations();
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Microsoft']);

      const button = screen.getByRole('button', { name: /organizations/i });
      await userEvent.click(button);

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      });
      await userEvent.click(googleCheckbox);

      expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google']);
    });

    it('communicates that user has selected checkbox for organization', async () => {
      const { jobsStore, $router } = renderJobFiltersSidebarOrganizations();
      jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google']);

      const button = screen.getByRole('button', { name: /organizations/i });
      await userEvent.click(button);

      const googleCheckbox = screen.getByRole('checkbox', {
        name: /google/i
      });
      await userEvent.click(googleCheckbox);

      expect($router.push).toHaveBeenCalledWith({ name: 'JobResults' });
    });
  });
});
