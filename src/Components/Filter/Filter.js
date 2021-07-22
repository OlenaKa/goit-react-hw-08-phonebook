import { connect } from "react-redux"
import { contactsActions } from "../../redux/contacts"
import PropTypes from "prop-types"

const Filter = ({ onInput }) => (
  <>
    <h2>Find contacts by name</h2>
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      onChange={onInput}
    />
  </>
)

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (e) => dispatch(contactsActions.filterContacts(e.target.value)),
  }
}

export default connect(null, mapDispatchToProps)(Filter)
