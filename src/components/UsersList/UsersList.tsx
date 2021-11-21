import { memo, useCallback } from 'react';

import UserListItem, { UserListItemProps } from '../UserListItem';

import { usersList, userListItem } from './UsersList.style';

export interface UsersListProps {
  users: User[];
  selectedUserId?: number;
  onSelect: (user: User) => void;
}

const ItemWrapper = ({
  user,
  isActive,
  onSelect,
}: UserListItemProps & { onSelect: (user: User) => void }) => {
  const onClick = useCallback(() => {
    onSelect(user);
  }, [user, onSelect]);

  return (
    <li className={userListItem} onClick={onClick}>
      <UserListItem user={user} isActive={isActive} />
    </li>
  );
};

const UsersList = ({ users, selectedUserId, onSelect }: UsersListProps) => {
  return (
    <ul className={usersList}>
      {users?.map((user) => (
        <ItemWrapper
          key={user.id}
          user={user}
          isActive={selectedUserId === user.id}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default memo(UsersList);
