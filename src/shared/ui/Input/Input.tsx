import type { ChangeEvent, FC } from 'react';
import { forwardRef } from 'react';
import cls from './Input.module.css';
import { classNames } from '../../lib/classNames/classNames';

interface InputProps {
  className?: string;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  ref?: any,
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
}, ref) => {
  return (
    <label className={classNames(cls.label, {}, [className || ''])}>
      <input
        className={classNames(cls.input, {}, [])}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        ref={ref}
      />
    </label>
  );
});