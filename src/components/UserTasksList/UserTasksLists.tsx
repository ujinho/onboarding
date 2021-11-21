import { memo } from 'react';
import TaskItem from '../TaskIListtem';

import { tasksList, tasksListItem } from './UserTasksList.style';

export interface UserTasksListProps {
  tasks: Task[];
  onTaskCompleted: (id: number) => void;
}

const UserTasksList = ({ tasks, onTaskCompleted }: UserTasksListProps) => {
  if (!tasks?.length) {
    return <>No&nbsp;tasks for&nbsp;this&nbsp;user</>;
  }

  return (
    <ul className={tasksList}>
      {tasks.map((task) => {
        return (
          <li key={task.id} className={tasksListItem}>
            <TaskItem task={task} onCompleted={onTaskCompleted} />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(UserTasksList);
