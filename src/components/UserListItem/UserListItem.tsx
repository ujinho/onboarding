import { memo } from 'react';
import { getUserItemStyle } from './UserListItem.style';

export interface UserListItemProps {
  user: User;
  isActive?: boolean;
}

const UserListItem = ({ user, isActive }: UserListItemProps) => {
  const className = getUserItemStyle(isActive);

  return <div className={className}>{user.name}</div>;
};

export default memo(UserListItem);
