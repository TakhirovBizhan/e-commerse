import React, { useState } from 'react';
import './Button.css';
import Loader from '../Loader';
import Text from '../Text';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children?: React.ReactNode;
};


const Button: React.FC<ButtonProps> = ({ loading=false, children = 'send', ...props}) => {

  const [isLoading, setIsLoading] = useState(loading)

  return (
    <button disabled={isLoading ? true : false} {...props} onClick={() => setIsLoading(true)}>
      <span>{isLoading ? <Loader className={'button_loader'} size="s" /> : ''}</span>
      <Text view='button'>{children}</Text>
    </button>
  );
};

export default Button;
