import { memo, useCallback, useEffect, useState } from 'react';

import { useUsers } from '../../hooks/users-hooks';

import UsersList from '../../components/UsersList';
import ErrorMessage from '../../components/ErrorMessage';
import { useUserTasks } from '../../hooks/tasks-hooks';
import UserTasksList from '../../components/UserTasksList';

import {
  dashboardContainer,
  dashboardLeftPane,
  dashboardRightPane,
  dashboardPaneTitle,
} from './Dashboard.style';

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState<User>();
  const usersState = useUsers();
  const userTasksState = useUserTasks(selectedUser);

  useEffect(() => {
    if (!usersState.users?.length) {
      return;
    }

    setSelectedUser(usersState.users?.[0]);
  }, [usersState]);

  const onTaskDone = useCallback(
    (id) => {
      userTasksState.updateTask(id, { completed: true });
    },
    [userTasksState],
  );

  const leftPaneElement = usersState.error ? (
    <ErrorMessage
      title="Error loading users"
      error={usersState.error}
      data-testid="dashboard-users-error"
    />
  ) : (
    <>
      <h2 className={dashboardPaneTitle}>Users</h2>
      <UsersList
        users={usersState.users}
        selectedUserId={selectedUser?.id}
        onSelect={setSelectedUser}
      />
    </>
  );

  const rightPaneElement = userTasksState.error ? (
    <ErrorMessage
      title="Error loading user`s tasks"
      error={userTasksState.error}
      data-testid="dashboard-tasks-error"
    />
  ) : (
    <>
      <h2 className={dashboardPaneTitle}>Tasks&nbsp;list</h2>
      <UserTasksList
        tasks={userTasksState.tasks}
        onTaskCompleted={onTaskDone}
      />
    </>
  );

  return (
    <div className={dashboardContainer}>
      <div className={dashboardLeftPane} data-testid="dashboard-left-pane">
        {leftPaneElement}
      </div>
      <div className={dashboardRightPane} data-testid="dashboard-right-pane">
        {rightPaneElement}
      </div>
    </div>
  );
};

export default memo(Dashboard);
