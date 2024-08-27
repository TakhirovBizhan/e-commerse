import React, { useCallback } from 'react';
import cn from 'classnames';
import './Input.css';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ afterSlot, value, onChange, className, disabled, ...props }, ref) => {
    const handleOnChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
      },
      [onChange] 
    );

    return (
      <label className={cn(className, 'input', disabled && 'input_disabled')}>
        <input
          type='text'
          value={value}
          placeholder={props.placeholder}
          disabled={disabled}
          onChange={handleOnChange}
          ref={ref}
          {...props}
        />
        {afterSlot && <div className='input_after_slot'>{afterSlot}</div>}
      </label>
    );
  }
);

export default Input;
