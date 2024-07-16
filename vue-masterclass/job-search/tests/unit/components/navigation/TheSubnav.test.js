import { render, screen } from '@testing-library/vue';

import TheSubnav from '@/components/navigation/TheSubnav.vue';

describe('TheSubnav', () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          // "this.<LHS> replaced with <RHS>"
          $route: {
            name: routeName
          }
        },
        stubs: {
          // replace any font-awesome-icon component with a lightweight meaningless component
          FontAwesomeIcon: true
        }
      }
    });
  };

  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults';

      renderTheSubnav(routeName);

      const jobCount = screen.getByText('1653');

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      const routeName = 'NotJobResults';

      renderTheSubnav(routeName);

      const jobCount = screen.queryByText('1653');

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
