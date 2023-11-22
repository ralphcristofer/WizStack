// Number formatter.
const NUMBER_FORMATTER = new Intl.NumberFormat(undefined);

// Compact number formatter.
const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact",
});

// Relative date formatter.
const RELATIVE_FORMAT_DATE = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
});

// Divisions for relative date formatting.
const DIVISIONS = [
    { name: "second", limit: 60 },
    { name: "minute", limit: 60 },
    { name: "hour", limit: 24 },
    { name: "day", limit: 7 },
    { name: "week", limit: 4.35 },
    { name: "month", limit: 12 },
    { name: "years", limit: Number.POSITIVE_INFINITY }
]

/**
 * Formats a number based on a locale.
 * @param {*} number The number to format.
 * @returns Formatted number.
 */
const formatNumber = (number) => {
    return NUMBER_FORMATTER.format(number);
}

/**
 * Formats a number into a compact number.
 * @param {*} number The number to format into a compact number.
 * @returns Compact formatted number.
 */
const formatCompactNumber = (number) => {
    return COMPACT_NUMBER_FORMATTER.format(number);
}

/**
 * Formats a relative date, based on the current date provided.
 * @param {*} toDate The date to format.
 * @param {*} fromDate The date to format from.
 * @returns Formatted relative date.
 */
const formatRelativeDate = (toDate, fromDate = new Date()) => {
    let duration = (toDate - fromDate) / 1000;

    for(let i = 0; i <= DIVISIONS.length; i++) {
        const division = DIVISIONS[i];
        if (Math.abs(duration) < division.limit) {
            return RELATIVE_FORMAT_DATE.format(Math.round(duration), division.name);
        }
        duration /= division.limit;
    }
}