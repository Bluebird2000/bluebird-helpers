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

  const maskSensitiveInfo = (str: string, visibleCount = 4): string => {
    return str.length <= visibleCount
      ? "*".repeat(str.length)
      : "*".repeat(str.length - visibleCount) + str.slice(-visibleCount);
  };

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  };

  const isValidEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const normalizePhoneNumber = (phone: string): string => {
    return phone.replace(/\D/g, "").replace(/^0/, "+234");
  };

  const isValidPhoneNumber = (
    phone: string,
    region: string = "US"
  ): boolean => {
    const regex = /^\+?[1-9]\d{1,14}$/; // Basic E.164 pattern
    return regex.test(phone);
  };

  const validatePasswordStrength = (password: string): boolean => {
    // Minimum 8 characters, at least one uppercase, lowercase, number, and symbol
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return regex.test(password);
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>{}[\]/]/g, "");
  };

  const isValidCardNumber = (cardNumber: string): boolean => {
    const clean = cardNumber.replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;
    for (let i = clean.length - 1; i >= 0; i--) {
      let digit = parseInt(clean[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };

  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const generateReferenceID = (prefix = "REF"): string => {
    return `${prefix}-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substring(2, 6)}`;
  };

  const calculateAgeFromDOB = (dob: string): number => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    return Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
  };

  const removeWhitespace = (str: string): string => str.replace(/\s+/g, "");

  const reverseString = (str: string): string =>
    str.split("").reverse().join("");

  const truncate = (str: string, length: number): string =>
    str.length > length ? str.slice(0, length) + "..." : str;

  const containsOnlyNumbers = (str: string): boolean => /^\d+$/.test(str);

  const containsOnlyLetters = (str: string): boolean => /^[A-Za-z]+$/.test(str);

  const extractNumbers = (str: string): string[] => str.match(/\d+/g) || [];

  const extractEmails = (str: string): string[] =>
    str.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) || [];

  const toCamelCase = (str: string): string =>
    str
      .replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^./, (c) => c.toLowerCase());

  const toSnakeCase = (str: string): string =>
    str
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .join("_")
      .toLowerCase();

  const countOccurrences = (str: string, char: string): number =>
    str.split(char).length - 1;

  const removeDuplicateWords = (str: string): string => {
    const words = str.split(/\s+/);
    return [...new Set(words)].join(" ");
  };

  const wordCount = (str: string): number =>
    str.trim().split(/\s+/).filter(Boolean).length;

  const sentenceCase = (str: string): string =>
    str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

  const escapeRegExp = (str: string): string =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const removeNonAlphanumeric = (str: string): string =>
    str.replace(/[^a-zA-Z0-9]/g, "");

  return {
    isEmpty,
    trimString,
    toUpperCase,
    toLowerCase,
    capitalizeFirstLetter,
    hasSpecialCharacter,
    maskSensitiveInfo,
    getInitials,
    isValidEmail,
    normalizePhoneNumber,
    isValidPhoneNumber,
    sanitizeInput,
    validatePasswordStrength,
    isValidCardNumber,
    slugify,
    generateReferenceID,
    calculateAgeFromDOB,
    removeWhitespace,
    reverseString,
    truncate,
    containsOnlyNumbers,
    containsOnlyLetters,
    extractNumbers,
    extractEmails,
    toCamelCase,
    toSnakeCase,
    countOccurrences,
    removeDuplicateWords,
    wordCount,
    sentenceCase,
    escapeRegExp,
    removeNonAlphanumeric,
  };
};
