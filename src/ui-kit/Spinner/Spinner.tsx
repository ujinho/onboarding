import { memo } from 'react';
import { css } from '@emotion/css';

import SpinnerImplementation from 'react-spinners/BeatLoader';

export interface SpinnerProps {
  loading: boolean;
  size?: number;
  color?: string;
}

const uiKitSpinnerWrapper = css`
  margin: 0 auto;
  padding: 200px;
  display: block;
  text-align: center;
`;

export const Spinner = ({
  loading,
  size = 48,
  color = 'lightblue',
}: SpinnerProps) => {
  const uiKitSpinner = css`
    border-color: ${color};
  `;

  return (
    <div className={uiKitSpinnerWrapper}>
      <SpinnerImplementation
        css={uiKitSpinner}
        size={size}
        color={color}
        loading={loading}
      />
    </div>
  );
};

export default memo(Spinner);
