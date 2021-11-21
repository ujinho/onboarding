import { memo } from 'react';
import { css } from '@emotion/css';

export interface ErrorMessageProps {
  title?: string;
  error?: string | Error;
}

const titleClassName = css`
  font-weigth: 500;
`;

const messageClassName = css`
  color: red;
`;

const ErrorMessage = ({ title, error }: ErrorMessageProps) => {
  if (!title && !error) {
    return null;
  }

  const message = error instanceof Error ? error?.message : error;

  return (
    <div>
      {title && <div className={titleClassName}>{title}</div>}
      {message && <div className={messageClassName}>{message}</div>}
    </div>
  );
};

export default memo(ErrorMessage);
