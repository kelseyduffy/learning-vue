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

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/jobs');
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
});
