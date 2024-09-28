import type { Mock } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';
import { useRouter } from 'vue-router';
vi.mock('vue-router');

import JobFiltersSidebarCheckboxGroup from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';
import { useUserStore } from '@/stores/user';

const useRouterMock = useRouter as Mock;

describe('JobFiltersSidebarJobTypes', () => {
  interface JobFiltersSidebarCheckboxGroupProps {
    uniqueValues: Set<string>;
    action: Mock;
  }

  const createProps = (
    props: Partial<JobFiltersSidebarCheckboxGroupProps> = {}
  ): JobFiltersSidebarCheckboxGroupProps => ({
    uniqueValues: new Set(['valueA', 'valueB']),
    action: vi.fn(),
    ...props
  });

  const renderJobFiltersSidebarCheckboxGroup = (props: JobFiltersSidebarCheckboxGroupProps) => {
    const pinia = createTestingPinia({ stubActions: false });
    const userStore = useUserStore();

    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props
      },
      global: {
        plugins: [pinia]
      }
    });

    return { userStore };
  };
  it('renders unique list of values', () => {
    const props = createProps({
      uniqueValues: new Set(['intern', 'part-time', 'full-time'])
    });
    renderJobFiltersSidebarCheckboxGroup(props);

    const jobTypesListItems = screen.getAllByRole('listitem');
    const jobTypes = jobTypesListItems.map((node) => node.textContent);
    expect(jobTypes).toEqual(['intern', 'part-time', 'full-time']);
  });

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for value', async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() });
      const action = vi.fn();
      const props = createProps({
        uniqueValues: new Set(['intern', 'part-time', 'full-time']),
        action
      });
      renderJobFiltersSidebarCheckboxGroup(props);

      const internCheckbox = screen.getByRole('checkbox', {
        name: /intern/i
      });
      await userEvent.click(internCheckbox);

      expect(action).toHaveBeenCalledWith(['intern']);
    });

    it('navigates user to job results page to see fresh batch of filtered jobs', async () => {
      const push = vi.fn();
      useRouterMock.mockReturnValue({ push });
      const props = createProps({
        uniqueValues: new Set(['intern'])
      });
      renderJobFiltersSidebarCheckboxGroup(props);

      const internCheckbox = screen.getByRole('checkbox', {
        name: /intern/i
      });
      await userEvent.click(internCheckbox);

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' });
    });
  });

  describe('when user clears job filters', () => {
    it('unchecks any checked checkboxes', async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() });
      const props = createProps({
        uniqueValues: new Set(['intern'])
      });
      const { userStore } = renderJobFiltersSidebarCheckboxGroup(props);
      const internCheckboxBeforeAction = screen.getByRole<HTMLInputElement>('checkbox', {
        name: /intern/i
      });
      await userEvent.click(internCheckboxBeforeAction);

      expect(internCheckboxBeforeAction.checked).toBe(true);

      userStore.CLEAR_USER_JOB_FILTER_SELECTIONS();

      const internCheckboxAfterAction = await screen.findByRole<HTMLInputElement>('checkbox', {
        name: /intern/i
      });

      expect(internCheckboxAfterAction.checked).toBe(false);
    });
  });
});
