import { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-http';

export const useUsers = (options?: object) => {
  const [users, setUsers] = useState<User[]>([]);

  const { get, loading, error } = useFetch('/users', options);

  const fetchUsers = useCallback(() => {
    get('').then(setUsers);
  }, [get]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    fetchUsers,
  } as const;
};
