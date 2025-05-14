// src/hooks/useStringUtils.ts
var useStringUtils = () => {
  const isEmpty = (str) => str.trim().length === 0;
  const trimString = (str) => str.trim();
  const toUpperCase = (str) => str.toUpperCase();
  const toLowerCase = (str) => str.toLowerCase();
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const hasSpecialCharacter = (text) => {
    const matchSpecialCharacters = /[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~ +]/;
    return matchSpecialCharacters.test(text);
  };
  const maskSensitiveInfo = (str, visibleCount = 4) => {
    return str.length <= visibleCount ? "*".repeat(str.length) : "*".repeat(str.length - visibleCount) + str.slice(-visibleCount);
  };
  const getInitials = (name) => {
    return name.split(" ").map((part) => part.charAt(0).toUpperCase()).join("");
  };
  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };
  const normalizePhoneNumber = (phone) => {
    return phone.replace(/\D/g, "").replace(/^0/, "+234");
  };
  const isValidPhoneNumber = (phone, region = "US") => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phone);
  };
  const validatePasswordStrength = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return regex.test(password);
  };
  const sanitizeInput = (input) => {
    return input.replace(/[<>{}[\]/]/g, "");
  };
  const isValidCardNumber = (cardNumber) => {
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
  const slugify = (text) => {
    return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  };
  const generateReferenceID = (prefix = "REF") => {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
  };
  const calculateAgeFromDOB = (dob) => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    return Math.floor(ageDiff / (1e3 * 60 * 60 * 24 * 365.25));
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
    calculateAgeFromDOB
  };
};

// src/hooks/useDateUtils.ts
import dayjs from "dayjs";
var useDateUtils = () => {
  const getDateSuffix = (date) => {
    const lastDigit = date.toString().slice(-1);
    switch (lastDigit) {
      case "1":
        return "st";
      case "2":
        return "nd";
      case "3":
        return "rd";
      default:
        return "th";
    }
  };
  const getRelativeDay = (timeStamp) => {
    const date = new Date(timeStamp);
    const today = /* @__PURE__ */ new Date();
    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.getDate() - today.getDate() === 1) return "Tomorrow";
    if (today.getDate() - date.getDate() === 1) return "Yesterday";
    return "";
  };
  const getFullMonth = (index) => {
    const MONTHS = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return MONTHS[index];
  };
  const getRelativeTime = (timeStamp) => {
    const now = /* @__PURE__ */ new Date();
    const then = new Date(timeStamp);
    const differenceInSeconds = (now.getTime() - then.getTime()) / 1e3;
    const aMinute = 60;
    const anHour = aMinute * 60;
    const aDay = anHour * 24;
    const aWeek = aDay * 7;
    const aMonth = aDay * 28;
    const aYear = aDay * 365;
    switch (true) {
      case differenceInSeconds < aMinute:
        return Math.floor(differenceInSeconds) + "s";
      case differenceInSeconds < anHour:
        return Math.floor(differenceInSeconds / 60) + "m";
      case differenceInSeconds < aDay:
        return Math.floor(differenceInSeconds / anHour) + "h";
      case differenceInSeconds < aWeek:
        return Math.floor(differenceInSeconds / aDay) + "d";
      case differenceInSeconds < aMonth:
        return Math.floor(differenceInSeconds / aWeek) + "w";
      case differenceInSeconds < aYear:
        return Math.floor(differenceInSeconds / aMonth) + "mo";
      default:
        return Math.floor(differenceInSeconds / aYear) + "y";
    }
  };
  const getDateInDDMMYYYY = (ts) => dayjs(ts).format("DD/MM/YYYY");
  const getDateInDDMonthYYYY = (ts) => dayjs(ts).format("DD/MMM/YYYY");
  const getDateInReverseKebabCase = (ts) => dayjs(ts).format("YYYY-MM-DD");
  const getDateInSentence = (ts) => {
    const date = new Date(ts);
    const day = date.getDate();
    const month = getFullMonth(date.getMonth());
    return `${day}${getDateSuffix(day)} ${month} ${date.getFullYear()}`;
  };
  const formatDate = (dateStr) => {
    return getRelativeDay(new Date(dateStr).getTime()) || dayjs(dateStr).format(`dddd, D[${getDateSuffix(new Date(dateStr).getDate())}] MMMM`);
  };
  return {
    getDateInDDMMYYYY,
    getDateInDDMonthYYYY,
    getDateInReverseKebabCase,
    getDateInSentence,
    getRelativeDay,
    formatDate,
    getRelativeTime
  };
};
export {
  useDateUtils,
  useStringUtils
};
