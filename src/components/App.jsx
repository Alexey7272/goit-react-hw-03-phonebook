import React, {Component} from "react";
import ContactEditor from './ContactEditor';
import ContactList from "./ContactList";
import Filter from "./Filter";
import styles from "./PhoneBook.module.css";
import shortid from "shortid";

export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const alreadyContacts = this.chekIfContactsExists(name)

    if(alreadyContacts) {
      alert(`${name} is already in contacts`)
      return
    };

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

  };

  handleFilter = queue => {
    queue ? this.setState({ filter: queue }) : this.setState({ filter: '' });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return filteredContacts;
  };

  chekIfContactsExists = queue =>  {
    const { contacts } = this.state;

    return contacts.some(contact => contact.name === queue);
  };

  removeContacts = (id) => {
      console.log(id)

      this.setState(({contacts}) => {
        return {
          contacts: contacts.filter(contact => contact.id !== id)
        }
      })
  };

  render () {
    return (
      <div>
        <h1 className={styles.Contacts__title}>Phonebook</h1>
        <ContactEditor onSubmit={this.addContact}/>
        <h2 className={styles.Contacts__title}>Contacts</h2>
        <Filter filterQueue={this.handleFilter}/>
        <ContactList contacts={this.showFilteredContacts()} onRemoveContact={this.removeContacts}/>
      </div>
    );
  };
};