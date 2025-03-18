import s from './Textarea.module.scss';

export const Textarea = ({ value, setText }: TextareaProps) => {
  return (
    <div className={`${s.textareaContainer}`}>
      <textarea
        value={value}
        onChange={(e) => setText(e.target.value)}
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