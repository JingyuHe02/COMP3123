// ===== Exercise 1
const printNumbers = (arr) => {
  for (const n of arr) console.log(`Number: ${n}`);
};

// ===== Exercise 2
const capitalize = (s = "") => {
  const [first = "", ...rest] = s;
  return first.toUpperCase() + rest.join("");
};

// ===== Exercise 3
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(capitalize); // ["Red", "Green", "Blue"]

// ===== Exercise 4
const filterTwenty = (arr) => arr.filter((n) => n >= 20);

// ===== Exercise 5
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const product = (arr) => arr.reduce((a, b) => a * b, 1);
// Or both at once:
const sumAndProduct = (arr) => ({
  sum: arr.reduce((a, b) => a + b, 0),
  product: arr.reduce((a, b) => a * b, 1),
});

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