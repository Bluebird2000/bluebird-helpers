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
export declare const useStringUtils: () => {
    isEmpty: (str: string) => boolean;
    trimString: (str: string) => string;
    toUpperCase: (str: string) => string;
    toLowerCase: (str: string) => string;
    capitalizeFirstLetter: (str: string) => string;
    hasSpecialCharacter: (text: string) => boolean;
};
