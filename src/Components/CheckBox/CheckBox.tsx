import React, { useCallback } from 'react';
import cn from 'classnames';
import './Checkbox.css';
import CheckIcon from '../icons/CheckIcon';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked = false, onChange, disabled, className }) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(event.target.checked);
    },
    [onChange]
  );

  return (
    <label className={cn(className, 'checkbox', disabled && 'checkbox_disabled')}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      {checked && <CheckIcon color={disabled ? 'secondary' : 'accent'} width={40} height={40}/>}
    </label>
  );
};

export default CheckBox;
