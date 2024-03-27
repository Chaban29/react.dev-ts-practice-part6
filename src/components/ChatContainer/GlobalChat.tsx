import { FC, useState } from 'react';
import { ContactList } from './ContactList';
import { IContacts } from './contacts';
import { contacts } from './contacts';
import { Chat } from './Chat';

export const GlobalChat: FC = () => {
  const [to, setTo] = useState<IContacts>(contacts[0]);
  return (
    <div>
      <ContactList contacts={contacts} onSelect={(contact) => setTo(contact)} />
      <Chat key={to.id} contact={to} />
    </div>
  );
};
