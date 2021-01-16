import { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = contactObj => {
    const contacts = Object.values(this.state.contacts);
    if (contacts.some(({ name }) => name === contactObj.name)) {
      return alert(`${contactObj.name} already exists in your phonebook`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactObj],
      };
    });
  };

  handleFilterChange = filter => {
    this.setState({
      filter,
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContactsList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContactsList = this.getFilteredContactsList();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        {filteredContactsList.length >= 1 && (
          <Filter
            initialValue={filter}
            onFilterChange={this.handleFilterChange}
          />
        )}
        <ContactList
          contacts={filteredContactsList}
          onDeleteButtonClick={this.handleDeleteContact}
        />
      </div>
    );
  }
}
