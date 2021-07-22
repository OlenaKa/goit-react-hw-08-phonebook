import PropTypes from "prop-types"
import { Component } from "react"
import { connect } from "react-redux"
import { contactsOperations } from "../../redux/contacts"
import store from "../../redux/store"
import "./ContactForm.css"

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const number = e.target[1].value

    this.props.onSubmit(name, number)

    e.target[0].value = ""
    e.target[1].value = ""
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="name-label">
          Name{" "}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>

        <label className="number-label">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => {
    const state = store.store.getState()
    state.contacts.items.some((item) => item.name === name)
      ? alert("ups, this name is on the list already")
      : dispatch(contactsOperations.addContact(name, number))
  },
})

export default connect(null, mapDispatchToProps)(ContactForm)
