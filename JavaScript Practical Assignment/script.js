// Q1: Variable Vault & Type Checker

// 1a. Declare one variable of each primitive type
var greeting = "Hello, JavaScript!";
let score = 42;
const isActive = true;
let nothing = null;
let mystery;
const config = { debug: true, version: 3 };
const colours = ["red", "green", "blue"];
const id = Symbol("userId");

// 1b. Type inspector - fill in the body
function typeInfo(value) {
  if (value === null) return "Type: null | Value: null";
  if (Array.isArray(value)) return "Type: array | Value: " + value;
  return "Type: " + typeof value + " | Value: " + value.toString();
}

console.log(typeInfo(score)); // Output: Type: number | Value: 42
console.log(typeInfo(nothing)); // Output: Type: null | Value: null
console.log(typeInfo(colours)); // Output: Type: array | Value: red,green,blue

// 1c. Coercion experiments
console.log("5" + 3); //53
console.log("5" - 3); //2
console.log(true + 1); // 2
console.log(false + "1"); // false1
console.log(null + 1); // 1

// 1d. Equality (== vs ===)
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log(null == undefined); // true
console.log(NaN === NaN); // false

// Q2: Function Toolkit
// Run with: node functions.js

// 2a. Three ways to write the same add function
function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

console.log(addDeclaration(3, 4)); // 7
console.log(addExpression(3, 4)); // 7
console.log(addArrow(3, 4)); // 7

// 2b. Counter factory using closures
function makeCounter(start = 0) {
  let count = start;

  return {
    increment() {
      ++count;
    },
    decrement() {
      --count;
    },
    reset() {
      count = start;
      count;
    },
    value() {
      return count;
    },
  };
}
const c = makeCounter(10);
c.increment();
c.increment();
c.decrement();
console.log(c.value()); //11
c.reset();
console.log(c.value()); //10

// 2c. Memoize – cache expensive calls

// 2d. Default & rest parameters
function greet(name = "stranger", ...hobbies) {
  return `Hi ${name}! You enjoy: ${hobbies.join(", ")}`;
}

console.log(greet("Aarav", "coding", "chess", "hiking"));

// Q3: Array Arena
// Run with: node arrays.js

const students = [
  { name: "Aarav", score: 88, grade: "A" },
  { name: "Bella", score: 72, grade: "B" },
  { name: "Carlos", score: 55, grade: "F" },
  { name: "Diana", score: 91, grade: "A" },
  { name: "Ethan", score: 63, grade: "D" },
  { name: "Fatima", score: 78, grade: "C" },
  { name: "George", score: 84, grade: "B" },
  { name: "Hana", score: 49, grade: "F" },
  { name: "Ivan", score: 95, grade: "A" },
  { name: "Julia", score: 70, grade: "C" },
  { name: "Kiran", score: 66, grade: "D" },
  { name: "Layla", score: 82, grade: "B" },
  { name: "Marco", score: 57, grade: "F" },
  { name: "Nadia", score: 74, grade: "C" },
  { name: "Omar", score: 89, grade: "A" },
  { name: "Priya", score: 93, grade: "A" },
  { name: "Quinn", score: 61, grade: "D" },
  { name: "Rosa", score: 77, grade: "C" },
  { name: "Samuel", score: 85, grade: "B" },
  { name: "Tina", score: 68, grade: "D" },
];

// 3a. Filter above 70, map to name + grade
const highAchievers = students
  .filter((student) => student.score > 70)
  .map((student) => ({
    name: student.name,
    grade: student.grade,
  }));

console.log("High achievers:", highAchievers);

// 3b. Class average and total using reduce()

const {total, avg } = students.reduce(
 (acc, student,_,arr) =>{
    acc.total += student.score;
    acc.avg = acc.total / arr.length;
    return acc;
 },
 {total:0, avg:0}
);

console.log(`Total: ${total}, Average:${avg.toFixed(1)}`);

//3c. Sorting
const byName = [...students].sort((a,b) =>
a.name.localeCompare(b.name)
);

const byScoreAsc = [...students].sort((a,b) =>
a.score - b.score
);

const byScoreDesc = [...students].sort((a,b) =>
b.score - a.score
);

console.log("Sorted by Name:", byName);
console.log("Sorted by Name:", byName);
console.log("Sorted by Name:", byName);

// 3d. Querying with find / some / every

const topStudent = students.find(student => student.score >= 90); // first score >= 90
const anyFailing = students.some(student => student.score < 50); // any score < 50?
const allPassed = students.every(student => student.score >= 50); // all score >= 50?

console.log("Top student:", topStudent);
console.log("Any failing student?", anyFailing);
console.log("Did everyone pass?", allPassed);

// 3e. Method chain: names of B-grade students sorted alphabetically
const bStudents = students
  .filter(student => student.grade === "B")
  .map(student => student.name)
  .sort();

console.log("B students:", bStudents);