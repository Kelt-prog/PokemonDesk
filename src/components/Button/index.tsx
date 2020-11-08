import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  size?: 'small' | 'normal';
  color?: 'green' | 'yellow';
  isFullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'normal',
  color = 'green',
  isFullWidth = false,
}) => {
  return (
    <button type="button" className={cn(s.root, isFullWidth && s.fullWidth, s[color], s[size])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
