import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { CreatePinia, createTestingPinia } from '@pinia/testing';

import JobFiltersSidebarJobTypes from '@/components/JobResults/jobFiltersSidebar/JobFiltersSidebarJobTypes.vue';
import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

describe('JobFiltersSidebarJobTypes', () => {
  const renderJobFiltersSidebarJobTypes = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();
    const jobsStore = useJobsStore();
    const $router = { push: vi.fn() };

    render(JobFiltersSidebarJobTypes, {
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
  it('renders unique list of job types from jobs', async () => {
    const { jobsStore } = renderJobFiltersSidebarJobTypes();
    jobsStore.UNIQUE_JOB_TYPES = new Set(['intern', 'part-time', 'full-time']);

    const button = screen.getByRole('button', { name: /job types/i });
    await userEvent.click(button);

    const jobTypesListItems = screen.getAllByRole('listitem');
    const jobTypes = jobTypesListItems.map((node) => node.textContent);
    expect(jobTypes).toEqual(['intern', 'part-time', 'full-time']);
  });

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for job type', async () => {
      const { jobsStore, userStore } = renderJobFiltersSidebarJobTypes();
      jobsStore.UNIQUE_JOB_TYPES = new Set(['intern', 'part-time', 'full-time']);

      const button = screen.getByRole('button', { name: /job types/i });
      await userEvent.click(button);

      const internCheckbox = screen.getByRole('checkbox', {
        name: /intern/i
      });
      await userEvent.click(internCheckbox);

      expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith(['intern']);
    });

    it('navigates user to job results page to see fresh batch of filtered jobs', async () => {
      const { jobsStore, $router } = renderJobFiltersSidebarJobTypes();
      jobsStore.UNIQUE_JOB_TYPES = new Set(['intern']);

      const button = screen.getByRole('button', { name: /job types/i });
      await userEvent.click(button);

      const internCheckbox = screen.getByRole('checkbox', {
        name: /intern/i
      });
      await userEvent.click(internCheckbox);

      expect($router.push).toHaveBeenCalledWith({ name: 'JobResults' });
    });
  });
});
