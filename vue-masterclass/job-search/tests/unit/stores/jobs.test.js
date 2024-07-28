import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';

import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';

vi.mock('axios');

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores job listings', () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('FETCH_JOBS', () => {
    it('makes API request and stores received jobs', async () => {
      axios.get.mockResolvedValue({ data: ['job 1', 'job 2'] });
      const store = useJobsStore();
      await store.FETCH_JOBS();
      expect(store.jobs).toEqual(['job 1', 'job 2']);
    });
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const store = useJobsStore();
      store.jobs = [
        { organization: 'Google' },
        { organization: 'Microsoft' },
        { organization: 'Google' }
      ];

      const result = store.UNIQUE_ORGANIZATIONS;
      expect(result).toEqual(new Set(['Google', 'Microsoft']));
    });
  });

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const store = useJobsStore();
      store.jobs = [
        { jobType: 'part-time' },
        { jobType: 'full-time' },
        { jobType: 'intern' },
        { jobType: 'intern' }
      ];

      const result = store.UNIQUE_JOB_TYPES;
      expect(result).toEqual(new Set(['part-time', 'full-time', 'intern']));
    });
  });

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const userStore = useJobsStore();
        userStore.selectedOrganizations = [];

        const jobsStore = useJobsStore();
        const job = { organization: 'Google' };

        const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

        expect(result).toBe(true);
      });
    });

    it('identifies if job is associated with given organizations', () => {
      const userStore = useJobsStore();
      userStore.selectedOrganizations = ['Google', 'Microsoft'];

      const jobsStore = useJobsStore();
      const job = { organization: 'Google' };

      const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

      expect(result).toBe(true);
    });

    it('identifies if job is not associated with given organizations', () => {
      const userStore = useUserStore();
      userStore.selectedOrganizations = ['Google', 'Microsoft'];

      const jobsStore = useJobsStore();
      const job = { organization: 'OSIsoft' };

      const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

      expect(result).toBe(false);
    });
  });

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const userStore = useJobsStore();
        userStore.selectedJobTypes = [];

        const jobsStore = useJobsStore();
        const job = { jobType: 'intern' };

        const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

        expect(result).toBe(true);
      });
    });

    it('identifies if job is associated with given organizations', () => {
      const userStore = useJobsStore();
      userStore.selectedJobTypes = ['intern', 'full-time'];

      const jobsStore = useJobsStore();
      const job = { jobType: 'intern' };

      const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

      expect(result).toBe(true);
    });

    it('identifies if job is not associated with given organizations', () => {
      const userStore = useUserStore();
      userStore.selectedJobTypes = ['intern', 'full-time'];

      const jobsStore = useJobsStore();
      const job = { jobType: 'part-time' };

      const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

      expect(result).toBe(false);
    });
  });
});
