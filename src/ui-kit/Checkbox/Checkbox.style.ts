import { css } from '@emotion/css';

export const uiKitCheckbox = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const getUiKitCheckboxInput = (disabled) => {
  const cursor = disabled ? 'initial' : 'pointer';
  const uiKitCheckboxInput = css`
    transform: scale(1.4);
    cursor: ${cursor};
  `;

  return uiKitCheckboxInput;
};

export const getUiKitCheckboxLabel = (disabled) => {
  const cursor = disabled ? 'initial' : 'pointer';
  const uiKitCheckboxLabel = css`
    margin: 0 0 0 12px;
    cursor: ${cursor};
  `;

  return uiKitCheckboxLabel;
};
