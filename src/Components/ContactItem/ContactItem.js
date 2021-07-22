import PropTypes from "prop-types"
import "./ContactItem.css"
import { connect } from "react-redux"
import { contactsOperations } from "../../redux/contacts"

const ContactItem = ({ contacts, onDelete }) =>
  contacts.map((contact) => (
    <li key={contact.id} className="contactItem">
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className="delete-contact-btn"
      >
        Delete
      </button>
    </li>
  ))

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
})

export default connect(null, mapDispatchToProps)(ContactItem)
