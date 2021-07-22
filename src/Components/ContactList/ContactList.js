import PropTypes from "prop-types"
import ContactItem from "../ContactItem"
import { connect } from "react-redux"
import { contactsOperations, contactsSelectors } from "../../redux/contacts"
import { Component } from "react"

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }
  render() {
    return (
      <>
        {this.props.loader && <h1>Loading...</h1>}
        {!this.props.loader && (
          <ul>
            <ContactItem contacts={this.props.contacts} />
          </ul>
        )}
      </>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getFilteredContacts(state),
    loader: contactsSelectors.getloading(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
