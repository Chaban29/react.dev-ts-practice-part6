import { ChangeEvent, FC, useState } from 'react';
import { IContacts } from './contacts';

interface IChatProps {
  contact: IContacts;
}

export const Chat: FC<IChatProps> = ({ contact }: IChatProps) => {
  const [chatText, setChatText] = useState<string>('');

  const handleTextareaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(event.target.value);
  };

  return (
    <section className='chat'>
      <textarea
        placeholder={`Chat to ${contact.name}`}
        value={chatText}
        onChange={handleTextareaValue}
      />
      <button type='button'>Send to {contact.email}</button>
    </section>
  );
};
