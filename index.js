// Code your solution here
function findMatching(drivers, name) {
  // Use the `filter` method to iterate through the drivers array
  return drivers.filter(driver => {
    // Check if the driver's name, converted to lowercase, matches the input name
    return driver.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => {
    // Check if the driver's name starts with the provided letters (case-insensitive)
    return driver.toLowerCase().startsWith(letters.toLowerCase());
  });
}
const drivers = [
  { name: "Ali" },
  { name: "Abdi" },
  { name: "merry" },
  { name: "mercy" }
];
function matchName(drivers, nameToMatch) {
  return drivers.filter(driver => driver.name === nameToMatch);
}
const matchedDrivers = matchName(drivers, "Ali");
console.log(matchedDrivers); // [{ name: "Ali" }]
