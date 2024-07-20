import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import axios from 'axios';

import JobListings from '@/components/JobResults/JobListings.vue';

vi.mock('axios');
//console.log(axios); // console log shows the difference between normal axios and mock axios object

describe('JobListings', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '5',
      ...queryParams
    }
  });

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: { $route },
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    });
  };
  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();

    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com:3000/jobs');
  });

  it('displays a maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });

    const queryParams = { page: '1' };
    const $route = createRoute(queryParams);

    renderJobListings($route);

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
    it('does not show link to previous page', async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: '1' };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      await screen.findAllByRole('listitem'); // dummy await to get the screen to finish rendering because of the axios call
      const previousLink = screen.queryByRole('link', { name: /previous/i });
      expect(previousLink).not.toBeInTheDocument();
    });

    it('shows link to next page', async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: '1' };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      await screen.findAllByRole('listitem');
      const nextLink = screen.queryByRole('link', { name: /next/i });
      expect(nextLink).toBeInTheDocument();
    });
  });

  describe('when user is on the last page', () => {
    it('shows link to previous page', async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: '2' };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      await screen.findAllByRole('listitem'); // dummy await to get the screen to finish rendering because of the axios call
      const previousLink = screen.queryByRole('link', { name: /previous/i });
      expect(previousLink).toBeInTheDocument();
    });

    it('does not show link to next page', async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const queryParams = { page: '2' };
      const $route = createRoute(queryParams);

      renderJobListings($route);

      await screen.findAllByRole('listitem');
      const nextLink = screen.queryByRole('link', { name: /next/i });
      expect(nextLink).not.toBeInTheDocument();
    });
  });
});