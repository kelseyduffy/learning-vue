import { render, screen } from '@testing-library/vue';

import TheSubnav from '@/components/navigation/TheSubnav.vue';

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      const $route = {
        name: 'JobResults'
      };

      render(TheSubnav, {
        global: {
          mocks: {
            // "this.<LHS> replaced with <RHS>"
            $route
          },
          stubs: {
            // replace any font-awesome-icon component with a lightweight meaningless component
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          };
        }
      });

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      const $route = {
        name: 'NotJobResults'
      };

      render(TheSubnav, {
        global: {
          mocks: {
            // "this.<LHS> replaced with <RHS>"
            $route
          }
        }
      });

      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
