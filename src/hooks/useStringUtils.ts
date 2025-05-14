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
  };
};
