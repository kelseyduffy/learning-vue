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
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('loginUser', () => {
    it('logs in the user', () => {
      const store = useUserStore();
      store.loginUser();
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
});
