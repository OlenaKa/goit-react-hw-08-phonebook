import ContactForm from "../Components/ContactForm"
import Filter from "../Components/Filter"
import ContactList from "../Components/ContactList"

const ContactsView = () => (
  <>
   
    <h1> Phonebook </h1>
    <ContactForm />
    <h2> Contacts </h2>
    <Filter />

    <ContactList />
  </>
)

export default ContactsView
