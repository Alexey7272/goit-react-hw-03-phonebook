// import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from "./PhoneBook.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
    <ul className={styles.Contacts__list}>
        {contacts.map(( {id, name, number} ) => ( 
            <li key={id} className={styles.Contacts__item}>
                {name}: {number}

                <button 
                  onClick={() => {onRemoveContact(id)}} 
                  className={styles.Contacts__button}
                >
                  Delete
                </button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;