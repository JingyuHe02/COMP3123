//Exercise 1: Capitalize words
// -----------------------------
function capitalizeWords(str) {
  if (typeof str !== "string") return "";
  return str.replace(/\b([a-z])/g, (m, ch) => ch.toUpperCase());
}

console.log(capitalizeWords("hello world"));          
console.log(capitalizeWords("  multiple   spaces ")); 

// -----------------------------------------
// Exercise 2: Max of three given integers
function max(a, b, c) {
  const n1 = Number(a), n2 = Number(b), n3 = Number(c);
  return Math.max(n1, n2, n3);
}


console.log(max(1, 0, 1));        // 1
console.log(max(0, -10, -20));    // 0
console.log(max(1000, 510, 440)); // 1000

// Exercise 3: Move last three characters to the start of a string
// ---------------------------------------------------------------
function right(str) {
  if (typeof str !== "string") str = String(str);
  if (str.length < 3) return str;
  const n = 3;
  return str.slice(-n) + str.slice(0, -n);
}

console.log(right("Python"));      
console.log(right("JavaScript"));  
console.log(right("Hi"));          


// Exercise 4: Find the type of a given angle
// --------------------------------------------
function angle_Type(deg) {
  const d = Number(deg);
  if (d === 90) return "Right angle";
  if (d === 180) return "Straight angle";
  if (d > 0 && d < 90) return "Acute angle";
  if (d > 90 && d < 180) return "Obtuse angle";
  return "Invalid angle";
}


console.log(angle_Type(47));  
console.log(angle_Type(90));   
console.log(angle_Type(145));  
console.log(angle_Type(180));  