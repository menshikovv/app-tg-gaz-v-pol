import { useState } from 'react';
import s from './Input.module.scss';

interface AnimatedInputProps {
  placeholder: string;
  type?: string;
  onChange?: (value: string) => void;
  value?: string
}

export const Input = ({
  placeholder,
  type = 'text',
  onChange,
  value,
}: AnimatedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`${s.inputContainer} ${ isFocused || value ? s.focused : ''}`}>
      <input
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        required
      />
    </div>
  );
};