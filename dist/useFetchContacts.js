var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from 'react';
import Contacts from 'react-native-contacts';
/**
 * Custom hook to fetch contacts.
 * @param {boolean} enabled - Whether the contacts should be fetched.
 * @returns {object} - The contacts and loading state.
 */
export default function useFetchContacts(enabled = true) {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!enabled)
            return;
        const fetchContacts = () => __awaiter(this, void 0, void 0, function* () {
            setLoading(true);
            try {
                const contactList = yield Contacts.getAll();
                setContacts(contactList);
            }
            catch (err) {
                console.warn('Failed to fetch contacts', err);
            }
            finally {
                setLoading(false);
            }
        });
        fetchContacts();
    }, [enabled]);
    return { contacts, loading };
}
