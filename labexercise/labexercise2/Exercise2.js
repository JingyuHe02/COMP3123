// ===== Exercise 1
const printNumbers = (arr) => {
  for (const n of arr) console.log(`Number: ${n}`);
};
printNumbers([1, 2, 3, 4, 5]);

// ===== Exercise 2
const capitalize = (s = "") => {
  const [first = "", ...rest] = s;
  return first.toUpperCase() + rest.join("");
};
console.log(capitalize("hello"));   // Hello
console.log(capitalize("world"));   // World

// ===== Exercise 3
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(capitalize);
console.log(capitalizedColors); // ["Red", "Green", "Blue"]

// ===== Exercise 4
const filterTwenty = (arr) => arr.filter((n) => n >= 20);
console.log(filterTwenty([5, 18, 23, 42, 7, 99])); // [23, 42, 99]

// ===== Exercise 5
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const product = (arr) => arr.reduce((a, b) => a * b, 1);

console.log("Sum:", sum([1, 2, 3, 4]));          // 10
console.log("Product:", product([1, 2, 3, 4]));  // 24

// Or both at once:
const sumAndProduct = (arr) => ({
  sum: arr.reduce((a, b) => a + b, 0),
  product: arr.reduce((a, b) => a * b, 1),
});
console.log(sumAndProduct([1, 2, 3, 4])); // { sum: 10, product: 24 }

// ===== Exercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  info() {
    return `${this.model} (${this.year})`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
  info() {
    return `${super.info()} - Balance: $${this.balance}`;
  }
}

const car1 = new Car("Toyota", 2018);
console.log(car1.info());

const sedan1 = new Sedan("Honda Accord", 2020, 20000);
console.log(sedan1.info()); 