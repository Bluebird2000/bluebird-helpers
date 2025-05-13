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
declare const useStringUtils: () => {
    isEmpty: (str: string) => boolean;
    trimString: (str: string) => string;
    toUpperCase: (str: string) => string;
    toLowerCase: (str: string) => string;
    capitalizeFirstLetter: (str: string) => string;
    hasSpecialCharacter: (text: string) => boolean;
};

/**
 * Utility for date formatting.
 * Provides various date-related functionalities like formatting, suffix handling, and relative day calculation.
 *
 * @returns {object} - Contains date formatting functions.
 */
declare const useDateUtils: () => {
    getDateInDDMMYYYY: (ts: number) => string;
    getDateInDDMonthYYYY: (ts: number) => string;
    getDateInReverseKebabCase: (ts: number) => string;
    getDateInSentence: (ts: number) => string;
    getRelativeDay: (timeStamp: number) => string;
    formatDate: (dateStr: string) => string;
    getRelativeTime: (timeStamp: string) => string;
};

export { useDateUtils, useStringUtils };
