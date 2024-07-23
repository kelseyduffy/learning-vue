import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import JobListings from '@/components/jobResults/JobListings.vue';
import { useJobsStore } from '@/stores/jobs';

describe('JobListings', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '5',
      ...queryParams
    }
  });

  const renderJobListings = ($route) => {
    const pinia = createTestingPinia();

    render(JobListings, {
      global: {
        plugins: [pinia],
        mocks: { $route },
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    });
  };
  it('fetches jobs', () => {
    const $route = createRoute();

    renderJobListings($route);

    const jobsStore = useJobsStore();
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it('displays a maximum of 10 jobs', async () => {
    const queryParams = { page: '1' };
    const $route = createRoute(queryParams);

    renderJobListings($route);
    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({});

    // get<action> is synchronous, find<action> is async
    const jobListings = await screen.findAllByRole('listitem');
    expect(jobListings).toHaveLength(10);
  });

  describe('when params exclude page number', () => {
    it('displays page number 1', () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText('Page 1')).toBeInTheDocument();
    });
  });

  describe('when params include page number', () => {
    it('displays page number', () => {
      const queryParams = { page: '3' };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      expect(screen.getByText('Page 3')).toBeInTheDocument();
    });
  });

  describe('when user is on the first page', () => {
    it.only('does not show link to previous page', async () => {
      const queryParams = { page: '1' };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole('listitem'); // dummy await to get the screen to finish rendering because of the axios call
      const previousLink = screen.queryByRole('link', { name: /previous/i });
      expect(previousLink).not.toBeInTheDocument();
    });

    it('shows link to next page', async () => {
      const queryParams = { page: '1' };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole('listitem');
      const nextLink = screen.queryByRole('link', { name: /next/i });
      expect(nextLink).toBeInTheDocument();
    });
  });

  describe('when user is on the last page', () => {
    it('shows link to previous page', async () => {
      const queryParams = { page: '2' };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole('listitem'); // dummy await to get the screen to finish rendering because of the axios call
      const previousLink = screen.queryByRole('link', { name: /previous/i });
      expect(previousLink).toBeInTheDocument();
    });

    it('does not show link to next page', async () => {
      const queryParams = { page: '2' };
      const $route = createRoute(queryParams);

      renderJobListings($route);
      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});

      await screen.findAllByRole('listitem');
      const nextLink = screen.queryByRole('link', { name: /next/i });
      expect(nextLink).not.toBeInTheDocument();
    });
  });
});
