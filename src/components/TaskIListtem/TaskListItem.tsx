import { memo, useCallback } from 'react';

import Checkbox from '../../ui-kit/Checkbox';

import { taskItem } from './TaskListItem.style';

export interface TaskListItemProps {
  task: Task;
  onCompleted: (id: number) => void;
}

const TaskListItem = ({ task, onCompleted }: TaskListItemProps) => {
  const toggleCompleted = useCallback(() => {
    onCompleted(task.id);
  }, [task, onCompleted]);

  return (
    <div className={taskItem}>
      <Checkbox
        checked={task.completed}
        disabled={task.completed}
        onChange={toggleCompleted}
      >
        {task.title}
      </Checkbox>
    </div>
  );
};

export default memo(TaskListItem);
