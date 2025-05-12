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
export declare const useDateUtils: () => {
    getDateInDDMMYYYY: (ts: number) => string;
    getDateInDDMonthYYYY: (ts: number) => string;
    getDateInReverseKebabCase: (ts: number) => string;
    getDateInSentence: (ts: number) => string;
    getRelativeDay: (timeStamp: number) => string;
    formatDate: (dateStr: string) => string;
    getRelativeTime: (timeStamp: string) => string;
};
