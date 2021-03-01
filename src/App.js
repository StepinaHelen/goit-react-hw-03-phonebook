import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './Components/Container';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //  в onClick передавать не будем,  стрелочной функцией не делать!
  componentDidUpdate(prevProps, prevState, snapshot) {
    // setState  можно вызывать только по условию , чтобы не было зацикливания
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const persedContacts = JSON.parse(contacts);
    if (persedContacts) {
      this.setState({ contacts: persedContacts });
    }
  }
  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
      filter: '',
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
      filter: '',
    }));
  };

  handleInputSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getfilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <Filter filter={filter} onHandleInputSearch={this.handleInputSearch} />

        <ContactList
          contacts={this.getfilterContact()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
