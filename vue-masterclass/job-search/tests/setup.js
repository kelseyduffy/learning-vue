import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

afterEach(() => {
  // will clean up the dom created for the UI mocking
  cleanup();
});
