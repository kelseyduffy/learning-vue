import { nextTick } from 'vue';
import { render, screen } from '@testing-library/vue';

import TheHeadline from '@/components/jobSearch/TheHeadline.vue';

describe('TheHeadline', () => {
  describe('Vitest playground demoing vi.fn', () => {
    // demos how to track if a mock function was called
    it('tracks whether it has been called', () => {
      const mockFunction = vi.fn();
      mockFunction(1, 2);
      //expect(mockFunction).toHaveBeenCalled();
      expect(mockFunction).toHaveBeenCalledWith(1, 2);
    });
  });

  describe('Headline tests', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      // revert the mocked timers back to the real timers
      vi.useRealTimers();
    });
    it('displays introductory action verb', () => {
      render(TheHeadline);

      const actionPhrase = screen.getByRole('heading', {
        name: /build for everyone/i
      });
      expect(actionPhrase).toBeInTheDocument();
    });

    it('changes action verb at a consistent interval', () => {
      const mock = vi.fn();
      vi.stubGlobal('setInterval', mock);

      render(TheHeadline);

      expect(mock).toHaveBeenCalled();
    });

    it('swaps action verb after interval', async () => {
      render(TheHeadline);
      vi.advanceTimersToNextTimer();

      // needs time to actual rerender the dom before moving on. this will fail as is
      // const actionPhase = screen.getByRole("heading", {
      //     name: /create for everyone/i
      // })

      await nextTick(); // waits until the component is done rerendering
      const actionPhase = screen.getByRole('heading', {
        name: /create for everyone/i
      });

      expect(actionPhase).toBeInTheDocument();
    });

    it('removes interval when component disappears', () => {
      const clearInterval = vi.fn();
      vi.stubGlobal('clearInterval', clearInterval);

      const { unmount } = render(TheHeadline);
      unmount();
      expect(clearInterval).toHaveBeenCalled();

      vi.unstubAllGlobals();
    });
  });
});
