/**
 * Utility module for string manipulation.
 * Provides various string-related functionalities like checking for empty strings, trimming, etc.
 *
 * @returns {object} - Contains string manipulation functions.
 * @example
 * const { isEmpty, trimString, hasSpecialCharacter } = stringUtils();
 * console.log(isEmpty('test')); // Output: false
 * console.log(trimString('  test  ')); // Output: 'test'
 * console.log(hasSpecialCharacter('Hello@World')); // Output: true
 */
export const useStringUtils = () => {
    const isEmpty = (str) => str.trim().length === 0;
    const trimString = (str) => str.trim();
    const toUpperCase = (str) => str.toUpperCase();
    const toLowerCase = (str) => str.toLowerCase();
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const hasSpecialCharacter = (text) => {
        const matchSpecialCharacters = /[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~ +]/;
        return matchSpecialCharacters.test(text);
    };
    return {
        isEmpty,
        trimString,
        toUpperCase,
        toLowerCase,
        capitalizeFirstLetter,
        hasSpecialCharacter,
    };
};
