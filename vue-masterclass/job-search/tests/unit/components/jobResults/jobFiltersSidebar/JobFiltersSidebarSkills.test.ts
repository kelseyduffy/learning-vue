import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';

import { useUserStore } from '@/stores/user';

import JobFiltersSidebarSkills from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarSkills.vue';

describe('JobFiltersSidebarSkills', () => {
  const renderJobFiltersSidebarSkills = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();

    render(JobFiltersSidebarSkills, {
      global: {
        plugins: [pinia]
      }
    });

    return { userStore };
  };

  it('populates search input from store', async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = 'Programmer';
    const input = await screen.findByRole<HTMLInputElement>('textbox');
    expect(input.value).toBe('Programmer');
  });

  it('writes user input to store', async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = '';
    const input = screen.getByRole<HTMLInputElement>('textbox');
    await userEvent.type(input, 'V');
    await userEvent.click(document.body); // clicks outside of input to trigger .lazy input
    expect(userStore.UPDATE_SKILLS_SEARCH_TERM).toHaveBeenCalledWith('V');
  });

  // this test is arguably unnecessary because it's testing a vue functionality,
  // but at the same time, the test shouldn't care about the implementation
  it('removes whitespace from user input', async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = '';
    const input = await screen.findByRole<HTMLInputElement>('textbox');
    await userEvent.type(input, '    Vue Developer    ');
    await userEvent.click(document.body);
    expect(userStore.UPDATE_SKILLS_SEARCH_TERM).toHaveBeenCalledWith('Vue Developer');
  });
});
