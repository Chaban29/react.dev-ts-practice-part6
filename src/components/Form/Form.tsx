import { ChangeEvent, FC, useState } from 'react';

export const Form: FC = () => {
  const [text, setText] = useState<string>('');

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return <textarea value={text} onChange={handleTextareaChange}></textarea>;
};
