import axios from 'axios';

import getJobs from '@/api/getJobs';

vi.mock('axios');

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Java Engineer'
        }
      ]
    });
  });
  it('fetches jobs that candidates can apply to', async () => {
    const url = 'http://myfakeapi.com:3000/jobs';

    await getJobs();
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it('extracts jobs from response', async () => {
    const jobs = await getJobs();
    expect(jobs).toEqual([{ id: 1, title: 'Java Engineer' }]);
  });
});
