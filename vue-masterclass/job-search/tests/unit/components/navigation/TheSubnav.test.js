import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';

import { useRoute } from 'vue-router';
vi.mock('vue-router');

import TheSubnav from '@/components/navigation/TheSubnav.vue';
import { useJobsStore } from '@/stores/jobs';

describe('TheSubnav', () => {
  const renderTheSubnav = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();

    render(TheSubnav, {
      global: {
        stubs: {
          // replace any font-awesome-icon component with a lightweight meaningless component
          FontAwesomeIcon: true
        }
      }
    });

    return { jobsStore };
  };

  describe('when user is on jobs page', () => {
    it('displays job count', async () => {
      useRoute.mockReturnValue({ name: 'JobResults' });
      const routeName = 'JobResults';

      const { jobsStore } = renderTheSubnav(routeName);
      const numberOfJobs = 16;
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

      const jobCount = await screen.findByText(numberOfJobs);

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      useRoute.mockReturnValue({ name: 'Home' });
      const routeName = 'NotJobResults';

      const { jobsStore } = renderTheSubnav(routeName);

      const numberOfJobs = 16;
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({});

      const jobCount = screen.queryByText(numberOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
