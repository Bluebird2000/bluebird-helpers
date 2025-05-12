/*
README.md
*/

# bluebird-helpers

bluebird-helpers is a collection of reusable React and React Native hooks designed to simplify utility operations across various domains, including date manipulation, string handling, validation, and UI behaviors. Whether you need to format dates, validate inputs, or manipulate strings, this library provides easy-to-use hooks for developers to streamline their work and avoid reinventing the wheel.

## Key Features
Date Utilities: Includes functions for formatting and manipulating dates (e.g., relative day calculations, date suffixes, and multiple date formats).

String Utilities: Offers functions for string manipulation like checking emptiness, trimming, case conversion, and special character detection.

Optimized Performance: Memoized functions ensure minimal recalculations and improved performance, especially in re-render-heavy applications.

Simple Integration: Easy to install and integrate into any React/React Native project.

## Installation

```bash
npm install @bluebird-helpers
```

or

```bash
yarn add @bluebird-helpers
```

## Available Hooks

### `useDateUtils` Hook

A custom React hook that provides various utility functions to manipulate and format dates. It allows you to get date suffixes, calculate relative days (like "Today", "Tomorrow", "Yesterday"), and format dates in multiple styles.

Usage:

## Functions

### `getDateInDDMMYYYY`
**Returns** a formatted date in the `DD/MM/YYYY` format.

#### Example
```javascript

/**
 *getDateInDDMonthYYYY
 * @param {number} dateTimeStamp
 * @returns {DateString} Date in dd/mm/yyyy
 */
const { getDateInDDMMYYYY } = useDateUtils();
const formattedDate = getDateInDDMMYYYY(1633017600000);
console.log(formattedDate); // Output: '01/10/2021'

/**
 * getDateInReverseKebabCase
 * @param {number} dateTimeStamp
 * @returns {LocalDate} Date in yyyy-mm--dd
 */
const { getDateInReverseKebabCase } = useDateUtils();
const formattedDate = getDateInReverseKebabCase(1633017600000);
console.log(formattedDate); // Output: '2021-10-05'

/**
 * getDateInSentence
 * @param {number} dateTimeStamp
 * @returns {DateString} Date in 08th November 2024
 */
const { getDateInSentence } = useDateUtils();
const sentenceDate = getDateInSentence(1633017600000);
console.log(sentenceDate); // Output: '1st October 2021'

/**
 * getRelativeDay
 * @param {number} dateTimeStamp
 * @returns {DateString} Day relative to today e.g Today, Tomorrow, Yesterday
 */
const { getRelativeDay } = useDateUtils();
const relativeDay = getRelativeDay(1633017600000);
console.log(relativeDay); // Output: 'Today' (if the date is today) or 1m (if called after 1 minute)

/**
 * Get date suffix e.g. "st" in 21st
 * @param {number} date - date of a month gotten from date.getDate()
 * @returns {'st' | 'nd' | 'rd' | 'th'}
 */
export const formatDate = dateString => {
  const date = new Date(dateString);

  return (
    getRelativeDay(dateString) ||
    dayjs(dateString).format(`dddd, D[${getDateSuffix(date)}] MMMM`)
  );
};


### `useStringUtils` Hook

## Description
A custom React hook that provides various utility functions to manipulate strings. It allows you to check if a string is empty, trim whitespace, convert to upper or lowercase, and capitalize the first letter.

## Functions

### `isEmpty`
**Returns** `true` if the string is empty or only contains whitespace, and `false` otherwise.

#### Example
```javascript
const { isEmpty } = useStringUtils();
const result = isEmpty('   ');
console.log(result); // Output: true```

### `trimString`
Returns the string with leading and trailing whitespace removed.

const { trimString } = useStringUtils();
const trimmed = trimString('  hello  ');
console.log(trimmed); // Output: 'hello'


### `toUpperCase`
Returns the string with leading and trailing whitespace removed.

const { toUpperCase } = useStringUtils();
const upper = toUpperCase('hello');
console.log(upper); // Output: 'HELLO'


### `toLowerCase`
Returns the string with leading and trailing whitespace removed.

const { toLowerCase } = useStringUtils();
const lower = toLowerCase('HELLO');
console.log(lower); // Output: 'hello'


### `capitalizeFirstLetter`
Returns the string with the first letter capitalized.

const { capitalizeFirstLetter } = useStringUtils();
const capitalized = capitalizeFirstLetter('hello');
console.log(capitalized); // Output: 'Hello'


### `hasSpecialCharacter`
Checks if the string contains any special characters (e.g., !@#$%^&*).

const { hasSpecialCharacter } = useStringUtils();
console.log(hasSpecialCharacter('Hello@World')); // true
console.log(hasSpecialCharacter('HelloWorld')); // false


## Contributing
Feel free to open issues or PRs for new utility suggestions or improvements.

## License
MIT
