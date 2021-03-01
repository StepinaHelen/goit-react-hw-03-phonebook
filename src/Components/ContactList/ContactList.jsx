import React from 'react';
import styles from './ContactList.module.css';
import ListItem from '../ListItem';

// cостояние хранится в ближайшем общем предке
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      <ListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};
export default ContactList;
