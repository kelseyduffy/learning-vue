import { nextTick } from 'vue';
import { render, screen } from '@testing-library/vue';

import TheHeadline from '@/components/TheHeadline.vue';

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
    it('displays introductory action verb', () => {
      vi.useFakeTimers();
      render(TheHeadline);

      const actionPhrase = screen.getByRole('heading', {
        name: /build for everyone/i
      });
      expect(actionPhrase).toBeInTheDocument();

      // revert the mocked timers back to the real timers
      vi.useRealTimers();
    });

    it('changes action verb at a consistent interval', () => {
      vi.useFakeTimers();
      const mock = vi.fn();
      vi.stubGlobal('setInterval', mock);

      render(TheHeadline);

      expect(mock).toHaveBeenCalled();

      vi.useRealTimers();
    });

    it('swaps action verb after interval', async () => {
      vi.useFakeTimers();
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

      vi.useRealTimers();
    });

    it('removes interval when component disappears', () => {
      vi.useFakeTimers();
      const clearInterval = vi.fn();
      vi.stubGlobal('clearInterval', clearInterval);

      const { unmount } = render(TheHeadline);
      unmount();
      expect(clearInterval).toHaveBeenCalled();
      vi.useRealTimers();
      vi.unstubAllGlobals();
    });
  });
});
