export const selectAllContacts = state => state.contacts?.items;

export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = (state) => {
  const normalizedFilter = state.filter.toLowerCase();
  return state.contacts.items?.filter(contact =>
    contact.name.toLowerCase() !== normalizedFilter
      ? contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
      : console.log('NO')
  );
}