/**
 * Utility for date formatting.
 * Provides various date-related functionalities like formatting, suffix handling, and relative day calculation.
 *
 * @returns {object} - Contains date formatting functions.
 */
export declare const useDateUtils: () => {
    getDateInDDMMYYYY: (ts: number) => string;
    getDateInDDMonthYYYY: (ts: number) => string;
    getDateInReverseKebabCase: (ts: number) => string;
    getDateInSentence: (ts: number) => string;
    getRelativeDay: (timeStamp: number) => string;
    formatDate: (dateStr: string) => string;
    getRelativeTime: (timeStamp: string) => string;
};
