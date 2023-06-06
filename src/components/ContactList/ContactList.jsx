import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

import { List } from './ContactList.styled';
import { ContactItem } from './CotactItem';
import { fetchContacts } from 'redux/contactsOperations';
import { getContactsItems } from 'redux/contactsSelectors';
import { getFilter } from 'redux/filterSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      Notiflix.Notify.warning(
        'No contacts matching your request',
        notifySettings
      );
      return [];
    }
    return filteredContacts;
  };

  return (
    <>
      <List>
        {filterContacts().map(contact => {
          return (
            <ContactItem
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </List>
    </>
  );
};