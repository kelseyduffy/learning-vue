import type { Mock } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { createTestingPinia } from '@pinia/testing';
import { useRouter } from 'vue-router';
vi.mock('vue-router');

import JobFiltersSidebarCheckboxGroup from '@/components/jobResults/jobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue';

const useRouterMock = useRouter as Mock;

describe('JobFiltersSidebarJobTypes', () => {
  interface JobFiltersSidebarCheckboxGroupProps {
    header: string;
    uniqueValues: Set<string>;
    action: Mock;
  }

  const createProps = (
    props: Partial<JobFiltersSidebarCheckboxGroupProps> = {}
  ): JobFiltersSidebarCheckboxGroupProps => ({
    header: 'Some header',
    uniqueValues: new Set(['valueA', 'valueB']),
    action: vi.fn(),
    ...props
  });

  const renderJobFiltersSidebarCheckboxGroup = (props: JobFiltersSidebarCheckboxGroupProps) => {
    const pinia = createTestingPinia();

    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props
      },
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
  };
  it('renders unique list of values', async () => {
    const props = createProps({
      header: 'Job Types',
      uniqueValues: new Set(['intern', 'part-time', 'full-time'])
    });
    renderJobFiltersSidebarCheckboxGroup(props);

    const button = screen.getByRole('button', { name: /job types/i });
    await userEvent.click(button);

    const jobTypesListItems = screen.getAllByRole('listitem');
    const jobTypes = jobTypesListItems.map((node) => node.textContent);
    expect(jobTypes).toEqual(['intern', 'part-time', 'full-time']);
  });

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for value', async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() });
      const action = vi.fn();
      const props = createProps({
        header: 'Job types',
        uniqueValues: new Set(['intern', 'part-time', 'full-time']),
        action
      });
      renderJobFiltersSidebarCheckboxGroup(props);

      const button = screen.getByRole('button', { name: /job types/i });
      await userEvent.click(button);

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
        header: 'Job Types',
        uniqueValues: new Set(['intern'])
      });
      renderJobFiltersSidebarCheckboxGroup(props);

      const button = screen.getByRole('button', { name: /job types/i });
      await userEvent.click(button);

      const internCheckbox = screen.getByRole('checkbox', {
        name: /intern/i
      });
      await userEvent.click(internCheckbox);

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' });
    });
  });
});
