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
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('logs in the user', () => {
    const store = useUserStore();
    store.loginUser();
    expect(store.isLoggedIn).toBe(true);
  });
});