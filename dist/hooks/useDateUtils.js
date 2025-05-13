import dayjs from 'dayjs';
/**
 * Utility for date formatting.
 * Provides various date-related functionalities like formatting, suffix handling, and relative day calculation.
 *
 * @returns {object} - Contains date formatting functions.
 */
export const useDateUtils = () => {
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
        const today = new Date();
        if (date.toDateString() === today.toDateString())
            return "Today";
        if (date.getDate() - today.getDate() === 1)
            return "Tomorrow";
        if (today.getDate() - date.getDate() === 1)
            return "Yesterday";
        return "";
    };
    const getFullMonth = (index) => {
        const MONTHS = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return MONTHS[index];
    };
    const getRelativeTime = (timeStamp) => {
        const now = new Date();
        const then = new Date(timeStamp);
        const differenceInSeconds = (now.getTime() - then.getTime()) / 1000;
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
        return (getRelativeDay(new Date(dateStr).getTime()) ||
            dayjs(dateStr).format(`dddd, D[${getDateSuffix(new Date(dateStr).getDate())}] MMMM`));
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
