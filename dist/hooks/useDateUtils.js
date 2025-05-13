"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDateUtils = void 0;
const react_1 = require("react");
const dayjs_1 = __importDefault(require("dayjs"));
/**
 * Hook for date formatting utilities.
 * Provides various date-related functionalities like formatting, suffix handling, and relative day calculation.
 *
 * @returns {object} - Contains date formatting functions.
 * @example
 * const { getDateInDDMMYYYY, getDateInSentence } = useDateUtils();
 * console.log(getDateInDDMMYYYY(1633017600000)); // Output: '01/10/2021'
 * console.log(getDateInSentence(1633017600000)); // Output: '1st October 2021'
 */
const useDateUtils = () => {
    const getDateSuffix = (0, react_1.useCallback)((date) => {
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
    }, []);
    const getRelativeDay = (0, react_1.useCallback)((timeStamp) => {
        const date = new Date(timeStamp);
        const today = new Date();
        if (date.toDateString() === today.toDateString())
            return "Today";
        if (date.getDate() - today.getDate() === 1)
            return "Tomorrow";
        if (today.getDate() - date.getDate() === 1)
            return "Yesterday";
        return "";
    }, []);
    const getFullMonth = (0, react_1.useCallback)((index) => {
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
            "December",
        ];
        return MONTHS[index];
    }, []);
    // Utility function for getting relative time
    const getRelativeTime = (0, react_1.useCallback)((timeStamp) => {
        const now = new Date();
        const then = new Date(timeStamp);
        const differenceInSeconds = (now.getTime() - then.getTime()) / 1000; // difference in seconds
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
    }, []);
    return {
        getDateInDDMMYYYY: (0, react_1.useCallback)((ts) => (0, dayjs_1.default)(ts).format("DD/MM/YYYY"), []),
        getDateInDDMonthYYYY: (0, react_1.useCallback)((ts) => (0, dayjs_1.default)(ts).format("DD/MMM/YYYY"), []),
        getDateInReverseKebabCase: (0, react_1.useCallback)((ts) => (0, dayjs_1.default)(ts).format("YYYY-MM-DD"), []),
        getDateInSentence: (0, react_1.useCallback)((ts) => {
            const date = new Date(ts);
            const day = date.getDate();
            const month = getFullMonth(date.getMonth());
            return `${day}${getDateSuffix(day)} ${month} ${date.getFullYear()}`;
        }, [getFullMonth, getDateSuffix]),
        getRelativeDay,
        formatDate: (0, react_1.useCallback)((dateStr) => {
            return (getRelativeDay(new Date(dateStr).getTime()) ||
                (0, dayjs_1.default)(dateStr).format(`dddd, D[${getDateSuffix(new Date(dateStr).getDate())}] MMMM`));
        }, [getRelativeDay, getDateSuffix]),
        getRelativeTime,
    };
};
exports.useDateUtils = useDateUtils;
