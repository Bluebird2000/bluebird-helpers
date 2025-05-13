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
  const isEmpty = (str: string): boolean => str.trim().length === 0;

  const trimString = (str: string): string => str.trim();

  const toUpperCase = (str: string): string => str.toUpperCase();

  const toLowerCase = (str: string): string => str.toLowerCase();

  const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const hasSpecialCharacter = (text: string): boolean => {
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
