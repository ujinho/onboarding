import { css } from '@emotion/css';

export const getUserItemStyle = (isActive) => {
  const borderColor = isActive ? 'darkgrey' : 'transparent';
  return css`
    padding: 8px;
    border-top: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};
    outline: none;
    background: white;
  `;
};
