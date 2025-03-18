import { useState } from 'react';
import s from './Input.module.scss';

interface AnimatedInputProps {
  placeholder: string;
  type?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<AnimatedInputProps> = ({
  placeholder,
  type = 'text',
  onChange,
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${s.inputContainer} ${ isFocused || value ? s.focused : ''}`}>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        required
      />
    </div>
  );
};