import { useState } from 'react';
import s from './Textarea.module.scss';

export const Textarea = ({ value, setText }: TextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={s.textareaContainer}>
      <textarea
          value={value}
          onChange={(e) => setText(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={s.textarea}
          placeholder="Напишите ваше предложение..."
          rows={4}
        />
    </div>
  );
};


interface TextareaProps {
  value: string;
  setText: (value: string) => void;
}