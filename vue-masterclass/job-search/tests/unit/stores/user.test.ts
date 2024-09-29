import { createPinia, setActivePinia } from 'pinia';

import { useUserStore } from '@/stores/user';

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('keeps track of if user is logged in', () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  });

  it('stores organizations that the user would like to filter jobs by', () => {
    const store = useUserStore();
    expect(store.selectedOrganizations).toEqual([]);
  });

  it('stores job types that the user would like to filter jobs by', () => {
    const store = useUserStore();
    expect(store.selectedJobTypes).toEqual([]);
  });

  it('stores degrees types that the user would like to filter jobs by', () => {
    const store = useUserStore();
    expect(store.selectedDegrees).toEqual([]);
  });

  it('stores users search term for skills and qualifications', () => {
    const store = useUserStore();
    expect(store.skillsSearchTerm).toEqual('');
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('LOGIN_USER', () => {
    it('logs in the user', () => {
      const store = useUserStore();
      store.LOGIN_USER();
      expect(store.isLoggedIn).toBe(true);
    });
  });

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations the user has chosen to filter jobs by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(['Org1', 'Org2']);
      expect(store.selectedOrganizations).toEqual(['Org1', 'Org2']);
    });
  });

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates selected job types the user has chosen to filter jobs by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_JOB_TYPES(['full-time', 'part-time']);
      expect(store.selectedJobTypes).toEqual(['full-time', 'part-time']);
    });
  });

  describe('ADD_SELECTED_DEGREES', () => {
    it('updates selected degrees the user has chosen to filter jobs by', () => {
      const store = useUserStore();
      store.ADD_SELECTED_DEGREES(["Master's", "Bachelor's"]);
      expect(store.selectedDegrees).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe('UPDATE_SKILLS_SEARCH_TERM', () => {
    it('receives search term for skills the user has entered', () => {
      const store = useUserStore();
      store.skillsSearchTerm = '';
      store.UPDATE_SKILLS_SEARCH_TERM('Vue');
      expect(store.skillsSearchTerm).toBe('Vue');
    });
  });

  describe('CLEAR_USER_JOB_FILTER_SELECTIONs', () => {
    it('removes all job filters that user has chosen', () => {
      const store = useUserStore();
      store.selectedDegrees = ['Random degree'];
      store.selectedJobTypes = ['Random job type'];
      store.selectedOrganizations = ['Random organization'];
      store.skillsSearchTerm = 'Vue developer';

      store.CLEAR_USER_JOB_FILTER_SELECTIONS();

      expect(store.selectedDegrees).toEqual([]);
      expect(store.selectedJobTypes).toEqual([]);
      expect(store.selectedOrganizations).toEqual([]);
      expect(store.skillsSearchTerm).toBe('');
    });
  });
});
