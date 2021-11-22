import { css } from '@emotion/css';

export const getUserItemStyle = (isActive) => {
  const borderColor = isActive ? 'darkgrey' : 'transparent';
  return css`
    padding: 12px;
    border-left: 4px solid ${borderColor};
    outline: none;
    background: white;
  `;
};
