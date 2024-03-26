import { FC, useState } from 'react';
import { ContactList } from './ContactList';
import { Chat } from './Chat';

export interface IContacts {
  id: number;
  name: string;
  email: string;
}

const contacts: IContacts[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export const GlobalChat: FC = () => {
  const [to, setTo] = useState<IContacts>(contacts[0]);
  return (
    <>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </>
  );
};
