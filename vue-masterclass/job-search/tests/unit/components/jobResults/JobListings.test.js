import { render, screen } from '@testing-library/vue';
import axios from 'axios';

import JobListings from '@/components/JobResults/JobListings.vue';

vi.mock('axios');
// console.log(axios); // console log shows the difference between normal axios and mock axios object

describe('JobListings', () => {
  it('renders', () => {
    expect(1).toBe(1);
  });
});
