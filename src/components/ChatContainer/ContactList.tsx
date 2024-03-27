import { FC } from 'react';
import { IContacts } from './contacts';

interface IContactListProps {
  contacts: IContacts[];
  onSelect: (contact: IContacts) => void;
}

export const ContactList: FC<IContactListProps> = ({
  onSelect,
  contacts,
}: IContactListProps) => {
  return (
    <section className='contact-list'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button type='button' onClick={() => onSelect(contact)}>
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
