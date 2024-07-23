import axios from 'axios';

import getJobs from '@/api/getJobs';

vi.mock('axios');

describe('getJobs', () => {
  it('fetches job that candidates can apply to', async () => {
    const url = 'http://myfakeapi.com';

    await getJobs();
    expect(axios.get).toHaveBeenCalledWith(url);
  });
});
