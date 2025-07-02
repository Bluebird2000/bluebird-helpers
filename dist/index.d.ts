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
    maskSensitiveInfo: (str: string, visibleCount?: number) => string;
    getInitials: (name: string) => string;
    isValidEmail: (email: string) => boolean;
    normalizePhoneNumber: (phone: string) => string;
    isValidPhoneNumber: (phone: string, region?: string) => boolean;
    sanitizeInput: (input: string) => string;
    validatePasswordStrength: (password: string) => boolean;
    isValidCardNumber: (cardNumber: string) => boolean;
    slugify: (text: string) => string;
    generateReferenceID: (prefix?: string) => string;
    calculateAgeFromDOB: (dob: string) => number;
    removeWhitespace: (str: string) => string;
    reverseString: (str: string) => string;
    truncate: (str: string, length: number) => string;
    containsOnlyNumbers: (str: string) => boolean;
    containsOnlyLetters: (str: string) => boolean;
    extractNumbers: (str: string) => string[];
    extractEmails: (str: string) => string[];
    toCamelCase: (str: string) => string;
    toSnakeCase: (str: string) => string;
    countOccurrences: (str: string, char: string) => number;
    removeDuplicateWords: (str: string) => string;
    wordCount: (str: string) => number;
    sentenceCase: (str: string) => string;
    escapeRegExp: (str: string) => string;
    removeNonAlphanumeric: (str: string) => string;
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
