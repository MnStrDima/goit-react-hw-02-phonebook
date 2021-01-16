import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteButtonClick }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            id={contact.id}
            className={styles.deleteButton}
            onClick={e => onDeleteButtonClick(e.target.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
}).isRequired;
