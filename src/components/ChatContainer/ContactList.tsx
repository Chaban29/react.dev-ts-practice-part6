import { FC } from 'react';
import { IContacts } from './GlobalChat';

interface IContactList {
  selectedContact: IContacts;
  contacts: IContacts[];
  onSelect: (contact: IContacts) => void;
}

export const ContactList: FC<IContactList> = ({
  selectedContact,
  contacts,
  onSelect,
}: IContactList) => {
  return (
    <section className='contact-list'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
