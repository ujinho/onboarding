import { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-http';

export const useUserTasks = (user: User, options?: object) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { get, loading, error } = useFetch('/users', options);

  const fetchTasks = useCallback(
    (user) => {
      if (user == null) {
        return;
      }
      get(`/${user.id}/todos`).then(setTasks);
    },
    [get],
  );

  useEffect(() => {
    fetchTasks(user);
  }, [user, fetchTasks]);

  const updateTask = useCallback(
    (id: number, updates: Partial<Task>) => {
      /*
      put(`/${user.id}/todos/${id}`, updates).then((_patchedTask) => {
        const index = tasks.findIndex((task) => task.id === id);
        const nextTasks = [...tasks];
        nextTasks[index] = {
          ...tasks[index],
          ...updates, // <-- _patchedTask
        };
        setTasks(nextTasks);
      });
      */
      const index = tasks.findIndex((task) => task.id === id);
      const nextTasks = [...tasks];
      nextTasks[index] = {
        ...tasks[index],
        ...updates,
      };
      setTasks(nextTasks);
    },
    [tasks],
  );

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    updateTask,
  } as const;
};
