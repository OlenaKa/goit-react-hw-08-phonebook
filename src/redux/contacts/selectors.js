import { createSelector } from "@reduxjs/toolkit"

const getContacts = (state) => state.contacts.items
const getFilter = (state) => state.contacts.filter
const getloading = (state) => state.contacts.loader

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
)

export default { getContacts, getFilter, getFilteredContacts, getloading }
