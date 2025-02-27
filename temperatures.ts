/**
 * You can use these temperatures
 * to manually test your code
 */

const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

// 1) Write a `filterHighTemperatures` function that returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
function filterHighTemperatures(temps: number[]) {
  // Your code here
}

// Write a `filterLowTemperatures` function that returns a new array containing temperatures less than 20 degrees Celsius.
function filterLowTemperatures(temps: number[]) {
  // Your code here
}

// Write a `convertCelsiusToFahrenheit` function that converts the entire list of temperatures to Fahrenheit, and return it. Use the formula (Celsius * 9/5) + 32.
function convertCelsiusToFahrenheit(temps: number[]) {
  // Your code here
}

// Write a `labelTemperatures` function that returns a new array that labels each temperature as either:
// "Warm" for temperatures >=25,
// "Mild" for temperatures between 20 and 24,
// "Cool" for temperatures <20
type TemperatureLabel = "Warm" | "Mild" | "Cool";

function labelTemperatures(temps: number[]): TemperatureLabel[] {
  // Your code here

  return [];
}

// Write a `getMaxTemperature` function that calculates and return the highest temperature of the month.
function getMaxTemperature(temps: number[]) {
  // Your code here
}

// Write a `getMinTemperature` function that calculates and return the lowest temperature of the month.
function getMinTemperature(temps: number[]) {
  // Your code here
}

export {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
