import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import MainNav from '@/components/navigation/MainNav.vue';
import { useUserStore } from '@/stores/user';

describe('MainNav', () => {
  const renderMainNav = () => {
    // stubActions = false uses a real user store instead of mocking it out
    // const pinia = createTestingPinia({ stubActions: false });

    const pinia = createTestingPinia();

    const $route = {
      name: 'Home'
    };

    render(MainNav, {
      // mocks a dom with specifically this component
      global: {
        plugins: [pinia],
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      },
      data() {
        return {
          company: 'Super Corp'
        };
      }
    });
  };

  it('displays company name', () => {
    renderMainNav();
    //screen.debug(); // can observe the component
    //const companyName = screen.getByText('Bobo Careers');
    const companyName = screen.getByText('Super Corp');
    console.log(companyName);
    expect(companyName).toBeInTheDocument();
  });

  it('displays menu items for navigation', () => {
    renderMainNav();
    const navigationMenuItems = screen.getAllByRole('listitem');
    const nagivationMenuTexts = navigationMenuItems.map((item) => item.textContent);
    console.log(nagivationMenuTexts);

    expect(nagivationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ]);
  });

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav();
      const userStore = useUserStore();

      let profileImage = screen.queryByRole('img', {
        // for images, 'name' is the alt text
        name: /user profile image/i //regular expression letting text be case insensitive
      });

      console.log(profileImage);
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        // for buttons, 'name' is the text on the button
        name: /sign in/i
      });
      userStore.isLoggedIn = true;
      await userEvent.click(loginButton); // needs to be awaited since it returns a promise, and could move on before the click occurs

      // requery it now that it's been clicked
      profileImage = screen.queryByRole('img', {
        // for images, 'name' is the alt text
        name: /user profile image/i //regular expression letting text be case insensitive
      });

      console.log(profileImage);
      expect(profileImage).toBeInTheDocument();
    });
  });
});
