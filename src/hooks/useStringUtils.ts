import { useCallback } from 'react';

/**
 * Hook for string manipulation utilities.
 * Provides various string-related functionalities like checking for empty strings, trimming, etc.
 *
 * @returns {object} - Contains string manipulation functions.
 * @example
 * const { isEmpty, trimString, hasSpecialCharacter } = useStringUtils();
 * console.log(isEmpty('test')); // Output: false
 * console.log(trimString('  test  ')); // Output: 'test'
 * console.log(hasSpecialCharacter('Hello@World')); // Output: true
 */
export const useStringUtils = () => {
  const isEmpty = useCallback((str: string): boolean => str.trim().length === 0, []);

  const trimString = useCallback((str: string): string => str.trim(), []);

  const toUpperCase = useCallback((str: string): string => str.toUpperCase(), []);

  const toLowerCase = useCallback((str: string): string => str.toLowerCase(), []);

  const capitalizeFirstLetter = useCallback((str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }, []);

  const hasSpecialCharacter = useCallback((text: string): boolean => {
    const matchSpecialCharacters = /[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~ +]/;
    return matchSpecialCharacters.test(text);
  }, []);

  return {
    isEmpty,
    trimString,
    toUpperCase,
    toLowerCase,
    capitalizeFirstLetter,
    hasSpecialCharacter
  };
};
