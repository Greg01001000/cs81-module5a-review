// CS 81, Module 5 Assignment 5A: Code Review, by GregH, 7/14/25

// Make an array of objects w/ key:value pairs recording time spent each day on
// a hobby, and a mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Declare a function to return the total time from all log records. 'reduce'
// with 'sum' adds the 'minutes' values from all the records and returns the
// one resulting numeric value.
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Declare a function to return an array of all unique hobby names
function uniqueHobbies(log) {
  // This is the only function in this script which returns multiple values in
  // a different format than the original log. The 1st line below makes a new
  // array of only the hobby names from the log. ('map' obtains the 'hobby' 
  // value from each log entry and puts those values in a new array.) The 2nd
  // line makes a new 'Set' object of the names, and because 'Set' objects
  // don't allow duplicate values, the Set has only the unique names. The '...'
  // copies those names into a series of separate values, and the brackets make that
  // series an array, which the function returns.
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

// Declare a function to return an array of all log records with times longer
// than the argument passed to minMinutes. 'filter' returns a new array with 
// only the log entries with 'minutes' values greater than minMinutes.
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// Declare a function to return the number of log records with the mood in the
// argument passed to moodType. 'filter' returns a new array with only the log
// entries with 'mood' values matching moodType, and '.length' returns the
// number of those entries.
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

// Display formatted message with the total time from all log records
console.log("Total time spent:", totalTime(hobbyLog), "minutes");

// Display formatted message with the number of unique hobbies and their names
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));

// Display formatted message with the number of log records with times longer
// than 30 minutes, and an abbreviated representation of those records
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));

// Display formatted message with the number of log records with "relaxed" mood
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// SUGGESTION: The output of the longSessions() function displays as,
// "(2) [{…}, {…}]". It could be improved to display some or all of the data in
// the returned objects.
console.log("Sessions longer than 29 min:", ...longSessions(hobbyLog, 29));
