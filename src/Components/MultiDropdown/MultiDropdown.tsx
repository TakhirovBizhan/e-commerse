import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import cn from 'classnames';
import './MultiDropDown.css';
import Text from '../Text';


export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({ className, options, value, onChange, disabled, getTitle }) => {

  const WrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true)
  }


  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!WrapperRef.current?.contains(e.target as HTMLElement)) {
        setIsOpen(false)
      }
    };
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setFilter('')
    }
  }, [isOpen])

  const title = useMemo(() => getTitle(value), [getTitle, value]);

  const isEmpty = value.length === 0;

  const filteredOptions = useMemo(() => {
    const str = filter.toLocaleLowerCase();

    return options.filter(
      (o) => o.value.toLocaleLowerCase().indexOf(str) === 0
    )
  }, [filter, options]);

  const selectedKeysSet = useMemo<Set<Option['key']>>(
    () => new Set(value.map(({ key }) => key)),
    [value]
  );

  const onSelect = useCallback(
    (option: Option) => {
      if (disabled) {
        return;
      }

      if (selectedKeysSet.has(option.key)) {
        onChange([...value].filter(({ key }) => key !== option.key))
      } else {
        onChange([...value, option])
      }

      ref.current?.focus();
    },
    [disabled, onChange, value, selectedKeysSet]
  );

  const opened = isOpen && !disabled;

  return (
    <div className={cn(className, 'multi-dropdown')} ref={WrapperRef}>
      <Input
        className='multi-dropdown_input'
        value={opened ? filter : isEmpty ? '' : title}
        onChange={setFilter}
        placeholder={title}
        onClick={open}
        afterSlot={<ArrowDownIcon color="secondary" />}
        disabled={disabled}
        ref={ref}
      >
      </Input>
      {opened && (
        <div className='multi-dropdown_list'>

          {filteredOptions.map((option) => (
            <button
              className={cn('multi-dropdown_item', selectedKeysSet.has(option.key) &&
                'multi-dropdown_item_selected')}
              key={option.key}
              onClick={() => {
                onSelect(option);
              }}
            >
              <Text view='p-16'>{option.value}</Text>
            </button>
          ))}
        </div>
      )}
    </div>
  )
};

export default MultiDropdown;
