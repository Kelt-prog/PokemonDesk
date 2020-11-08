/* eslint-disable no-shadow */
import React from 'react';

import s from './Button.module.scss';

export enum ButtonSize {
  small = 'small',
  normal = 'normal',
}

export enum ButtonColors {
  yellow = 'yellow',
  green = 'green',
}
interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColors;
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
  const classes: Array<string> = [s.root, s[color], s[size], isFullWidth ? s.fullWidth : ''];

  return (
    <button type="button" className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
