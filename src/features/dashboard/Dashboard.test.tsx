import '@testing-library/jest-dom';
import 'regenerator-runtime';
import 'cross-fetch/polyfill';
import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  mockUseUsers,
  mockUseUserTasks,
} from '../../utils/test-utils/mock-hooks';

import Dashboard from './Dashboard';

global.React = React;

afterEach(() => {
  jest.resetAllMocks();
});

describe('Data is ready', () => {
  const users: Partial<User>[] = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
  ];

  const tasks: Partial<Task>[] = [
    {
      id: 1,
      title: 'Task #1',
    },
    {
      id: 2,
      title: 'Task #2',
    },
  ];

  beforeAll(() => {
    mockUseUsers({
      // @ts-expect-error allow partial
      users,
      loading: false,
      error: null,
    });

    mockUseUserTasks({});
  });

  it('must display users` names in a left pane', async () => {
    render(<Dashboard />);

    const leftPane = await screen.findByTestId('dashboard-left-pane');

    expect(leftPane).toHaveTextContent('John Doe');
    expect(leftPane).toHaveTextContent('Jane Doe');
  });

  describe('Tasks data is ready', () => {
    beforeAll(() => {
      mockUseUsers({
        // @ts-expect-error allow partial
        users,
        error: null,
      });

      mockUseUserTasks({
        tasks,
        error: null,
      });
    });

    it('must display tasks in a right panel', async () => {
      render(<Dashboard />);

      const rightPane = await screen.findByTestId('dashboard-right-pane');
      console.log(screen.debug());

      expect(rightPane).toHaveTextContent('Task #1');
      expect(rightPane).toHaveTextContent('Task #2');
    });
  });
});

describe('Errors', () => {
  describe('Error while fetching users', () => {
    beforeAll(() => {
      mockUseUsers({
        users: [],
        error: new Error('Fetch error'),
      });

      mockUseUserTasks({});
    });

    it('must display error message in a left pane', async () => {
      render(<Dashboard />);

      const leftPane = await screen.findByTestId('dashboard-left-pane');

      expect(leftPane).toHaveTextContent('Error loading users');
      expect(leftPane).toHaveTextContent('Fetch error');
    });
  });

  describe('Error while fetching users', () => {
    beforeAll(() => {
      mockUseUsers({
        users: [],
        error: null,
      });

      mockUseUserTasks({
        tasks: [],
        error: new Error('Unauthorized'),
      });
    });

    it('must display error message in a right pane', async () => {
      render(<Dashboard />);

      const rightPane = await screen.findByTestId('dashboard-right-pane');

      expect(rightPane).toHaveTextContent('Error loading user`s tasks');
      expect(rightPane).toHaveTextContent('Unauthorized');
    });
  });
});
