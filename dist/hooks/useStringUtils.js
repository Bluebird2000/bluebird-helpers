"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStringUtils = void 0;
const react_1 = require("react");
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
const useStringUtils = () => {
    const isEmpty = (0, react_1.useCallback)((str) => str.trim().length === 0, []);
    const trimString = (0, react_1.useCallback)((str) => str.trim(), []);
    const toUpperCase = (0, react_1.useCallback)((str) => str.toUpperCase(), []);
    const toLowerCase = (0, react_1.useCallback)((str) => str.toLowerCase(), []);
    const capitalizeFirstLetter = (0, react_1.useCallback)((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }, []);
    const hasSpecialCharacter = (0, react_1.useCallback)((text) => {
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
exports.useStringUtils = useStringUtils;
