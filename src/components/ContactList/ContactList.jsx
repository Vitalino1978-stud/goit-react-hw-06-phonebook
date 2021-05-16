import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/contacts-actions';
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => (
  <ul className={css.contactList}>
          {contacts.map(contact => 
            <li className={css.contactListItem} >
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button type="button" onClick={() => deleteContact(contact.id)}>Delete contact</button>
            </li>)
          }
          
        
</ul>
)

const getVisibleContacts = (allContacts, filterContact) => {
  const normalizedFilter = filterContact.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filterContact } }) => {
  return {
    contacts: getVisibleContacts(items, filterContact),
  };
};

// const mapStateToProps = (state) => ({ contacts: state.contacts.items })
const mapDispatchToProps = dispatch => ({ deleteContact: id => dispatch(actions.deleteContact(id)),});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
