import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav, {
      data() {
        return {
          company: 'Super Corp'
        };
      }
    }); // mocks a dom with specifically this component
    //screen.debug(); // can observe the component
    //const companyName = screen.getByText('Bobo Careers');
    const companyName = screen.getByText('Super Corp');
    console.log(companyName);
    //expect(companyName).toBeInTheDocument();
  });
});
