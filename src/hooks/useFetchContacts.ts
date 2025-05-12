import { useEffect, useState } from 'react';
import Contacts from 'react-native-contacts';

/**
 * Custom hook to fetch contacts.
 * @param {boolean} enabled - Whether the contacts should be fetched.
 * @returns {object} - The contacts and loading state.
 */
export default function useFetchContacts(enabled = true) {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const fetchContacts = async () => {
      setLoading(true);
      try {
        const contactList = await Contacts.getAll();
        setContacts(contactList);
      } catch (err) {
        console.warn('Failed to fetch contacts', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [enabled]);

  return { contacts, loading };
}
