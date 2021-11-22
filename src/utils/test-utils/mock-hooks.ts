import * as usersHooks from '../../hooks/users-hooks';
import * as tasksHooks from '../../hooks/tasks-hooks';

export const mockUseUsers = (
  usersState: Partial<ReturnType<typeof usersHooks.useUsers>>,
) => {
  return (
    jest
      .spyOn(usersHooks, 'useUsers')
      // @ts-expect-error allow partial
      .mockReturnValue(usersState)
  );
};

export const mockUseUserTasks = (
  userTaskState: Partial<ReturnType<typeof tasksHooks.useUserTasks>>,
) => {
  return (
    jest
      .spyOn(tasksHooks, 'useUserTasks')
      // @ts-expect-error allow partial
      .mockReturnValue(userTaskState)
  );
};
