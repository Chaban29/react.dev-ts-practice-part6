import React, { ChangeEvent, FC, useState } from 'react';
import { IContacts } from './GlobalChat';

interface IChatProps {
  contact: IContacts;
}

export const Chat: FC<IChatProps> = ({ contact }: IChatProps) => {
  const [chatText, setChatText] = useState<string>('');

  const handleChatValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(event.target.value);
  };

  return (
    <section className='chat'>
      <textarea
        name='chat'
        id='chat'
        placeholder={`Chat to ${contact.name}`}
        value={chatText}
        onChange={handleChatValue}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
};
