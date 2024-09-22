import type { Mock } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import axios from 'axios';

import { useJobsStore } from '@/stores/jobs';
import { useUserStore } from '@/stores/user';
import { createJob } from '../../utils/createJob';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

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
      axiosGetMock.mockResolvedValue({ data: ['job 1', 'job 2'] });
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
        createJob({ organization: 'Google' }),
        createJob({ organization: 'Microsoft' }),
        createJob({ organization: 'Google' })
      ];

      const result = store.UNIQUE_ORGANIZATIONS;
      expect(result).toEqual(new Set(['Google', 'Microsoft']));
    });
  });

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const store = useJobsStore();
      store.jobs = [
        createJob({ jobType: 'part-time' }),
        createJob({ jobType: 'full-time' }),
        createJob({ jobType: 'intern' }),
        createJob({ jobType: 'intern' })
      ];

      const result = store.UNIQUE_JOB_TYPES;
      expect(result).toEqual(new Set(['part-time', 'full-time', 'intern']));
    });
  });

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const userStore = useUserStore();
        userStore.selectedOrganizations = [];

        const jobsStore = useJobsStore();
        const job = createJob({ organization: 'Google' });

        const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

        expect(result).toBe(true);
      });
    });

    it('identifies if job is associated with given organizations', () => {
      const userStore = useUserStore();
      userStore.selectedOrganizations = ['Google', 'Microsoft'];

      const jobsStore = useJobsStore();
      const job = createJob({ organization: 'Google' });

      const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

      expect(result).toBe(true);
    });

    it('identifies if job is not associated with given organizations', () => {
      const userStore = useUserStore();
      userStore.selectedOrganizations = ['Google', 'Microsoft'];

      const jobsStore = useJobsStore();
      const job = createJob({ organization: 'OSIsoft' });

      const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

      expect(result).toBe(false);
    });
  });

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const userStore = useUserStore();
        userStore.selectedJobTypes = [];

        const jobsStore = useJobsStore();
        const job = createJob({ jobType: 'intern' });

        const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

        expect(result).toBe(true);
      });
    });

    it('identifies if job is associated with given job types', () => {
      const userStore = useUserStore();
      userStore.selectedJobTypes = ['intern', 'full-time'];

      const jobsStore = useJobsStore();
      const job = createJob({ jobType: 'intern' });

      const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

      expect(result).toBe(true);
    });

    it('identifies if job is not associated with given job types', () => {
      const userStore = useUserStore();
      userStore.selectedJobTypes = ['intern', 'full-time'];

      const jobsStore = useJobsStore();
      const job = createJob({ jobType: 'part-time' });

      const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

      expect(result).toBe(false);
    });
  });
});

describe('INCLUDE_JOB_BY_DEGREE', () => {
  describe('when the user has not selected any degrees', () => {
    it('includes job', () => {
      const userStore = useUserStore();
      userStore.selectedDegrees = [];

      const jobsStore = useJobsStore();
      const job = createJob();

      const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job);

      expect(result).toBe(true);
    });
  });

  it('identifies if job is associated with given degrees', () => {
    const userStore = useUserStore();
    userStore.selectedDegrees = ["Master's"];

    const jobsStore = useJobsStore();
    const job = createJob({ degree: "Master's" });

    const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job);

    expect(result).toBe(true);
  });

  it('identifies if job is not associated with given degree', () => {
    const userStore = useUserStore();
    userStore.selectedDegrees = ["Bachelor's"];

    const jobsStore = useJobsStore();
    const job = createJob({ degree: "Master's" });

    const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job);

    expect(result).toBe(false);
  });
});
