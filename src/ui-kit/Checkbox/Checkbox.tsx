import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  uiKitCheckbox,
  getUiKitCheckboxLabel,
  getUiKitCheckboxInput,
} from './Checkbox.style';

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({
  checked,
  disabled,
  children,
  onChange,
}: PropsWithChildren<CheckboxProps>) => {
  const [value, setValue] = useState(checked);

  const handleChange = useCallback(() => {
    const nextValue = !value;
    setValue(nextValue);
    onChange(nextValue);
  }, [value, onChange]);

  const id = useMemo(() => nanoid(), []);

  return (
    <div className={uiKitCheckbox}>
      <input
        id={id}
        type="checkbox"
        checked={value}
        disabled={disabled}
        aria-label="complete"
        aria-required="true"
        className={getUiKitCheckboxInput(disabled)}
        onChange={handleChange}
      />
      <label htmlFor={id} className={getUiKitCheckboxLabel(disabled)}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
