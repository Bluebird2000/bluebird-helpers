import Contacts from 'react-native-contacts';
/**
 * Custom hook to fetch contacts.
 * @param {boolean} enabled - Whether the contacts should be fetched.
 * @returns {object} - The contacts and loading state.
 */
export default function useFetchContacts(enabled?: boolean): {
    contacts: Contacts.Contact[];
    loading: boolean;
};
