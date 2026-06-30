/* ── Paragraph Mistakes — Easy JavaScript Data ──
   Easy: 5-8 mistakes per code
   Total: 100 paragraphs (J1 - J100)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return, lenght → length)
     'missing' = semicolon ya closing brace ghayab hai
*/

const JS_PARAGRAPH = {
  Easy: [

// J1-J25

// ── J1 ──
{
correct: `function greet() {
  console.log("Hello");
}
greet();`,
wrong: `functoin greet() {
  console.log("Hello");
}
greet();`,
totalMistakes: 5,
hint: "Fix spelling of function keyword."
},

// ── J2 ──
{
correct: `let name = "Ali";
console.log(name);`,
wrong: `let name = "Ali"
Console.log(name);`,
totalMistakes: 5,
hint: "Add missing semicolon after variable, lowercase Console."
},

// ── J3 ──
{
correct: `let x = 10;
let y = 20;
console.log(x + y);`,
wrong: `let x = 10;
let y = 20
console.log(x + y)`,
totalMistakes: 5,
hint: "Add missing semicolons after y and console.log."
},

// ── J4 ──
{
correct: `function add(a, b) {
  return a + b;
}`,
wrong: `function add(a, b) {
  retrun a + b;
}`,
totalMistakes: 5,
hint: "Fix spelling of return keyword."
},

// ── J5 ──
{
correct: `let arr = [1, 2, 3];
console.log(arr.length);`,
wrong: `let arr = [1, 2, 3]
console.log(arr.lenght);`,
totalMistakes: 5,
hint: "Add missing semicolon after array, fix spelling of length."
},

// ── J6 ──
{
correct: `if (x > 0) {
  console.log("positive");
}`,
wrong: `if (x > 0) {
  Console.Log("positive");
}`,
totalMistakes: 5,
hint: "Lowercase Console and Log — it's console.log."
},

// ── J7 ──
{
correct: `let count = 0;
count++;
console.log(count);`,
wrong: `let count = 0
count++;
console.log(count)`,
totalMistakes: 5,
hint: "Add missing semicolons after count = 0 and console.log."
},

// ── J8 ──
{
correct: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
wrong: `for (let i = 0; i < 5; i++) {
  console.log(i)
}`,
totalMistakes: 5,
hint: "Add missing semicolon inside console.log."
},

// ── J9 ──
{
correct: `let name = "Sara";
let age = 20;
console.log(name, age);`,
wrong: `let name = "Sara"
let age = 20
console.log(name, age)`,
totalMistakes: 6,
hint: "Add missing semicolons after name, age, and console.log."
},

// ── J10 ──
{
correct: `function square(n) {
  return n * n;
}`,
wrong: `Funcion square(n) {
  return n * n;
}`,
totalMistakes: 5,
hint: "Fix spelling and case of Function → function."
},

// ── J11 ──
{
correct: `let isTrue = true;
console.log(isTrue);`,
wrong: `let isTrue = True;
console.log(isTrue)`,
totalMistakes: 5,
hint: "Lowercase True → true, add missing semicolon."
},

// ── J12 ──
{
correct: `let items = [];
items.push(1);
console.log(items);`,
wrong: `let items = []
items.pus(1);
console.log(items)`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of push."
},

// ── J13 ──
{
correct: `const PI = 3.14;
console.log(PI);`,
wrong: `const PI = 3.14
Console.log(PI);`,
totalMistakes: 5,
hint: "Add missing semicolon after PI, lowercase Console."
},

// ── J14 ──
{
correct: `let msg = "hi";
alert(msg);`,
wrong: `let msg = "hi"
alret(msg);`,
totalMistakes: 5,
hint: "Add missing semicolon, fix spelling of alert."
},

// ── J15 ──
{
correct: `function sayHi(name) {
  console.log("Hi " + name);
}`,
wrong: `function sayHi(name) {
  console.log("Hi " + name)
`,
totalMistakes: 6,
hint: "Add missing semicolon inside function, add missing closing brace."
},

// ── J16 ──
{
correct: `let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);`,
wrong: `let a = 5;
let b = 10;
let sum = a + b
console.log(sum)`,
totalMistakes: 5,
hint: "Add missing semicolons after sum and console.log."
},

// ── J17 ──
{
correct: `while (x < 10) {
  x++;
}`,
wrong: `While (x < 10) {
  x++;
}`,
totalMistakes: 5,
hint: "Lowercase While → while."
},

// ── J18 ──
{
correct: `let color = "blue";
console.log(color.length);`,
wrong: `let color = "blue"
console.log(color.lenght)`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of length."
},

// ── J19 ──
{
correct: `function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));`,
wrong: `function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4))`,
totalMistakes: 5,
hint: "Add missing semicolon after console.log."
},

// ── J20 ──
{
correct: `let x = 0;
if (x === 0) {
  console.log("zero");
}`,
wrong: `let x = 0;
if (x === 0) {
  Console.log("zero");
}`,
totalMistakes: 5,
hint: "Lowercase Console → console."
},

// ── J21 ──
{
correct: `let fruits = ["apple", "mango"];
console.log(fruits[0]);`,
wrong: `let fruits = ["apple", "mango"]
console.log(fruits[0])`,
totalMistakes: 5,
hint: "Add missing semicolons after array and console.log."
},

// ── J22 ──
{
correct: `const greet = function() {
  return "Hello";
};`,
wrong: `const greet = funtion() {
  return "Hello";
};`,
totalMistakes: 5,
hint: "Fix spelling of function keyword."
},

// ── J23 ──
{
correct: `let num = parseInt("42");
console.log(num);`,
wrong: `let num = parseInt("42")
console.log(num)`,
totalMistakes: 5,
hint: "Add missing semicolons after parseInt and console.log."
},

// ── J24 ──
{
correct: `let obj = { name: "Ali" };
console.log(obj.name);`,
wrong: `let obj = { name: "Ali" }
Console.log(obj.name)`,
totalMistakes: 6,
hint: "Add missing semicolons, lowercase Console."
},

// ── J25 ──
{
correct: `function isEven(n) {
  return n % 2 === 0;
}`,
wrong: `function isEven(n) {
  retun n % 2 === 0;
}`,
totalMistakes: 5,
hint: "Fix spelling of return keyword."
},
// J26-J50

// ── J26 ──
{
correct: `let score = 100;
console.log("Score: " + score);`,
wrong: `let score = 100
console.log("Score: " + score)`,
totalMistakes: 5,
hint: "Add missing semicolons after score and console.log."
},

// ── J27 ──
{
correct: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
wrong: `For (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
totalMistakes: 5,
hint: "Lowercase For → for."
},

// ── J28 ──
{
correct: `let str = "hello";
console.log(str.toUpperCase());`,
wrong: `let str = "hello"
console.log(str.toUperCase())`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of toUpperCase."
},

// ── J29 ──
{
correct: `function greet(name) {
  return "Hello " + name;
}`,
wrong: `function greet(name) {
  Return "Hello " + name;
}`,
totalMistakes: 5,
hint: "Lowercase Return → return."
},

// ── J30 ──
{
correct: `let val = null;
console.log(val);`,
wrong: `let val = Null;
console.log(val)`,
totalMistakes: 5,
hint: "Lowercase Null → null, add missing semicolon."
},

// ── J31 ──
{
correct: `let arr = [10, 20, 30];
arr.pop();
console.log(arr);`,
wrong: `let arr = [10, 20, 30]
arr.pop();
console.log(arr)`,
totalMistakes: 5,
hint: "Add missing semicolons after array and console.log."
},

// ── J32 ──
{
correct: `const name = "Ahmed";
console.log(name);`,
wrong: `const name = "Ahmed"
CONSOLE.LOG(name);`,
totalMistakes: 6,
hint: "Add missing semicolon, fix case of CONSOLE.LOG → console.log."
},

// ── J33 ──
{
correct: `let x = 5;
let y = x * 2;
console.log(y);`,
wrong: `let x = 5;
let y = x * 2
console.log(y)`,
totalMistakes: 5,
hint: "Add missing semicolons after y and console.log."
},

// ── J34 ──
{
correct: `function check(x) {
  if (x > 0) {
    return true;
  }
}`,
wrong: `function check(x) {
  if (x > 0) {
    Return true;
  }
}`,
totalMistakes: 5,
hint: "Lowercase Return → return."
},

// ── J35 ──
{
correct: `let a = "hello";
let b = a.length;
console.log(b);`,
wrong: `let a = "hello"
let b = a.lenght;
console.log(b)`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of length."
},

// ── J36 ──
{
correct: `let num = 7;
console.log(num % 2);`,
wrong: `let num = 7
console.log(num % 2)`,
totalMistakes: 5,
hint: "Add missing semicolons after num and console.log."
},

// ── J37 ──
{
correct: `function hello() {
  console.log("Hello World");
}
hello();`,
wrong: `function hello() {
  console.log("Hello World")
}
hello()`,
totalMistakes: 5,
hint: "Add missing semicolons inside function and after hello()."
},

// ── J38 ──
{
correct: `let list = [1, 2, 3];
list.push(4);
console.log(list);`,
wrong: `let list = [1, 2, 3];
list.psh(4);
console.log(list)`,
totalMistakes: 5,
hint: "Fix spelling of push, add missing semicolon."
},

// ── J39 ──
{
correct: `let isValid = false;
console.log(isValid);`,
wrong: `let isValid = False;
console.log(isValid)`,
totalMistakes: 5,
hint: "Lowercase False → false, add missing semicolon."
},

// ── J40 ──
{
correct: `let city = "Lahore";
console.log(city.toLowerCase());`,
wrong: `let city = "Lahore"
console.log(city.toLowercase())`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: toLowerCase not toLowercase."
},

// ── J41 ──
{
correct: `let age = 18;
if (age >= 18) {
  console.log("adult");
}`,
wrong: `let age = 18;
if (age >= 18) {
  Console.log("adult");
}`,
totalMistakes: 5,
hint: "Lowercase Console → console."
},

// ── J42 ──
{
correct: `function double(n) {
  return n * 2;
}
console.log(double(5));`,
wrong: `function double(n) {
  retrun n * 2;
}
console.log(double(5))`,
totalMistakes: 6,
hint: "Fix spelling of return, add missing semicolon."
},

// ── J43 ──
{
correct: `let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}`,
wrong: `let total = 0
for (let i = 1; i <= 5; i++) {
  total += i;
}`,
totalMistakes: 5,
hint: "Add missing semicolon after total = 0."
},

// ── J44 ──
{
correct: `const arr = [5, 3, 8];
arr.sort();
console.log(arr);`,
wrong: `const arr = [5, 3, 8]
arr.sort();
console.log(arr)`,
totalMistakes: 5,
hint: "Add missing semicolons after array and console.log."
},

// ── J45 ──
{
correct: `let text = "world";
console.log("hello " + text);`,
wrong: `let text = "world"
console.log("hello " + text)`,
totalMistakes: 5,
hint: "Add missing semicolons after text and console.log."
},

// ── J46 ──
{
correct: `function max(a, b) {
  return a > b ? a : b;
}`,
wrong: `Funcion max(a, b) {
  return a > b ? a : b;
}`,
totalMistakes: 5,
hint: "Fix spelling and case: Funcion → function."
},

// ── J47 ──
{
correct: `let data = [1, 2, 3];
console.log(data.indexOf(2));`,
wrong: `let data = [1, 2, 3]
console.log(data.indexof(2))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: indexof → indexOf."
},

// ── J48 ──
{
correct: `let x = 10;
x = x - 3;
console.log(x);`,
wrong: `let x = 10;
x = x - 3
console.log(x)`,
totalMistakes: 5,
hint: "Add missing semicolons after subtraction and console.log."
},

// ── J49 ──
{
correct: `function isEmpty(str) {
  return str.length === 0;
}`,
wrong: `function isEmpty(str) {
  return str.lenght === 0;
}`,
totalMistakes: 5,
hint: "Fix spelling of length."
},

// ── J50 ──
{
correct: `let result = Math.max(3, 7);
console.log(result);`,
wrong: `let result = Math.max(3, 7)
Console.log(result)`,
totalMistakes: 6,
hint: "Add missing semicolons, lowercase Console."
},
// J51-J75

// ── J51 ──
{
correct: `let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);`,
wrong: `let n = 5;
let factorial = 1
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial)`,
totalMistakes: 5,
hint: "Add missing semicolons after factorial = 1 and console.log."
},

// ── J52 ──
{
correct: `const PI = 3.14159;
let r = 5;
let area = PI * r * r;
console.log(area);`,
wrong: `const PI = 3.14159
let r = 5;
let area = PI * r * r;
console.log(area)`,
totalMistakes: 5,
hint: "Add missing semicolons after PI and console.log."
},

// ── J53 ──
{
correct: `function reverse(str) {
  return str.split("").reverse().join("");
}`,
wrong: `function reverse(str) {
  return str.spilt("").reverse().join("");
}`,
totalMistakes: 5,
hint: "Fix spelling of split."
},

// ── J54 ──
{
correct: `let name = "Ali";
let greeting = "Hello, " + name + "!";
console.log(greeting);`,
wrong: `let name = "Ali"
let greeting = "Hello, " + name + "!";
console.log(greeting)`,
totalMistakes: 5,
hint: "Add missing semicolons after name and console.log."
},

// ── J55 ──
{
correct: `let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);`,
wrong: `let numbers = [1, 2, 3, 4, 5];
let sum = 0
numbers.forEach(n => sum += n);
console.log(sum)`,
totalMistakes: 5,
hint: "Add missing semicolons after sum = 0 and console.log."
},

// ── J56 ──
{
correct: `let obj = { age: 25 };
console.log(obj.age);`,
wrong: `let obj = { age: 25 }
Console.log(obj.age)`,
totalMistakes: 6,
hint: "Add missing semicolons, lowercase Console."
},

// ── J57 ──
{
correct: `function isOdd(n) {
  return n % 2 !== 0;
}`,
wrong: `function isOdd(n) {
  retrun n % 2 !== 0;
}`,
totalMistakes: 5,
hint: "Fix spelling of return."
},

// ── J58 ──
{
correct: `let arr = [3, 1, 4, 1, 5];
arr.sort();
console.log(arr[0]);`,
wrong: `let arr = [3, 1, 4, 1, 5]
arr.sort();
console.log(arr[0])`,
totalMistakes: 5,
hint: "Add missing semicolons after array and console.log."
},

// ── J59 ──
{
correct: `const max = Math.max(10, 20, 5);
console.log(max);`,
wrong: `const max = Math.Max(10, 20, 5);
console.log(max)`,
totalMistakes: 5,
hint: "Fix case: Math.Max → Math.max, add missing semicolon."
},

// ── J60 ──
{
correct: `let x = 2;
let y = Math.pow(x, 3);
console.log(y);`,
wrong: `let x = 2
let y = Math.pow(x, 3);
console.log(y)`,
totalMistakes: 5,
hint: "Add missing semicolons after x and console.log."
},

// ── J61 ──
{
correct: `let str = "JavaScript";
console.log(str.includes("Script"));`,
wrong: `let str = "JavaScript"
console.log(str.incldes("Script"))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of includes."
},

// ── J62 ──
{
correct: `function greet() {
  return "Hi!";
}
let msg = greet();
console.log(msg);`,
wrong: `function greet() {
  return "Hi!";
}
let msg = greet()
console.log(msg)`,
totalMistakes: 5,
hint: "Add missing semicolons after greet() and console.log."
},

// ── J63 ──
{
correct: `let x = true;
let y = false;
console.log(x && y);`,
wrong: `let x = True;
let y = false;
console.log(x && y)`,
totalMistakes: 5,
hint: "Lowercase True → true, add missing semicolon."
},

// ── J64 ──
{
correct: `let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);
console.log(doubled);`,
wrong: `let arr = [1, 2, 3]
let doubled = arr.map(x => x * 2);
console.log(doubled)`,
totalMistakes: 5,
hint: "Add missing semicolons after arr and console.log."
},

// ── J65 ──
{
correct: `function cube(n) {
  return n * n * n;
}`,
wrong: `Funtion cube(n) {
  return n * n * n;
}`,
totalMistakes: 5,
hint: "Fix spelling and case: Funtion → function."
},

// ── J66 ──
{
correct: `let word = "hello";
console.log(word.charAt(0));`,
wrong: `let word = "hello"
console.log(word.Charat(0))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: Charat → charAt."
},

// ── J67 ──
{
correct: `let count = 10;
while (count > 0) {
  count--;
}
console.log(count);`,
wrong: `let count = 10;
While (count > 0) {
  count--;
}
console.log(count)`,
totalMistakes: 5,
hint: "Lowercase While → while, add missing semicolon."
},

// ── J68 ──
{
correct: `let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);`,
wrong: `let a = [1, 2]
let b = [3, 4];
let c = a.concat(b);
console.log(c)`,
totalMistakes: 5,
hint: "Add missing semicolons after a and console.log."
},

// ── J69 ──
{
correct: `let str = "Hello World";
console.log(str.split(" "));`,
wrong: `let str = "Hello World"
console.log(str.spilt(" "))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of split."
},

// ── J70 ──
{
correct: `let num = -5;
console.log(Math.abs(num));`,
wrong: `let num = -5
console.log(Math.Abs(num))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: Math.Abs → Math.abs."
},

// ── J71 ──
{
correct: `function greetUser(name) {
  console.log("Welcome " + name);
}
greetUser("Ali");`,
wrong: `function greetUser(name) {
  console.log("Welcome " + name)
}
greetUser("Ali")`,
totalMistakes: 5,
hint: "Add missing semicolons inside function and after greetUser call."
},

// ── J72 ──
{
correct: `let x = 100;
let y = x / 4;
console.log(y);`,
wrong: `let x = 100
let y = x / 4;
console.log(y)`,
totalMistakes: 5,
hint: "Add missing semicolons after x and console.log."
},

// ── J73 ──
{
correct: `let flag = true;
if (flag) {
  console.log("yes");
}`,
wrong: `let flag = True;
if (flag) {
  console.log("yes");
}`,
totalMistakes: 5,
hint: "Lowercase True → true."
},

// ── J74 ──
{
correct: `let arr = [5, 10, 15];
console.log(arr.length);`,
wrong: `let arr = [5, 10, 15]
console.log(arr.lenght)`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of length."
},

// ── J75 ──
{
correct: `function power(base, exp) {
  return Math.pow(base, exp);
}`,
wrong: `function power(base, exp) {
  return Math.Pow(base, exp);
}`,
totalMistakes: 5,
hint: "Fix case: Math.Pow → Math.pow."
},
// J76-J100

// ── J76 ──
{
correct: `let a = 3;
let b = 4;
let hyp = Math.sqrt(a * a + b * b);
console.log(hyp);`,
wrong: `let a = 3;
let b = 4
let hyp = Math.sqrt(a * a + b * b);
console.log(hyp)`,
totalMistakes: 5,
hint: "Add missing semicolons after b and console.log."
},

// ── J77 ──
{
correct: `let name = "Zara";
console.log(name.toUpperCase());`,
wrong: `let name = "Zara"
console.log(name.toUppercase())`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: toUppercase → toUpperCase."
},

// ── J78 ──
{
correct: `function subtract(a, b) {
  return a - b;
}`,
wrong: `function subtract(a, b) {
  retrun a - b;
}`,
totalMistakes: 5,
hint: "Fix spelling of return."
},

// ── J79 ──
{
correct: `let arr = [2, 4, 6, 8];
let last = arr[arr.length - 1];
console.log(last);`,
wrong: `let arr = [2, 4, 6, 8]
let last = arr[arr.length - 1];
console.log(last)`,
totalMistakes: 5,
hint: "Add missing semicolons after arr and console.log."
},

// ── J80 ──
{
correct: `const greeting = "Hello";
console.log(greeting.length);`,
wrong: `const greeting = "Hello"
console.log(greeting.lenght)`,
totalMistakes: 6,
hint: "Add missing semicolons, fix spelling of length."
},

// ── J81 ──
{
correct: `let x = 9;
console.log(Math.sqrt(x));`,
wrong: `let x = 9
console.log(Math.Sqrt(x))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: Math.Sqrt → Math.sqrt."
},

// ── J82 ──
{
correct: `function printName(name) {
  console.log(name);
}
printName("Hassan");`,
wrong: `functoin printName(name) {
  console.log(name);
}
printName("Hassan")`,
totalMistakes: 5,
hint: "Fix spelling of function, add missing semicolon."
},

// ── J83 ──
{
correct: `let items = ["pen", "book"];
items.push("eraser");
console.log(items);`,
wrong: `let items = ["pen", "book"]
items.push("eraser");
console.log(items)`,
totalMistakes: 5,
hint: "Add missing semicolons after items array and console.log."
},

// ── J84 ──
{
correct: `let p = 5;
let q = 6;
console.log(p * q);`,
wrong: `let p = 5
let q = 6;
console.log(p * q)`,
totalMistakes: 5,
hint: "Add missing semicolons after p and console.log."
},

// ── J85 ──
{
correct: `let str = "abc";
console.log(str.repeat(3));`,
wrong: `let str = "abc"
console.log(str.Repeat(3))`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: Repeat → repeat."
},

// ── J86 ──
{
correct: `let val = 0;
val += 10;
console.log(val);`,
wrong: `let val = 0
val += 10;
console.log(val)`,
totalMistakes: 5,
hint: "Add missing semicolons after val = 0 and console.log."
},

// ── J87 ──
{
correct: `function divide(a, b) {
  return a / b;
}
console.log(divide(10, 2));`,
wrong: `function divide(a, b) {
  Return a / b;
}
console.log(divide(10, 2))`,
totalMistakes: 5,
hint: "Lowercase Return → return, add missing semicolon."
},

// ── J88 ──
{
correct: `let x = "5";
let y = Number(x);
console.log(y);`,
wrong: `let x = "5"
let y = Number(x);
console.log(y)`,
totalMistakes: 5,
hint: "Add missing semicolons after x and console.log."
},

// ── J89 ──
{
correct: `let arr = [10, 20, 30];
arr.reverse();
console.log(arr);`,
wrong: `let arr = [10, 20, 30]
arr.reverse();
console.log(arr)`,
totalMistakes: 5,
hint: "Add missing semicolons after arr and console.log."
},

// ── J90 ──
{
correct: `function isPositive(n) {
  return n > 0;
}`,
wrong: `function isPositive(n) {
  retun n > 0;
}`,
totalMistakes: 5,
hint: "Fix spelling of return."
},

// ── J91 ──
{
correct: `let x = 2;
let y = 3;
let z = x ** y;
console.log(z);`,
wrong: `let x = 2
let y = 3;
let z = x ** y;
console.log(z)`,
totalMistakes: 5,
hint: "Add missing semicolons after x and console.log."
},

// ── J92 ──
{
correct: `let name = "Bilal";
let len = name.length;
console.log(len);`,
wrong: `let name = "Bilal";
let len = name.lenght;
console.log(len)`,
totalMistakes: 5,
hint: "Fix spelling of length, add missing semicolon."
},

// ── J93 ──
{
correct: `const arr = [1, 2, 3, 4];
const even = arr.filter(n => n % 2 === 0);
console.log(even);`,
wrong: `const arr = [1, 2, 3, 4]
const even = arr.filter(n => n % 2 === 0);
console.log(even)`,
totalMistakes: 5,
hint: "Add missing semicolons after arr and console.log."
},

// ── J94 ──
{
correct: `let a = "Hello";
let b = "World";
console.log(a + " " + b);`,
wrong: `let a = "Hello"
let b = "World";
console.log(a + " " + b)`,
totalMistakes: 5,
hint: "Add missing semicolons after a and console.log."
},

// ── J95 ──
{
correct: `function log(val) {
  console.log(val);
}
log(42);`,
wrong: `function log(val) {
  Console.log(val);
}
log(42)`,
totalMistakes: 5,
hint: "Lowercase Console → console, add missing semicolon."
},

// ── J96 ──
{
correct: `let str = "  hello  ";
console.log(str.trim());`,
wrong: `let str = "  hello  "
console.log(str.Trim())`,
totalMistakes: 6,
hint: "Add missing semicolons, fix case: Trim → trim."
},

// ── J97 ──
{
correct: `let x = 15;
let y = x % 4;
console.log(y);`,
wrong: `let x = 15
let y = x % 4;
console.log(y)`,
totalMistakes: 5,
hint: "Add missing semicolons after x and console.log."
},

// ── J98 ──
{
correct: `function sayBye(name) {
  return "Bye " + name;
}`,
wrong: `funcion sayBye(name) {
  return "Bye " + name;
}`,
totalMistakes: 5,
hint: "Fix spelling: funcion → function."
},

// ── J99 ──
{
correct: `let arr = [1, 2, 3];
let first = arr.shift();
console.log(first);`,
wrong: `let arr = [1, 2, 3]
let first = arr.shift();
console.log(first)`,
totalMistakes: 5,
hint: "Add missing semicolons after arr and console.log."
},

// ── J100 ──
{
correct: `let x = 4;
let y = 5;
let product = x * y;
console.log(product);`,
wrong: `let x = 4;
let y = 5
let product = x * y;
console.log(product)`,
totalMistakes: 5,
hint: "Add missing semicolons after y and console.log."
},

  ],


  MEDIUM: [
/* ── Paragraph Mistakes — Medium JavaScript Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (JM1 - JM25)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return)
     'missing' = semicolon, bracket, ya closing brace ghayab hai
*/

// ── JM1 ──
{
correct: `function calculateArea(width, height) {
  let area = width * height;
  console.log("Area is: " + area);
  return area;
}
let w = 10;
let h = 5;
let result = calculateArea(w, h);
console.log(result);`,
wrong: `functoin calculateArea(width, height) {
  let area = width * height
  Console.log("Area is: " + area);
  Return area;
}
let w = 10
let h = 5
let result = calculateArea(w, h)
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function spelling, add missing semicolons, fix Console and Return case."
},

// ── JM2 ──
{
correct: `let students = ["Ali", "Sara", "Ahmed"];
let count = students.length;
console.log("Total students: " + count);
students.push("Zara");
console.log(students);
let first = students[0];
console.log(first);`,
wrong: `let students = ["Ali", "Sara", "Ahmed"]
let count = students.lenght;
Console.log("Total students: " + count)
students.psh("Zara");
console.log(students)
let first = students[0]
Console.log(first)`,
totalMistakes: 16,
hint: "Add missing semicolons, fix length spelling, fix push spelling, lowercase Console."
},

// ── JM3 ──
{
correct: `function greetUser(name, age) {
  let message = "Hello " + name;
  let info = "Age: " + age;
  console.log(message);
  console.log(info);
  return message;
}
let userName = "Hassan";
let userAge = 22;
greetUser(userName, userAge);`,
wrong: `Funtion greetUser(name, age) {
  let message = "Hello " + name
  let info = "Age: " + age
  console.log(message)
  Console.log(info);
  retrun message;
}
let userName = "Hassan"
let userAge = 22
greetUser(userName, userAge)`,
totalMistakes: 17,
hint: "Fix function spelling, fix return spelling, add missing semicolons, fix Console case."
},

// ── JM4 ──
{
correct: `let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum: " + sum);
let avg = sum / numbers.length;
console.log("Average: " + avg);`,
wrong: `let numbers = [1, 2, 3, 4, 5]
let sum = 0
For (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log("Sum: " + sum)
let avg = sum / numbers.lenght;
Console.log("Average: " + avg)`,
totalMistakes: 16,
hint: "Lowercase For, fix length spelling, add missing semicolons, fix Console case."
},

// ── JM5 ──
{
correct: `function checkAge(age) {
  if (age >= 18) {
    console.log("Adult");
    return true;
  } else {
    console.log("Minor");
    return false;
  }
}
let age = 20;
let isAdult = checkAge(age);
console.log(isAdult);`,
wrong: `functoin checkAge(age) {
  if (age >= 18) {
    Console.log("Adult")
    Return true;
  } else {
    console.log("Minor")
    Return false;
  }
}
let age = 20
let isAdult = checkAge(age)
console.log(isAdult)`,
totalMistakes: 17,
hint: "Fix function spelling, fix Return case, add missing semicolons, fix Console case."
},

// ── JM6 ──
{
correct: `let fruits = ["apple", "mango", "banana"];
fruits.push("orange");
fruits.pop();
console.log(fruits.length);
let upper = fruits[0].toUpperCase();
console.log(upper);
fruits.reverse();
console.log(fruits);`,
wrong: `let fruits = ["apple", "mango", "banana"]
fruits.push("orange")
fruits.Pop();
Console.log(fruits.lenght)
let upper = fruits[0].toUppercase()
console.log(upper)
fruits.reverse()
Console.log(fruits)`,
totalMistakes: 16,
hint: "Fix Pop and toUppercase case, fix length spelling, add semicolons, fix Console case."
},

// ── JM7 ──
{
correct: `function multiply(a, b, c) {
  let result = a * b * c;
  console.log("Result: " + result);
  return result;
}
let x = 3;
let y = 4;
let z = 5;
let ans = multiply(x, y, z);
console.log(ans);`,
wrong: `function multiply(a, b, c) {
  let result = a * b * c
  Console.log("Result: " + result)
  retrun result;
}
let x = 3
let y = 4
let z = 5
let ans = multiply(x, y, z)
Console.log(ans)`,
totalMistakes: 16,
hint: "Fix return spelling, add missing semicolons, fix Console case."
},

// ── JM8 ──
{
correct: `let str = "hello world";
let upper = str.toUpperCase();
let trimmed = str.trim();
let length = str.length;
console.log(upper);
console.log(trimmed);
console.log(length);
let includes = str.includes("world");
console.log(includes);`,
wrong: `let str = "hello world"
let upper = str.toUppercase()
let trimmed = str.Trim()
let length = str.lenght
Console.log(upper)
console.log(trimmed)
Console.log(length)
let includes = str.incldes("world")
console.log(includes)`,
totalMistakes: 17,
hint: "Fix toUppercase, Trim, length spelling, includes spelling, add semicolons, fix Console."
},

// ── JM9 ──
{
correct: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let nums = [3, 7, 2, 9, 1];
let maxVal = findMax(nums);
console.log(maxVal);`,
wrong: `functoin findMax(arr) {
  let max = arr[0]
  For (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  Return max;
}
let nums = [3, 7, 2, 9, 1]
let maxVal = findMax(nums)
Console.log(maxVal)`,
totalMistakes: 16,
hint: "Fix function and return spelling, lowercase For, add missing semicolons, fix Console."
},

// ── JM10 ──
{
correct: `let obj = {
  name: "Ali",
  age: 25,
  city: "Lahore"
};
console.log(obj.name);
console.log(obj.age);
obj.age = 26;
console.log(obj.age);
let keys = Object.keys(obj);
console.log(keys);`,
wrong: `let obj = {
  name: "Ali",
  age: 25,
  city: "Lahore"
}
Console.log(obj.name)
console.log(obj.age)
obj.age = 26
Console.log(obj.age)
let keys = Object.Keys(obj)
Console.log(keys)`,
totalMistakes: 16,
hint: "Add missing semicolons, fix Console case, fix Object.Keys → Object.keys."
},

// ── JM11 ──
{
correct: `function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  console.log(reversed);
  return reversed;
}
let word = "JavaScript";
let rev = reverseString(word);
console.log(rev.length);
console.log(rev.toUpperCase());`,
wrong: `functoin reverseString(str) {
  let reversed = str.spilt("").reverse().join("")
  Console.log(reversed)
  Return reversed;
}
let word = "JavaScript"
let rev = reverseString(word)
console.log(rev.lenght)
Console.log(rev.toUppercase())`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix split/length spelling, fix toUppercase, add semicolons, fix Console."
},

// ── JM12 ──
{
correct: `let arr = [10, 20, 30, 40, 50];
let doubled = arr.map(x => x * 2);
let filtered = arr.filter(x => x > 20);
let sum = arr.reduce((a, b) => a + b, 0);
console.log(doubled);
console.log(filtered);
console.log(sum);`,
wrong: `let arr = [10, 20, 30, 40, 50]
let doubled = arr.Map(x => x * 2)
let filtered = arr.filter(x => x > 20)
let sum = arr.Reduce((a, b) => a + b, 0)
Console.log(doubled)
Console.log(filtered)
console.log(sum)`,
totalMistakes: 15,
hint: "Fix Map and Reduce case, add missing semicolons, fix Console case."
},

// ── JM13 ──
{
correct: `function countdown(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  console.log("Done!");
}
let start = 5;
countdown(start);`,
wrong: `functoin countdown(n) {
  While (n > 0) {
    Console.log(n)
    n--;
  }
  console.log("Done!")
}
let start = 5
countdown(start)`,
totalMistakes: 15,
hint: "Fix function spelling, lowercase While, add missing semicolons, fix Console case."
},

// ── JM14 ──
{
correct: `const person = {
  name: "Sara",
  greet: function() {
    return "Hi I am " + this.name;
  }
};
let msg = person.greet();
console.log(msg);
console.log(person.name);
console.log(typeof person);`,
wrong: `const person = {
  name: "Sara",
  greet: Funtion() {
    Return "Hi I am " + this.name;
  }
}
let msg = person.greet()
Console.log(msg)
console.log(person.name)
Console.log(Typeof person)`,
totalMistakes: 16,
hint: "Fix Function/Return/Typeof case, add missing semicolons, fix Console case."
},

// ── JM15 ──
{
correct: `function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let num = 7;
let result = isPrime(num);
console.log(result);
console.log(isPrime(4));`,
wrong: `functoin isPrime(n) {
  if (n < 2) Return false;
  For (let i = 2; i < n; i++) {
    if (n % i === 0) Return false;
  }
  Return true;
}
let num = 7
let result = isPrime(num)
Console.log(result)
console.log(isPrime(4))`,
totalMistakes: 17,
hint: "Fix function spelling, fix Return case (3 times), lowercase For, add missing semicolons, fix Console."
},

// ── JM16 ──
{
correct: `let scores = [85, 92, 78, 90, 88];
let total = 0;
scores.forEach(s => total += s);
let average = total / scores.length;
console.log("Total: " + total);
console.log("Average: " + average);
let max = Math.max(...scores);
console.log("Max: " + max);`,
wrong: `let scores = [85, 92, 78, 90, 88]
let total = 0
scores.forEach(s => total += s)
let average = total / scores.lenght;
Console.log("Total: " + total)
Console.log("Average: " + average)
let max = Math.Max(...scores)
console.log("Max: " + max)`,
totalMistakes: 16,
hint: "Add missing semicolons, fix length spelling, fix Math.Max, fix Console case."
},

// ── JM17 ──
{
correct: `function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,
wrong: `functoin makeCounter() {
  let count = 0
  Return function() {
    count++
    Return count;
  }
}
let counter = makeCounter()
Console.log(counter())
console.log(counter())
Console.log(counter())`,
totalMistakes: 16,
hint: "Fix function spelling, fix Return case (2 times), add missing semicolons, fix Console case."
},

// ── JM18 ──
{
correct: `let arr = [5, 3, 8, 1, 9, 2];
arr.sort((a, b) => a - b);
console.log(arr);
let first = arr[0];
let last = arr[arr.length - 1];
console.log("Min: " + first);
console.log("Max: " + last);
arr.reverse();
console.log(arr);`,
wrong: `let arr = [5, 3, 8, 1, 9, 2]
arr.sort((a, b) => a - b)
Console.log(arr)
let first = arr[0]
let last = arr[arr.lenght - 1]
Console.log("Min: " + first)
console.log("Max: " + last)
arr.reverse()
Console.log(arr)`,
totalMistakes: 16,
hint: "Add missing semicolons, fix length spelling, fix Console case."
},

// ── JM19 ──
{
correct: `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
let num = 5;
let result = factorial(num);
console.log(result);
console.log(factorial(0));
console.log(factorial(3));`,
wrong: `functoin factorial(n) {
  if (n === 0) Return 1;
  Return n * factorial(n - 1);
}
let num = 5
let result = factorial(num)
Console.log(result)
console.log(factorial(0))
Console.log(factorial(3))`,
totalMistakes: 16,
hint: "Fix function spelling, fix Return case (2 times), add missing semicolons, fix Console case."
},

// ── JM20 ──
{
correct: `const student = {
  name: "Ahmed",
  marks: [80, 90, 75, 85],
  getAverage: function() {
    let sum = this.marks.reduce((a, b) => a + b, 0);
    return sum / this.marks.length;
  }
};
console.log(student.name);
let avg = student.getAverage();
console.log(avg);`,
wrong: `const student = {
  name: "Ahmed",
  marks: [80, 90, 75, 85],
  getAverage: Funtion() {
    let sum = this.marks.Reduce((a, b) => a + b, 0)
    Return sum / this.marks.lenght;
  }
}
Console.log(student.name)
let avg = student.getAverage()
Console.log(avg)`,
totalMistakes: 16,
hint: "Fix Function/Return case, fix Reduce/length, add semicolons, fix Console case."
},

// ── JM21 ──
{
correct: `function removeDuplicates(arr) {
  let unique = [];
  arr.forEach(item => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
}
let data = [1, 2, 2, 3, 3, 4];
let result = removeDuplicates(data);
console.log(result);`,
wrong: `functoin removeDuplicates(arr) {
  let unique = []
  arr.forEach(item => {
    if (!unique.incldes(item)) {
      unique.psh(item)
    }
  })
  Return unique;
}
let data = [1, 2, 2, 3, 3, 4]
let result = removeDuplicates(data)
Console.log(result)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix includes/push spelling, add missing semicolons, fix Console."
},

// ── JM22 ──
{
correct: `let name = "Ali";
let age = 25;
let city = "Lahore";
let info = \`My name is \${name}, I am \${age} years old, from \${city}.\`;
console.log(info);
console.log(info.length);
console.log(info.toUpperCase());
console.log(info.includes("Ali"));`,
wrong: `let name = "Ali"
let age = 25
let city = "Lahore"
let info = \`My name is \${name}, I am \${age} years old, from \${city}.\`
Console.log(info)
console.log(info.lenght)
Console.log(info.toUppercase())
console.log(info.incldes("Ali"))`,
totalMistakes: 16,
hint: "Add missing semicolons, fix length/includes/toUppercase spelling and case, fix Console."
},

// ── JM23 ──
{
correct: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let arr = [64, 34, 25, 12];
console.log(bubbleSort(arr));`,
wrong: `functoin bubbleSort(arr) {
  let n = arr.lenght;
  For (let i = 0; i < n - 1; i++) {
    For (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  Return arr;
}
let arr = [64, 34, 25, 12]
Console.log(bubbleSort(arr))`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix length spelling, lowercase For (2 times), add missing semicolons, fix Console."
},

// ── JM24 ──
{
correct: `const calculator = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; },
  multiply: function(a, b) { return a * b; },
  divide: function(a, b) { return a / b; }
};
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));`,
wrong: `const calculator = {
  add: Funtion(a, b) { Return a + b; },
  subtract: function(a, b) { retrun a - b; },
  multiply: Funtion(a, b) { Return a * b; },
  divide: function(a, b) { Return a / b; }
}
Console.log(calculator.add(10, 5))
Console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 5))
Console.log(calculator.divide(10, 5))`,
totalMistakes: 18,
hint: "Fix Function/Return case (multiple), fix return spelling, add missing semicolons, fix Console."
},

// ── JM25 ──
{
correct: `function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(sub => result.push(sub));
    } else {
      result.push(item);
    }
  });
  return result;
}
let nested = [1, [2, 3], [4, 5], 6];
let flat = flattenArray(nested);
console.log(flat);
console.log(flat.length);`,
wrong: `functoin flattenArray(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(sub => result.psh(sub))
    } else {
      result.psh(item)
    }
  })
  Return result;
}
let nested = [1, [2, 3], [4, 5], 6]
let flat = flattenArray(nested)
Console.log(flat)
Console.log(flat.lenght)`,
totalMistakes: 18,
hint: "Fix function/return spelling, fix push spelling (2 times), fix length spelling, add semicolons, fix Console."
},

/* ── Paragraph Mistakes — Medium JavaScript Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (JM26 - JM50)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return)
     'missing' = semicolon, bracket, ya closing brace ghayab hai
*/

// ── JM26 ──
{
correct: `function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log("Total: " + total);
  return total;
}
let nums = [10, 20, 30, 40];
let result = sumArray(nums);
console.log(result);`,
wrong: `functoin sumArray(arr) {
  let total = 0
  For (let i = 0; i < arr.lenght; i++) {
    total += arr[i]
  }
  Console.log("Total: " + total)
  Return total;
}
let nums = [10, 20, 30, 40]
let result = sumArray(nums)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For, fix length spelling, add semicolons, fix Console."
},

// ── JM27 ──
{
correct: `let user = {
  name: "Bilal",
  age: 30,
  email: "bilal@mail.com"
};
console.log(user.name);
console.log(user.age);
user.age = 31;
console.log(user.age);
let keys = Object.keys(user);
console.log(keys);
let values = Object.values(user);
console.log(values);`,
wrong: `let user = {
  name: "Bilal",
  age: 30,
  email: "bilal@mail.com"
}
Console.log(user.name)
console.log(user.age)
user.age = 31
Console.log(user.age)
let keys = Object.Keys(user)
Console.log(keys)
let values = Object.Valuse(user)
console.log(values)`,
totalMistakes: 17,
hint: "Add missing semicolons, fix Object.Keys and Object.Values spelling/case, fix Console."
},

// ── JM28 ──
{
correct: `function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let word = "JavaScript";
let result = countVowels(word);
console.log(result);`,
wrong: `functoin countVowels(str) {
  let vowels = "aeiouAEIOU"
  let count = 0
  For (let i = 0; i < str.lenght; i++) {
    if (vowels.incldes(str[i])) {
      count++
    }
  }
  Return count;
}
let word = "JavaScript"
let result = countVowels(word)
Console.log(result)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For, fix length/includes spelling, add semicolons, fix Console."
},

// ── JM29 ──
{
correct: `const animals = ["cat", "dog", "bird", "fish"];
animals.push("rabbit");
console.log(animals.length);
let upper = animals.map(a => a.toUpperCase());
console.log(upper);
let filtered = animals.filter(a => a.length > 3);
console.log(filtered);
animals.sort();
console.log(animals);`,
wrong: `const animals = ["cat", "dog", "bird", "fish"]
animals.psh("rabbit")
Console.log(animals.lenght)
let upper = animals.Map(a => a.toUppercase())
console.log(upper)
let filtered = animals.filter(a => a.lenght > 3)
Console.log(filtered)
animals.sort()
Console.log(animals)`,
totalMistakes: 18,
hint: "Fix push/length/toUppercase spelling and case, fix Map case, add semicolons, fix Console."
},

// ── JM30 ──
{
correct: `function fibonacci(n) {
  let a = 0;
  let b = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  return result;
}
let fib = fibonacci(7);
console.log(fib);`,
wrong: `functoin fibonacci(n) {
  let a = 0
  let b = 1
  let result = []
  For (let i = 0; i < n; i++) {
    result.psh(a)
    let temp = a + b
    a = b
    b = temp
  }
  Return result;
}
let fib = fibonacci(7)
Console.log(fib)`,
totalMistakes: 18,
hint: "Fix function/return spelling, fix push spelling, lowercase For, add missing semicolons, fix Console."
},

// ── JM31 ──
{
correct: `function capitalize(str) {
  let first = str.charAt(0).toUpperCase();
  let rest = str.slice(1).toLowerCase();
  return first + rest;
}
let words = ["hello", "world", "javascript"];
let result = words.map(w => capitalize(w));
console.log(result);
console.log(result.length);`,
wrong: `functoin capitalize(str) {
  let first = str.Charat(0).toUppercase()
  let rest = str.slice(1).toLowercase()
  Return first + rest;
}
let words = ["hello", "world", "javascript"]
let result = words.Map(w => capitalize(w))
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix charAt/toUpperCase/toLowerCase/length case, fix Map, add semicolons, fix Console."
},

// ── JM32 ──
{
correct: `let scores = [70, 85, 92, 60, 78];
let passed = scores.filter(s => s >= 70);
let failed = scores.filter(s => s < 70);
console.log("Passed: " + passed.length);
console.log("Failed: " + failed.length);
let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
console.log("Average: " + avg);
console.log(Math.max(...scores));`,
wrong: `let scores = [70, 85, 92, 60, 78]
let passed = scores.filter(s => s >= 70)
let failed = scores.filter(s => s < 70)
Console.log("Passed: " + passed.lenght)
Console.log("Failed: " + failed.lenght)
let avg = scores.Reduce((a, b) => a + b, 0) / scores.lenght
Console.log("Average: " + avg)
console.log(Math.Max(...scores))`,
totalMistakes: 17,
hint: "Add missing semicolons, fix length spelling (3 times), fix Reduce/Math.Max case, fix Console."
},

// ── JM33 ──
{
correct: `function mergeObjects(obj1, obj2) {
  let merged = Object.assign({}, obj1, obj2);
  return merged;
}
let a = { name: "Ali", age: 20 };
let b = { city: "Lahore", job: "Dev" };
let result = mergeObjects(a, b);
console.log(result);
console.log(Object.keys(result).length);`,
wrong: `functoin mergeObjects(obj1, obj2) {
  let merged = Object.Assign({}, obj1, obj2)
  Return merged;
}
let a = { name: "Ali", age: 20 }
let b = { city: "Lahore", job: "Dev" }
let result = mergeObjects(a, b)
Console.log(result)
Console.log(Object.Keys(result).lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Object.Assign/Object.Keys case, fix length spelling, add semicolons, fix Console."
},

// ── JM34 ──
{
correct: `function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let fruits = ["apple", "mango", "banana"];
let idx = findIndex(fruits, "mango");
console.log(idx);
console.log(findIndex(fruits, "grape"));`,
wrong: `functoin findIndex(arr, target) {
  For (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === target) {
      Return i;
    }
  }
  Return -1;
}
let fruits = ["apple", "mango", "banana"]
let idx = findIndex(fruits, "mango")
Console.log(idx)
Console.log(findIndex(fruits, "grape"))`,
totalMistakes: 16,
hint: "Fix function spelling, lowercase For, fix length/return spelling, add semicolons, fix Console."
},

// ── JM35 ──
{
correct: `const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
let top = stack.pop();
console.log("Popped: " + top);
console.log(stack.length);
stack.push(10);
console.log(stack);`,
wrong: `const stack = []
stack.psh(1)
stack.psh(2)
stack.psh(3)
Console.log(stack)
let top = stack.Pop()
Console.log("Popped: " + top)
console.log(stack.lenght)
stack.push(10)
Console.log(stack)`,
totalMistakes: 17,
hint: "Fix push spelling (3 times), fix Pop case, fix length spelling, add semicolons, fix Console."
},

// ── JM36 ──
{
correct: `function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
let words = ["racecar", "hello", "level", "world"];
words.forEach(w => {
  console.log(w + ": " + isPalindrome(w));
});`,
wrong: `functoin isPalindrome(str) {
  let reversed = str.spilt("").reverse().join("")
  Return str === reversed;
}
let words = ["racecar", "hello", "level", "world"]
words.forEach(w => {
  Console.log(w + ": " + isPalindrome(w))
})`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix split spelling, add missing semicolons, fix Console."
},

// ── JM37 ──
{
correct: `let matrix = [[1, 2], [3, 4], [5, 6]];
let flat = [];
matrix.forEach(row => {
  row.forEach(num => {
    flat.push(num);
  });
});
console.log(flat);
console.log(flat.length);
let sum = flat.reduce((a, b) => a + b, 0);
console.log(sum);`,
wrong: `let matrix = [[1, 2], [3, 4], [5, 6]]
let flat = []
matrix.forEach(row => {
  row.forEach(num => {
    flat.psh(num)
  })
})
Console.log(flat)
console.log(flat.lenght)
let sum = flat.Reduce((a, b) => a + b, 0)
Console.log(sum)`,
totalMistakes: 16,
hint: "Fix push spelling, fix Reduce case, fix length spelling, add semicolons, fix Console."
},

// ── JM38 ──
{
correct: `function createPerson(name, age, city) {
  return {
    name: name,
    age: age,
    city: city,
    introduce: function() {
      return "I am " + name + " from " + city;
    }
  };
}
let p = createPerson("Sara", 25, "Karachi");
console.log(p.name);
console.log(p.introduce());`,
wrong: `functoin createPerson(name, age, city) {
  Return {
    name: name,
    age: age,
    city: city,
    introduce: Funtion() {
      Return "I am " + name + " from " + city;
    }
  }
}
let p = createPerson("Sara", 25, "Karachi")
Console.log(p.name)
Console.log(p.introduce())`,
totalMistakes: 16,
hint: "Fix function/return spelling (multiple), fix Function case, add semicolons, fix Console."
},

// ── JM39 ──
{
correct: `let str = "The quick brown fox";
let words = str.split(" ");
console.log(words.length);
let upper = words.map(w => w.toUpperCase());
console.log(upper);
let joined = upper.join("-");
console.log(joined);
let includes = str.includes("fox");
console.log(includes);`,
wrong: `let str = "The quick brown fox"
let words = str.spilt(" ")
Console.log(words.lenght)
let upper = words.Map(w => w.toUppercase())
console.log(upper)
let joined = upper.join("-")
Console.log(joined)
let includes = str.incldes("fox")
console.log(includes)`,
totalMistakes: 17,
hint: "Fix split/length/includes spelling, fix toUppercase/Map case, add semicolons, fix Console."
},

// ── JM40 ──
{
correct: `function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min: min, max: max };
}
let numbers = [5, 3, 9, 1, 7, 2];
let result = minMax(numbers);
console.log("Min:", result.min);
console.log("Max:", result.max);`,
wrong: `functoin minMax(arr) {
  let min = Math.Min(...arr)
  let max = Math.Max(...arr)
  Return { min: min, max: max };
}
let numbers = [5, 3, 9, 1, 7, 2]
let result = minMax(numbers)
Console.log("Min:", result.min)
Console.log("Max:", result.max)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Math.Min/Math.Max case, add semicolons, fix Console."
},

// ── JM41 ──
{
correct: `function truncate(str, limit) {
  if (str.length <= limit) return str;
  return str.slice(0, limit) + "...";
}
let text = "Hello this is a long sentence";
console.log(truncate(text, 10));
console.log(truncate(text, 50));
console.log(text.length);`,
wrong: `functoin truncate(str, limit) {
  if (str.lenght <= limit) Return str;
  Return str.slice(0, limit) + "...";
}
let text = "Hello this is a long sentence"
Console.log(truncate(text, 10))
Console.log(truncate(text, 50))
console.log(text.lenght)`,
totalMistakes: 16,
hint: "Fix function spelling, fix length spelling (2 times), fix Return case (2 times), add semicolons, fix Console."
},

// ── JM42 ──
{
correct: `const queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
console.log(queue);
let front = queue.shift();
console.log("Removed: " + front);
console.log(queue.length);
queue.push("fourth");
console.log(queue);`,
wrong: `const queue = []
queue.psh("first")
queue.psh("second")
queue.psh("third")
Console.log(queue)
let front = queue.Shift()
Console.log("Removed: " + front)
console.log(queue.lenght)
queue.push("fourth")
Console.log(queue)`,
totalMistakes: 17,
hint: "Fix push spelling (2 times), fix Shift case, fix length spelling, add semicolons, fix Console."
},

// ── JM43 ──
{
correct: `function groupByLength(words) {
  let groups = {};
  words.forEach(word => {
    let len = word.length;
    if (!groups[len]) {
      groups[len] = [];
    }
    groups[len].push(word);
  });
  return groups;
}
let arr = ["hi", "bye", "hey", "hello", "world"];
let result = groupByLength(arr);
console.log(result);`,
wrong: `functoin groupByLength(words) {
  let groups = {}
  words.forEach(word => {
    let len = word.lenght
    if (!groups[len]) {
      groups[len] = []
    }
    groups[len].psh(word)
  })
  Return groups;
}
let arr = ["hi", "bye", "hey", "hello", "world"]
let result = groupByLength(arr)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix length/push spelling, add missing semicolons, fix Console."
},

// ── JM44 ──
{
correct: `let a = [1, 2, 3, 4, 5];
let b = [4, 5, 6, 7, 8];
let union = [...new Set([...a, ...b])];
let intersection = a.filter(x => b.includes(x));
console.log("Union:", union);
console.log("Intersection:", intersection);
console.log(union.length);
console.log(intersection.length);`,
wrong: `let a = [1, 2, 3, 4, 5]
let b = [4, 5, 6, 7, 8]
let union = [...new Set([...a, ...b])]
let intersection = a.filter(x => b.incldes(x))
Console.log("Union:", union)
Console.log("Intersection:", intersection)
Console.log(union.lenght)
Console.log(intersection.lenght)`,
totalMistakes: 15,
hint: "Fix includes/length spelling, add missing semicolons, fix Console."
},

// ── JM45 ──
{
correct: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let original = { name: "Ali", scores: [1, 2, 3] };
let clone = deepClone(original);
clone.name = "Ahmed";
clone.scores.push(4);
console.log(original);
console.log(clone);`,
wrong: `functoin deepClone(obj) {
  Return JSON.parse(JSON.Stringify(obj));
}
let original = { name: "Ali", scores: [1, 2, 3] }
let clone = deepClone(original)
clone.name = "Ahmed"
clone.scores.psh(4)
Console.log(original)
Console.log(clone)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix JSON.Stringify case, fix push spelling, add semicolons, fix Console."
},

// ── JM46 ──
{
correct: `function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
function sayHello() {
  console.log("Hello!");
}
let debounced = debounce(sayHello, 300);
debounced();`,
wrong: `functoin debounce(func, delay) {
  let timer;
  Return Funtion() {
    clearTimeout(timer)
    timer = setTimeout(func, delay)
  }
}
function sayHello() {
  Console.log("Hello!")
}
let debounced = debounce(sayHello, 300)
debounced()`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Function case, add missing semicolons, fix Console."
},

// ── JM47 ──
{
correct: `let data = [
  { name: "Ali", score: 85 },
  { name: "Sara", score: 92 },
  { name: "Ahmed", score: 78 }
];
data.sort((a, b) => b.score - a.score);
console.log(data[0].name);
let names = data.map(d => d.name);
console.log(names);
let avg = data.reduce((sum, d) => sum + d.score, 0) / data.length;
console.log(avg);`,
wrong: `let data = [
  { name: "Ali", score: 85 },
  { name: "Sara", score: 92 },
  { name: "Ahmed", score: 78 }
]
data.sort((a, b) => b.score - a.score)
Console.log(data[0].name)
let names = data.Map(d => d.name)
Console.log(names)
let avg = data.Reduce((sum, d) => sum + d.score, 0) / data.lenght
console.log(avg)`,
totalMistakes: 15,
hint: "Add missing semicolons, fix Map/Reduce case, fix length spelling, fix Console."
},

// ── JM48 ──
{
correct: `function strToNum(str) {
  let num = Number(str);
  if (isNaN(num)) {
    console.log("Not a number");
    return null;
  }
  console.log("Number: " + num);
  return num;
}
strToNum("42");
strToNum("hello");
strToNum("3.14");`,
wrong: `functoin strToNum(str) {
  let num = Number(str)
  if (isNaN(num)) {
    Console.log("Not a number")
    Return null;
  }
  Console.log("Number: " + num)
  Return num;
}
strToNum("42")
strToNum("hello")
strToNum("3.14")`,
totalMistakes: 16,
hint: "Fix function spelling, fix Return case (2 times), add missing semicolons, fix Console."
},

// ── JM49 ──
{
correct: `function pipe(...fns) {
  return function(value) {
    return fns.reduce((v, fn) => fn(v), value);
  };
}
const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;
const transform = pipe(double, addTen, square);
console.log(transform(3));`,
wrong: `functoin pipe(...fns) {
  Return Funtion(value) {
    Return fns.Reduce((v, fn) => fn(v), value)
  }
}
const double = x => x * 2
const addTen = x => x + 10
const square = x => x * x
const transform = pipe(double, addTen, square)
Console.log(transform(3))`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Function/Reduce case, add missing semicolons, fix Console."
},

// ── JM50 ──
{
correct: `function memoize(fn) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}
function slowSquare(n) {
  return n * n;
}
let fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5));
console.log(fastSquare(10));`,
wrong: `functoin memoize(fn) {
  let cache = {}
  Return Funtion(n) {
    if (cache[n] !== undefined) {
      Return cache[n]
    }
    cache[n] = fn(n)
    Return cache[n]
  }
}
function slowSquare(n) {
  Return n * n;
}
let fastSquare = memoize(slowSquare)
Console.log(fastSquare(5))
Console.log(fastSquare(5))
Console.log(fastSquare(10))`,
totalMistakes: 18,
hint: "Fix function/return spelling, fix Function case, fix Return case (multiple), add semicolons, fix Console."
},

/* ── Paragraph Mistakes — Medium JavaScript Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (JM51 - JM75)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return)
     'missing' = semicolon, bracket, ya closing brace ghayab hai
*/

// ── JM51 ──
{
correct: `function getEvenNumbers(arr) {
  let evens = arr.filter(n => n % 2 === 0);
  console.log("Even count: " + evens.length);
  return evens;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let result = getEvenNumbers(nums);
console.log(result);
console.log(result.length);`,
wrong: `functoin getEvenNumbers(arr) {
  let evens = arr.filter(n => n % 2 === 0)
  Console.log("Even count: " + evens.lenght)
  Return evens;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8]
let result = getEvenNumbers(nums)
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM52 ──
{
correct: `let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 200 }
];
let names = products.map(p => p.name);
let prices = products.map(p => p.price);
let total = prices.reduce((a, b) => a + b, 0);
console.log(names);
console.log(total);
console.log(products.length);`,
wrong: `let products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 200 }
]
let names = products.Map(p => p.name)
let prices = products.Map(p => p.price)
let total = prices.Reduce((a, b) => a + b, 0)
Console.log(names)
Console.log(total)
Console.log(products.lenght)`,
totalMistakes: 16,
hint: "Add missing semicolons, fix Map/Reduce case (3 times), fix length spelling, fix Console."
},

// ── JM53 ──
{
correct: `function stringStats(str) {
  let length = str.length;
  let upper = str.toUpperCase();
  let lower = str.toLowerCase();
  let reversed = str.split("").reverse().join("");
  console.log("Length:", length);
  console.log("Upper:", upper);
  console.log("Lower:", lower);
  console.log("Reversed:", reversed);
}
stringStats("JavaScript");`,
wrong: `functoin stringStats(str) {
  let length = str.lenght
  let upper = str.toUppercase()
  let lower = str.toLowercase()
  let reversed = str.spilt("").reverse().join("")
  Console.log("Length:", length)
  Console.log("Upper:", upper)
  Console.log("Lower:", lower)
  Console.log("Reversed:", reversed)
}
stringStats("JavaScript")`,
totalMistakes: 17,
hint: "Fix function spelling, fix length/split spelling, fix toUpperCase/toLowerCase case, add semicolons, fix Console."
},

// ── JM54 ──
{
correct: `function chunkArray(arr, size) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let result = chunkArray(arr, 3);
console.log(result);
console.log(result.length);`,
wrong: `functoin chunkArray(arr, size) {
  let chunks = []
  For (let i = 0; i < arr.lenght; i += size) {
    chunks.psh(arr.slice(i, i + size))
  }
  Return chunks;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let result = chunkArray(arr, 3)
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For, fix length/push spelling, add semicolons, fix Console."
},

// ── JM55 ──
{
correct: `const colors = new Set(["red", "blue", "green", "red", "blue"]);
console.log(colors.size);
colors.add("yellow");
console.log(colors.has("red"));
colors.delete("blue");
console.log(colors);
let arr = Array.from(colors);
console.log(arr);
console.log(arr.length);`,
wrong: `const colors = new Set(["red", "blue", "green", "red", "blue"])
Console.log(colors.size)
colors.Add("yellow")
Console.log(colors.Has("red"))
colors.Delete("blue")
Console.log(colors)
let arr = Array.From(colors)
Console.log(arr)
console.log(arr.lenght)`,
totalMistakes: 17,
hint: "Add missing semicolons, fix Add/Has/Delete/Array.From case, fix length spelling, fix Console."
},

// ── JM56 ──
{
correct: `function flatMap(arr, fn) {
  return arr.map(fn).reduce((a, b) => a.concat(b), []);
}
let words = ["hello world", "foo bar", "js code"];
let letters = flatMap(words, w => w.split(" "));
console.log(letters);
console.log(letters.length);
let upper = letters.map(l => l.toUpperCase());
console.log(upper);`,
wrong: `functoin flatMap(arr, fn) {
  Return arr.Map(fn).Reduce((a, b) => a.concat(b), []);
}
let words = ["hello world", "foo bar", "js code"]
let letters = flatMap(words, w => w.spilt(" "))
Console.log(letters)
console.log(letters.lenght)
let upper = letters.Map(l => l.toUppercase())
Console.log(upper)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Map/Reduce/toUppercase case, fix split/length spelling, add semicolons, fix Console."
},

// ── JM57 ──
{
correct: `function throttle(fn, limit) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn();
    }
  };
}
function sayHi() {
  console.log("Hi!");
}
let throttled = throttle(sayHi, 1000);
throttled();`,
wrong: `functoin throttle(fn, limit) {
  let lastCall = 0
  Return Funtion() {
    let now = Date.Now()
    if (now - lastCall >= limit) {
      lastCall = now
      Return fn()
    }
  }
}
function sayHi() {
  Console.log("Hi!")
}
let throttled = throttle(sayHi, 1000)
throttled()`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Function/Date.Now/Return case, add semicolons, fix Console."
},

// ── JM58 ──
{
correct: `let map = new Map();
map.set("name", "Ali");
map.set("age", 25);
map.set("city", "Lahore");
console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.size);
map.delete("city");
console.log(map);`,
wrong: `let map = new Map()
map.Set("name", "Ali")
map.Set("age", 25)
map.Set("city", "Lahore")
Console.log(map.Get("name"))
Console.log(map.Has("age"))
Console.log(map.size)
map.Delete("city")
Console.log(map)`,
totalMistakes: 17,
hint: "Add missing semicolons, fix Set/Get/Has/Delete case, fix Console."
},

// ── JM59 ──
{
correct: `function zip(arr1, arr2) {
  let result = [];
  let len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}
let a = [1, 2, 3];
let b = ["a", "b", "c"];
let zipped = zip(a, b);
console.log(zipped);`,
wrong: `functoin zip(arr1, arr2) {
  let result = []
  let len = Math.Min(arr1.lenght, arr2.lenght)
  For (let i = 0; i < len; i++) {
    result.psh([arr1[i], arr2[i]])
  }
  Return result;
}
let a = [1, 2, 3]
let b = ["a", "b", "c"]
let zipped = zip(a, b)
Console.log(zipped)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Math.Min case, fix length/push spelling, lowercase For, add semicolons, fix Console."
},

// ── JM60 ──
{
correct: `function compose(...fns) {
  return function(value) {
    return fns.reduceRight((v, fn) => fn(v), value);
  };
}
const triple = x => x * 3;
const addFive = x => x + 5;
const negate = x => -x;
const transform = compose(negate, addFive, triple);
console.log(transform(4));`,
wrong: `functoin compose(...fns) {
  Return Funtion(value) {
    Return fns.ReduceRight((v, fn) => fn(v), value)
  }
}
const triple = x => x * 3
const addFive = x => x + 5
const negate = x => -x
const transform = compose(negate, addFive, triple)
Console.log(transform(4))`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Function/ReduceRight case, add semicolons, fix Console."
},

// ── JM61 ──
{
correct: `function wordFrequency(str) {
  let words = str.split(" ");
  let freq = {};
  words.forEach(word => {
    freq[word] = (freq[word] || 0) + 1;
  });
  return freq;
}
let sentence = "the cat sat on the mat the cat";
let result = wordFrequency(sentence);
console.log(result);`,
wrong: `functoin wordFrequency(str) {
  let words = str.spilt(" ")
  let freq = {}
  words.forEach(word => {
    freq[word] = (freq[word] || 0) + 1
  })
  Return freq;
}
let sentence = "the cat sat on the mat the cat"
let result = wordFrequency(sentence)
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix split spelling, add missing semicolons, fix Console."
},

// ── JM62 ──
{
correct: `function range(start, end, step = 1) {
  let result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}
console.log(range(0, 10));
console.log(range(0, 10, 2));
console.log(range(1, 6, 1));`,
wrong: `functoin range(start, end, step = 1) {
  let result = []
  For (let i = start; i < end; i += step) {
    result.psh(i)
  }
  Return result;
}
Console.log(range(0, 10))
Console.log(range(0, 10, 2))
Console.log(range(1, 6, 1))`,
totalMistakes: 15,
hint: "Fix function/return spelling, lowercase For, fix push spelling, add semicolons, fix Console."
},

// ── JM63 ──
{
correct: `function toCamelCase(str) {
  let words = str.split("_");
  return words.map((word, index) => {
    if (index === 0) return word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join("");
}
console.log(toCamelCase("hello_world"));
console.log(toCamelCase("my_variable_name"));`,
wrong: `functoin toCamelCase(str) {
  let words = str.spilt("_")
  Return words.Map((word, index) => {
    if (index === 0) Return word.toLowercase()
    Return word.Charat(0).toUppercase() + word.slice(1).toLowercase()
  }).join("")
}
Console.log(toCamelCase("hello_world"))
Console.log(toCamelCase("my_variable_name"))`,
totalMistakes: 17,
hint: "Fix function/split spelling, fix return/Map/charAt/toUpperCase/toLowerCase case, add semicolons, fix Console."
},

// ── JM64 ──
{
correct: `function formatCurrency(amount, currency = "PKR") {
  let formatted = amount.toFixed(2);
  return currency + " " + formatted;
}
let prices = [99.5, 1500, 250.75, 49];
let formatted = prices.map(p => formatCurrency(p));
console.log(formatted);
console.log(formatCurrency(1000, "USD"));`,
wrong: `functoin formatCurrency(amount, currency = "PKR") {
  let formatted = amount.toFixed(2)
  Return currency + " " + formatted;
}
let prices = [99.5, 1500, 250.75, 49]
let formatted = prices.Map(p => formatCurrency(p))
Console.log(formatted)
Console.log(formatCurrency(1000, "USD"))`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Map case, add missing semicolons, fix Console."
},

// ── JM65 ──
{
correct: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
let sorted = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sorted, 7));
console.log(binarySearch(sorted, 4));`,
wrong: `functoin binarySearch(arr, target) {
  let left = 0
  let right = arr.lenght - 1
  While (left <= right) {
    let mid = Math.Floor((left + right) / 2)
    if (arr[mid] === target) Return mid;
    if (arr[mid] < target) left = mid + 1
    else right = mid - 1
  }
  Return -1;
}
let sorted = [1, 3, 5, 7, 9, 11]
Console.log(binarySearch(sorted, 7))
Console.log(binarySearch(sorted, 4))`,
totalMistakes: 17,
hint: "Fix function spelling, fix length spelling, lowercase While/Math.Floor, fix Return case, add semicolons, fix Console."
},

// ── JM66 ──
{
correct: `function createMatrix(rows, cols, fill = 0) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = new Array(cols).fill(fill);
    matrix.push(row);
  }
  return matrix;
}
let m = createMatrix(3, 4);
console.log(m);
console.log(m.length);
console.log(m[0].length);`,
wrong: `functoin createMatrix(rows, cols, fill = 0) {
  let matrix = []
  For (let i = 0; i < rows; i++) {
    let row = new Array(cols).Fill(fill)
    matrix.psh(row)
  }
  Return matrix;
}
let m = createMatrix(3, 4)
Console.log(m)
console.log(m.lenght)
Console.log(m[0].lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For, fix Fill/push case and spelling, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM67 ──
{
correct: `function shuffle(arr) {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
let cards = [1, 2, 3, 4, 5];
let result = shuffle(cards);
console.log(result);`,
wrong: `functoin shuffle(arr) {
  let shuffled = [...arr]
  For (let i = shuffled.lenght - 1; i > 0; i--) {
    let j = Math.Floor(Math.random() * (i + 1))
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  Return shuffled;
}
let cards = [1, 2, 3, 4, 5]
let result = shuffle(cards)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For/Math.Floor, fix length spelling, add semicolons, fix Console."
},

// ── JM68 ──
{
correct: `function parseCSV(csv) {
  let lines = csv.split("\n");
  let headers = lines[0].split(",");
  let data = lines.slice(1).map(line => {
    let values = line.split(",");
    let obj = {};
    headers.forEach((h, i) => obj[h] = values[i]);
    return obj;
  });
  return data;
}
let csv = "name,age\nAli,25\nSara,22";
let result = parseCSV(csv);
console.log(result);`,
wrong: `functoin parseCSV(csv) {
  let lines = csv.spilt("\n")
  let headers = lines[0].spilt(",")
  let data = lines.slice(1).Map(line => {
    let values = line.spilt(",")
    let obj = {}
    headers.forEach((h, i) => obj[h] = values[i])
    Return obj;
  })
  Return data;
}
let csv = "name,age\nAli,25\nSara,22"
let result = parseCSV(csv)
Console.log(result)`,
totalMistakes: 17,
hint: "Fix function spelling, fix split spelling (3 times), fix Map/Return case, add semicolons, fix Console."
},

// ── JM69 ──
{
correct: `function paginate(arr, page, pageSize) {
  let start = (page - 1) * pageSize;
  let end = start + pageSize;
  let total = Math.ceil(arr.length / pageSize);
  return {
    data: arr.slice(start, end),
    page: page,
    total: total
  };
}
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = paginate(items, 2, 3);
console.log(result);`,
wrong: `functoin paginate(arr, page, pageSize) {
  let start = (page - 1) * pageSize
  let end = start + pageSize
  let total = Math.Ceil(arr.lenght / pageSize)
  Return {
    data: arr.slice(start, end),
    page: page,
    total: total
  }
}
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = paginate(items, 2, 3)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Math.Ceil case, fix length spelling, add semicolons, fix Console."
},

// ── JM70 ──
{
correct: `function deepEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a !== "object") return a === b;
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => deepEqual(a[key], b[key]));
}
let obj1 = { x: 1, y: 2 };
let obj2 = { x: 1, y: 2 };
console.log(deepEqual(obj1, obj2));`,
wrong: `functoin deepEqual(a, b) {
  if (Typeof a !== Typeof b) Return false;
  if (Typeof a !== "object") Return a === b;
  let keysA = Object.Keys(a)
  let keysB = Object.Keys(b)
  if (keysA.lenght !== keysB.lenght) Return false;
  Return keysA.every(key => deepEqual(a[key], b[key]));
}
let obj1 = { x: 1, y: 2 }
let obj2 = { x: 1, y: 2 }
Console.log(deepEqual(obj1, obj2))`,
totalMistakes: 17,
hint: "Fix function spelling, fix Typeof/Return/Object.Keys case, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM71 ──
{
correct: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function(...more) {
      return curried(...args, ...more);
    };
  };
}
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));`,
wrong: `functoin curry(fn) {
  Return function curried(...args) {
    if (args.lenght >= fn.lenght) {
      Return fn(...args)
    }
    Return Funtion(...more) {
      Return curried(...args, ...more)
    }
  }
}
const add = (a, b, c) => a + b + c
const curriedAdd = curry(add)
Console.log(curriedAdd(1)(2)(3))`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix length spelling (2 times), fix Function/Return case (multiple), add semicolons, fix Console."
},

// ── JM72 ──
{
correct: `function EventEmitter() {
  this.events = {};
}
EventEmitter.prototype.on = function(event, listener) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(listener);
};
EventEmitter.prototype.emit = function(event, ...args) {
  if (this.events[event]) {
    this.events[event].forEach(fn => fn(...args));
  }
};
let emitter = new EventEmitter();
emitter.on("greet", name => console.log("Hello " + name));
emitter.emit("greet", "Ali");`,
wrong: `functoin EventEmitter() {
  this.events = {}
}
EventEmitter.prototype.on = Funtion(event, listener) {
  if (!this.events[event]) {
    this.events[event] = []
  }
  this.events[event].psh(listener)
}
EventEmitter.prototype.emit = function(event, ...args) {
  if (this.events[event]) {
    this.events[event].forEach(fn => fn(...args))
  }
}
let emitter = new EventEmitter()
emitter.on("greet", name => Console.log("Hello " + name))
emitter.emit("greet", "Ali")`,
totalMistakes: 15,
hint: "Fix function spelling, fix Function case, fix push spelling, add missing semicolons, fix Console."
},

// ── JM73 ──
{
correct: `function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
}
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;
  let val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
  return val;
};
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) this.cache.delete(key);
  if (this.cache.size >= this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));`,
wrong: `functoin LRUCache(capacity) {
  this.capacity = capacity
  this.cache = new Map()
}
LRUCache.prototype.get = Funtion(key) {
  if (!this.cache.Has(key)) Return -1;
  let val = this.cache.Get(key)
  this.cache.Delete(key)
  this.cache.Set(key, val)
  Return val;
}
LRUCache.prototype.put = function(key, value) {
  if (this.cache.Has(key)) this.cache.Delete(key)
  if (this.cache.size >= this.capacity) {
    this.cache.Delete(this.cache.keys().next().value)
  }
  this.cache.Set(key, value)
}
let cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
Console.log(cache.get(1))`,
totalMistakes: 20,
hint: "Fix function spelling, fix Function/Has/Get/Delete/Set/Return case, add semicolons, fix Console."
},

// ── JM74 ──
{
correct: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        count++;
        if (count === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(vals => console.log(vals));`,
wrong: `functoin promiseAll(promises) {
  Return new Promise((resolve, reject) => {
    let results = []
    let count = 0
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val
        count++
        if (count === promises.lenght) resolve(results)
      }).catch(reject)
    })
  })
}
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
promiseAll([p1, p2, p3]).then(vals => Console.log(vals))`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix length spelling, add missing semicolons, fix Console."
},

// ── JM75 ──
{
correct: `function trie() {
  this.root = {};
}
trie.prototype.insert = function(word) {
  let node = this.root;
  for (let char of word) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }
  node.isEnd = true;
};
trie.prototype.search = function(word) {
  let node = this.root;
  for (let char of word) {
    if (!node[char]) return false;
    node = node[char];
  }
  return node.isEnd === true;
};
let t = new trie();
t.insert("hello");
console.log(t.search("hello"));
console.log(t.search("hell"));`,
wrong: `functoin trie() {
  this.root = {}
}
trie.prototype.insert = Funtion(word) {
  let node = this.root
  For (let char of word) {
    if (!node[char]) node[char] = {}
    node = node[char]
  }
  node.isEnd = true
}
trie.prototype.search = Funtion(word) {
  let node = this.root
  For (let char of word) {
    if (!node[char]) Return false;
    node = node[char]
  }
  Return node.isEnd === true;
}
let t = new trie()
t.insert("hello")
Console.log(t.search("hello"))
Console.log(t.search("hell"))`,
totalMistakes: 18,
hint: "Fix function spelling, fix Function/For/Return case (multiple), add missing semicolons, fix Console."
},

/* ── Paragraph Mistakes — Medium JavaScript Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (JM76 - JM100)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return)
     'missing' = semicolon, bracket, ya closing brace ghayab hai
*/

// ── JM76 ──
{
correct: `function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
let word = "JavaScript";
let result = countVowels(word);
console.log(result);
console.log(word.length);`,
wrong: `functoin countVowels(str) {
  let vowels = "aeiouAEIOU"
  let count = 0
  For (let char of str) {
    if (vowels.Includes(char)) count++
  }
  Return count;
}
let word = "JavaScript"
let result = countVowels(word)
Console.log(result)
console.log(word.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, lowercase For, fix Includes case, fix length spelling, add semicolons, fix Console."
},

// ── JM77 ──
{
correct: `function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));`,
wrong: `functoin isPalindrome(str) {
  let cleaned = str.toLowercase().replace(/[^a-z0-9]/g, "")
  let reversed = cleaned.spilt("").reverse().join("")
  Return cleaned === reversed;
}
Console.log(isPalindrome("racecar"))
Console.log(isPalindrome("hello"))
Console.log(isPalindrome("A man a plan a canal Panama"))`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix toLowerCase/split case and spelling, add semicolons, fix Console."
},

// ── JM78 ──
{
correct: `function sumDigits(n) {
  let sum = 0;
  let str = Math.abs(n).toString();
  for (let char of str) {
    sum += parseInt(char);
  }
  return sum;
}
console.log(sumDigits(1234));
console.log(sumDigits(-567));
console.log(sumDigits(0));`,
wrong: `functoin sumDigits(n) {
  let sum = 0
  let str = Math.Abs(n).toString()
  For (let char of str) {
    sum += Parseint(char)
  }
  Return sum;
}
Console.log(sumDigits(1234))
Console.log(sumDigits(-567))
Console.log(sumDigits(0))`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Math.Abs/parseInt case, lowercase For, add semicolons, fix Console."
},

// ── JM79 ──
{
correct: `function removeDuplicates(arr) {
  let seen = new Set();
  let result = [];
  for (let item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}
let nums = [1, 2, 2, 3, 4, 4, 5];
let unique = removeDuplicates(nums);
console.log(unique);
console.log(unique.length);`,
wrong: `functoin removeDuplicates(arr) {
  let seen = new Set()
  let result = []
  For (let item of arr) {
    if (!seen.Has(item)) {
      seen.Add(item)
      result.psh(item)
    }
  }
  Return result;
}
let nums = [1, 2, 2, 3, 4, 4, 5]
let unique = removeDuplicates(nums)
Console.log(unique)
console.log(unique.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For, fix Has/Add case, fix push/length spelling, add semicolons, fix Console."
},

// ── JM80 ──
{
correct: `function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = flattenArray(nested);
console.log(flat);
console.log(flat.length);`,
wrong: `functoin flattenArray(arr) {
  let result = []
  For (let item of arr) {
    if (Array.Isarray(item)) {
      result = result.Concat(flattenArray(item))
    } else {
      result.psh(item)
    }
  }
  Return result;
}
let nested = [1, [2, 3], [4, [5, 6]]]
let flat = flattenArray(nested)
Console.log(flat)
console.log(flat.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For, fix isArray/concat case, fix push/length spelling, add semicolons, fix Console."
},

// ── JM81 ──
{
correct: `function countOccurrences(arr, target) {
  let count = 0;
  for (let item of arr) {
    if (item === target) count++;
  }
  return count;
}
let fruits = ["apple", "banana", "apple", "cherry", "apple"];
console.log(countOccurrences(fruits, "apple"));
console.log(countOccurrences(fruits, "banana"));
console.log(fruits.length);`,
wrong: `functoin countOccurrences(arr, target) {
  let count = 0
  For (let item of arr) {
    if (item === target) count++
  }
  Return count;
}
let fruits = ["apple", "banana", "apple", "cherry", "apple"]
Console.log(countOccurrences(fruits, "apple"))
Console.log(countOccurrences(fruits, "banana"))
Console.log(fruits.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, lowercase For, add semicolons, fix length spelling, fix Console."
},

// ── JM82 ──
{
correct: `function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = words.reverse();
  return reversed.join(" ");
}
let str = "Hello World from JavaScript";
let result = reverseWords(str);
console.log(result);
console.log(result.length);
console.log(result.split(" ").length);`,
wrong: `functoin reverseWords(sentence) {
  let words = sentence.spilt(" ")
  let reversed = words.Reverse()
  Return reversed.join(" ");
}
let str = "Hello World from JavaScript"
let result = reverseWords(str)
Console.log(result)
console.log(result.lenght)
Console.log(result.spilt(" ").lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix split spelling (3 times), fix Reverse case, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM83 ──
{
correct: `function groupBy(arr, key) {
  let groups = {};
  arr.forEach(item => {
    let val = item[key];
    if (!groups[val]) {
      groups[val] = [];
    }
    groups[val].push(item);
  });
  return groups;
}
let people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Ahmed", city: "Lahore" }
];
let result = groupBy(people, "city");
console.log(result);`,
wrong: `functoin groupBy(arr, key) {
  let groups = {}
  arr.forEach(item => {
    let val = item[key]
    if (!groups[val]) {
      groups[val] = []
    }
    groups[val].psh(item)
  })
  Return groups;
}
let people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Ahmed", city: "Lahore" }
]
let result = groupBy(people, "city")
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix push spelling, add missing semicolons, fix Console."
},

// ── JM84 ──
{
correct: `function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let result = arr2.filter(item => set1.has(item));
  return result;
}
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
let common = intersection(a, b);
console.log(common);
console.log(common.length);`,
wrong: `functoin intersection(arr1, arr2) {
  let set1 = new Set(arr1)
  let result = arr2.Filter(item => set1.Has(item))
  Return result;
}
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6, 7]
let common = intersection(a, b)
Console.log(common)
Console.log(common.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix filter/has case, fix length spelling, add semicolons, fix Console."
},

// ── JM85 ──
{
correct: `function memoize(fn) {
  let cache = {};
  return function(...args) {
    let key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}
function slowSquare(n) {
  return n * n;
}
let fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5));`,
wrong: `functoin memoize(fn) {
  let cache = {}
  Return Funtion(...args) {
    let key = JSON.Stringify(args)
    if (cache[key] !== undefined) {
      Return cache[key]
    }
    cache[key] = fn(...args)
    Return cache[key]
  }
}
function slowSquare(n) {
  Return n * n;
}
let fastSquare = memoize(slowSquare)
Console.log(fastSquare(5))
Console.log(fastSquare(5))`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Function/JSON.Stringify/Return case, add semicolons, fix Console."
},

// ── JM86 ──
{
correct: `function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  let left = arr.slice(0, n - k);
  let right = arr.slice(n - k);
  return right.concat(left);
}
let nums = [1, 2, 3, 4, 5, 6, 7];
let rotated = rotateArray(nums, 3);
console.log(rotated);
console.log(rotated.length);`,
wrong: `functoin rotateArray(arr, k) {
  let n = arr.lenght
  k = k % n
  let left = arr.slice(0, n - k)
  let right = arr.slice(n - k)
  Return right.Concat(left);
}
let nums = [1, 2, 3, 4, 5, 6, 7]
let rotated = rotateArray(nums, 3)
Console.log(rotated)
console.log(rotated.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix length spelling (2 times), fix Concat case, add semicolons, fix Console."
},

// ── JM87 ──
{
correct: `function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  words.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
let str = "The quick brown fox jumps over";
let result = longestWord(str);
console.log(result);
console.log(result.length);`,
wrong: `functoin longestWord(sentence) {
  let words = sentence.spilt(" ")
  let longest = ""
  words.forEach(word => {
    if (word.lenght > longest.lenght) {
      longest = word
    }
  })
  Return longest;
}
let str = "The quick brown fox jumps over"
let result = longestWord(str)
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix split spelling, fix length spelling (3 times), add semicolons, fix Console."
},

// ── JM88 ──
{
correct: `function objectToArray(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let entries = Object.entries(obj);
  return { keys, values, entries };
}
let person = { name: "Ali", age: 25, city: "Lahore" };
let result = objectToArray(person);
console.log(result.keys);
console.log(result.values);
console.log(result.entries);`,
wrong: `functoin objectToArray(obj) {
  let keys = Object.Keys(obj)
  let values = Object.Values(obj)
  let entries = Object.Entries(obj)
  Return { keys, values, entries };
}
let person = { name: "Ali", age: 25, city: "Lahore" }
let result = objectToArray(person)
Console.log(result.keys)
Console.log(result.values)
Console.log(result.entries)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Object.Keys/Values/Entries case, add semicolons, fix Console."
},

// ── JM89 ──
{
correct: `function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
function search(query) {
  console.log("Searching:", query);
}
let debouncedSearch = debounce(search, 300);
debouncedSearch("hello");
debouncedSearch("hello world");`,
wrong: `functoin debounce(fn, delay) {
  let timer = null
  Return Funtion(...args) {
    Cleartimeout(timer)
    timer = Settimeout(() => {
      fn(...args)
    }, delay)
  }
}
function search(query) {
  Console.log("Searching:", query)
}
let debouncedSearch = debounce(search, 300)
debouncedSearch("hello")
debouncedSearch("hello world")`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Function/clearTimeout/setTimeout case, add semicolons, fix Console."
},

// ── JM90 ──
{
correct: `function arrayStats(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = sum / arr.length;
  return { min, max, sum, avg };
}
let numbers = [4, 7, 2, 9, 1, 5, 8, 3];
let stats = arrayStats(numbers);
console.log(stats.min);
console.log(stats.max);
console.log(stats.avg);`,
wrong: `functoin arrayStats(arr) {
  let min = Math.Min(...arr)
  let max = Math.Max(...arr)
  let sum = arr.Reduce((a, b) => a + b, 0)
  let avg = sum / arr.lenght
  Return { min, max, sum, avg };
}
let numbers = [4, 7, 2, 9, 1, 5, 8, 3]
let stats = arrayStats(numbers)
Console.log(stats.min)
Console.log(stats.max)
Console.log(stats.avg)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Math.Min/Max/Reduce case, fix length spelling, add semicolons, fix Console."
},

// ── JM91 ──
{
correct: `function mergeObjects(...objects) {
  let result = {};
  objects.forEach(obj => {
    Object.keys(obj).forEach(key => {
      result[key] = obj[key];
    });
  });
  return result;
}
let a = { x: 1, y: 2 };
let b = { y: 10, z: 3 };
let c = { z: 30, w: 4 };
let merged = mergeObjects(a, b, c);
console.log(merged);`,
wrong: `functoin mergeObjects(...objects) {
  let result = {}
  objects.forEach(obj => {
    Object.Keys(obj).forEach(key => {
      result[key] = obj[key]
    })
  })
  Return result;
}
let a = { x: 1, y: 2 }
let b = { y: 10, z: 3 }
let c = { z: 30, w: 4 }
let merged = mergeObjects(a, b, c)
Console.log(merged)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Object.Keys case, add missing semicolons, fix Console."
},

// ── JM92 ──
{
correct: `function generatePassword(length) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  return password;
}
let pass = generatePassword(12);
console.log(pass);
console.log(pass.length);`,
wrong: `functoin generatePassword(length) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let password = ""
  For (let i = 0; i < length; i++) {
    let index = Math.Floor(Math.random() * chars.lenght)
    password += chars[index]
  }
  Return password;
}
let pass = generatePassword(12)
Console.log(pass)
console.log(pass.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For/Math.Floor, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM93 ──
{
correct: `function findSecondLargest(arr) {
  let sorted = [...arr].sort((a, b) => b - a);
  let unique = [...new Set(sorted)];
  if (unique.length < 2) return null;
  return unique[1];
}
let nums = [5, 3, 9, 1, 9, 7, 3];
let result = findSecondLargest(nums);
console.log(result);
console.log(nums.length);`,
wrong: `functoin findSecondLargest(arr) {
  let sorted = [...arr].Sort((a, b) => b - a)
  let unique = [...new Set(sorted)]
  if (unique.lenght < 2) Return null;
  Return unique[1];
}
let nums = [5, 3, 9, 1, 9, 7, 3]
let result = findSecondLargest(nums)
Console.log(result)
console.log(nums.lenght)`,
totalMistakes: 15,
hint: "Fix function spelling, fix Sort/Return case, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM94 ──
{
correct: `function capitalize(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
let names = ["ali ahmed", "sara khan", "usman malik"];
let result = names.map(name => capitalize(name));
console.log(result);
console.log(result.length);`,
wrong: `functoin capitalize(str) {
  Return str
    .spilt(" ")
    .Map(word => word.Charat(0).toUppercase() + word.slice(1).toLowercase())
    .join(" ");
}
let names = ["ali ahmed", "sara khan", "usman malik"]
let result = names.Map(name => capitalize(name))
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix split spelling, fix Map/charAt/toUpperCase/toLowerCase case, fix length spelling, add semicolons, fix Console."
},

// ── JM95 ──
{
correct: `function insertionSort(arr) {
  let sorted = [...arr];
  for (let i = 1; i < sorted.length; i++) {
    let key = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = key;
  }
  return sorted;
}
let nums = [64, 34, 25, 12, 22, 11, 90];
let result = insertionSort(nums);
console.log(result);`,
wrong: `functoin insertionSort(arr) {
  let sorted = [...arr]
  For (let i = 1; i < sorted.lenght; i++) {
    let key = sorted[i]
    let j = i - 1
    While (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j]
      j--
    }
    sorted[j + 1] = key
  }
  Return sorted;
}
let nums = [64, 34, 25, 12, 22, 11, 90]
let result = insertionSort(nums)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For/While, fix length spelling, add semicolons, fix Console."
},

// ── JM96 ──
{
correct: `function makeCounter(start = 0) {
  let count = start;
  return {
    increment() { count++; return count; },
    decrement() { count--; return count; },
    reset()     { count = start; return count; },
    value()     { return count; }
  };
}
let counter = makeCounter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());`,
wrong: `functoin makeCounter(start = 0) {
  let count = start
  Return {
    increment() { count++; Return count; },
    decrement() { count--; Return count; },
    reset()     { count = start; Return count; },
    value()     { Return count; }
  }
}
let counter = makeCounter(10)
Console.log(counter.increment())
Console.log(counter.increment())
Console.log(counter.decrement())
Console.log(counter.reset())`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Return case (4 times inside methods), add missing semicolons, fix Console."
},

// ── JM97 ──
{
correct: `function pipeline(...fns) {
  return function(value) {
    return fns.reduce((v, fn) => fn(v), value);
  };
}
const double = x => x * 2;
const addThree = x => x + 3;
const square = x => x * x;
const negate = x => -x;
const transform = pipeline(double, addThree, square, negate);
console.log(transform(2));
console.log(transform(5));`,
wrong: `functoin pipeline(...fns) {
  Return Funtion(value) {
    Return fns.Reduce((v, fn) => fn(v), value)
  }
}
const double = x => x * 2
const addThree = x => x + 3
const square = x => x * x
const negate = x => -x
const transform = pipeline(double, addThree, square, negate)
Console.log(transform(2))
Console.log(transform(5))`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Function/Reduce/Return case, add missing semicolons, fix Console."
},

// ── JM98 ──
{
correct: `function parseQueryString(url) {
  let parts = url.split("?");
  if (parts.length < 2) return {};
  let params = {};
  parts[1].split("&").forEach(pair => {
    let [key, value] = pair.split("=");
    params[key] = decodeURIComponent(value);
  });
  return params;
}
let url = "https://example.com?name=Ali&age=25&city=Lahore";
let result = parseQueryString(url);
console.log(result);`,
wrong: `functoin parseQueryString(url) {
  let parts = url.spilt("?")
  if (parts.lenght < 2) Return {};
  let params = {}
  parts[1].spilt("&").forEach(pair => {
    let [key, value] = pair.spilt("=")
    params[key] = DecodeUricomponent(value)
  })
  Return params;
}
let url = "https://example.com?name=Ali&age=25&city=Lahore"
let result = parseQueryString(url)
Console.log(result)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix split spelling (3 times), fix Return/decodeURIComponent case, fix length spelling, add semicolons, fix Console."
},

// ── JM99 ──
{
correct: `function linkedList() {
  this.head = null;
  this.size = 0;
}
linkedList.prototype.add = function(data) {
  let node = { data, next: null };
  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
};
let list = new linkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list.size);
console.log(list.head.data);`,
wrong: `functoin linkedList() {
  this.head = null
  this.size = 0
}
linkedList.prototype.add = Funtion(data) {
  let node = { data, next: null }
  if (!this.head) {
    this.head = node
  } else {
    let current = this.head
    While (current.next) {
      current = current.next
    }
    current.next = node
  }
  this.size++
}
let list = new linkedList()
list.add(10)
list.add(20)
list.add(30)
Console.log(list.size)
Console.log(list.head.data)`,
totalMistakes: 16,
hint: "Fix function spelling, fix Function/While case, add missing semicolons, fix Console."
},

// ── JM100 ──
{
correct: `function observerPattern() {
  let observers = [];
  return {
    subscribe(fn) {
      observers.push(fn);
    },
    unsubscribe(fn) {
      observers = observers.filter(obs => obs !== fn);
    },
    notify(data) {
      observers.forEach(fn => fn(data));
    }
  };
}
let store = observerPattern();
function logger(data) {
  console.log("Log:", data);
}
store.subscribe(logger);
store.notify("Hello!");
store.unsubscribe(logger);
store.notify("World!");`,
wrong: `functoin observerPattern() {
  let observers = []
  Return {
    subscribe(fn) {
      observers.psh(fn)
    },
    unsubscribe(fn) {
      observers = observers.Filter(obs => obs !== fn)
    },
    notify(data) {
      observers.forEach(fn => fn(data))
    }
  }
}
let store = observerPattern()
functoin logger(data) {
  Console.log("Log:", data)
}
store.subscribe(logger)
store.notify("Hello!")
store.unsubscribe(logger)
store.notify("World!")`,
totalMistakes: 15,
hint: "Fix function spelling (2 times), fix Return/push/Filter case and spelling, add missing semicolons, fix Console."
},

/* ── Paragraph Mistakes — Medium JavaScript Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (JM101 - JM125)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return)
     'missing' = semicolon, bracket, ya closing brace ghayab hai
*/

// ── JM101 ──
{
correct: `function sumArray(arr) {
  let total = 0;
  arr.forEach(num => {
    total += num;
  });
  return total;
}
let numbers = [10, 20, 30, 40, 50];
let result = sumArray(numbers);
console.log(result);
console.log(numbers.length);`,
wrong: `functoin sumArray(arr) {
  let total = 0
  arr.forEach(num => {
    total += num
  })
  Return total;
}
let numbers = [10, 20, 30, 40, 50]
let result = sumArray(numbers)
Console.log(result)
console.log(numbers.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, add missing semicolons, fix length spelling, fix Console."
},

// ── JM102 ──
{
correct: `function getFullName(firstName, lastName) {
  let full = firstName + " " + lastName;
  console.log("Full name: " + full);
  return full;
}
let first = "Ali";
let last = "Khan";
let name = getFullName(first, last);
console.log(name.length);
console.log(name.toUpperCase());`,
wrong: `functoin getFullName(firstName, lastName) {
  let full = firstName + " " + lastName
  Console.log("Full name: " + full)
  Return full;
}
let first = "Ali"
let last = "Khan"
let name = getFullName(first, last)
console.log(name.lenght)
Console.log(name.toUppercase())`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix length/toUpperCase spelling and case, add semicolons, fix Console."
},

// ── JM103 ──
{
correct: `let items = ["pen", "book", "bag", "ruler"];
items.push("eraser");
console.log(items.length);
let index = items.indexOf("book");
console.log(index);
items.splice(index, 1);
console.log(items);
console.log(items.length);`,
wrong: `let items = ["pen", "book", "bag", "ruler"]
items.psh("eraser")
Console.log(items.lenght)
let index = items.Indexof("book")
console.log(index)
items.splice(index, 1)
Console.log(items)
console.log(items.lenght)`,
totalMistakes: 16,
hint: "Fix push/length/indexOf spelling and case, add missing semicolons, fix Console."
},

// ── JM104 ──
{
correct: `function power(base, exp) {
  let result = Math.pow(base, exp);
  console.log(base + " ^ " + exp + " = " + result);
  return result;
}
let a = power(2, 8);
let b = power(3, 4);
let c = power(5, 3);
console.log(a + b + c);`,
wrong: `functoin power(base, exp) {
  let result = Math.Pow(base, exp)
  Console.log(base + " ^ " + exp + " = " + result)
  Return result;
}
let a = power(2, 8)
let b = power(3, 4)
let c = power(5, 3)
Console.log(a + b + c)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Math.Pow case, add semicolons, fix Console."
},

// ── JM105 ──
{
correct: `function filterEven(arr) {
  let evens = arr.filter(n => n % 2 === 0);
  let odds = arr.filter(n => n % 2 !== 0);
  console.log("Evens:", evens);
  console.log("Odds:", odds);
  return evens;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let result = filterEven(nums);
console.log(result.length);`,
wrong: `functoin filterEven(arr) {
  let evens = arr.Filter(n => n % 2 === 0)
  let odds = arr.Filter(n => n % 2 !== 0)
  Console.log("Evens:", evens)
  Console.log("Odds:", odds)
  Return evens;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8]
let result = filterEven(nums)
console.log(result.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix filter/length case and spelling, add semicolons, fix Console."
},

// ── JM106 ──
{
correct: `const car = {
  brand: "Toyota",
  speed: 0,
  accelerate: function(amount) {
    this.speed += amount;
    return this.speed;
  },
  brake: function(amount) {
    this.speed -= amount;
    return this.speed;
  }
};
console.log(car.accelerate(50));
console.log(car.accelerate(30));
console.log(car.brake(20));`,
wrong: `const car = {
  brand: "Toyota",
  speed: 0,
  accelerate: Funtion(amount) {
    this.speed += amount
    Return this.speed;
  },
  brake: Funtion(amount) {
    this.speed -= amount
    Return this.speed;
  }
}
Console.log(car.accelerate(50))
Console.log(car.accelerate(30))
Console.log(car.brake(20))`,
totalMistakes: 16,
hint: "Fix Function/Return case (4 times), add missing semicolons, fix Console."
},

// ── JM107 ──
{
correct: `function stringReverse(str) {
  let arr = str.split("");
  arr.reverse();
  let result = arr.join("");
  console.log(result);
  return result;
}
let words = ["hello", "world", "javascript"];
words.forEach(w => stringReverse(w));
console.log(words.length);`,
wrong: `functoin stringReverse(str) {
  let arr = str.spilt("")
  arr.Reverse()
  let result = arr.join("")
  Console.log(result)
  Return result;
}
let words = ["hello", "world", "javascript"]
words.forEach(w => stringReverse(w))
Console.log(words.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix split/length spelling, fix Reverse case, add semicolons, fix Console."
},

// ── JM108 ──
{
correct: `function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
console.log(clamp(5, 1, 10));
console.log(clamp(-3, 0, 100));
console.log(clamp(200, 0, 100));
let result = clamp(50, 10, 60);
console.log(result);`,
wrong: `functoin clamp(value, min, max) {
  if (value < min) Return min;
  if (value > max) Return max;
  Return value;
}
Console.log(clamp(5, 1, 10))
Console.log(clamp(-3, 0, 100))
Console.log(clamp(200, 0, 100))
let result = clamp(50, 10, 60)
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function spelling, fix Return case (3 times), add missing semicolons, fix Console."
},

// ── JM109 ──
{
correct: `function createPerson(name, age, city) {
  return {
    name: name,
    age: age,
    city: city,
    greet: function() {
      return "Hi, I am " + name;
    }
  };
}
let p1 = createPerson("Ali", 25, "Lahore");
let p2 = createPerson("Sara", 22, "Karachi");
console.log(p1.greet());
console.log(p2.greet());
console.log(p1.age);`,
wrong: `functoin createPerson(name, age, city) {
  Return {
    name: name,
    age: age,
    city: city,
    greet: Funtion() {
      Return "Hi, I am " + name;
    }
  }
}
let p1 = createPerson("Ali", 25, "Lahore")
let p2 = createPerson("Sara", 22, "Karachi")
Console.log(p1.greet())
Console.log(p2.greet())
Console.log(p1.age)`,
totalMistakes: 15,
hint: "Fix function spelling, fix Function/Return case (3 times), add missing semicolons, fix Console."
},

// ── JM110 ──
{
correct: `let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
console.log(matrix.length);`,
wrong: `let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
For (let i = 0; i < matrix.lenght; i++) {
  For (let j = 0; j < matrix[i].lenght; j++) {
    Console.log(matrix[i][j])
  }
}
Console.log(matrix.lenght)`,
totalMistakes: 15,
hint: "Lowercase For (2 times), fix length spelling (3 times), add missing semicolons, fix Console."
},

// ── JM111 ──
{
correct: `function getOddNumbers(arr) {
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds.push(arr[i]);
    }
  }
  return odds;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = getOddNumbers(nums);
console.log(result);
console.log(result.length);`,
wrong: `functoin getOddNumbers(arr) {
  let odds = []
  For (let i = 0; i < arr.lenght; i++) {
    if (arr[i] % 2 !== 0) {
      odds.psh(arr[i])
    }
  }
  Return odds;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = getOddNumbers(nums)
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For, fix push/length spelling (2 times), add semicolons, fix Console."
},

// ── JM112 ──
{
correct: `function swapValues(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log("a:", a);
  console.log("b:", b);
  return [a, b];
}
let x = 10;
let y = 20;
let result = swapValues(x, y);
console.log(result);
console.log(result.length);`,
wrong: `functoin swapValues(a, b) {
  let temp = a
  a = b
  b = temp
  Console.log("a:", a)
  Console.log("b:", b)
  Return [a, b];
}
let x = 10
let y = 20
let result = swapValues(x, y)
Console.log(result)
console.log(result.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, add missing semicolons, fix length spelling, fix Console."
},

// ── JM113 ──
{
correct: `function repeatString(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  console.log(result);
  return result;
}
let word = "Hello ";
let repeated = repeatString(word, 3);
console.log(repeated.length);
console.log(repeated.trim());`,
wrong: `functoin repeatString(str, times) {
  let result = ""
  For (let i = 0; i < times; i++) {
    result += str
  }
  Console.log(result)
  Return result;
}
let word = "Hello "
let repeated = repeatString(word, 3)
console.log(repeated.lenght)
Console.log(repeated.Trim())`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For, fix length/trim spelling and case, add semicolons, fix Console."
},

// ── JM114 ──
{
correct: `function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let colors = ["red", "green", "blue", "yellow"];
console.log(findIndex(colors, "blue"));
console.log(findIndex(colors, "pink"));
console.log(colors.length);`,
wrong: `functoin findIndex(arr, target) {
  For (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === target) {
      Return i;
    }
  }
  Return -1;
}
let colors = ["red", "green", "blue", "yellow"]
Console.log(findIndex(colors, "blue"))
Console.log(findIndex(colors, "pink"))
console.log(colors.lenght)`,
totalMistakes: 16,
hint: "Fix function spelling, lowercase For, fix Return/length case and spelling (2 times), add semicolons, fix Console."
},

// ── JM115 ──
{
correct: `function formatDate(day, month, year) {
  let d = String(day).padStart(2, "0");
  let m = String(month).padStart(2, "0");
  return d + "/" + m + "/" + year;
}
console.log(formatDate(5, 3, 2025));
console.log(formatDate(12, 11, 2024));
console.log(formatDate(1, 1, 2026));
let today = formatDate(26, 6, 2026);
console.log(today);`,
wrong: `functoin formatDate(day, month, year) {
  let d = String(day).Padstart(2, "0")
  let m = String(month).Padstart(2, "0")
  Return d + "/" + m + "/" + year;
}
Console.log(formatDate(5, 3, 2025))
Console.log(formatDate(12, 11, 2024))
Console.log(formatDate(1, 1, 2026))
let today = formatDate(26, 6, 2026)
Console.log(today)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix padStart case (2 times), add missing semicolons, fix Console."
},

// ── JM116 ──
{
correct: `function arrayToObject(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}
let k = ["name", "age", "city"];
let v = ["Ali", 25, "Lahore"];
let result = arrayToObject(k, v);
console.log(result);
console.log(Object.keys(result).length);`,
wrong: `functoin arrayToObject(keys, values) {
  let obj = {}
  For (let i = 0; i < keys.lenght; i++) {
    obj[keys[i]] = values[i]
  }
  Return obj;
}
let k = ["name", "age", "city"]
let v = ["Ali", 25, "Lahore"]
let result = arrayToObject(k, v)
Console.log(result)
Console.log(Object.Keys(result).lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For, fix length spelling (2 times), fix Object.keys case, add semicolons, fix Console."
},

// ── JM117 ──
{
correct: `function multiplyAll(arr, factor) {
  let result = arr.map(n => n * factor);
  let sum = result.reduce((a, b) => a + b, 0);
  console.log("Result:", result);
  console.log("Sum:", sum);
  return result;
}
let nums = [1, 2, 3, 4, 5];
let multiplied = multiplyAll(nums, 3);
console.log(multiplied.length);`,
wrong: `functoin multiplyAll(arr, factor) {
  let result = arr.Map(n => n * factor)
  let sum = result.Reduce((a, b) => a + b, 0)
  Console.log("Result:", result)
  Console.log("Sum:", sum)
  Return result;
}
let nums = [1, 2, 3, 4, 5]
let multiplied = multiplyAll(nums, 3)
Console.log(multiplied.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Map/Reduce case, fix length spelling, add semicolons, fix Console."
},

// ── JM118 ──
{
correct: `function isAnagram(str1, str2) {
  let a = str1.toLowerCase().split("").sort().join("");
  let b = str2.toLowerCase().split("").sort().join("");
  return a === b;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("Triangle", "Integral"));
let result = isAnagram("Astronomer", "Moon starer");
console.log(result);`,
wrong: `functoin isAnagram(str1, str2) {
  let a = str1.toLowercase().spilt("").sort().join("")
  let b = str2.toLowercase().spilt("").sort().join("")
  Return a === b;
}
Console.log(isAnagram("listen", "silent"))
Console.log(isAnagram("hello", "world"))
Console.log(isAnagram("Triangle", "Integral"))
let result = isAnagram("Astronomer", "Moon starer")
Console.log(result)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix toLowerCase/split spelling and case (4 times), add semicolons, fix Console."
},

// ── JM119 ──
{
correct: `function buildStack() {
  let stack = [];
  return {
    push(item) { stack.push(item); },
    pop()      { return stack.pop(); },
    peek()     { return stack[stack.length - 1]; },
    isEmpty()  { return stack.length === 0; },
    size()     { return stack.length; }
  };
}
let s = buildStack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.peek());
console.log(s.pop());
console.log(s.size());`,
wrong: `functoin buildStack() {
  let stack = []
  Return {
    push(item) { stack.psh(item); },
    pop()      { Return stack.Pop(); },
    peek()     { Return stack[stack.lenght - 1]; },
    isEmpty()  { Return stack.lenght === 0; },
    size()     { Return stack.lenght; }
  }
}
let s = buildStack()
s.push(10)
s.push(20)
s.push(30)
Console.log(s.peek())
Console.log(s.pop())
Console.log(s.size())`,
totalMistakes: 18,
hint: "Fix function/return spelling, fix push/pop/length spelling and case (multiple), fix Return case, add semicolons, fix Console."
},

// ── JM120 ──
{
correct: `function convertTemp(value, unit) {
  if (unit === "C") {
    return (value * 9 / 5) + 32;
  }
  if (unit === "F") {
    return (value - 32) * 5 / 9;
  }
  return null;
}
console.log(convertTemp(100, "C"));
console.log(convertTemp(212, "F"));
console.log(convertTemp(0, "C"));
let result = convertTemp(37, "C");
console.log(result);`,
wrong: `functoin convertTemp(value, unit) {
  if (unit === "C") {
    Return (value * 9 / 5) + 32;
  }
  if (unit === "F") {
    Return (value - 32) * 5 / 9;
  }
  Return null;
}
Console.log(convertTemp(100, "C"))
Console.log(convertTemp(212, "F"))
Console.log(convertTemp(0, "C"))
let result = convertTemp(37, "C")
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function spelling, fix Return case (3 times), add missing semicolons, fix Console."
},

// ── JM121 ──
{
correct: `function buildQueue() {
  let queue = [];
  return {
    enqueue(item) { queue.push(item); },
    dequeue()     { return queue.shift(); },
    front()       { return queue[0]; },
    isEmpty()     { return queue.length === 0; },
    size()        { return queue.length; }
  };
}
let q = buildQueue();
q.enqueue("Ali");
q.enqueue("Sara");
q.enqueue("Ahmed");
console.log(q.front());
console.log(q.dequeue());
console.log(q.size());`,
wrong: `functoin buildQueue() {
  let queue = []
  Return {
    enqueue(item) { queue.psh(item); },
    dequeue()     { Return queue.Shift(); },
    front()       { Return queue[0]; },
    isEmpty()     { Return queue.lenght === 0; },
    size()        { Return queue.lenght; }
  }
}
let q = buildQueue()
q.enqueue("Ali")
q.enqueue("Sara")
q.enqueue("Ahmed")
Console.log(q.front())
Console.log(q.dequeue())
Console.log(q.size())`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix push/shift/length spelling and case, fix Return case, add semicolons, fix Console."
},

// ── JM122 ──
{
correct: `function findMissing(arr, n) {
  let expected = (n * (n + 1)) / 2;
  let actual = arr.reduce((a, b) => a + b, 0);
  let missing = expected - actual;
  console.log("Missing:", missing);
  return missing;
}
let nums = [1, 2, 4, 5, 6];
let result = findMissing(nums, 6);
console.log(result);
console.log(nums.length);`,
wrong: `functoin findMissing(arr, n) {
  let expected = (n * (n + 1)) / 2
  let actual = arr.Reduce((a, b) => a + b, 0)
  let missing = expected - actual
  Console.log("Missing:", missing)
  Return missing;
}
let nums = [1, 2, 4, 5, 6]
let result = findMissing(nums, 6)
Console.log(result)
console.log(nums.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Reduce case, fix length spelling, add semicolons, fix Console."
},

// ── JM123 ──
{
correct: `function titleCase(sentence) {
  let words = sentence.split(" ");
  let result = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ");
}
let str = "the quick brown fox";
let titled = titleCase(str);
console.log(titled);
console.log(titled.length);
console.log(titled.split(" ").length);`,
wrong: `functoin titleCase(sentence) {
  let words = sentence.spilt(" ")
  let result = words.Map(word => {
    Return word.Charat(0).toUppercase() + word.slice(1).toLowercase()
  })
  Return result.join(" ");
}
let str = "the quick brown fox"
let titled = titleCase(str)
Console.log(titled)
console.log(titled.lenght)
Console.log(titled.spilt(" ").lenght)`,
totalMistakes: 18,
hint: "Fix function/return spelling, fix split/charAt/toUpperCase/toLowerCase spelling and case, fix Map case, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM124 ──
{
correct: `function countWords(sentence) {
  let words = sentence.trim().split(" ");
  let count = words.length;
  let unique = new Set(words).size;
  console.log("Total words:", count);
  console.log("Unique words:", unique);
  return { count, unique };
}
let text = "the cat sat on the mat the cat";
let result = countWords(text);
console.log(result);`,
wrong: `functoin countWords(sentence) {
  let words = sentence.Trim().spilt(" ")
  let count = words.lenght
  let unique = new Set(words).size
  Console.log("Total words:", count)
  Console.log("Unique words:", unique)
  Return { count, unique };
}
let text = "the cat sat on the mat the cat"
let result = countWords(text)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Trim case, fix split/length spelling, add missing semicolons, fix Console."
},

// ── JM125 ──
{
correct: `function zipArrays(arr1, arr2) {
  let result = [];
  let len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    result.push({ key: arr1[i], value: arr2[i] });
  }
  return result;
}
let keys = ["name", "age", "city"];
let values = ["Ali", 25, "Lahore"];
let zipped = zipArrays(keys, values);
console.log(zipped);
console.log(zipped.length);`,
wrong: `functoin zipArrays(arr1, arr2) {
  let result = []
  let len = Math.Min(arr1.lenght, arr2.lenght)
  For (let i = 0; i < len; i++) {
    result.psh({ key: arr1[i], value: arr2[i] })
  }
  Return result;
}
let keys = ["name", "age", "city"]
let values = ["Ali", 25, "Lahore"]
let zipped = zipArrays(keys, values)
Console.log(zipped)
console.log(zipped.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Math.Min case, fix length/push spelling (3 times), lowercase For, add semicolons, fix Console."
},

/* ── Paragraph Mistakes — Medium JavaScript Data ──
   Medium: 15-20 mistakes per code
   Total: 25 paragraphs (JM126 - JM150)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Console.Log → console.log, Return → return)
     'spelling'= spelling galat (functoin → function, retrun → return)
     'missing' = semicolon, bracket, ya closing brace ghayab hai
*/


// ── JM126 ──
{
correct: `function getAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = sum / arr.length;
  console.log("Sum:", sum);
  console.log("Average:", avg);
  return avg;
}
let marks = [70, 85, 90, 60, 75];
let result = getAverage(marks);
console.log(result);
console.log(marks.length);`,
wrong: `functoin getAverage(arr) {
  let sum = arr.Reduce((a, b) => a + b, 0)
  let avg = sum / arr.lenght
  Console.log("Sum:", sum)
  Console.log("Average:", avg)
  Return avg;
}
let marks = [70, 85, 90, 60, 75]
let result = getAverage(marks)
Console.log(result)
console.log(marks.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Reduce case, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM127 ──
{
correct: `function truncate(str, limit) {
  if (str.length <= limit) return str;
  return str.slice(0, limit) + "...";
}
console.log(truncate("Hello World", 5));
console.log(truncate("Hi", 10));
console.log(truncate("JavaScript is awesome", 10));
let result = truncate("Lahore is a great city", 12);
console.log(result);`,
wrong: `functoin truncate(str, limit) {
  if (str.lenght <= limit) Return str;
  Return str.slice(0, limit) + "..."
}
Console.log(truncate("Hello World", 5))
Console.log(truncate("Hi", 10))
Console.log(truncate("JavaScript is awesome", 10))
let result = truncate("Lahore is a great city", 12)
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix length/Return case and spelling, add missing semicolons, fix Console."
},

// ── JM128 ──
{
correct: `function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
let quadruple = makeMultiplier(4);
console.log(double(5));
console.log(triple(5));
console.log(quadruple(5));`,
wrong: `functoin makeMultiplier(factor) {
  Return Funtion(number) {
    Return number * factor;
  }
}
let double = makeMultiplier(2)
let triple = makeMultiplier(3)
let quadruple = makeMultiplier(4)
Console.log(double(5))
Console.log(triple(5))
Console.log(quadruple(5))`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Function/Return case (2 times), add missing semicolons, fix Console."
},

// ── JM129 ──
{
correct: `let inventory = [
  { item: "pen", qty: 50 },
  { item: "book", qty: 20 },
  { item: "bag", qty: 10 }
];
let total = inventory.reduce((sum, obj) => sum + obj.qty, 0);
let names = inventory.map(obj => obj.item);
let lowStock = inventory.filter(obj => obj.qty < 25);
console.log(total);
console.log(names);
console.log(lowStock);`,
wrong: `let inventory = [
  { item: "pen", qty: 50 },
  { item: "book", qty: 20 },
  { item: "bag", qty: 10 }
]
let total = inventory.Reduce((sum, obj) => sum + obj.qty, 0)
let names = inventory.Map(obj => obj.item)
let lowStock = inventory.Filter(obj => obj.qty < 25)
Console.log(total)
Console.log(names)
Console.log(lowStock)`,
totalMistakes: 15,
hint: "Fix Reduce/Map/Filter case, add missing semicolons, fix Console."
},

// ── JM130 ──
{
correct: `function addToSet(set, ...items) {
  items.forEach(item => set.add(item));
  return set;
}
let mySet = new Set([1, 2, 3]);
addToSet(mySet, 4, 5, 6);
console.log(mySet.size);
console.log(mySet.has(5));
mySet.delete(3);
console.log(mySet);
console.log(mySet.size);`,
wrong: `functoin addToSet(set, ...items) {
  items.forEach(item => set.Add(item))
  Return set;
}
let mySet = new Set([1, 2, 3])
addToSet(mySet, 4, 5, 6)
Console.log(mySet.size)
Console.log(mySet.Has(5))
mySet.Delete(3)
Console.log(mySet)
Console.log(mySet.size)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Add/Has/Delete case, add missing semicolons, fix Console."
},

// ── JM131 ──
{
correct: `function parseNumbers(arr) {
  let integers = arr.map(n => parseInt(n));
  let floats = arr.map(n => parseFloat(n));
  let sum = integers.reduce((a, b) => a + b, 0);
  console.log("Integers:", integers);
  console.log("Floats:", floats);
  console.log("Sum:", sum);
  return sum;
}
let data = ["1.5", "2.7", "3.9", "4.1"];
parseNumbers(data);`,
wrong: `functoin parseNumbers(arr) {
  let integers = arr.Map(n => Parseint(n))
  let floats = arr.Map(n => Parsefloat(n))
  let sum = integers.Reduce((a, b) => a + b, 0)
  Console.log("Integers:", integers)
  Console.log("Floats:", floats)
  Console.log("Sum:", sum)
  Return sum;
}
let data = ["1.5", "2.7", "3.9", "4.1"]
parseNumbers(data)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Map/parseInt/parseFloat/Reduce case, add semicolons, fix Console."
},

// ── JM132 ──
{
correct: `function sumNested(arr) {
  let total = 0;
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(n => total += n);
    } else {
      total += item;
    }
  });
  return total;
}
let data = [1, [2, 3], [4, 5], 6];
let result = sumNested(data);
console.log(result);`,
wrong: `functoin sumNested(arr) {
  let total = 0
  arr.forEach(item => {
    if (Array.Isarray(item)) {
      item.forEach(n => total += n)
    } else {
      total += item
    }
  })
  Return total;
}
let data = [1, [2, 3], [4, 5], 6]
let result = sumNested(data)
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix isArray case, add missing semicolons, fix Console."
},

// ── JM133 ──
{
correct: `function padNumber(n, width) {
  let str = String(n);
  while (str.length < width) {
    str = "0" + str;
  }
  return str;
}
console.log(padNumber(5, 3));
console.log(padNumber(42, 5));
console.log(padNumber(100, 6));
let result = padNumber(7, 4);
console.log(result);`,
wrong: `functoin padNumber(n, width) {
  let str = String(n)
  While (str.lenght < width) {
    str = "0" + str
  }
  Return str;
}
Console.log(padNumber(5, 3))
Console.log(padNumber(42, 5))
Console.log(padNumber(100, 6))
let result = padNumber(7, 4)
Console.log(result)`,
totalMistakes: 15,
hint: "Fix function/return spelling, lowercase While, fix length spelling, add missing semicolons, fix Console."
},

// ── JM134 ──
{
correct: `function getKeys(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let count = keys.length;
  console.log("Keys:", keys);
  console.log("Values:", values);
  console.log("Count:", count);
  return keys;
}
let person = { name: "Ali", age: 25, city: "Lahore", job: "Dev" };
let result = getKeys(person);
console.log(result);`,
wrong: `functoin getKeys(obj) {
  let keys = Object.Keys(obj)
  let values = Object.Values(obj)
  let count = keys.lenght
  Console.log("Keys:", keys)
  Console.log("Values:", values)
  Console.log("Count:", count)
  Return keys;
}
let person = { name: "Ali", age: 25, city: "Lahore", job: "Dev" }
let result = getKeys(person)
Console.log(result)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Object.keys/values case, fix length spelling, add semicolons, fix Console."
},

// ── JM135 ──
{
correct: `function splitEvery(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunks = splitEvery(nums, 3);
console.log(chunks);
console.log(chunks.length);`,
wrong: `functoin splitEvery(arr, size) {
  let result = []
  For (let i = 0; i < arr.lenght; i += size) {
    result.psh(arr.slice(i, i + size))
  }
  Return result;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let chunks = splitEvery(nums, 3)
Console.log(chunks)
console.log(chunks.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, lowercase For, fix push/length spelling (2 times), add semicolons, fix Console."
},

// ── JM136 ──
{
correct: `function scoreGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
let scores = [95, 82, 71, 63, 45];
scores.forEach(s => {
  console.log(s + " -> " + scoreGrade(s));
});
console.log(scores.length);`,
wrong: `functoin scoreGrade(score) {
  if (score >= 90) Return "A";
  if (score >= 80) Return "B";
  if (score >= 70) Return "C";
  if (score >= 60) Return "D";
  Return "F";
}
let scores = [95, 82, 71, 63, 45]
scores.forEach(s => {
  Console.log(s + " -> " + scoreGrade(s))
})
Console.log(scores.lenght)`,
totalMistakes: 16,
hint: "Fix function spelling, fix Return case (5 times), fix length spelling, add semicolons, fix Console."
},

// ── JM137 ──
{
correct: `function countTrue(arr) {
  let count = arr.filter(Boolean).length;
  console.log("True count:", count);
  console.log("False count:", arr.length - count);
  return count;
}
let flags = [true, false, true, true, false, false, true];
let result = countTrue(flags);
console.log(result);
console.log(flags.length);`,
wrong: `functoin countTrue(arr) {
  let count = arr.Filter(Boolean).lenght
  Console.log("True count:", count)
  Console.log("False count:", arr.lenght - count)
  Return count;
}
let flags = [true, false, true, true, false, false, true]
let result = countTrue(flags)
Console.log(result)
console.log(flags.lenght)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix filter/length case and spelling (3 times), add semicolons, fix Console."
},

// ── JM138 ──
{
correct: `function safeDiv(a, b) {
  if (b === 0) {
    console.log("Error: division by zero");
    return null;
  }
  let result = a / b;
  console.log(a + " / " + b + " = " + result);
  return result;
}
console.log(safeDiv(10, 2));
console.log(safeDiv(9, 3));
console.log(safeDiv(5, 0));`,
wrong: `functoin safeDiv(a, b) {
  if (b === 0) {
    Console.log("Error: division by zero")
    Return null;
  }
  let result = a / b
  Console.log(a + " / " + b + " = " + result)
  Return result;
}
Console.log(safeDiv(10, 2))
Console.log(safeDiv(9, 3))
Console.log(safeDiv(5, 0))`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Return case (2 times), add missing semicolons, fix Console."
},

// ── JM139 ──
{
correct: `function mapKeys(obj, fn) {
  let result = {};
  Object.keys(obj).forEach(key => {
    result[fn(key)] = obj[key];
  });
  return result;
}
let data = { firstName: "Ali", lastName: "Khan", cityName: "Lahore" };
let result = mapKeys(data, k => k.toUpperCase());
console.log(result);
console.log(Object.keys(result).length);`,
wrong: `functoin mapKeys(obj, fn) {
  let result = {}
  Object.Keys(obj).forEach(key => {
    result[fn(key)] = obj[key]
  })
  Return result;
}
let data = { firstName: "Ali", lastName: "Khan", cityName: "Lahore" }
let result = mapKeys(data, k => k.toUppercase())
Console.log(result)
Console.log(Object.Keys(result).lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Object.keys/toUpperCase case (3 times), fix length spelling, add semicolons, fix Console."
},

// ── JM140 ──
{
correct: `function makeAdder(base) {
  return function(n) {
    return base + n;
  };
}
let add10 = makeAdder(10);
let add100 = makeAdder(100);
let add1000 = makeAdder(1000);
console.log(add10(5));
console.log(add100(5));
console.log(add1000(5));
console.log(add10(add100(1)));`,
wrong: `functoin makeAdder(base) {
  Return Funtion(n) {
    Return base + n;
  }
}
let add10 = makeAdder(10)
let add100 = makeAdder(100)
let add1000 = makeAdder(1000)
Console.log(add10(5))
Console.log(add100(5))
Console.log(add1000(5))
Console.log(add10(add100(1)))`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Function/Return case (2 times), add missing semicolons, fix Console."
},

// ── JM141 ──
{
correct: `function countByType(arr) {
  let result = { number: 0, string: 0, boolean: 0, other: 0 };
  arr.forEach(item => {
    let t = typeof item;
    if (t === "number") result.number++;
    else if (t === "string") result.string++;
    else if (t === "boolean") result.boolean++;
    else result.other++;
  });
  return result;
}
let data = [1, "hello", true, 2, "world", false, null];
let counts = countByType(data);
console.log(counts);`,
wrong: `functoin countByType(arr) {
  let result = { number: 0, string: 0, boolean: 0, other: 0 }
  arr.forEach(item => {
    let t = Typeof item
    if (t === "number") result.number++
    else if (t === "string") result.string++
    else if (t === "boolean") result.boolean++
    else result.other++
  })
  Return result;
}
let data = [1, "hello", true, 2, "world", false, null]
let counts = countByType(data)
Console.log(counts)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Typeof case, add missing semicolons, fix Console."
},

// ── JM142 ──
{
correct: `function diffArrays(arr1, arr2) {
  let set2 = new Set(arr2);
  let onlyInA = arr1.filter(x => !set2.has(x));
  let set1 = new Set(arr1);
  let onlyInB = arr2.filter(x => !set1.has(x));
  return { onlyInA, onlyInB };
}
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
let result = diffArrays(a, b);
console.log(result.onlyInA);
console.log(result.onlyInB);`,
wrong: `functoin diffArrays(arr1, arr2) {
  let set2 = new Set(arr2)
  let onlyInA = arr1.Filter(x => !set2.Has(x))
  let set1 = new Set(arr1)
  let onlyInB = arr2.Filter(x => !set1.Has(x))
  Return { onlyInA, onlyInB };
}
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6, 7]
let result = diffArrays(a, b)
Console.log(result.onlyInA)
Console.log(result.onlyInB)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Filter/Has case (4 times), add missing semicolons, fix Console."
},

// ── JM143 ──
{
correct: `function createTimer(label) {
  let start = Date.now();
  return {
    stop: function() {
      let elapsed = Date.now() - start;
      console.log(label + ": " + elapsed + "ms");
      return elapsed;
    }
  };
}
let t = createTimer("Task A");
let sum = 0;
for (let i = 0; i < 1000; i++) sum += i;
console.log(sum);
t.stop();`,
wrong: `functoin createTimer(label) {
  let start = Date.Now()
  Return {
    stop: Funtion() {
      let elapsed = Date.Now() - start
      Console.log(label + ": " + elapsed + "ms")
      Return elapsed;
    }
  }
}
let t = createTimer("Task A")
let sum = 0
For (let i = 0; i < 1000; i++) sum += i
Console.log(sum)
t.stop()`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix Date.now/Function/Return case (multiple), lowercase For, add semicolons, fix Console."
},

// ── JM144 ──
{
correct: `function pickFields(obj, fields) {
  let result = {};
  fields.forEach(field => {
    if (obj[field] !== undefined) {
      result[field] = obj[field];
    }
  });
  return result;
}
let user = { name: "Ali", age: 25, city: "Lahore", job: "Dev", email: "ali@x.com" };
let picked = pickFields(user, ["name", "age", "email"]);
console.log(picked);
console.log(Object.keys(picked).length);`,
wrong: `functoin pickFields(obj, fields) {
  let result = {}
  fields.forEach(field => {
    if (obj[field] !== undefined) {
      result[field] = obj[field]
    }
  })
  Return result;
}
let user = { name: "Ali", age: 25, city: "Lahore", job: "Dev", email: "ali@x.com" }
let picked = pickFields(user, ["name", "age", "email"])
Console.log(picked)
Console.log(Object.Keys(picked).lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Object.keys case, fix length spelling, add missing semicolons, fix Console."
},

// ── JM145 ──
{
correct: `function multiSort(arr, key) {
  return arr.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}
let people = [
  { name: "Zara", age: 30 },
  { name: "Ali", age: 22 },
  { name: "Sara", age: 27 }
];
let byName = multiSort(people, "name");
let byAge = multiSort(people, "age");
console.log(byName);
console.log(byAge);`,
wrong: `functoin multiSort(arr, key) {
  Return arr.slice().Sort((a, b) => {
    if (a[key] < b[key]) Return -1;
    if (a[key] > b[key]) Return 1;
    Return 0;
  })
}
let people = [
  { name: "Zara", age: 30 },
  { name: "Ali", age: 22 },
  { name: "Sara", age: 27 }
]
let byName = multiSort(people, "name")
let byAge = multiSort(people, "age")
Console.log(byName)
Console.log(byAge)`,
totalMistakes: 16,
hint: "Fix function/return spelling, fix Sort/Return case (4 times), add missing semicolons, fix Console."
},

// ── JM146 ──
{
correct: `function randomItem(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let colors = ["red", "green", "blue", "yellow", "purple"];
console.log(randomItem(colors));
console.log(randomItem(colors));
console.log(randomItem(colors));
console.log(colors.length);`,
wrong: `functoin randomItem(arr) {
  let index = Math.Floor(Math.random() * arr.lenght)
  Return arr[index];
}
let colors = ["red", "green", "blue", "yellow", "purple"]
Console.log(randomItem(colors))
Console.log(randomItem(colors))
Console.log(randomItem(colors))
Console.log(colors.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Math.Floor case, fix length spelling (2 times), add semicolons, fix Console."
},

// ── JM147 ──
{
correct: `function sumByKey(arr, key) {
  return arr.reduce((total, obj) => total + obj[key], 0);
}
let orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 300 },
  { id: 3, amount: 750 },
  { id: 4, amount: 125 }
];
let total = sumByKey(orders, "amount");
console.log(total);
console.log(orders.length);`,
wrong: `functoin sumByKey(arr, key) {
  Return arr.Reduce((total, obj) => total + obj[key], 0);
}
let orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 300 },
  { id: 3, amount: 750 },
  { id: 4, amount: 125 }
]
let total = sumByKey(orders, "amount")
Console.log(total)
console.log(orders.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Reduce case, fix length spelling, add missing semicolons, fix Console."
},

// ── JM148 ──
{
correct: `function splitAndTrim(str, delimiter) {
  let parts = str.split(delimiter);
  let trimmed = parts.map(p => p.trim());
  let filtered = trimmed.filter(p => p.length > 0);
  console.log(filtered);
  return filtered;
}
let csv = "  Ali , Sara ,  Ahmed  , Zara ";
let result = splitAndTrim(csv, ",");
console.log(result.length);`,
wrong: `functoin splitAndTrim(str, delimiter) {
  let parts = str.spilt(delimiter)
  let trimmed = parts.Map(p => p.Trim())
  let filtered = trimmed.Filter(p => p.lenght > 0)
  Console.log(filtered)
  Return filtered;
}
let csv = "  Ali , Sara ,  Ahmed  , Zara "
let result = splitAndTrim(csv, ",")
Console.log(result.lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, fix split/length spelling (2 times), fix Map/Trim/Filter case, add semicolons, fix Console."
},

// ── JM149 ──
{
correct: `function buildMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(i * cols + j + 1);
    }
    matrix.push(row);
  }
  return matrix;
}
let m = buildMatrix(3, 3);
console.log(m);
console.log(m.length);
console.log(m[0].length);`,
wrong: `functoin buildMatrix(rows, cols) {
  let matrix = []
  For (let i = 0; i < rows; i++) {
    let row = []
    For (let j = 0; j < cols; j++) {
      row.psh(i * cols + j + 1)
    }
    matrix.psh(row)
  }
  Return matrix;
}
let m = buildMatrix(3, 3)
Console.log(m)
console.log(m.lenght)
Console.log(m[0].lenght)`,
totalMistakes: 17,
hint: "Fix function/return spelling, lowercase For (2 times), fix push/length spelling (4 times), add semicolons, fix Console."
},

// ── JM150 ──
{
correct: `function chainMethods(arr) {
  let result = arr
    .filter(n => n > 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b, 0);
  console.log("Result:", result);
  return result;
}
let nums = [-3, 1, -1, 4, 2, -5, 6, 3];
let answer = chainMethods(nums);
console.log(answer);
console.log(nums.length);`,
wrong: `functoin chainMethods(arr) {
  let result = arr
    .Filter(n => n > 0)
    .Map(n => n * 2)
    .Reduce((a, b) => a + b, 0)
  Console.log("Result:", result)
  Return result;
}
let nums = [-3, 1, -1, 4, 2, -5, 6, 3]
let answer = chainMethods(nums)
Console.log(answer)
console.log(nums.lenght)`,
totalMistakes: 15,
hint: "Fix function/return spelling, fix Filter/Map/Reduce case, fix length spelling, add semicolons, fix Console."
},

  ],


  Hard: [
/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H1 - H10)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/

// ── H1 ──
{
correct: `function greetUser(name) {
  let message = "Hello, " + name;
  let age = 25;
  let isActive = true;
  let score = 100;
  console.log(message);
  console.log(age);
  console.log(isActive);
  console.log(score);
  if (isActive) {
    let result = age + score;
    console.log(result);
    return result;
  }
  return message;
}`,
wrong: `Functon greetUser(name) {
  Let message = "Hello, " + name
  let Age = 25;
  let isActive = True;
  let scor = 100
  consol.log(message);
  Console.log(age);
  console.Log(isActive)
  console.log(scor
  IF (isActive) {
    let reslt = age + scor;
    consle.log(reslt)
    Retrun reslt;
  }
  return mesage;
}`,
totalMistakes: 47,
hint: "Fix: function keyword case, Let→let, missing semicolons, True→true, spelling errors (scor, consol, reslt, mesage), wrong cases (Console, console.Log, IF, Retrun), missing closing parenthesis in console.log."
},


// ── H2 ──
{
correct: `const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
let average = total / numbers.length;
console.log("Total:", total);
console.log("Average:", average);
let max = numbers[0];
for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] > max) {
    max = numbers[j];
  }
}
console.log("Max:", max);`,
wrong: `Const numbers = [1, 2, 3, 4, 5]
Let total = 0;
For (let i = 0; i < numbers.Lenght; i++) {
  total = total + numbers[i]
}
let averge = total / numbers.length
console.log("Total:" total);
Console.log("Average:", averge)
let Max = numbers[0];
for (let j = 0 j < numbers.length; j++) {
  IF (numbers[j] > Max) {
    Max = numbers[j]
  }
}
consol.log("Max:", Max);`,
totalMistakes: 46,
hint: "Fix: Const→const, Let→let, For→for, missing semicolons, numbers.Lenght→numbers.length, averge→average, missing comma in console.log, Console→console, IF→if, missing semicolon in for loop init, consol.log."
},


// ── H3 ──
{
correct: `function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let result1 = checkEvenOdd(4);
let result2 = checkEvenOdd(7);
console.log(result1);
console.log(result2);
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
console.log("Done");`,
wrong: `fucntion checkEvenOdd(num) {
  IF (num % 2 === 0) {
    Retrun "Even";
  } Else {
    retun "Odd";
  }
}
Let result1 = checkEvenOdd(4)
let result2 = checkEvnOdd(7);
consol.log(result1)
Console.log(result2);
let coutn = 0;
While (coutn < 5) {
  console.log(coutn)
  coutn++;
}
console.Log("Done");`,
totalMistakes: 48,
hint: "Fix: fucntion→function, IF→if, Retrun→return, Else→else, retun→return, Let→let, missing semicolons, checkEvnOdd→checkEvenOdd, consol→console, Console→console, coutn→count, While→while, console.Log→console.log."
},


// ── H4 ──
{
correct: `const person = {
  name: "Ali",
  age: 30,
  city: "Lahore",
  isStudent: false
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
let keys = Object.keys(person);
console.log(keys);
let values = Object.values(person);
console.log(values);
person.age = 31;
console.log(person.age);`,
wrong: `Const person = {
  Name: "Ali",
  age: 30
  city "Lahore",
  isStudent: Flase
}
console.log(person.Name);
console.Log(person.age);
consol.log(person.cty);
let kys = Objct.keys(person)
console.log(kys)
let valus = Object.Values(person);
Console.log(valus)
person.Age = 31;
console.log(person.age;`,
totalMistakes: 48,
hint: "Fix: Const→const, Name→name, missing semicolon after age, missing colon after city, Flase→false, missing closing brace, person.Name→person.name, console.Log, consol.log, person.cty→person.city, kys→keys, Objct→Object, missing semicolon, Object.Values→Object.values, Console.log, person.Age→person.age, missing closing parenthesis."
},


// ── H5 ──
{
correct: `function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
let x = 10;
let y = 5;
let product = multiply(x, y);
let quotient = divide(x, y);
console.log("Product:", product);
console.log("Quotient:", quotient);
let z = 0;
let result = divide(x, z);
console.log(result);`,
wrong: `Functon multipl(a, b) {
  Retrun a * b
}
function Divide(a, b) {
  IF (b === 0) {
    return "Cannot divide by zro"
  }
  retun a / b;
}
let X = 10;
Let y = 5
let prodct = multipl(X, y);
let quotent = Divide(X, y)
Console.log("Product:", prodct);
console.Log("Quotient:", quotent);
let z = 0;
let reslt = divide(X, z)
consol.log(reslt)`,
totalMistakes: 45,
hint: "Fix: Functon→function, multipl→multiply, Retrun→return, missing semicolons, Divide→divide (function name), IF→if, zro→zero, retun→return, X→x, Let→let, prodct→product, quotent→quotient, Console.log, console.Log, reslt→result, consol.log."
},


// ── H6 ──
{
correct: `const fruits = ["apple", "banana", "mango", "orange"];
fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
let firstFruit = fruits[0];
let lastFruit = fruits[fruits.length - 1];
console.log(firstFruit);
console.log(lastFruit);
let index = fruits.indexOf("mango");
console.log(index);
fruits.splice(1, 1);
console.log(fruits);
let fruitString = fruits.join(", ");
console.log(fruitString);`,
wrong: `Const fruits = ["apple", "banana", "mango", "orange"]
fruits.Pus("grape")
consol.log(fruits)
fruits.Pop()
Console.log(fruits);
let firstFrit = fruits[0]
let lastFrit = fruits[fruits.Lenght - 1];
console.log(firstFrit)
console.Log(lastFrit);
let Indx = fruits.indexof("mango")
consol.log(Indx)
fruits.Splice(1, 1);
console.log(fruits)
let fruitStrin = fruits.Jon(", ");
console.log(fruitStrin;`,
totalMistakes: 47,
hint: "Fix: Const→const, missing semicolons, fruits.Pus→fruits.push, consol→console, fruits.Pop→fruits.pop, Console→console, firstFrit→firstFruit, lastFrit→lastFruit, fruits.Lenght→fruits.length, console.Log, Indx→index, fruits.indexof→fruits.indexOf, consol.log, fruits.Splice→fruits.splice, fruitStrin→fruitString, fruits.Jon→fruits.join, missing closing parenthesis."
},


// ── H7 ──
{
correct: `function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
let num1 = factorial(5);
let num2 = factorial(0);
let num3 = factorial(3);
console.log(num1);
console.log(num2);
console.log(num3);
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(4));`,
wrong: `fucntion factoral(n) {
  IF (n === 0) {
    Retrun 1;
  }
  retun n * factoral(n - 1)
}
let num1 = factoral(5)
let num2 = factoral(0);
Let num3 = factoral(3)
consol.log(num1)
Console.log(num2);
console.Log(num3);
Functon isPrime(n) {
  IF (n < 2) Retrun flase;
  For (let i = 2; i < n; i++) {
    IF (n % i === 0) retun Flase;
  }
  Return treu;
}
console.log(isPrime(7))
consol.log(isPrime(4));`,
totalMistakes: 49,
hint: "Fix: fucntion→function, factoral→factorial, IF→if, Retrun→return, retun→return, missing semicolons, Let→let, consol→console, Console→console, console.Log, Functon→function, flase→false, For→for, Flase→false, Return→return (case), treu→true."
},


// ── H8 ──
{
correct: `const student = {
  name: "Sara",
  marks: [85, 90, 78, 92, 88],
  getAverage: function() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum = sum + this.marks[i];
    }
    return sum / this.marks.length;
  }
};
let avg = student.getAverage();
console.log("Student:", student.name);
console.log("Average:", avg);
let passed = avg >= 50;
console.log("Passed:", passed);`,
wrong: `Const studnt = {
  Name: "Sara",
  marks: [85, 90, 78, 92, 88]
  getAvrage: Functon() {
    let som = 0;
    For (let i = 0; i < this.marks.Lenght; i++) {
      som = som + this.marks[i]
    }
    Retrun som / this.marks.Lenght;
  }
}
let avg = studnt.getAvrage()
consol.log("Student:" studnt.Name)
Console.log("Average:", avg)
let passd = avg >= 50
console.Log("Passed:", passd);`,
totalMistakes: 48,
hint: "Fix: Const→const, studnt→student, Name→name, missing semicolon after marks array, getAvrage→getAverage, Functon→function, som→sum, For→for, this.marks.Lenght→this.marks.length, missing semicolons, Retrun→return, missing comma in console.log, studnt.Name→student.name, Console→console, console.Log, passd→passed."
},


// ── H9 ──
{
correct: `function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let word = "JavaScript";
let rev = reverseString(word);
let vowelCount = countVowels(word);
console.log(rev);
console.log(vowelCount);`,
wrong: `Functon reverseStirng(str) {
  let reversad = ""
  For (let i = str.Lenght - 1; i >= 0; i--) {
    reversad = reversad + str[i]
  }
  Retrun reversad;
}
functon countVowles(str) {
  let vowels = "aeiou"
  let coutn = 0
  For (let i = 0; i < str.Lenght; i++) {
    IF (vowels.Includes(str[i])) {
      coutn++
    }
  }
  retun coutn;
}
let Wrod = "JavaScript"
let Rev = reverseStirng(Wrod)
let vowlCount = countVowles(Wrod);
consol.log(Rev)
Console.log(vowlCount;`,
totalMistakes: 46,
hint: "Fix: Functon→function, reverseStirng→reverseString, reversad→reversed, missing semicolons, For→for, str.Lenght→str.length, Retrun→return, functon→function, countVowles→countVowels, coutn→count, IF→if, vowels.Includes→vowels.includes, retun→return, Wrod→word, Rev→rev, vowlCount→vowelCount, consol.log, Console.log, missing closing parenthesis."
},


// ── H10 ──
{
correct: `class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    return this.name + " says " + this.sound;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name, "Woof");
    this.tricks = [];
  }
  learnTrick(trick) {
    this.tricks.push(trick);
  }
  showTricks() {
    return this.tricks.join(", ");
  }
}
let dog = new Dog("Buddy");
dog.learnTrick("sit");
dog.learnTrick("shake");
console.log(dog.speak());
console.log(dog.showTricks());`,
wrong: `Clas Animl {
  Constructr(name, sound) {
    this.Name = name
    this.Sound = sound;
  }
  Speak() {
    Retrun this.Name + " says " + this.Sound
  }
}
class Dgo Extends Animl {
  constructr(name) {
    Supr(name, "Woof")
    this.trcks = []
  }
  learnTrck(trick) {
    this.trcks.Pus(trick)
  }
  showTrcks() {
    Retrun this.trcks.Jon(", ")
  }
}
Let dgo = New Dgo("Buddy")
dgo.learnTrck("sit")
dgo.learnTrck("shake")
consol.log(dgo.Speak())
Console.log(dgo.showTrcks();`,
totalMistakes: 50,
hint: "Fix: Clas→class, Animl→Animal, Constructr→constructor, this.Name→this.name, missing semicolons, this.Sound→this.sound, Speak→speak, Retrun→return, Dgo→Dog, Extends→extends, constructr→constructor, Supr→super, this.trcks→this.tricks, learnTrck→learnTrick, this.trcks.Pus→this.tricks.push, showTrcks→showTricks, this.trcks.Jon→this.tricks.join, Let→let, New→new, consol→console, dgo.Speak→dog.speak, Console→console, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H11 - H20)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/


// ── H11 ──
{
correct: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let numbers = [3, 7, 1, 9, 4];
let maxVal = findMax(numbers);
let minVal = findMin(numbers);
console.log("Max:", maxVal);
console.log("Min:", minVal);`,
wrong: `Functon findMx(arr) {
  Let max = arr[0]
  For (let i = 1; i < arr.Lenght; i++) {
    IF (arr[i] > max) {
      max = arr[i]
    }
  }
  Retrun max;
}
functon findMin(arr) {
  let Min = arr[0];
  For (let i = 1 i < arr.Lenght; i++) {
    IF (arr[i] < Min) {
      Min = arr[i]
    }
  }
  retun Min;
}
Let numbrs = [3, 7, 1, 9, 4]
let maxVal = findMx(numbrs)
let minVl = findMin(numbrs);
consol.log("Max:" maxVal)
Console.log("Min:", minVl);`,
totalMistakes: 48,
hint: "Fix: Functon→function, findMx→findMax, Let→let, missing semicolons, For→for, arr.Lenght→arr.length, IF→if, Retrun→return, functon→function, Min→min, missing semicolon in for loop, retun→return, numbrs→numbers, minVl→minVal, consol.log, missing comma in console.log, Console→console."
},


// ── H12 ──
{
correct: `const colors = ["red", "green", "blue", "yellow"];
let upperColors = [];
for (let i = 0; i < colors.length; i++) {
  upperColors.push(colors[i].toUpperCase());
}
console.log(upperColors);
let filtered = [];
for (let i = 0; i < colors.length; i++) {
  if (colors[i].length > 3) {
    filtered.push(colors[i]);
  }
}
console.log(filtered);
let colorString = colors.join(" | ");
console.log(colorString);
let total = colors.length;
console.log("Total colors:", total);`,
wrong: `Const colrs = ["red", "green", "blue", "yellow"]
let upperColrs = []
For (let i = 0; i < colrs.Lenght; i++) {
  upperColrs.Pus(colrs[i].toUppercase())
}
consol.log(upperColrs)
let filtred = [];
For (let i = 0 i < colrs.Lenght; i++) {
  IF (colrs[i].Lenght > 3) {
    filtred.Pus(colrs[i])
  }
}
Console.log(filtred)
let colrString = colrs.Jon(" | ")
consol.log(colrString;
let totl = colrs.length
console.Log("Total colors:", totl);`,
totalMistakes: 47,
hint: "Fix: Const→const, colrs→colors, missing semicolons, For→for, colrs.Lenght→colors.length, upperColrs.Pus→upperColors.push, toUppercase→toUpperCase, consol.log, filtred→filtered, missing semicolon in for loop, IF→if, colrs[i].Lenght→colors[i].length, Console→console, colrString→colorString, colrs.Jon→colors.join, missing closing parenthesis, totl→total, console.Log."
},


// ── H13 ──
{
correct: `function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    return true;
  }
  return false;
}
function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let word1 = "racecar";
let word2 = "hello";
let word3 = "madam";
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));
console.log(capitalizeFirst(word2));`,
wrong: `Functon isPalindrome(str) {
  let reversad = str.Splt("").reveerse().Jon("")
  IF (str === reversad) {
    Retrun Treu;
  }
  retun Flase;
}
functon capitlizeFirst(str) {
  Retrun str[0].toUppercase() + str.Slce(1)
}
Let word1 = "racecar"
let word2 = "hello";
Let word3 = "madam"
consol.log(isPalindrome(word1))
Console.log(isPalindrome(word2))
console.Log(isPalindrome(word3))
console.log(capitlizeFirst(word2;`,
totalMistakes: 46,
hint: "Fix: Functon→function, reversad→reversed, str.Splt→str.split, reveerse→reverse, Jon→join, IF→if, Retrun→return, Treu→true, retun→return, Flase→false, functon→function, capitlizeFirst→capitalizeFirst, toUppercase→toUpperCase, str.Slce→str.slice, missing semicolons, Let→let, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H14 ──
{
correct: `const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) return "Error";
    return a / b;
  }
};
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.divide(10, 0));`,
wrong: `Const calculatr = {
  Add: functon(a, b) {
    Retrun a + b
  },
  subtrct: Functon(a, b) {
    retun a - b;
  },
  multipy: function(a, b) {
    Retrun a * b
  },
  Divide: function(a, b) {
    IF (b === 0) retun "Error"
    return a / b
  }
}
consol.log(calculatr.Add(10, 5))
Console.log(calculatr.subtrct(10, 5))
console.Log(calculatr.multipy(10, 5))
console.log(calculatr.Divide(10, 5))
console.log(calculatr.Divide(10, 0;`,
totalMistakes: 47,
hint: "Fix: Const→const, calculatr→calculator, Add→add, functon→function, Retrun→return, missing semicolons, subtrct→subtract, Functon→function, retun→return, multipy→multiply, Divide→divide, IF→if, missing closing brace, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H15 ──
{
correct: `function countdown(start) {
  for (let i = start; i >= 0; i--) {
    console.log(i);
  }
  console.log("Blast off!");
}
function sumRange(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total = total + i;
  }
  return total;
}
countdown(5);
let rangeSum = sumRange(1, 10);
console.log("Sum 1 to 10:", rangeSum);
let rangeSum2 = sumRange(1, 100);
console.log("Sum 1 to 100:", rangeSum2);`,
wrong: `Functon cuntdown(start) {
  For (let i = start; i >= 0; i--) {
    consol.log(i)
  }
  Console.log("Blast off!")
}
functon sumRnge(start, end) {
  Let totl = 0;
  For (let i = start i <= end; i++) {
    totl = totl + i
  }
  Retrun totl;
}
cuntdown(5)
let rangSum = sumRnge(1, 10)
consol.log("Sum 1 to 10:" rangSum)
let rangSum2 = sumRnge(1, 100)
Console.log("Sum 1 to 100:", rangSum2;`,
totalMistakes: 46,
hint: "Fix: Functon→function, cuntdown→countdown, For→for, consol.log, missing semicolons, Console→console, functon→function, sumRnge→sumRange, Let→let, totl→total, missing semicolon in for loop, Retrun→return, rangSum→rangeSum, missing comma in console.log, missing closing parenthesis."
},


// ── H16 ──
{
correct: `class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  isSquare() {
    return this.width === this.height;
  }
}
let rect = new Rectangle(5, 10);
let sq = new Rectangle(6, 6);
console.log(rect.getArea());
console.log(rect.getPerimeter());
console.log(rect.isSquare());
console.log(sq.isSquare());`,
wrong: `Clas Rectngle {
  Constructr(widht, height) {
    this.widht = widht
    this.Height = height;
  }
  getAra() {
    Retrun this.widht * this.Height
  }
  getPerimetr() {
    retun 2 * (this.widht + this.Height)
  }
  isSqure() {
    Retrun this.widht === this.Height
  }
}
let Rect = New Rectngle(5, 10)
let Sq = New Rectngle(6, 6)
consol.log(Rect.getAra())
Console.log(Rect.getPerimetr())
console.Log(Rect.isSqure())
console.log(Sq.isSqure();`,
totalMistakes: 48,
hint: "Fix: Clas→class, Rectngle→Rectangle, Constructr→constructor, widht→width, missing semicolons, this.Height→this.height, getAra→getArea, Retrun→return, getPerimetr→getPerimeter, retun→return, isSqure→isSquare, Rect→rect, New→new, Sq→sq, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H17 ──
{
correct: `function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
function flattenArray(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j]);
    }
  }
  return flat;
}
let nums = [1, 2, 2, 3, 3, 4];
let result = removeDuplicates(nums);
console.log(result);
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = flattenArray(nested);
console.log(flat);`,
wrong: `Functon removeDuplictes(arr) {
  let uniqe = []
  For (let i = 0; i < arr.Lenght; i++) {
    IF (!uniqe.Includes(arr[i])) {
      uniqe.Pus(arr[i])
    }
  }
  Retrun uniqe;
}
functon flattenArry(arr) {
  let Flat = [];
  For (let i = 0 i < arr.Lenght; i++) {
    For (let j = 0 j < arr[i].Lenght; j++) {
      Flat.Pus(arr[i][j])
    }
  }
  retun Flat;
}
Let nums = [1, 2, 2, 3, 3, 4]
let reslt = removeDuplictes(nums)
consol.log(reslt)
let nestd = [[1, 2], [3, 4], [5, 6]]
let Flat = flattenArry(nestd)
Console.log(Flat;`,
totalMistakes: 47,
hint: "Fix: Functon→function, removeDuplictes→removeDuplicates, uniqe→unique, missing semicolons, For→for, arr.Lenght→arr.length, IF→if, uniqe.Includes→unique.includes, uniqe.Pus→unique.push, Retrun→return, functon→function, flattenArry→flattenArray, Flat→flat, missing semicolons in for loops, retun→return, Let→let, reslt→result, consol.log, nestd→nested, Console→console, missing closing parenthesis."
},


// ── H18 ──
{
correct: `function generateTable(num) {
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(num + " x " + i + " = " + result);
  }
}
function isPositive(n) {
  if (n > 0) {
    return true;
  } else if (n < 0) {
    return false;
  } else {
    return "zero";
  }
}
generateTable(5);
console.log(isPositive(10));
console.log(isPositive(-3));
console.log(isPositive(0));`,
wrong: `Functon generteTable(num) {
  For (let i = 1 i <= 10; i++) {
    let reslt = num * i
    consol.log(num + " x " + i + " = " + reslt)
  }
}
functon isPositve(n) {
  IF (n > 0) {
    Retrun Treu;
  } Else IF (n < 0) {
    retun Flase;
  } Else {
    Retrun "zro"
  }
}
generteTable(5)
consol.log(isPositve(10))
Console.log(isPositve(-3))
console.Log(isPositve(0;`,
totalMistakes: 46,
hint: "Fix: Functon→function, generteTable→generateTable, For→for, missing semicolons, reslt→result, consol.log, functon→function, isPositve→isPositive, IF→if, Retrun→return, Treu→true, Else→else, retun→return, Flase→false, zro→zero, Console→console, console.Log, missing closing parenthesis."
},


// ── H19 ──
{
correct: `const stack = [];
function push(item) {
  stack.push(item);
  console.log("Pushed:", item);
}
function pop() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  let item = stack.pop();
  console.log("Popped:", item);
  return item;
}
function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
}
push(10);
push(20);
push(30);
console.log(peek());
pop();
pop();
console.log(peek());`,
wrong: `Const Stck = []
Functon pus(item) {
  Stck.Pus(item)
  consol.log("Pushed:" item)
}
functon Pop() {
  IF (Stck.Lenght === 0) {
    Retrun "Stack is empty"
  }
  let Itm = Stck.Pop()
  Console.log("Popped:" Itm)
  retun Itm;
}
Functon Peek() {
  IF (Stck.Lenght === 0) {
    retun "Stack is empty"
  }
  Retrun Stck[Stck.Lenght - 1]
}
pus(10)
pus(20)
pus(30)
consol.log(Peek())
Pop()
Pop()
Console.log(Peek();`,
totalMistakes: 48,
hint: "Fix: Const→const, Stck→stack, Functon→function, pus→push, Stck.Pus→stack.push, consol.log, missing commas in console.log, missing semicolons, functon→function, Pop→pop, IF→if, Stck.Lenght→stack.length, Retrun→return, Itm→item, Stck.Pop→stack.pop, Console→console, retun→return, Peek→peek, missing closing parenthesis."
},


// ── H20 ──
{
correct: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let unsorted = [64, 34, 25, 12, 22, 11, 90];
let sorted = bubbleSort(unsorted);
console.log("Sorted:", sorted);
let nums = [5, 3, 8, 1, 9, 2];
let sortedNums = bubbleSort(nums);
console.log("Sorted:", sortedNums);`,
wrong: `Functon bubblSort(arr) {
  let N = arr.Lenght
  For (let i = 0; i < N - 1; i++) {
    For (let j = 0 j < N - i - 1; j++) {
      IF (arr[j] > arr[j + 1]) {
        let Tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = Tmp
      }
    }
  }
  Retrun arr;
}
Let unsortd = [64, 34, 25, 12, 22, 11, 90]
let sortd = bubblSort(unsortd)
consol.log("Sorted:" sortd)
Let Nums = [5, 3, 8, 1, 9, 2]
let sortdNums = bubblSort(Nums)
Console.log("Sorted:" sortdNums;`,
totalMistakes: 46,
hint: "Fix: Functon→function, bubblSort→bubbleSort, N→n, arr.Lenght→arr.length, missing semicolons, For→for, missing semicolon in inner for loop, IF→if, Tmp→temp, Retrun→return, Let→let, unsortd→unsorted, sortd→sorted, consol.log, missing commas in console.log, Nums→nums, sortdNums→sortedNums, Console→console, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H21 - H30)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
*/


// ── H21 ──
{
correct: `function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
for (let i = 0; i <= 10; i++) {
  console.log("fib(" + i + ") = " + fibonacci(i));
}
let result = fibonacci(15);
console.log("fib(15) =", result);`,
wrong: `Functon fibonacc(n) {
  IF (n <= 0) Retrun 0
  IF (n === 1) retun 1
  Let a = 0;
  let B = 1
  For (let i = 2; i <= n; i++) {
    let Tmp = a + B
    a = B
    B = Tmp
  }
  Retrun B;
}
For (let i = 0 i <= 10; i++) {
  consol.log("fib(" + i + ") = " + fibonacc(i))
}
let reslt = fibonacc(15)
Console.log("fib(15) =" reslt;`,
totalMistakes: 47,
hint: "Fix: Functon→function, fibonacc→fibonacci, IF→if, Retrun→return, missing semicolons, retun→return, Let→let, B→b, For→for, Tmp→temp, missing semicolon in for loop, consol.log, reslt→result, Console→console, missing comma in console.log, missing closing parenthesis."
},


// ── H22 ──
{
correct: `const scores = [45, 78, 92, 61, 55, 88, 74];
let passed = 0;
let failed = 0;
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total = total + scores[i];
  if (scores[i] >= 60) {
    passed++;
  } else {
    failed++;
  }
}
let average = total / scores.length;
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Average:", average);
console.log("Total students:", scores.length);`,
wrong: `Const scors = [45, 78, 92, 61, 55, 88, 74]
let Passd = 0
let Faild = 0
let Totl = 0;
For (let i = 0; i < scors.Lenght; i++) {
  Totl = Totl + scors[i]
  IF (scors[i] >= 60) {
    Passd++
  } Else {
    Faild++
  }
}
let averge = Totl / scors.Lenght
consol.log("Passed:" Passd)
Console.log("Failed:", Faild)
console.Log("Average:", averge)
console.log("Total students:" scors.Lenght;`,
totalMistakes: 48,
hint: "Fix: Const→const, scors→scores, missing semicolons, Passd→passed, Faild→failed, Totl→total, For→for, scors.Lenght→scores.length, IF→if, Else→else, averge→average, consol.log, missing commas in console.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H23 ──
{
correct: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
let arr = [1, 3, 5, 7, 9, 11];
console.log(linearSearch(arr, 7));
console.log(binarySearch(arr, 7));`,
wrong: `Functon linearSerch(arr, target) {
  For (let i = 0; i < arr.Lenght; i++) {
    IF (arr[i] === target) {
      Retrun i
    }
  }
  retun -1;
}
functon binarySerch(arr, target) {
  let Lft = 0
  let Rght = arr.Lenght - 1
  Whle (Lft <= Rght) {
    let Mid = Math.Flor((Lft + Rght) / 2)
    IF (arr[Mid] === target) Retrun Mid
    IF (arr[Mid] < target) Lft = Mid + 1
    Else Rght = Mid - 1
  }
  retun -1;
}
Let arr = [1, 3, 5, 7, 9, 11]
consol.log(linearSerch(arr, 7))
Console.log(binarySerch(arr, 7);`,
totalMistakes: 46,
hint: "Fix: Functon→function, linearSerch→linearSearch, For→for, arr.Lenght→arr.length, IF→if, Retrun→return, missing semicolons, retun→return, functon→function, binarySerch→binarySearch, Lft→left, Rght→right, Whle→while, Mid→mid, Math.Flor→Math.floor, Else→else, Let→let, consol.log, Console→console, missing closing parenthesis."
},


// ── H24 ──
{
correct: `class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log("Deposited:", amount);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance = this.balance - amount;
    console.log("Withdrawn:", amount);
  }
  getBalance() {
    return this.balance;
  }
}
let account = new BankAccount("Ali", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());`,
wrong: `Clas BankAccunt {
  Constructr(ownr, balanc) {
    this.ownr = ownr
    this.balanc = balanc;
  }
  Depoit(amunt) {
    this.balanc = this.balanc + amunt
    consol.log("Deposited:" amunt)
  }
  Withdaw(amunt) {
    IF (amunt > this.balanc) {
      Console.log("Insufficient funds")
      Retrun
    }
    this.balanc = this.balanc - amunt
    console.Log("Withdrawn:" amunt)
  }
  GetBalanc() {
    retun this.balanc;
  }
}
let Accunt = New BankAccunt("Ali", 1000)
Accunt.Depoit(500)
Accunt.Withdaw(200)
consol.log(Accunt.GetBalanc();`,
totalMistakes: 49,
hint: "Fix: Clas→class, BankAccunt→BankAccount, Constructr→constructor, ownr→owner, balanc→balance, missing semicolons, Depoit→deposit, amunt→amount, consol.log, missing commas, Withdaw→withdraw, IF→if, Console→console, Retrun→return, console.Log, GetBalanc→getBalance, retun→return, Accunt→account, New→new, missing closing parenthesis."
},


// ── H25 ──
{
correct: `function mergeArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
  }
  return merged;
}
function intersect(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];
console.log(mergeArrays(a, b));
console.log(intersect(a, b));`,
wrong: `Functon mergeArays(arr1, arr2) {
  let Mergd = []
  For (let i = 0; i < arr1.Lenght; i++) {
    Mergd.Pus(arr1[i])
  }
  For (let i = 0 i < arr2.Lenght; i++) {
    Mergd.Pus(arr2[i])
  }
  Retrun Mergd;
}
functon Intersect(arr1, arr2) {
  let reslt = []
  For (let i = 0; i < arr1.Lenght; i++) {
    IF (arr2.Includes(arr1[i])) {
      reslt.Pus(arr1[i])
    }
  }
  retun reslt;
}
Let a = [1, 2, 3, 4]
Let b = [3, 4, 5, 6]
consol.log(mergeArays(a, b))
Console.log(Intersect(a, b);`,
totalMistakes: 46,
hint: "Fix: Functon→function, mergeArays→mergeArrays, Mergd→merged, missing semicolons, For→for, arr1.Lenght→arr1.length, Mergd.Pus→merged.push, missing semicolon in second for loop, arr2.Lenght→arr2.length, Retrun→return, functon→function, Intersect→intersect, reslt→result, IF→if, arr2.Includes→arr2.includes, reslt.Pus→result.push, retun→return, Let→let, consol.log, Console→console, missing closing parenthesis."
},


// ── H26 ──
{
correct: `function wordCount(sentence) {
  let words = sentence.split(" ");
  return words.length;
}
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Word count:", wordCount(sentence));
console.log("Longest word:", longestWord(sentence));`,
wrong: `Functon wordCont(sentenc) {
  let Wrds = sentenc.Splt(" ")
  Retrun Wrds.Lenght;
}
functon longestWrd(sentenc) {
  let Wrds = sentenc.Splt(" ")
  let Longst = ""
  For (let i = 0; i < Wrds.Lenght; i++) {
    IF (Wrds[i].Lenght > Longst.Lenght) {
      Longst = Wrds[i]
    }
  }
  retun Longst;
}
Let sentenc = "The quick brown fox jumps over the lazy dog"
consol.log("Word count:" wordCont(sentenc))
Console.log("Longest word:" longestWrd(sentenc);`,
totalMistakes: 45,
hint: "Fix: Functon→function, wordCont→wordCount, sentenc→sentence, Wrds→words, sentenc.Splt→sentence.split, Retrun→return, Wrds.Lenght→words.length, functon→function, longestWrd→longestWord, Longst→longest, missing semicolons, For→for, IF→if, retun→return, Let→let, consol.log, missing commas in console.log, Console→console, missing closing parenthesis."
},


// ── H27 ──
{
correct: `class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
    console.log("Enqueued:", item);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front());
console.log(q.dequeue());
console.log(q.size());`,
wrong: `Clas Queu {
  Constructr() {
    this.Itms = []
  }
  Enqueu(itm) {
    this.Itms.Pus(itm)
    consol.log("Enqueued:" itm)
  }
  Dequeu() {
    IF (this.Itms.Lenght === 0) {
      Retrun "Queue is empty"
    }
    retun this.Itms.Shft()
  }
  Frnt() {
    IF (this.Itms.Lenght === 0) {
      retun "Queue is empty"
    }
    Retrun this.Itms[0]
  }
  Sze() {
    retun this.Itms.Lenght
  }
}
let Q = New Queu()
Q.Enqueu(10)
Q.Enqueu(20)
Q.Enqueu(30)
consol.log(Q.Frnt())
Console.log(Q.Dequeu())
console.Log(Q.Sze();`,
totalMistakes: 50,
hint: "Fix: Clas→class, Queu→Queue, Constructr→constructor, Itms→items, missing semicolons, Enqueu→enqueue, itm→item, Itms.Pus→items.push, consol.log, missing comma, Dequeu→dequeue, IF→if, Itms.Lenght→items.length, Retrun→return, retun→return, Itms.Shft→items.shift, Frnt→front, Sze→size, Q→q, New→new, Console→console, console.Log, missing closing parenthesis."
},


// ── H28 ──
{
correct: `function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result = result * base;
  }
  return result;
}
function absoluteValue(n) {
  if (n < 0) {
    return -n;
  }
  return n;
}
function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
console.log(power(2, 8));
console.log(absoluteValue(-15));
console.log(clamp(5, 1, 10));
console.log(clamp(15, 1, 10));
console.log(clamp(-5, 1, 10));`,
wrong: `Functon Powr(base, exp) {
  let Reslt = 1
  For (let i = 0; i < exp; i++) {
    Reslt = Reslt * base
  }
  Retrun Reslt;
}
functon absoluteValu(n) {
  IF (n < 0) {
    Retrun -n
  }
  retun n;
}
Functon Clamp(value, Min, Max) {
  IF (value < Min) Retrun Min
  IF (value > Max) retun Max
  Retrun value;
}
consol.log(Powr(2, 8))
Console.log(absoluteValu(-15))
console.Log(Clamp(5, 1, 10))
console.log(Clamp(15, 1, 10))
consol.log(Clamp(-5, 1, 10);`,
totalMistakes: 46,
hint: "Fix: Functon→function, Powr→power, Reslt→result, missing semicolons, For→for, Retrun→return, functon→function, absoluteValu→absoluteValue, IF→if, retun→return, Clamp→clamp, Min→min, Max→max, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H29 ──
{
correct: `const inventory = [
  { name: "apple", price: 50, qty: 10 },
  { name: "banana", price: 20, qty: 25 },
  { name: "mango", price: 100, qty: 5 }
];
let totalValue = 0;
for (let i = 0; i < inventory.length; i++) {
  totalValue = totalValue + inventory[i].price * inventory[i].qty;
}
console.log("Total value:", totalValue);
let expensive = [];
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].price > 40) {
    expensive.push(inventory[i].name);
  }
}
console.log("Expensive items:", expensive);`,
wrong: `Const invntry = [
  { Name: "apple", Price: 50, Qty: 10 },
  { Name: "banana", Price: 20, Qty: 25 },
  { Name: "mango", Price: 100, Qty: 5 }
]
let totlVal = 0
For (let i = 0; i < invntry.Lenght; i++) {
  totlVal = totlVal + invntry[i].Price * invntry[i].Qty
}
consol.log("Total value:" totlVal)
let Expnsve = []
For (let i = 0 i < invntry.Lenght; i++) {
  IF (invntry[i].Price > 40) {
    Expnsve.Pus(invntry[i].Name)
  }
}
Console.log("Expensive items:" Expnsve;`,
totalMistakes: 48,
hint: "Fix: Const→const, invntry→inventory, Name→name, Price→price, Qty→qty, missing semicolons, totlVal→totalValue, For→for, invntry.Lenght→inventory.length, consol.log, missing comma in console.log, Expnsve→expensive, missing semicolon in for loop, IF→if, Expnsve.Pus→expensive.push, Console→console, missing closing parenthesis."
},


// ── H30 ──
{
correct: `function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}
function toKelvin(celsius) {
  return celsius + 273.15;
}
let tempF = 98.6;
let tempC = toCelsius(tempF);
let tempK = toKelvin(tempC);
console.log("Fahrenheit:", tempF);
console.log("Celsius:", tempC);
console.log("Kelvin:", tempK);
let freezing = toCelsius(32);
let boiling = toCelsius(212);
console.log("Freezing:", freezing);
console.log("Boiling:", boiling);`,
wrong: `Functon toCelsus(fahrenheit) {
  Retrun (fahrenheit - 32) * 5 / 9
}
functon toFahrenhet(celsius) {
  retun celsius * 9 / 5 + 32
}
Functon toKelvn(celsius) {
  Retrun celsius + 273.15
}
Let tmpF = 98.6
let tmpC = toCelsus(tmpF)
let tmpK = toKelvn(tmpC)
consol.log("Fahrenheit:" tmpF)
Console.log("Celsius:" tmpC)
console.Log("Kelvin:" tmpK)
let Frezng = toCelsus(32)
let Bolng = toCelsus(212)
consol.log("Freezing:" Frezng)
Console.log("Boiling:" Bolng;`,
totalMistakes: 47,
hint: "Fix: Functon→function, toCelsus→toCelsius, Retrun→return, missing semicolons, functon→function, toFahrenhet→toFahrenheit, retun→return, toKelvn→toKelvin, Let→let, tmpF→tempF, tmpC→tempC, tmpK→tempK, consol.log, missing commas in console.log, Console→console, console.Log, Frezng→freezing, Bolng→boiling, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H31 - H40)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
*/


// ── H31 ──
{
correct: `function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
function uniqueValues(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
let data = [1, 2, 2, 3, 3, 3, 4];
console.log(countOccurrences(data, 3));
console.log(uniqueValues(data));`,
wrong: `Functon countOcurences(arr, value) {
  Let coutn = 0
  For (let i = 0; i < arr.Lenght; i++) {
    IF (arr[i] === value) {
      coutn++
    }
  }
  Retrun coutn;
}
functon uniqueVals(arr) {
  let Reslt = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (!Reslt.Includes(arr[i])) {
      Reslt.Pus(arr[i])
    }
  }
  retun Reslt;
}
Let Dta = [1, 2, 2, 3, 3, 3, 4]
consol.log(countOcurences(Dta, 3))
Console.log(uniqueVals(Dta);`,
totalMistakes: 46,
hint: "Fix: Functon→function, countOcurences→countOccurrences, Let→let, coutn→count, missing semicolons, For→for, arr.Lenght→arr.length, IF→if, Retrun→return, functon→function, uniqueVals→uniqueValues, Reslt→result, missing semicolon in for loop, Reslt.Includes→result.includes, Reslt.Pus→result.push, retun→return, Dta→data, consol.log, Console→console, missing closing parenthesis."
},


// ── H32 ──
{
correct: `class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  isLargerThan(other) {
    return this.radius > other.radius;
  }
}
let c1 = new Circle(5);
let c2 = new Circle(3);
console.log(c1.getArea());
console.log(c1.getCircumference());
console.log(c1.getDiameter());
console.log(c1.isLargerThan(c2));`,
wrong: `Clas Circl {
  Constructr(raduis) {
    this.raduis = raduis
  }
  getAra() {
    Retrun Math.Pi * this.raduis * this.raduis
  }
  getCircumfernce() {
    retun 2 * Math.Pi * this.raduis
  }
  getDiamtr() {
    Retrun this.raduis * 2
  }
  isLargrThan(othr) {
    retun this.raduis > othr.raduis
  }
}
Let C1 = New Circl(5)
Let C2 = New Circl(3)
consol.log(C1.getAra())
Console.log(C1.getCircumfernce())
console.Log(C1.getDiamtr())
console.log(C1.isLargrThan(C2);`,
totalMistakes: 48,
hint: "Fix: Clas→class, Circl→Circle, Constructr→constructor, raduis→radius, missing semicolons, getAra→getArea, Retrun→return, Math.Pi→Math.PI, getCircumfernce→getCircumference, retun→return, getDiamtr→getDiameter, isLargrThan→isLargerThan, othr→other, Let→let, C1→c1, C2→c2, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H33 ──
{
correct: `function titleCase(sentence) {
  let words = sentence.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
    result.push(capitalized);
  }
  return result.join(" ");
}
function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}
console.log(titleCase("the quick brown fox"));
console.log(truncate("Hello World", 5));
console.log(truncate("Hi", 10));`,
wrong: `Functon titleCse(sentenc) {
  let Wrds = sentenc.Splt(" ")
  let Reslt = []
  For (let i = 0; i < Wrds.Lenght; i++) {
    let Wrd = Wrds[i]
    let capitlized = Wrd[0].toUppercase() + Wrd.Slce(1).toLowercase()
    Reslt.Pus(capitlized)
  }
  Retrun Reslt.Jon(" ")
}
functon trunkte(str, maxLenght) {
  IF (str.Lenght <= maxLenght) {
    retun str
  }
  Retrun str.Slce(0, maxLenght) + "..."
}
consol.log(titleCse("the quick brown fox"))
Console.log(trunkte("Hello World", 5))
console.Log(trunkte("Hi", 10);`,
totalMistakes: 47,
hint: "Fix: Functon→function, titleCse→titleCase, sentenc→sentence, Wrds→words, sentenc.Splt→sentence.split, Reslt→result, For→for, Wrds.Lenght→words.length, Wrd→word, capitlized→capitalized, toUppercase→toUpperCase, Wrd.Slce→word.slice, toLowercase→toLowerCase, Reslt.Pus→result.push, Retrun→return, Reslt.Jon→result.join, functon→function, trunkte→truncate, maxLenght→maxLength, IF→if, str.Lenght→str.length, retun→return, str.Slce→str.slice, missing semicolons, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H34 ──
{
correct: `const todoList = [];
function addTodo(task) {
  todoList.push({ task: task, done: false });
  console.log("Added:", task);
}
function completeTodo(index) {
  if (index >= 0 && index < todoList.length) {
    todoList[index].done = true;
    console.log("Completed:", todoList[index].task);
  }
}
function showTodos() {
  for (let i = 0; i < todoList.length; i++) {
    let status = todoList[i].done ? "Done" : "Pending";
    console.log(i + ". " + todoList[i].task + " - " + status);
  }
}
addTodo("Buy groceries");
addTodo("Read book");
addTodo("Exercise");
completeTodo(0);
showTodos();`,
wrong: `Const todoLst = []
Functon addTdo(tsk) {
  todoLst.Pus({ Tsk: tsk, Dne: Flase })
  consol.log("Added:" tsk)
}
functon completTdo(indx) {
  IF (indx >= 0 && indx < todoLst.Lenght) {
    todoLst[indx].Dne = Treu
    Console.log("Completed:" todoLst[indx].Tsk)
  }
}
Functon showTdos() {
  For (let i = 0; i < todoLst.Lenght; i++) {
    let Stts = todoLst[i].Dne ? "Done" : "Pending"
    consol.log(i + ". " + todoLst[i].Tsk + " - " + Stts)
  }
}
addTdo("Buy groceries")
addTdo("Read book")
addTdo("Exercise")
completTdo(0)
showTdos()`,
totalMistakes: 48,
hint: "Fix: Const→const, todoLst→todoList, Functon→function, addTdo→addTodo, tsk→task, todoLst.Pus→todoList.push, Tsk→task, Dne→done, Flase→false, consol.log, missing comma in console.log, missing semicolons, functon→function, completTdo→completeTodo, indx→index, IF→if, todoLst.Lenght→todoList.length, Treu→true, Console→console, showTdos→showTodos, For→for, Stts→status, retun→return."
},


// ── H35 ──
{
correct: `function getType(value) {
  return typeof value;
}
function isNumber(value) {
  return typeof value === "number";
}
function isString(value) {
  return typeof value === "string";
}
function convertToNumber(str) {
  let num = Number(str);
  if (isNaN(num)) {
    return "Not a number";
  }
  return num;
}
console.log(getType(42));
console.log(getType("hello"));
console.log(getType(true));
console.log(isNumber(10));
console.log(isString("world"));
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));`,
wrong: `Functon getTyp(valu) {
  Retrun Typeof valu
}
functon isNumbr(valu) {
  retun Typeof valu === "numbr"
}
Functon isStrng(valu) {
  Retrun Typeof valu === "strng"
}
functon convertToNumbr(str) {
  let Num = Numbr(str)
  IF (isNan(Num)) {
    retun "Not a number"
  }
  Retrun Num;
}
consol.log(getTyp(42))
Console.log(getTyp("hello"))
console.Log(getTyp(True))
console.log(isNumbr(10))
consol.log(isStrng("world"))
Console.log(convertToNumbr("123"))
console.log(convertToNumbr("abc";`,
totalMistakes: 46,
hint: "Fix: Functon→function, getTyp→getType, valu→value, Retrun→return, Typeof→typeof, missing semicolons, functon→function, isNumbr→isNumber, retun→return, numbr→number, isStrng→isString, strng→string, convertToNumbr→convertToNumber, Num→num, Numbr→Number, IF→if, isNan→isNaN, True→true, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H36 ──
{
correct: `class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.subjects = [];
  }
  addSubject(subject) {
    this.subjects.push(subject);
  }
  getReport() {
    return this.name + " - Grade: " + this.grade + " - Subjects: " + this.subjects.join(", ");
  }
  promote() {
    this.grade++;
    console.log(this.name + " promoted to grade " + this.grade);
  }
}
let s1 = new Student("Ahmed", 5);
s1.addSubject("Math");
s1.addSubject("Science");
s1.addSubject("English");
console.log(s1.getReport());
s1.promote();`,
wrong: `Clas Studnt {
  Constructr(nme, Grad) {
    this.nme = nme
    this.Grad = Grad
    this.Subjcts = []
  }
  addSubjct(subjct) {
    this.Subjcts.Pus(subjct)
  }
  getReprt() {
    Retrun this.nme + " - Grade: " + this.Grad + " - Subjects: " + this.Subjcts.Jon(", ")
  }
  Promte() {
    this.Grad++
    consol.log(this.nme + " promoted to grade " + this.Grad)
  }
}
Let S1 = New Studnt("Ahmed", 5)
S1.addSubjct("Math")
S1.addSubjct("Science")
S1.addSubjct("English")
Console.log(S1.getReprt())
S1.Promte()`,
totalMistakes: 47,
hint: "Fix: Clas→class, Studnt→Student, Constructr→constructor, nme→name, Grad→grade, missing semicolons, Subjcts→subjects, addSubjct→addSubject, subjct→subject, Subjcts.Pus→subjects.push, getReprt→getReport, Retrun→return, Subjcts.Jon→subjects.join, Promte→promote, consol.log, Let→let, S1→s1, New→new, Console→console."
},


// ── H37 ──
{
correct: `function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rollDice() {
  return getRandomInt(1, 6);
}
function flipCoin() {
  let num = getRandomInt(0, 1);
  if (num === 0) {
    return "Heads";
  }
  return "Tails";
}
for (let i = 0; i < 5; i++) {
  console.log("Dice:", rollDice());
}
for (let i = 0; i < 5; i++) {
  console.log("Coin:", flipCoin());
}`,
wrong: `Functon getRandmInt(Min, Max) {
  Retrun Math.Flor(Math.randm() * (Max - Min + 1)) + Min
}
functon rollDce() {
  retun getRandmInt(1, 6)
}
Functon flipCon() {
  let Num = getRandmInt(0, 1)
  IF (Num === 0) {
    Retrun "Heads"
  }
  retun "Tails"
}
For (let i = 0; i < 5; i++) {
  consol.log("Dice:" rollDce())
}
For (let i = 0 i < 5; i++) {
  Console.log("Coin:" flipCon())
}`,
totalMistakes: 45,
hint: "Fix: Functon→function, getRandmInt→getRandomInt, Min→min, Max→max, Retrun→return, Math.Flor→Math.floor, Math.randm→Math.random, missing semicolons, functon→function, rollDce→rollDice, retun→return, flipCon→flipCoin, Num→num, IF→if, For→for, consol.log, missing commas in console.log, missing semicolon in second for loop, Console→console."
},


// ── H38 ──
{
correct: `function sumDigits(n) {
  let str = String(n);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]);
  }
  return sum;
}
function reverseNumber(n) {
  let str = String(n);
  let reversed = str.split("").reverse().join("");
  return Number(reversed);
}
function isArmstrong(n) {
  let str = String(n);
  let len = str.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + Math.pow(Number(str[i]), len);
  }
  return sum === n;
}
console.log(sumDigits(1234));
console.log(reverseNumber(1234));
console.log(isArmstrong(153));`,
wrong: `Functon sumDigts(n) {
  let Str = Strng(n)
  let Som = 0
  For (let i = 0; i < Str.Lenght; i++) {
    Som = Som + Numbr(Str[i])
  }
  Retrun Som;
}
functon reverseNumbr(n) {
  let Str = Strng(n)
  let reversad = Str.Splt("").reveerse().Jon("")
  retun Numbr(reversad)
}
Functon isArmstrng(n) {
  let Str = Strng(n)
  let Len = Str.Lenght
  let Som = 0
  For (let i = 0 i < Len; i++) {
    Som = Som + Math.Pow(Numbr(Str[i]), Len)
  }
  Retrun Som === n
}
consol.log(sumDigts(1234))
Console.log(reverseNumbr(1234))
console.Log(isArmstrng(153);`,
totalMistakes: 48,
hint: "Fix: Functon→function, sumDigts→sumDigits, Str→str, Strng→String, Som→sum, missing semicolons, For→for, Str.Lenght→str.length, Numbr→Number, Retrun→return, functon→function, reverseNumbr→reverseNumber, reversad→reversed, Str.Splt→str.split, reveerse→reverse, Jon→join, retun→return, isArmstrng→isArmstrong, Len→len, missing semicolon in for loop, Math.Pow→Math.pow, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H39 ──
{
correct: `const library = [];
function addBook(title, author, year) {
  library.push({ title: title, author: author, year: year });
  console.log("Book added:", title);
}
function findBook(title) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].title === title) {
      return library[i];
    }
  }
  return "Book not found";
}
function getBooksByAuthor(author) {
  let result = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].author === author) {
      result.push(library[i].title);
    }
  }
  return result;
}
addBook("JavaScript Guide", "Ali", 2020);
addBook("CSS Tricks", "Sara", 2021);
addBook("HTML Basics", "Ali", 2019);
console.log(findBook("CSS Tricks"));
console.log(getBooksByAuthor("Ali"));`,
wrong: `Const librry = []
Functon addBok(titl, authr, Yr) {
  librry.Pus({ Titl: titl, Authr: authr, Yr: Yr })
  consol.log("Book added:" titl)
}
functon findBok(titl) {
  For (let i = 0; i < librry.Lenght; i++) {
    IF (librry[i].Titl === titl) {
      Retrun librry[i]
    }
  }
  retun "Book not found"
}
Functon getBoksByAuthr(authr) {
  let Reslt = []
  For (let i = 0 i < librry.Lenght; i++) {
    IF (librry[i].Authr === authr) {
      Reslt.Pus(librry[i].Titl)
    }
  }
  Retrun Reslt;
}
addBok("JavaScript Guide", "Ali", 2020)
addBok("CSS Tricks", "Sara", 2021)
addBok("HTML Basics", "Ali", 2019)
consol.log(findBok("CSS Tricks"))
Console.log(getBoksByAuthr("Ali");`,
totalMistakes: 49,
hint: "Fix: Const→const, librry→library, Functon→function, addBok→addBook, titl→title, authr→author, Yr→year, librry.Pus→library.push, Titl→title, Authr→author, consol.log, missing comma, missing semicolons, functon→function, findBok→findBook, For→for, librry.Lenght→library.length, IF→if, Retrun→return, retun→return, getBoksByAuthr→getBooksByAuthor, Reslt→result, missing semicolon in for loop, Reslt.Pus→result.push, Console→console, missing closing parenthesis."
},


// ── H40 ──
{
correct: `function makeCounter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  function reset() {
    count = 0;
    return count;
  }
  function getCount() {
    return count;
  }
  return { increment, decrement, reset, getCount };
}
let counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.getCount());`,
wrong: `Functon makeCountr() {
  Let coutn = 0
  Functon incrment() {
    coutn++
    Retrun coutn
  }
  functon decrment() {
    coutn--
    retun coutn
  }
  Functon Rset() {
    coutn = 0
    Retrun coutn
  }
  functon getCoutn() {
    retun coutn
  }
  Retrun { incrment, decrment, Rset, getCoutn }
}
let Countr = makeCountr()
consol.log(Countr.incrment())
Console.log(Countr.incrment())
console.Log(Countr.incrment())
console.log(Countr.decrment())
consol.log(Countr.Rset())
Console.log(Countr.getCoutn();`,
totalMistakes: 46,
hint: "Fix: Functon→function, makeCountr→makeCounter, Let→let, coutn→count, incrment→increment, Retrun→return, missing semicolons, functon→function, decrment→decrement, retun→return, Rset→reset, getCoutn→getCount, Countr→counter, consol.log, Console→console, console.Log, missing closing parenthesis."
},


/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H41 - H50)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
*/


// ── H41 ──
{
correct: `function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}
function zipArrays(arr1, arr2) {
  let result = [];
  let len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}
let nums = [1, 2, 3, 4, 5, 6];
console.log(chunkArray(nums, 2));
let a = [1, 2, 3];
let b = ["a", "b", "c"];
console.log(zipArrays(a, b));`,
wrong: `Functon chunkArry(arr, Sze) {
  let Reslt = []
  For (let i = 0; i < arr.Lenght; i += Sze) {
    let Chnk = arr.Slce(i, i + Sze)
    Reslt.Pus(Chnk)
  }
  Retrun Reslt;
}
functon zipArays(arr1, arr2) {
  let Reslt = []
  let Len = Math.Min(arr1.Lenght, arr2.Lenght)
  For (let i = 0 i < Len; i++) {
    Reslt.Pus([arr1[i], arr2[i]])
  }
  retun Reslt;
}
Let Nums = [1, 2, 3, 4, 5, 6]
consol.log(chunkArry(Nums, 2))
Let A = [1, 2, 3]
Let B = ["a", "b", "c"]
Console.log(zipArays(A, B);`,
totalMistakes: 46,
hint: "Fix: Functon→function, chunkArry→chunkArray, Sze→size, Reslt→result, For→for, arr.Lenght→arr.length, Chnk→chunk, arr.Slce→arr.slice, Reslt.Pus→result.push, Retrun→return, functon→function, zipArays→zipArrays, Len→len, Math.Min→Math.min, arr1.Lenght→arr1.length, arr2.Lenght→arr2.length, missing semicolons in for loops, retun→return, Let→let, Nums→nums, A→a, B→b, consol.log, Console→console, missing closing parenthesis."
},


// ── H42 ──
{
correct: `class Timer {
  constructor() {
    this.seconds = 0;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;
    console.log("Timer started");
  }
  stop() {
    this.isRunning = false;
    console.log("Timer stopped");
  }
  tick() {
    if (this.isRunning) {
      this.seconds++;
      console.log("Seconds:", this.seconds);
    }
  }
  reset() {
    this.seconds = 0;
    this.isRunning = false;
    console.log("Timer reset");
  }
  getTime() {
    return this.seconds;
  }
}
let timer = new Timer();
timer.start();
timer.tick();
timer.tick();
timer.tick();
console.log(timer.getTime());
timer.stop();
timer.reset();`,
wrong: `Clas Timr {
  Constructr() {
    this.Secnds = 0
    this.isRunng = Flase
  }
  Strt() {
    this.isRunng = Treu
    consol.log("Timer started")
  }
  Stp() {
    this.isRunng = Flase
    Console.log("Timer stopped")
  }
  Tck() {
    IF (this.isRunng) {
      this.Secnds++
      console.Log("Seconds:" this.Secnds)
    }
  }
  Rset() {
    this.Secnds = 0
    this.isRunng = Flase
    consol.log("Timer reset")
  }
  getTme() {
    retun this.Secnds
  }
}
Let Timr = New Timr()
Timr.Strt()
Timr.Tck()
Timr.Tck()
Timr.Tck()
Console.log(Timr.getTme())
Timr.Stp()
Timr.Rset()`,
totalMistakes: 50,
hint: "Fix: Clas→class, Timr→Timer (class name), Constructr→constructor, Secnds→seconds, isRunng→isRunning, Flase→false, Strt→start, Treu→true, consol.log, Stp→stop, Console→console, Tck→tick, IF→if, console.Log, missing comma in console.log, Rset→reset, getTme→getTime, retun→return, missing semicolons, Let→let, Timr→timer (variable), New→new."
},


// ── H43 ──
{
correct: `function groupBy(arr, key) {
  let groups = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i][key];
    if (!groups[val]) {
      groups[val] = [];
    }
    groups[val].push(arr[i]);
  }
  return groups;
}
function countBy(arr, key) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i][key];
    if (!counts[val]) {
      counts[val] = 0;
    }
    counts[val]++;
  }
  return counts;
}
let people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Ahmed", city: "Lahore" }
];
console.log(groupBy(people, "city"));
console.log(countBy(people, "city"));`,
wrong: `Functon groupBy(arr, Ky) {
  let Grps = {}
  For (let i = 0; i < arr.Lenght; i++) {
    let Val = arr[i][Ky]
    IF (!Grps[Val]) {
      Grps[Val] = []
    }
    Grps[Val].Pus(arr[i])
  }
  Retrun Grps;
}
functon cuntBy(arr, Ky) {
  let Cunts = {}
  For (let i = 0 i < arr.Lenght; i++) {
    let Val = arr[i][Ky]
    IF (!Cunts[Val]) {
      Cunts[Val] = 0
    }
    Cunts[Val]++
  }
  retun Cunts;
}
Let Peopl = [
  { Name: "Ali", Cty: "Lahore" },
  { Name: "Sara", Cty: "Karachi" },
  { Name: "Ahmed", Cty: "Lahore" }
]
consol.log(groupBy(Peopl, "Cty"))
Console.log(cuntBy(Peopl, "Cty");`,
totalMistakes: 47,
hint: "Fix: Functon→function, Ky→key, Grps→groups, For→for, arr.Lenght→arr.length, Val→val, IF→if, Grps[Val].Pus→groups[val].push, Retrun→return, functon→function, cuntBy→countBy, Cunts→counts, missing semicolon in for loop, retun→return, Let→let, Peopl→people, Name→name, Cty→city, missing semicolons, consol.log, Console→console, missing closing parenthesis."
},


// ── H44 ──
{
correct: `function debounce(func, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, delay);
  };
}
function throttle(func, limit) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}
function sayHello() {
  console.log("Hello!");
}
let debouncedHello = debounce(sayHello, 300);
let throttledHello = throttle(sayHello, 1000);
debouncedHello();
throttledHello();`,
wrong: `Functon debounc(func, Dlay) {
  let Timr = Null
  Retrun Functon() {
    IF (Timr) {
      clearTimout(Timr)
    }
    Timr = setTimout(func, Dlay)
  }
}
functon throtl(func, Limt) {
  let lastCal = 0
  retun Functon() {
    let Nw = Date.Now()
    IF (Nw - lastCal >= Limt) {
      lastCal = Nw
      func()
    }
  }
}
Functon sayHelo() {
  consol.log("Hello!")
}
Let debouncedHelo = debounc(sayHelo, 300)
Let throttledHelo = throtl(sayHelo, 1000)
debouncedHelo()
throttledHelo()`,
totalMistakes: 45,
hint: "Fix: Functon→function, debounc→debounce, Dlay→delay, Timr→timer, Null→null, Retrun→return, IF→if, clearTimout→clearTimeout, setTimout→setTimeout, missing semicolons, functon→function, throtl→throttle, Limt→limit, lastCal→lastCall, retun→return, Nw→now, Date.Now→Date.now, sayHelo→sayHello, consol.log, Let→let, debouncedHelo→debouncedHello, throttledHelo→throttledHello."
},


// ── H45 ──
{
correct: `class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {
    let node = { value: value, next: null };
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  getSize() {
    return this.size;
  }
  print() {
    let current = this.head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result);
  }
}
let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print();
console.log(list.getSize());`,
wrong: `Clas LinkdList {
  Constructr() {
    this.Hed = Null
    this.Sze = 0
  }
  Ad(valu) {
    let Nod = { Valu: valu, Nxt: Null }
    IF (this.Hed === Null) {
      this.Hed = Nod
    } Else {
      let Currnt = this.Hed
      Whle (Currnt.Nxt !== Null) {
        Currnt = Currnt.Nxt
      }
      Currnt.Nxt = Nod
    }
    this.Sze++
  }
  getSze() {
    Retrun this.Sze
  }
  Prnt() {
    let Currnt = this.Hed
    let Reslt = []
    Whle (Currnt !== Null) {
      Reslt.Pus(Currnt.Valu)
      Currnt = Currnt.Nxt
    }
    consol.log(Reslt)
  }
}
Let Lst = New LinkdList()
Lst.Ad(10)
Lst.Ad(20)
Lst.Ad(30)
Lst.Prnt()
Console.log(Lst.getSze();`,
totalMistakes: 50,
hint: "Fix: Clas→class, LinkdList→LinkedList, Constructr→constructor, Hed→head, Null→null, Sze→size, Ad→add, valu→value, Nod→node, Valu→value, Nxt→next, IF→if, Else→else, Currnt→current, Whle→while, getSze→getSize, Retrun→return, Prnt→print, Reslt→result, Reslt.Pus→result.push, consol.log, missing semicolons, Let→let, Lst→list, New→new, Console→console, missing closing parenthesis."
},


// ── H46 ──
{
correct: `function memoize(func) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = func(n);
    return cache[n];
  };
}
function slowSquare(n) {
  return n * n;
}
let fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5));
console.log(fastSquare(10));
function slowCube(n) {
  return n * n * n;
}
let fastCube = memoize(slowCube);
console.log(fastCube(3));
console.log(fastCube(3));`,
wrong: `Functon memoze(func) {
  let Cche = {}
  Retrun Functon(n) {
    IF (Cche[n] !== undefind) {
      Retrun Cche[n]
    }
    Cche[n] = func(n)
    retun Cche[n]
  }
}
functon slowSqure(n) {
  Retrun n * n
}
Let fastSqure = memoze(slowSqure)
consol.log(fastSqure(5))
Console.log(fastSqure(5))
console.Log(fastSqure(10))
Functon slowCub(n) {
  retun n * n * n
}
Let fastCub = memoze(slowCub)
consol.log(fastCub(3))
Console.log(fastCub(3);`,
totalMistakes: 46,
hint: "Fix: Functon→function, memoze→memoize, Cche→cache, Retrun→return, IF→if, undefind→undefined, retun→return, missing semicolons, functon→function, slowSqure→slowSquare, Let→let, fastSqure→fastSquare, consol.log, Console→console, console.Log, slowCub→slowCube, fastCub→fastCube, missing closing parenthesis."
},


// ── H47 ──
{
correct: `function pipe(...fns) {
  return function(value) {
    let result = value;
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}
function double(n) {
  return n * 2;
}
function addTen(n) {
  return n + 10;
}
function square(n) {
  return n * n;
}
let transform = pipe(double, addTen, square);
console.log(transform(3));
let transform2 = pipe(square, double, addTen);
console.log(transform2(4));`,
wrong: `Functon Pipe(...fns) {
  Retrun Functon(valu) {
    let Reslt = valu
    For (let i = 0; i < fns.Lenght; i++) {
      Reslt = fns[i](Reslt)
    }
    retun Reslt
  }
}
functon Doubl(n) {
  Retrun n * 2
}
Functon addTn(n) {
  retun n + 10
}
functon Squar(n) {
  Retrun n * n
}
Let transfm = Pipe(Doubl, addTn, Squar)
consol.log(transfm(3))
Let transfm2 = Pipe(Squar, Doubl, addTn)
Console.log(transfm2(4);`,
totalMistakes: 45,
hint: "Fix: Functon→function, Pipe→pipe, Retrun→return, valu→value, Reslt→result, For→for, fns.Lenght→fns.length, retun→return, missing semicolons, functon→function, Doubl→double, addTn→addTen, Squar→square, Let→let, transfm→transform, transfm2→transform2, consol.log, Console→console, missing closing parenthesis."
},


// ── H48 ──
{
correct: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  emit(event, data) {
    if (this.events[event]) {
      for (let i = 0; i < this.events[event].length; i++) {
        this.events[event][i](data);
      }
    }
  }
  off(event) {
    delete this.events[event];
  }
}
let emitter = new EventEmitter();
emitter.on("greet", function(name) {
  console.log("Hello,", name);
});
emitter.emit("greet", "Ali");
emitter.emit("greet", "Sara");
emitter.off("greet");`,
wrong: `Clas EventEmtr {
  Constructr() {
    this.Evnts = {}
  }
  On(evnt, listnr) {
    IF (!this.Evnts[evnt]) {
      this.Evnts[evnt] = []
    }
    this.Evnts[evnt].Pus(listnr)
  }
  Emt(evnt, Dta) {
    IF (this.Evnts[evnt]) {
      For (let i = 0; i < this.Evnts[evnt].Lenght; i++) {
        this.Evnts[evnt][i](Dta)
      }
    }
  }
  Of(evnt) {
    Delet this.Evnts[evnt]
  }
}
Let Emitr = New EventEmtr()
Emitr.On("greet", Functon(nme) {
  consol.log("Hello," nme)
})
Emitr.Emt("greet", "Ali")
Emitr.Emt("greet", "Sara")
Emitr.Of("greet")`,
totalMistakes: 48,
hint: "Fix: Clas→class, EventEmtr→EventEmitter, Constructr→constructor, Evnts→events, On→on, evnt→event, listnr→listener, IF→if, Evnts[evnt].Pus→events[event].push, Emt→emit, Dta→data, For→for, Evnts[evnt].Lenght→events[event].length, Of→off, Delet→delete, missing semicolons, Let→let, Emitr→emitter, New→new, Functon→function, nme→name, consol.log, missing comma in console.log."
},


// ── H49 ──
{
correct: `function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
function mergeObjects(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
let original = { name: "Ali", age: 25, city: "Lahore" };
let cloned = deepClone(original);
cloned.name = "Sara";
console.log(original.name);
console.log(cloned.name);
let merged = mergeObjects(original, { country: "Pakistan" });
console.log(merged);`,
wrong: `Functon deepClon(obj) {
  IF (Typeof obj !== "objct" || obj === Null) {
    Retrun obj
  }
  let Clon = {}
  For (let Ky in obj) {
    IF (obj.hasOwnProprty(Ky)) {
      Clon[Ky] = deepClon(obj[Ky])
    }
  }
  retun Clon;
}
functon mergeObjcts(obj1, obj2) {
  let Reslt = {}
  For (let Ky in obj1) {
    Reslt[Ky] = obj1[Ky]
  }
  For (let Ky in obj2) {
    Reslt[Ky] = obj2[Ky]
  }
  Retrun Reslt;
}
Let orignl = { Name: "Ali", Age: 25, Cty: "Lahore" }
let Clonad = deepClon(orignl)
Clonad.Name = "Sara"
consol.log(orignl.Name)
Console.log(Clonad.Name)
let Mergd = mergeObjcts(orignl, { Cuntry: "Pakistan" })
console.Log(Mergd;`,
totalMistakes: 49,
hint: "Fix: Functon→function, deepClon→deepClone, IF→if, Typeof→typeof, objct→object, Null→null, Retrun→return, Clon→clone, For→for, Ky→key, hasOwnProprty→hasOwnProperty, retun→return, functon→function, mergeObjcts→mergeObjects, Reslt→result, Let→let, orignl→original, Name→name, Age→age, Cty→city, Clonad→cloned, consol.log, Console→console, Mergd→merged, Cuntry→country, console.Log, missing semicolons, missing closing parenthesis."
},


// ── H50 ──
{
correct: `class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }
  addItem(name, price, qty) {
    this.items.push({ name: name, price: price, qty: qty });
    console.log("Added:", name);
  }
  removeItem(name) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        this.items.splice(i, 1);
        console.log("Removed:", name);
        return;
      }
    }
  }
  setDiscount(percent) {
    this.discount = percent;
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].price * this.items[i].qty;
    }
    let discounted = total - (total * this.discount / 100);
    return discounted;
  }
}
let cart = new ShoppingCart();
cart.addItem("Apple", 50, 3);
cart.addItem("Mango", 100, 2);
cart.setDiscount(10);
console.log(cart.getTotal());`,
wrong: `Clas ShopingCart {
  Constructr() {
    this.Itms = []
    this.Discnt = 0
  }
  addItm(nme, Pric, Qty) {
    this.Itms.Pus({ Nme: nme, Pric: Pric, Qty: Qty })
    consol.log("Added:" nme)
  }
  removeItm(nme) {
    For (let i = 0; i < this.Itms.Lenght; i++) {
      IF (this.Itms[i].Nme === nme) {
        this.Itms.Splic(i, 1)
        Console.log("Removed:" nme)
        Retrun
      }
    }
  }
  setDiscnt(percnt) {
    this.Discnt = percnt
  }
  getTotl() {
    let Totl = 0
    For (let i = 0 i < this.Itms.Lenght; i++) {
      Totl = Totl + this.Itms[i].Pric * this.Itms[i].Qty
    }
    let discntd = Totl - (Totl * this.Discnt / 100)
    Retrun discntd;
  }
}
Let Crt = New ShopingCart()
Crt.addItm("Apple", 50, 3)
Crt.addItm("Mango", 100, 2)
Crt.setDiscnt(10)
consol.log(Crt.getTotl();`,
totalMistakes: 50,
hint: "Fix: Clas→class, ShopingCart→ShoppingCart, Constructr→constructor, Itms→items, Discnt→discount, addItm→addItem, nme→name, Pric→price, Qty→qty, Itms.Pus→items.push, Nme→name, consol.log, missing comma, removeItm→removeItem, For→for, Itms.Lenght→items.length, IF→if, Itms[i].Nme→items[i].name, Itms.Splic→items.splice, Console→console, Retrun→return, setDiscnt→setDiscount, percnt→percent, getTotl→getTotal, Totl→total, missing semicolons, discntd→discounted, Let→let, Crt→cart, New→new, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H51 - H60)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
*/


// ── H51 ──
{
correct: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let nums1 = [64, 25, 12, 22, 11];
let nums2 = [9, 5, 1, 4, 3];
console.log(selectionSort(nums1));
console.log(insertionSort(nums2));`,
wrong: `Functon selectonSort(arr) {
  Let N = arr.Lenght
  For (let i = 0; i < N - 1; i++) {
    let minIndx = i
    For (let j = i + 1 j < N; j++) {
      IF (arr[j] < arr[minIndx]) {
        minIndx = j
      }
    }
    let Tmp = arr[i]
    arr[i] = arr[minIndx]
    arr[minIndx] = Tmp
  }
  Retrun arr;
}
functon insertionSrt(arr) {
  For (let i = 1; i < arr.Lenght; i++) {
    let Ky = arr[i]
    let J = i - 1
    Whle (J >= 0 && arr[J] > Ky) {
      arr[J + 1] = arr[J]
      J--
    }
    arr[J + 1] = Ky
  }
  retun arr;
}
Let nums1 = [64, 25, 12, 22, 11]
Let nums2 = [9, 5, 1, 4, 3]
consol.log(selectonSort(nums1))
Console.log(insertionSrt(nums2);`,
totalMistakes: 47,
hint: "Fix: Functon→function, selectonSort→selectionSort, Let→let, N→n, arr.Lenght→arr.length, For→for, minIndx→minIndex, missing semicolons in for loops, IF→if, Tmp→temp, Retrun→return, functon→function, insertionSrt→insertionSort, Ky→key, J→j, Whle→while, retun→return, consol.log, Console→console, missing closing parenthesis."
},


// ── H52 ──
{
correct: `class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];
    for (let i = 0; i < rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }
  set(row, col, value) {
    this.data[row][col] = value;
  }
  get(row, col) {
    return this.data[row][col];
  }
  print() {
    for (let i = 0; i < this.rows; i++) {
      console.log(this.data[i]);
    }
  }
}
let m = new Matrix(3, 3);
m.set(0, 0, 1);
m.set(1, 1, 5);
m.set(2, 2, 9);
m.print();
console.log(m.get(1, 1));`,
wrong: `Clas Matrx {
  Constructr(Rws, Cols) {
    this.Rws = Rws
    this.Cols = Cols
    this.Dta = []
    For (let i = 0; i < Rws; i++) {
      this.Dta[i] = []
      For (let j = 0 j < Cols; j++) {
        this.Dta[i][j] = 0
      }
    }
  }
  St(Rw, Col, Valu) {
    this.Dta[Rw][Col] = Valu
  }
  Gt(Rw, Col) {
    Retrun this.Dta[Rw][Col]
  }
  Prnt() {
    For (let i = 0; i < this.Rws; i++) {
      consol.log(this.Dta[i])
    }
  }
}
Let M = New Matrx(3, 3)
M.St(0, 0, 1)
M.St(1, 1, 5)
M.St(2, 2, 9)
M.Prnt()
Console.log(M.Gt(1, 1);`,
totalMistakes: 48,
hint: "Fix: Clas→class, Matrx→Matrix, Constructr→constructor, Rws→rows, Cols→cols, Dta→data, For→for, missing semicolons, missing semicolon in inner for loop, St→set, Rw→row, Col→col, Valu→value, Gt→get, Retrun→return, Prnt→print, consol.log, Let→let, M→m, New→new, Console→console, missing closing parenthesis."
},


// ── H53 ──
{
correct: `function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return day + "/" + month + "/" + year;
}
function getDayName(date) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}
function daysBetween(date1, date2) {
  let diff = date2 - date1;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
let today = new Date();
console.log(formatDate(today));
console.log(getDayName(today));
let d1 = new Date(2024, 0, 1);
let d2 = new Date(2024, 11, 31);
console.log(daysBetween(d1, d2));`,
wrong: `Functon formatDte(Dte) {
  let Dy = Dte.getDte()
  let Mnth = Dte.getMnth() + 1
  let Yr = Dte.getFullYr()
  Retrun Dy + "/" + Mnth + "/" + Yr
}
functon getDyNme(Dte) {
  let Dys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  retun Dys[Dte.getDy()]
}
Functon dysBetwen(Dte1, Dte2) {
  let Dif = Dte2 - Dte1
  Retrun Math.Flor(Dif / (1000 * 60 * 60 * 24))
}
Let tody = New Date()
consol.log(formatDte(tody))
Console.log(getDyNme(tody))
Let D1 = New Date(2024, 0, 1)
Let D2 = New Date(2024, 11, 31)
console.Log(dysBetwen(D1, D2);`,
totalMistakes: 46,
hint: "Fix: Functon→function, formatDte→formatDate, Dte→date, Dy→day, Dte.getDte→date.getDate, Mnth→month, Dte.getMnth→date.getMonth, Yr→year, Dte.getFullYr→date.getFullYear, Retrun→return, missing semicolons, functon→function, getDyNme→getDayName, Dys→days, retun→return, Dys[Dte.getDy]→days[date.getDay], dysBetwen→daysBetween, Dif→diff, Math.Flor→Math.floor, Let→let, tody→today, New→new, D1→d1, D2→d2, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H54 ──
{
correct: `function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}
function add(a, b, c) {
  return a + b + c;
}
function multiply(a, b) {
  return a * b;
}
let curriedAdd = curry(add);
let curriedMultiply = curry(multiply);
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedMultiply(4)(5));`,
wrong: `Functon Curry(func) {
  Retrun Functon Currid(...args) {
    IF (args.Lenght >= func.Lenght) {
      retun func(...args)
    }
    Retrun Functon(...moreArgs) {
      retun Currid(...args, ...moreArgs)
    }
  }
}
functon Ad(a, b, c) {
  Retrun a + b + c
}
Functon multipy(a, b) {
  retun a * b
}
Let Curried_Ad = Curry(Ad)
Let Curried_Multipy = Curry(multipy)
consol.log(Curried_Ad(1)(2)(3))
Console.log(Curried_Ad(1, 2)(3))
console.Log(Curried_Multipy(4)(5);`,
totalMistakes: 45,
hint: "Fix: Functon→function, Curry→curry, Retrun→return, Currid→curried, IF→if, args.Lenght→args.length, func.Lenght→func.length, retun→return, missing semicolons, functon→function, Ad→add, multipy→multiply, Let→let, Curried_Ad→curriedAdd, Curried_Multipy→curriedMultiply, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H55 ──
{
correct: `class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(item, priority) {
    let element = { item: item, priority: priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority < this.items[i].priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(element);
    }
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
let pq = new PriorityQueue();
pq.enqueue("low task", 3);
pq.enqueue("high task", 1);
pq.enqueue("mid task", 2);
console.log(pq.peek());
console.log(pq.dequeue());
console.log(pq.size());`,
wrong: `Clas PriortyQue {
  Constructr() {
    this.Itms = []
  }
  Enqueu(itm, Priorty) {
    let Elemnt = { Itm: itm, Priorty: Priorty }
    let Addd = Flase
    For (let i = 0; i < this.Itms.Lenght; i++) {
      IF (Elemnt.Priorty < this.Itms[i].Priorty) {
        this.Itms.Splic(i, 0, Elemnt)
        Addd = Treu
        Brek
      }
    }
    IF (!Addd) {
      this.Itms.Pus(Elemnt)
    }
  }
  Dequeu() {
    Retrun this.Itms.Shft()
  }
  Pek() {
    retun this.Itms[0]
  }
  Sze() {
    Retrun this.Itms.Lenght
  }
}
Let Pq = New PriortyQue()
Pq.Enqueu("low task", 3)
Pq.Enqueu("high task", 1)
Pq.Enqueu("mid task", 2)
consol.log(Pq.Pek())
Console.log(Pq.Dequeu())
console.Log(Pq.Sze();`,
totalMistakes: 50,
hint: "Fix: Clas→class, PriortyQue→PriorityQueue, Constructr→constructor, Itms→items, Enqueu→enqueue, itm→item, Priorty→priority, Elemnt→element, Itm→item, Addd→added, Flase→false, For→for, Itms.Lenght→items.length, IF→if, Itms.Splic→items.splice, Treu→true, Brek→break, Itms.Pus→items.push, Dequeu→dequeue, Retrun→return, Itms.Shft→items.shift, Pek→peek, retun→return, Sze→size, missing semicolons, Let→let, Pq→pq, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H56 ──
{
correct: `function parseCSV(csv) {
  let lines = csv.split("\n");
  let headers = lines[0].split(",");
  let result = [];
  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(",");
    let obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    result.push(obj);
  }
  return result;
}
let csv = "name,age,city\nAli,25,Lahore\nSara,22,Karachi\nAhmed,30,Islamabad";
let data = parseCSV(csv);
console.log(data);
console.log(data.length);
for (let i = 0; i < data.length; i++) {
  console.log(data[i].name);
}`,
wrong: `Functon parsCSV(Csv) {
  let Lnes = Csv.Splt("\n")
  let Hdrs = Lnes[0].Splt(",")
  let Reslt = []
  For (let i = 1; i < Lnes.Lenght; i++) {
    let Vals = Lnes[i].Splt(",")
    let Obj = {}
    For (let j = 0 j < Hdrs.Lenght; j++) {
      Obj[Hdrs[j]] = Vals[j]
    }
    Reslt.Pus(Obj)
  }
  Retrun Reslt;
}
Let Csv = "name,age,city\nAli,25,Lahore\nSara,22,Karachi\nAhmed,30,Islamabad"
let Dta = parsCSV(Csv)
consol.log(Dta)
Console.log(Dta.Lenght)
For (let i = 0; i < Dta.Lenght; i++) {
  console.Log(Dta[i].Name)
}`,
totalMistakes: 46,
hint: "Fix: Functon→function, parsCSV→parseCSV, Csv→csv, Lnes→lines, Csv.Splt→csv.split, Hdrs→headers, Lnes[0].Splt→lines[0].split, Reslt→result, For→for, Lnes.Lenght→lines.length, Vals→values, Lnes[i].Splt→lines[i].split, Obj→obj, missing semicolons in for loops, Hdrs.Lenght→headers.length, Reslt.Pus→result.push, Retrun→return, Let→let, Dta→data, consol.log, Console→console, Dta.Lenght→data.length, console.Log, Dta[i].Name→data[i].name."
},


// ── H57 ──
{
correct: `function binaryToDecimal(binary) {
  let result = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      result = result + Math.pow(2, power);
    }
    power++;
  }
  return result;
}
function decimalToBinary(decimal) {
  if (decimal === 0) return "0";
  let result = "";
  while (decimal > 0) {
    result = (decimal % 2) + result;
    decimal = Math.floor(decimal / 2);
  }
  return result;
}
console.log(binaryToDecimal("1010"));
console.log(binaryToDecimal("1111"));
console.log(decimalToBinary(10));
console.log(decimalToBinary(15));`,
wrong: `Functon binaryToDecml(binry) {
  let Reslt = 0
  let Powr = 0
  For (let i = binry.Lenght - 1; i >= 0; i--) {
    IF (binry[i] === "1") {
      Reslt = Reslt + Math.Pow(2, Powr)
    }
    Powr++
  }
  Retrun Reslt;
}
functon decmlToBinry(deciml) {
  IF (deciml === 0) retun "0"
  let Reslt = ""
  Whle (deciml > 0) {
    Reslt = (deciml % 2) + Reslt
    deciml = Math.Flor(deciml / 2)
  }
  retun Reslt;
}
consol.log(binaryToDecml("1010"))
Console.log(binaryToDecml("1111"))
console.Log(decmlToBinry(10))
console.log(decmlToBinry(15);`,
totalMistakes: 46,
hint: "Fix: Functon→function, binaryToDecml→binaryToDecimal, binry→binary, Reslt→result, Powr→power, For→for, binry.Lenght→binary.length, IF→if, Math.Pow→Math.pow, Retrun→return, missing semicolons, functon→function, decmlToBinry→decimalToBinary, deciml→decimal, retun→return, Whle→while, Math.Flor→Math.floor, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H58 ──
{
correct: `class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }
  hasEdge(v1, v2) {
    return this.adjacencyList[v1].includes(v2);
  }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("B", "C");
console.log(g.getNeighbors("B"));
console.log(g.hasEdge("A", "B"));`,
wrong: `Clas Grph {
  Constructr() {
    this.adjacncyList = {}
  }
  addVrtx(vrtx) {
    IF (!this.adjacncyList[vrtx]) {
      this.adjacncyList[vrtx] = []
    }
  }
  addEdg(V1, V2) {
    this.adjacncyList[V1].Pus(V2)
    this.adjacncyList[V2].Pus(V1)
  }
  getNghbrs(vrtx) {
    Retrun this.adjacncyList[vrtx]
  }
  hasEdg(V1, V2) {
    retun this.adjacncyList[V1].Includes(V2)
  }
}
Let G = New Grph()
G.addVrtx("A")
G.addVrtx("B")
G.addVrtx("C")
G.addEdg("A", "B")
G.addEdg("B", "C")
consol.log(G.getNghbrs("B"))
Console.log(G.hasEdg("A", "B");`,
totalMistakes: 47,
hint: "Fix: Clas→class, Grph→Graph, Constructr→constructor, adjacncyList→adjacencyList, addVrtx→addVertex, vrtx→vertex, IF→if, addEdg→addEdge, V1→v1, V2→v2, adjacncyList[V1].Pus→adjacencyList[v1].push, getNghbrs→getNeighbors, Retrun→return, hasEdg→hasEdge, retun→return, adjacncyList[V1].Includes→adjacencyList[v1].includes, missing semicolons, Let→let, G→g, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H59 ──
{
correct: `function promiseExample() {
  return new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}
function delayedMessage(message, ms) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(message);
    }, ms);
  });
}
promiseExample().then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log(error);
});
delayedMessage("Hello after 1 second", 1000).then(function(msg) {
  console.log(msg);
});`,
wrong: `Functon promisExmpl() {
  Retrun New Promis(Functon(resolv, rejct) {
    let Succs = Treu
    IF (Succs) {
      resolv("Operation successful")
    } Else {
      rejct("Operation failed")
    }
  })
}
functon delaydMsg(Msg, Ms) {
  retun New Promis(Functon(resolv) {
    setTimout(Functon() {
      resolv(Msg)
    }, Ms)
  })
}
promisExmpl().Thn(Functon(reslt) {
  consol.log(reslt)
}).Ctch(Functon(Err) {
  Console.log(Err)
})
delaydMsg("Hello after 1 second", 1000).Thn(Functon(Msg) {
  console.Log(Msg)
})`,
totalMistakes: 46,
hint: "Fix: Functon→function, promisExmpl→promiseExample, Retrun→return, New→new, Promis→Promise, resolv→resolve, rejct→reject, Succs→success, Treu→true, IF→if, Else→else, missing semicolons, functon→function, delaydMsg→delayedMessage, Msg→message, Ms→ms, retun→return, setTimout→setTimeout, Thn→then, reslt→result, consol.log, Ctch→catch, Err→error, Console→console, console.Log."
},


// ── H60 ──
{
correct: `class Observable {
  constructor(value) {
    this.value = value;
    this.subscribers = [];
  }
  subscribe(func) {
    this.subscribers.push(func);
    return this;
  }
  setValue(newValue) {
    let oldValue = this.value;
    this.value = newValue;
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](newValue, oldValue);
    }
  }
  getValue() {
    return this.value;
  }
}
let obs = new Observable(10);
obs.subscribe(function(newVal, oldVal) {
  console.log("Changed from", oldVal, "to", newVal);
});
obs.setValue(20);
obs.setValue(30);
console.log(obs.getValue());`,
wrong: `Clas Observbl {
  Constructr(Valu) {
    this.Valu = Valu
    this.Subscrbers = []
  }
  Subscrbe(func) {
    this.Subscrbers.Pus(func)
    Retrun this
  }
  setValu(newValu) {
    let oldValu = this.Valu
    this.Valu = newValu
    For (let i = 0; i < this.Subscrbers.Lenght; i++) {
      this.Subscrbers[i](newValu, oldValu)
    }
  }
  getValu() {
    retun this.Valu
  }
}
Let Obs = New Observbl(10)
Obs.Subscrbe(Functon(newVal, oldVal) {
  consol.log("Changed from" oldVal, "to" newVal)
})
Obs.setValu(20)
Obs.setValu(30)
Console.log(Obs.getValu();`,
totalMistakes: 48,
hint: "Fix: Clas→class, Observbl→Observable, Constructr→constructor, Valu→value, Subscrbers→subscribers, Subscrbe→subscribe, Subscrbers.Pus→subscribers.push, Retrun→return, setValu→setValue, newValu→newValue, oldValu→oldValue, For→for, Subscrbers.Lenght→subscribers.length, getValu→getValue, retun→return, missing semicolons, Let→let, Obs→obs, New→new, Functon→function, consol.log, missing commas in console.log, Console→console, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 45 paragraphs (H61 - H105)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/

// ── H61 ──
{
correct: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let numbers = [3, 7, 1, 9, 4, 6];
let maxVal = findMax(numbers);
let minVal = findMin(numbers);
console.log("Max:", maxVal);
console.log("Min:", minVal);`,
wrong: `Functon findMx(arr) {
  let Mx = arr[0]
  For (let i = 1 i < arr.Lenght; i++) {
    IF (arr[i] > Mx) {
      Mx = arr[i]
    }
  }
  Retrun Mx;
}
functon findMn(arr) {
  let Mn = arr[0]
  For (let i = 1; i < arr.Lenght; i++) {
    IF (arr[i] < Mn) {
      Mn = arr[i]
    }
  }
  retun Mn;
}
Let numbrs = [3, 7, 1, 9, 4, 6]
let maxVl = findMx(numbrs)
let minVl = findMn(numbrs)
consol.log("Max:" maxVl)
Console.log("Min:" minVl;`,
totalMistakes: 47,
hint: "Fix: Functon→function, findMx→findMax, Mx→max, For→for, missing semicolon in for loop, arr.Lenght→arr.length, IF→if, missing semicolons, Retrun→return, functon→function, findMn→findMin, Mn→min, retun→return, Let→let, numbrs→numbers, maxVl→maxVal, minVl→minVal, consol.log, missing commas in console.log, Console→console, missing closing parenthesis."
},


// ── H62 ──
{
correct: `class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log("Deposited:", amount);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance = this.balance - amount;
    console.log("Withdrawn:", amount);
  }
  getBalance() {
    return this.balance;
  }
}
let account = new BankAccount("Ali", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());`,
wrong: `Clas BankAccont {
  Constructr(Ownr, balanc) {
    this.Ownr = Ownr
    this.balanc = balanc
  }
  Deposot(amnt) {
    this.balanc = this.balanc + amnt
    consol.log("Deposited:" amnt)
  }
  Withdrow(amnt) {
    IF (amnt > this.balanc) {
      Retrun "Insufficient funds"
    }
    this.balanc = this.balanc - amnt
    Console.log("Withdrawn:" amnt)
  }
  getBalnce() {
    retun this.balanc;
  }
}
Let accont = New BankAccont("Ali", 1000)
accont.Deposot(500)
accont.Withdrow(200)
console.Log(accont.getBalnce();`,
totalMistakes: 48,
hint: "Fix: Clas→class, BankAccont→BankAccount, Constructr→constructor, Ownr→owner, balanc→balance, missing semicolons, Deposot→deposit, amnt→amount, consol.log, missing comma in console.log, Withdrow→withdraw, IF→if, Retrun→return, Console→console, getBalnce→getBalance, retun→return, Let→let, accont→account, New→new, console.Log, missing closing parenthesis."
},


// ── H63 ──
{
correct: `function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }
  return sum === n;
}
console.log(fibonacci(10));
console.log(fibonacci(7));
console.log(isPerfect(6));
console.log(isPerfect(28));`,
wrong: `Functon fibonaci(n) {
  IF (n <= 0) Retrun 0
  IF (n === 1) retun 1
  let A = 0
  Let B = 1;
  For (let i = 2 i <= n; i++) {
    let Tmp = A + B
    A = B
    B = Tmp
  }
  Retrun B;
}
functon isPerfct(n) {
  let Som = 0
  For (let i = 1; i < n; i++) {
    IF (n % i === 0) {
      Som = Som + i
    }
  }
  retun Som === n;
}
consol.log(fibonaci(10))
Console.log(fibonaci(7))
console.Log(isPerfct(6))
console.log(isPerfct(28;`,
totalMistakes: 46,
hint: "Fix: Functon→function, fibonaci→fibonacci, IF→if, Retrun→return, missing semicolons, retun→return, A→a, Let→let, B→b, For→for, missing semicolon in for loop, Tmp→temp, functon→function, isPerfct→isPerfect, Som→sum, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H64 ──
{
correct: `const scores = [78, 92, 55, 88, 67, 95, 43];
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
let total = 0;
for (let i = 0; i < scores.length; i++) {
  total = total + scores[i];
}
let average = total / scores.length;
console.log("Average:", average);
for (let i = 0; i < scores.length; i++) {
  let grade = getGrade(scores[i]);
  console.log(scores[i], grade);
}`,
wrong: `Const scors = [78, 92, 55, 88, 67, 95, 43]
Functon getGrad(scor) {
  IF (scor >= 90) Retrun "A"
  IF (scor >= 80) retun "B"
  IF (scor >= 70) Retrun "C"
  IF (scor >= 60) retun "D"
  Retrun "F"
}
let totl = 0
For (let i = 0; i < scors.Lenght; i++) {
  totl = totl + scors[i]
}
let averge = totl / scors.Lenght
consol.log("Average:" averge)
For (let i = 0 i < scors.Lenght; i++) {
  let Grad = getGrad(scors[i])
  Console.log(scors[i] Grad)
}`,
totalMistakes: 47,
hint: "Fix: Const→const, scors→scores, Functon→function, getGrad→getGrade, scor→score, IF→if, Retrun→return, missing semicolons, retun→return, totl→total, For→for, scors.Lenght→scores.length, missing semicolons, averge→average, consol.log, missing comma, missing semicolon in second for loop, Grad→grade, Console→console, missing comma in console.log."
},


// ── H65 ──
{
correct: `function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  return reversed.join(" ");
}
function capitalizeFirst(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
let sentence = "hello world from javascript";
let rev = reverseWords(sentence);
console.log(rev);
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  console.log(capitalizeFirst(words[i]));
}`,
wrong: `Functon reverseWrds(sentenc) {
  let Wrds = sentenc.Splt(" ")
  let Revsd = []
  For (let i = Wrds.Lenght - 1; i >= 0; i--) {
    Revsd.Pus(Wrds[i])
  }
  Retrun Revsd.Jon(" ")
}
functon capitlizeFirst(str) {
  IF (str.Lenght === 0) retun str
  Retrun str[0].toUperCase() + str.Slce(1)
}
let sentenc = "hello world from javascript"
let Rev = reverseWrds(sentenc)
consol.log(Rev)
Let Wrds = sentenc.Splt(" ")
For (let i = 0 i < Wrds.Lenght; i++) {
  Console.log(capitlizeFirst(Wrds[i];`,
totalMistakes: 48,
hint: "Fix: Functon→function, reverseWrds→reverseWords, sentenc→sentence, Wrds→words, Splt→split, Revsd→reversed, For→for, Lenght→length, Pus→push, missing semicolons, Retrun→return, Jon→join, functon→function, capitlizeFirst→capitalizeFirst, IF→if, retun→return, toUperCase→toUpperCase, Slce→slice, Rev→rev, consol.log, Let→let, missing semicolon in for loop, Console→console, missing closing parenthesis."
},


// ── H66 ──
{
correct: `class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front());
console.log(q.dequeue());
console.log(q.size());`,
wrong: `Clas Que {
  Constructr() {
    this.Itms = []
  }
  Enqueu(itm) {
    this.Itms.Pus(itm)
  }
  Dequeu() {
    IF (this.Itms.Lenght === 0) {
      Retrun "Queue is empty"
    }
    retun this.Itms.Shft()
  }
  Frnt() {
    IF (this.Itms.Lenght === 0) {
      retun "Queue is empty"
    }
    Retrun this.Itms[0]
  }
  Siz() {
    retun this.Itms.Lenght
  }
}
Let Q = New Que()
Q.Enqueu(10)
Q.Enqueu(20)
Q.Enqueu(30)
consol.log(Q.Frnt())
Console.log(Q.Dequeu())
console.Log(Q.Siz();`,
totalMistakes: 49,
hint: "Fix: Clas→class, Que→Queue, Constructr→constructor, Itms→items, Enqueu→enqueue, itm→item, Pus→push, Dequeu→dequeue, IF→if, Lenght→length, Retrun→return, missing semicolons, retun→return, Shft→shift, Frnt→front, Siz→size, Let→let, Q→q, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H67 ──
{
correct: `function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
let result = mergeArrays(a, b);
console.log(result);`,
wrong: `Functon mergeArys(arr1, arr2) {
  let Mrgd = []
  let I = 0
  Let J = 0
  Whle (I < arr1.Lenght && J < arr2.Lenght) {
    IF (arr1[I] < arr2[J]) {
      Mrgd.Pus(arr1[I])
      I++
    } Else {
      Mrgd.Pus(arr2[J])
      J++
    }
  }
  Whle (I < arr1.Lenght) {
    Mrgd.Pus(arr1[I])
    I++
  }
  Whle (J < arr2.Lenght) {
    Mrgd.Pus(arr2[J])
    J++
  }
  Retrun Mrgd;
}
let A = [1, 3, 5, 7]
Let B = [2, 4, 6, 8]
let reslt = mergeArys(A, B)
consol.log(reslt;`,
totalMistakes: 46,
hint: "Fix: Functon→function, mergeArys→mergeArrays, Mrgd→merged, I→i, Let→let, J→j, Whle→while, arr1.Lenght→arr1.length, arr2.Lenght→arr2.length, IF→if, Mrgd.Pus→merged.push, missing semicolons, Else→else, Retrun→return, A→a, B→b, reslt→result, consol.log, missing closing parenthesis."
},


// ── H68 ──
{
correct: `function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/ /g, "");
  let reversed = clean.split("").reverse().join("");
  return clean === reversed;
}
function countWords(sentence) {
  let words = sentence.split(" ");
  return words.length;
}
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(countWords("the quick brown fox"));
console.log(truncate("JavaScript is amazing", 10));`,
wrong: `Functon isPalindrm(str) {
  let Clen = str.toLowerCse().Replce(/ /g, "")
  let Revsd = Clen.Splt("").Revrs().Jon("")
  Retrun Clen === Revsd
}
functon countWrds(sentenc) {
  Let Wrds = sentenc.Splt(" ")
  retun Wrds.Lenght
}
Functon trucate(str, maxLenght) {
  IF (str.Lenght <= maxLenght) Retrun str
  retun str.Slce(0, maxLenght) + "..."
}
consol.log(isPalindrm("racecar"))
Console.log(isPalindrm("hello"))
console.Log(countWrds("the quick brown fox"))
console.log(trucate("JavaScript is amazing", 10;`,
totalMistakes: 47,
hint: "Fix: Functon→function, isPalindrm→isPalindrome, Clen→clean, toLowerCse→toLowerCase, Replce→replace, Revsd→reversed, Splt→split, Revrs→reverse, Jon→join, Retrun→return, missing semicolons, functon→function, countWrds→countWords, Let→let, Wrds→words, retun→return, Lenght→length, trucate→truncate, maxLenght→maxLength, IF→if, Slce→slice, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H69 ──
{
correct: `class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(value) {
    let node = { value: value, next: null };
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  getSize() {
    return this.size;
  }
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print();
console.log(list.getSize());`,
wrong: `Clas LinkdList {
  Constructr() {
    this.Hed = Null
    this.Siz = 0
  }
  Ad(Valu) {
    let Nod = { Valu: Valu, Nxt: Null }
    IF (this.Hed === Null) {
      this.Hed = Nod
    } Else {
      let Currnt = this.Hed
      Whle (Currnt.Nxt !== Null) {
        Currnt = Currnt.Nxt
      }
      Currnt.Nxt = Nod
    }
    this.Siz++
  }
  getSiz() {
    Retrun this.Siz
  }
  Prnt() {
    let Currnt = this.Hed
    Whle (Currnt !== Null) {
      consol.log(Currnt.Valu)
      Currnt = Currnt.Nxt
    }
  }
}
Let Lst = New LinkdList()
Lst.Ad(10)
Lst.Ad(20)
Lst.Ad(30)
Lst.Prnt()
Console.log(Lst.getSiz();`,
totalMistakes: 50,
hint: "Fix: Clas→class, LinkdList→LinkedList, Constructr→constructor, Hed→head, Null→null, Siz→size, missing semicolons, Ad→add, Valu→value, Nod→node, Nxt→next, IF→if, Else→else, Currnt→current, Whle→while, getSiz→getSize, Retrun→return, Prnt→print, consol.log, Let→let, Lst→list, New→new, Console→console, missing closing parenthesis."
},


// ── H70 ──
{
correct: `function sumDigits(n) {
  let sum = 0;
  let num = Math.abs(n);
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}
function isArmstrong(n) {
  let digits = String(n).split("");
  let power = digits.length;
  let total = 0;
  for (let i = 0; i < digits.length; i++) {
    total = total + Math.pow(Number(digits[i]), power);
  }
  return total === n;
}
console.log(sumDigits(1234));
console.log(sumDigits(-567));
console.log(isArmstrong(153));
console.log(isArmstrong(123));`,
wrong: `Functon sumDgits(n) {
  let Som = 0
  let Nm = Math.Abs(n)
  Whle (Nm > 0) {
    Som = Som + (Nm % 10)
    Nm = Math.Flor(Nm / 10)
  }
  Retrun Som;
}
functon isArmstrng(n) {
  Let Dgits = Strng(n).Splt("")
  Let Powr = Dgits.Lenght
  Let Totl = 0
  For (let i = 0 i < Dgits.Lenght; i++) {
    Totl = Totl + Math.Pow(Numbr(Dgits[i]), Powr)
  }
  retun Totl === n;
}
consol.log(sumDgits(1234))
Console.log(sumDgits(-567))
console.Log(isArmstrng(153))
console.log(isArmstrng(123;`,
totalMistakes: 46,
hint: "Fix: Functon→function, sumDgits→sumDigits, Som→sum, Nm→num, Math.Abs→Math.abs, Whle→while, missing semicolons, Math.Flor→Math.floor, Retrun→return, functon→function, isArmstrng→isArmstrong, Let→let, Dgits→digits, Strng→String, Splt→split, Powr→power, Lenght→length, Totl→total, For→for, missing semicolon in for loop, Math.Pow→Math.pow, Numbr→Number, retun→return, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H71 ──
{
correct: `function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}
function mergeObjects(obj1, obj2) {
  let result = {};
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
let person = { name: "Ali", age: 25 };
let address = { city: "Lahore", country: "Pakistan" };
let merged = mergeObjects(person, address);
let copied = deepCopy(merged);
console.log(merged);
console.log(copied);`,
wrong: `Functon depCopy(obj) {
  IF (typof obj !== "object" || obj === Null) {
    Retrun obj
  }
  let Cpy = {}
  For (let Ky In obj) {
    Cpy[Ky] = depCopy(obj[Ky])
  }
  retun Cpy;
}
functon mergeObjcts(obj1, obj2) {
  Let Rslt = {}
  For (let Ky In obj1) {
    Rslt[Ky] = obj1[Ky]
  }
  For (let Ky In obj2) {
    Rslt[Ky] = obj2[Ky]
  }
  Retrun Rslt;
}
let Prsn = { Name: "Ali", Age: 25 }
let Adrs = { Cty: "Lahore", Cntry: "Pakistan" }
let Mrgd = mergeObjcts(Prsn, Adrs)
let Copd = depCopy(Mrgd)
consol.log(Mrgd)
Console.log(Copd;`,
totalMistakes: 48,
hint: "Fix: Functon→function, depCopy→deepCopy, IF→if, typof→typeof, Null→null, Retrun→return, missing semicolons, Cpy→copy, For→for, Ky→key, In→in (keyword case), retun→return, functon→function, mergeObjcts→mergeObjects, Let→let, Rslt→result, Prsn→person, Name→name, Age→age, Adrs→address, Cty→city, Cntry→country, Mrgd→merged, Copd→copied, consol.log, Console→console, missing closing parenthesis."
},


// ── H72 ──
{
correct: `function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}
function validatePassword(password) {
  if (password.length < 8) {
    return "Too short";
  }
  if (password.length > 20) {
    return "Too long";
  }
  return "Valid";
}
function formatPhone(phone) {
  let digits = phone.replace(/-/g, "");
  return digits.slice(0, 3) + "-" + digits.slice(3, 6) + "-" + digits.slice(6);
}
console.log(validateEmail("test@example.com"));
console.log(validateEmail("invalid"));
console.log(validatePassword("abc123"));
console.log(validatePassword("mySecurePass123"));
console.log(formatPhone("1234567890"));`,
wrong: `Functon validteEmail(emal) {
  IF (emal.Incldes("@") && emal.Incldes(".")) {
    Retrun Treu
  }
  retun Flase
}
functon validtePassword(pasword) {
  IF (pasword.Lenght < 8) {
    Retrun "Too short"
  }
  IF (pasword.Lenght > 20) {
    retun "Too long"
  }
  Retrun "Valid"
}
Functon formatPhne(phne) {
  let Dgits = phne.Replce(/-/g, "")
  Retrun Dgits.Slce(0, 3) + "-" + Dgits.Slce(3, 6) + "-" + Dgits.Slce(6)
}
consol.log(validteEmail("test@example.com"))
Console.log(validteEmail("invalid"))
console.Log(validtePassword("abc123"))
console.log(validtePassword("mySecurePass123"))
console.log(formatPhne("1234567890";`,
totalMistakes: 47,
hint: "Fix: Functon→function, validteEmail→validateEmail, emal→email, IF→if, Incldes→includes, Retrun→return, Treu→true, retun→return, Flase→false, functon→function, validtePassword→validatePassword, pasword→password, Lenght→length, missing semicolons, formatPhne→formatPhone, phne→phone, Dgits→digits, Replce→replace, Slce→slice, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H73 ──
{
correct: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  emit(event, data) {
    if (this.events[event]) {
      for (let i = 0; i < this.events[event].length; i++) {
        this.events[event][i](data);
      }
    }
  }
  off(event) {
    delete this.events[event];
  }
}
let emitter = new EventEmitter();
emitter.on("greet", function(name) {
  console.log("Hello,", name);
});
emitter.emit("greet", "Ali");
emitter.off("greet");
emitter.emit("greet", "Sara");`,
wrong: `Clas EventEmttr {
  Constructr() {
    this.Evnts = {}
  }
  On(evnt, listnr) {
    IF (!this.Evnts[evnt]) {
      this.Evnts[evnt] = []
    }
    this.Evnts[evnt].Pus(listnr)
  }
  Emit(evnt, Dta) {
    IF (this.Evnts[evnt]) {
      For (let i = 0 i < this.Evnts[evnt].Lenght; i++) {
        this.Evnts[evnt][i](Dta)
      }
    }
  }
  Off(evnt) {
    Delet this.Evnts[evnt]
  }
}
Let emttr = New EventEmttr()
emttr.On("greet", Functon(name) {
  consol.log("Hello," name)
})
emttr.Emit("greet", "Ali")
emttr.Off("greet")
emttr.Emit("greet", "Sara";`,
totalMistakes: 49,
hint: "Fix: Clas→class, EventEmttr→EventEmitter, Constructr→constructor, Evnts→events, On→on, evnt→event, listnr→listener, IF→if, missing semicolons, Pus→push, Emit→emit, Dta→data, For→for, missing semicolon in for loop, Lenght→length, Off→off, Delet→delete, Let→let, emttr→emitter, New→new, Functon→function, consol.log, missing comma in console.log, missing closing parenthesis."
},


// ── H74 ──
{
correct: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let sortedArr = [2, 5, 8, 12, 16, 23, 38, 45];
let index1 = binarySearch(sortedArr, 23);
let index2 = binarySearch(sortedArr, 10);
console.log("Found at:", index1);
console.log("Found at:", index2);`,
wrong: `Functon binrySearch(arr, targt) {
  let Lft = 0
  let Rght = arr.Lenght - 1
  Whle (Lft <= Rght) {
    let Mid = Math.Flor((Lft + Rght) / 2)
    IF (arr[Mid] === targt) {
      Retrun Mid
    }
    IF (arr[Mid] < targt) {
      Lft = Mid + 1
    } Else {
      Rght = Mid - 1
    }
  }
  retun -1;
}
let sortdArr = [2, 5, 8, 12, 16, 23, 38, 45]
let Indx1 = binrySearch(sortdArr, 23)
let Indx2 = binrySearch(sortdArr, 10)
consol.log("Found at:" Indx1)
Console.log("Found at:" Indx2;`,
totalMistakes: 45,
hint: "Fix: Functon→function, binrySearch→binarySearch, targt→target, Lft→left, missing semicolons, Rght→right, arr.Lenght→arr.length, Whle→while, Mid→mid, Math.Flor→Math.floor, IF→if, Retrun→return, Else→else, retun→return, sortdArr→sortedArr, Indx1→index1, Indx2→index2, consol.log, missing commas in console.log, Console→console, missing closing parenthesis."
},


// ── H75 ──
{
correct: `function throttle(func, delay) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func();
    }
  };
}
function debounce(func, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      func();
    }, delay);
  };
}
function greet() {
  console.log("Hello!");
}
let throttled = throttle(greet, 1000);
let debounced = debounce(greet, 500);
throttled();
throttled();
debounced();
debounced();
console.log("Done");`,
wrong: `Functon throtle(fnc, dely) {
  let lastCll = 0
  Retrun Functon() {
    let Nw = Date.Nw()
    IF (Nw - lastCll >= dely) {
      lastCll = Nw
      Retrun fnc()
    }
  }
}
functon debounce(fnc, dely) {
  let Tmr = Null
  Retrun functon() {
    clearTimeot(Tmr)
    Tmr = setTimeot(Functon() {
      fnc()
    }, dely)
  }
}
Functon greet() {
  consol.log("Hello!")
}
Let throttld = throtle(greet, 1000)
Let debouncdd = debounce(greet, 500)
throttld()
throttld()
debouncdd()
debouncdd()
Console.log("Done";`,
totalMistakes: 46,
hint: "Fix: Functon→function, throtle→throttle, fnc→func, dely→delay, lastCll→lastCall, missing semicolons, Retrun→return, Nw→now, Date.Nw→Date.now, IF→if, functon→function, Tmr→timer, Null→null, clearTimeot→clearTimeout, setTimeot→setTimeout, Let→let, throttld→throttled, debouncdd→debounced, consol.log, Console→console, missing closing parenthesis."
},


// ── H76 ──
{
correct: `function flattenDeep(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let inner = flattenDeep(arr[i]);
      for (let j = 0; j < inner.length; j++) {
        result.push(inner[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
function chunkArray(arr, size) {
  let chunks = [];
  for (let i = 0; i < arr.length; i = i + size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = flattenDeep(nested);
console.log(flat);
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let chunks = chunkArray(nums, 3);
console.log(chunks);`,
wrong: `Functon flattenDep(arr) {
  let reslt = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (Arry.isArray(arr[i])) {
      let Innr = flattenDep(arr[i])
      For (let j = 0; j < Innr.Lenght; j++) {
        reslt.Pus(Innr[j])
      }
    } Else {
      reslt.Pus(arr[i])
    }
  }
  Retrun reslt;
}
functon chunkArry(arr, Siz) {
  Let chnks = []
  For (let i = 0 i < arr.Lenght; i = i + Siz) {
    chnks.Pus(arr.Slce(i, i + Siz))
  }
  retun chnks;
}
let Nestd = [1, [2, 3], [4, [5, 6]]]
let Flat = flattenDep(Nestd)
consol.log(Flat)
Let Nums = [1, 2, 3, 4, 5, 6, 7, 8]
let Chnks = chunkArry(Nums, 3)
Console.log(Chnks;`,
totalMistakes: 48,
hint: "Fix: Functon→function, flattenDep→flattenDeep, reslt→result, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Arry→Array, Innr→inner, Innr.Lenght→inner.length, reslt.Pus→result.push, Else→else, Retrun→return, functon→function, chunkArry→chunkArray, Siz→size, Let→let, chnks→chunks, Slce→slice, retun→return, Nestd→nested, Flat→flat, consol.log, Nums→nums, Chnks→chunks, Console→console, missing closing parenthesis."
},


// ── H77 ──
{
correct: `class Timer {
  constructor() {
    this.seconds = 0;
    this.isRunning = false;
  }
  start() {
    if (this.isRunning) {
      return "Already running";
    }
    this.isRunning = true;
    console.log("Timer started");
  }
  stop() {
    if (!this.isRunning) {
      return "Already stopped";
    }
    this.isRunning = false;
    console.log("Timer stopped");
  }
  tick() {
    if (this.isRunning) {
      this.seconds++;
      console.log("Seconds:", this.seconds);
    }
  }
  reset() {
    this.seconds = 0;
    this.isRunning = false;
    console.log("Timer reset");
  }
}
let timer = new Timer();
timer.start();
timer.tick();
timer.tick();
timer.stop();
timer.reset();`,
wrong: `Clas Timr {
  Constructr() {
    this.Secs = 0
    this.isRunng = Flase
  }
  Strt() {
    IF (this.isRunng) {
      Retrun "Already running"
    }
    this.isRunng = Treu
    consol.log("Timer started")
  }
  Stp() {
    IF (!this.isRunng) {
      retun "Already stopped"
    }
    this.isRunng = Flase
    Console.log("Timer stopped")
  }
  Tck() {
    IF (this.isRunng) {
      this.Secs++
      console.Log("Seconds:" this.Secs)
    }
  }
  Rst() {
    this.Secs = 0
    this.isRunng = Flase
    console.log("Timer reset")
  }
}
Let timr = New Timr()
timr.Strt()
timr.Tck()
timr.Tck()
timr.Stp()
timr.Rst(;`,
totalMistakes: 49,
hint: "Fix: Clas→class, Timr→Timer, Constructr→constructor, Secs→seconds, Flase→false, missing semicolons, isRunng→isRunning, Strt→start, IF→if, Retrun→return, Treu→true, consol.log, Stp→stop, retun→return, Console→console, Tck→tick, console.Log, missing comma, Rst→reset, Let→let, timr→timer, New→new, missing closing parenthesis."
},


// ── H78 ──
{
correct: `function memoize(func) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = func(n);
    return cache[n];
  };
}
function slowSquare(n) {
  return n * n;
}
function slowCube(n) {
  return n * n * n;
}
let fastSquare = memoize(slowSquare);
let fastCube = memoize(slowCube);
console.log(fastSquare(5));
console.log(fastSquare(5));
console.log(fastCube(3));
console.log(fastCube(3));`,
wrong: `Functon memize(fnc) {
  let Cche = {}
  Retrun Functon(n) {
    IF (Cche[n] !== Undefind) {
      Retrun Cche[n]
    }
    Cche[n] = fnc(n)
    retun Cche[n]
  }
}
functon slowSqre(n) {
  Retrun n * n
}
Functon slowCbe(n) {
  retun n * n * n
}
Let fastSqre = memize(slowSqre)
let fastCbe = memize(slowCbe)
consol.log(fastSqre(5))
Console.log(fastSqre(5))
console.Log(fastCbe(3))
console.log(fastCbe(3;`,
totalMistakes: 46,
hint: "Fix: Functon→function, memize→memoize, fnc→func, Cche→cache, missing semicolons, Retrun→return, IF→if, Undefind→undefined, retun→return, functon→function, slowSqre→slowSquare, slowCbe→slowCube, Let→let, fastSqre→fastSquare, fastCbe→fastCube, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H79 ──
{
correct: `function groupBy(arr, key) {
  let groups = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i][key];
    if (!groups[val]) {
      groups[val] = [];
    }
    groups[val].push(arr[i]);
  }
  return groups;
}
function countBy(arr, key) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i][key];
    if (!counts[val]) {
      counts[val] = 0;
    }
    counts[val]++;
  }
  return counts;
}
let people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Zain", city: "Lahore" }
];
console.log(groupBy(people, "city"));
console.log(countBy(people, "city"));`,
wrong: `Functon grupBy(arr, Ky) {
  let grups = {}
  For (let i = 0 i < arr.Lenght; i++) {
    let Vl = arr[i][Ky]
    IF (!grups[Vl]) {
      grups[Vl] = []
    }
    grups[Vl].Pus(arr[i])
  }
  Retrun grups;
}
functon countBy(arr, Ky) {
  Let Cnts = {}
  For (let i = 0 i < arr.Lenght; i++) {
    let Vl = arr[i][Ky]
    IF (!Cnts[Vl]) {
      Cnts[Vl] = 0
    }
    Cnts[Vl]++
  }
  retun Cnts;
}
let Peple = [
  { Name: "Ali", Cty: "Lahore" }
  { Name: "Sara", Cty: "Karachi" }
  { Name: "Zain", Cty: "Lahore" }
]
consol.log(grupBy(Peple, "city"))
Console.log(countBy(Peple, "city";`,
totalMistakes: 47,
hint: "Fix: Functon→function, grupBy→groupBy, Ky→key, grups→groups, For→for, missing semicolons in for loops, arr.Lenght→arr.length, Vl→val, IF→if, Pus→push, Retrun→return, functon→function, Let→let, Cnts→counts, retun→return, Peple→people, Name→name, Cty→city, missing commas after array objects, consol.log, Console→console, missing closing parenthesis."
},


// ── H80 ──
{
correct: `class Stack {
  constructor() {
    this.items = [];
    this.max = 0;
  }
  push(item) {
    this.items.push(item);
    if (item > this.max) {
      this.max = item;
    }
  }
  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }
  getMax() {
    return this.max;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(3);
console.log(stack.getMax());
console.log(stack.size());
stack.pop();
console.log(stack.isEmpty());`,
wrong: `Clas Stck {
  Constructr() {
    this.Itms = []
    this.Mx = 0
  }
  Pus(itm) {
    this.Itms.Pus(itm)
    IF (itm > this.Mx) {
      this.Mx = itm
    }
  }
  Pop() {
    IF (this.Itms.Lenght === 0) {
      Retrun Null
    }
    retun this.Itms.Pop()
  }
  getMx() {
    Retrun this.Mx
  }
  isEmty() {
    retun this.Itms.Lenght === 0
  }
  Siz() {
    Retrun this.Itms.Lenght
  }
}
Let stck = New Stck()
stck.Pus(5)
stck.Pus(10)
stck.Pus(3)
consol.log(stck.getMx())
Console.log(stck.Siz())
stck.Pop()
console.Log(stck.isEmty();`,
totalMistakes: 48,
hint: "Fix: Clas→class, Stck→Stack, Constructr→constructor, Itms→items, Mx→max, Pus→push, itm→item, IF→if, missing semicolons, Pop→pop, Lenght→length, Retrun→return, Null→null, retun→return, getMx→getMax, isEmty→isEmpty, Siz→size, Let→let, stck→stack, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H81 ──
{
correct: `function parseCSV(csv) {
  let lines = csv.split("\\n");
  let headers = lines[0].split(",");
  let result = [];
  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(",");
    let obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    result.push(obj);
  }
  return result;
}
let csv = "name,age,city\\nAli,25,Lahore\\nSara,30,Karachi";
let parsed = parseCSV(csv);
console.log(parsed);
console.log(parsed.length);
console.log(parsed[0]);`,
wrong: `Functon parsCSV(csv) {
  let Lnes = csv.Splt("\\n")
  let Hdrs = Lnes[0].Splt(",")
  let reslt = []
  For (let i = 1 i < Lnes.Lenght; i++) {
    let Vlus = Lnes[i].Splt(",")
    let Obj = {}
    For (let j = 0 j < Hdrs.Lenght; j++) {
      Obj[Hdrs[j]] = Vlus[j]
    }
    reslt.Pus(Obj)
  }
  Retrun reslt;
}
let Csv = "name,age,city\\nAli,25,Lahore\\nSara,30,Karachi"
let Parsd = parsCSV(Csv)
consol.log(Parsd)
Console.log(Parsd.Lenght)
console.Log(Parsd[0];`,
totalMistakes: 46,
hint: "Fix: Functon→function, parsCSV→parseCSV, Lnes→lines, Splt→split, Hdrs→headers, reslt→result, For→for, missing semicolons in for loops, Lnes.Lenght→lines.length, Vlus→values, Obj→obj, Hdrs.Lenght→headers.length, reslt.Pus→result.push, Retrun→return, Csv→csv, Parsd→parsed, consol.log, Console→console, Parsd.Lenght→parsed.length, console.Log, missing closing parenthesis."
},


// ── H82 ──
{
correct: `function curry(func) {
  return function curried(a) {
    return function(b) {
      return function(c) {
        return func(a, b, c);
      };
    };
  };
}
function add(a, b, c) {
  return a + b + c;
}
function multiply(a, b, c) {
  return a * b * c;
}
let curriedAdd = curry(add);
let curriedMultiply = curry(multiply);
let result1 = curriedAdd(1)(2)(3);
let result2 = curriedMultiply(2)(3)(4);
console.log("Add:", result1);
console.log("Multiply:", result2);
let addFive = curriedAdd(5);
let addFiveAndThree = addFive(3);
console.log(addFiveAndThree(2));`,
wrong: `Functon curey(fnc) {
  Retrun Functon curied(a) {
    retun Functon(b) {
      Retrun functon(c) {
        retun fnc(a, b, c)
      }
    }
  }
}
functon Ad(a, b, c) {
  Retrun a + b + c
}
Functon Multipy(a, b, c) {
  retun a * b * c
}
Let curiedAd = curey(Ad)
Let curiedMultipy = curey(Multipy)
let reslt1 = curiedAd(1)(2)(3)
Let reslt2 = curiedMultipy(2)(3)(4)
consol.log("Add:" reslt1)
Console.log("Multiply:" reslt2)
let adFive = curiedAd(5)
let adFiveAndThre = adFive(3)
console.Log(adFiveAndThre(2);`,
totalMistakes: 47,
hint: "Fix: Functon→function, curey→curry, fnc→func, Retrun→return, curied→curried, retun→return, functon→function, Ad→add, Multipy→multiply, Let→let, curiedAd→curriedAdd, curiedMultipy→curriedMultiply, missing semicolons, reslt1→result1, reslt2→result2, consol.log, missing commas in console.log, Console→console, adFive→addFive, adFiveAndThre→addFiveAndThree, console.Log, missing closing parenthesis."
},


// ── H83 ──
{
correct: `class Graph {
  constructor() {
    this.adjacency = {};
  }
  addVertex(vertex) {
    if (!this.adjacency[vertex]) {
      this.adjacency[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacency[v1].push(v2);
    this.adjacency[v2].push(v1);
  }
  getNeighbors(vertex) {
    return this.adjacency[vertex];
  }
  hasVertex(vertex) {
    return this.adjacency[vertex] !== undefined;
  }
}
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.getNeighbors("B"));
console.log(graph.hasVertex("A"));`,
wrong: `Clas Grph {
  Constructr() {
    this.Adjcncy = {}
  }
  addVrtx(vrtx) {
    IF (!this.Adjcncy[vrtx]) {
      this.Adjcncy[vrtx] = []
    }
  }
  addEdg(V1, V2) {
    this.Adjcncy[V1].Pus(V2)
    this.Adjcncy[V2].Pus(V1)
  }
  getNighbors(vrtx) {
    Retrun this.Adjcncy[vrtx]
  }
  hasVrtx(vrtx) {
    retun this.Adjcncy[vrtx] !== Undefind
  }
}
Let grph = New Grph()
grph.addVrtx("A")
grph.addVrtx("B")
grph.addVrtx("C")
grph.addEdg("A", "B")
grph.addEdg("B", "C")
consol.log(grph.getNighbors("B"))
Console.log(grph.hasVrtx("A";`,
totalMistakes: 46,
hint: "Fix: Clas→class, Grph→Graph, Constructr→constructor, Adjcncy→adjacency, addVrtx→addVertex, vrtx→vertex, IF→if, missing semicolons, addEdg→addEdge, V1→v1, V2→v2, Pus→push, getNighbors→getNeighbors, Retrun→return, hasVrtx→hasVertex, retun→return, Undefind→undefined, Let→let, grph→graph, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H84 ──
{
correct: `function pipe(...fns) {
  return function(value) {
    let result = value;
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}
function double(n) {
  return n * 2;
}
function addTen(n) {
  return n + 10;
}
function square(n) {
  return n * n;
}
let transform = pipe(double, addTen, square);
let output1 = transform(3);
let output2 = transform(5);
console.log("Output 1:", output1);
console.log("Output 2:", output2);`,
wrong: `Functon pipe(...fns) {
  Retrun Functon(Valu) {
    let reslt = Valu
    For (let i = 0 i < fns.Lenght; i++) {
      reslt = fns[i](reslt)
    }
    retun reslt
  }
}
functon dubble(n) {
  Retrun n * 2
}
Functon addTn(n) {
  retun n + 10
}
functon squre(n) {
  Retrun n * n
}
Let transfom = pipe(dubble, addTn, squre)
let outpt1 = transfom(3)
Let outpt2 = transfom(5)
consol.log("Output 1:" outpt1)
Console.log("Output 2:" outpt2;`,
totalMistakes: 45,
hint: "Fix: Functon→function, Retrun→return, Valu→value, reslt→result, For→for, missing semicolon in for loop, fns.Lenght→fns.length, missing semicolons, retun→return, functon→function, dubble→double, addTn→addTen, squre→square, Let→let, transfom→transform, outpt1→output1, outpt2→output2, consol.log, missing commas in console.log, Console→console, missing closing parenthesis."
},


// ── H85 ──
{
correct: `class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(item, priority) {
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, { item, priority });
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push({ item, priority });
    }
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
}
let pq = new PriorityQueue();
pq.enqueue("low task", 3);
pq.enqueue("high task", 1);
pq.enqueue("mid task", 2);
console.log(pq.dequeue());
console.log(pq.size());`,
wrong: `Clas PriortyQue {
  Constructr() {
    this.Itms = []
  }
  Enqueu(itm, priorit) {
    let Addd = Flase
    For (let i = 0 i < this.Itms.Lenght; i++) {
      IF (priorit < this.Itms[i].priorit) {
        this.Itms.Splce(i, 0, { itm, priorit })
        Addd = Treu
        Brk
      }
    }
    IF (!Addd) {
      this.Itms.Pus({ itm, priorit })
    }
  }
  Dequeu() {
    retun this.Itms.Shft()
  }
  Siz() {
    Retrun this.Itms.Lenght
  }
}
Let pq = New PriortyQue()
pq.Enqueu("low task", 3)
pq.Enqueu("high task", 1)
pq.Enqueu("mid task", 2)
consol.log(pq.Dequeu())
Console.log(pq.Siz();`,
totalMistakes: 48,
hint: "Fix: Clas→class, PriortyQue→PriorityQueue, Constructr→constructor, Itms→items, Enqueu→enqueue, itm→item, priorit→priority, Addd→added, Flase→false, For→for, missing semicolon in for loop, Lenght→length, IF→if, Splce→splice, Treu→true, Brk→break, missing semicolons, Pus→push, Dequeu→dequeue, retun→return, Shft→shift, Siz→size, Retrun→return, Let→let, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H86 ──
{
correct: `function toCamelCase(str) {
  let words = str.split("-");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    result = result + words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}
function toSnakeCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      result = result + "_" + str[i].toLowerCase();
    } else {
      result = result + str[i];
    }
  }
  return result;
}
console.log(toCamelCase("hello-world-from-js"));
console.log(toSnakeCase("helloWorldFromJs"));`,
wrong: `Functon toCamlCase(str) {
  let Wrds = str.Splt("-")
  let reslt = Wrds[0]
  For (let i = 1 i < Wrds.Lenght; i++) {
    reslt = reslt + Wrds[i][0].toUperCase() + Wrds[i].Slce(1)
  }
  Retrun reslt;
}
functon toSnakCase(str) {
  let reslt = ""
  For (let i = 0 i < str.Lenght; i++) {
    IF (str[i] === str[i].toUperCase() && str[i] !== str[i].toLowerCse()) {
      reslt = reslt + "_" + str[i].toLowerCse()
    } Else {
      reslt = reslt + str[i]
    }
  }
  retun reslt;
}
consol.log(toCamlCase("hello-world-from-js"))
Console.log(toSnakCase("helloWorldFromJs";`,
totalMistakes: 46,
hint: "Fix: Functon→function, toCamlCase→toCamelCase, Wrds→words, Splt→split, reslt→result, For→for, missing semicolons in for loops, Wrds.Lenght→words.length, toUperCase→toUpperCase, Slce→slice, Retrun→return, functon→function, toSnakCase→toSnakeCase, str.Lenght→str.length, IF→if, toLowerCse→toLowerCase, Else→else, retun→return, consol.log, Console→console, missing closing parenthesis."
},


// ── H87 ──
{
correct: `class Calculator {
  constructor() {
    this.history = [];
    this.result = 0;
  }
  add(n) {
    this.result = this.result + n;
    this.history.push("+" + n);
    return this;
  }
  subtract(n) {
    this.result = this.result - n;
    this.history.push("-" + n);
    return this;
  }
  multiply(n) {
    this.result = this.result * n;
    this.history.push("*" + n);
    return this;
  }
  getValue() {
    return this.result;
  }
  getHistory() {
    return this.history;
  }
}
let calc = new Calculator();
calc.add(10).add(5).subtract(3).multiply(2);
console.log(calc.getValue());
console.log(calc.getHistory());`,
wrong: `Clas Calcultr {
  Constructr() {
    this.Histy = []
    this.Rslt = 0
  }
  Ad(n) {
    this.Rslt = this.Rslt + n
    this.Histy.Pus("+" + n)
    Retrun this
  }
  subtrct(n) {
    this.Rslt = this.Rslt - n
    this.Histy.Pus("-" + n)
    retun this
  }
  Multipy(n) {
    this.Rslt = this.Rslt * n
    this.Histy.Pus("*" + n)
    Retrun this
  }
  getValu() {
    retun this.Rslt
  }
  getHisty() {
    Retrun this.Histy
  }
}
Let calc = New Calcultr()
calc.Ad(10).Ad(5).subtrct(3).Multipy(2)
consol.log(calc.getValu())
Console.log(calc.getHisty();`,
totalMistakes: 47,
hint: "Fix: Clas→class, Calcultr→Calculator, Constructr→constructor, Histy→history, Rslt→result, missing semicolons, Ad→add, Pus→push, Retrun→return, subtrct→subtract, retun→return, Multipy→multiply, getValu→getValue, getHisty→getHistory, Let→let, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H88 ──
{
correct: `function zipArrays(arr1, arr2) {
  let result = [];
  let length = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}
function unzipArrays(arr) {
  let first = [];
  let second = [];
  for (let i = 0; i < arr.length; i++) {
    first.push(arr[i][0]);
    second.push(arr[i][1]);
  }
  return [first, second];
}
let keys = ["name", "age", "city"];
let values = ["Ali", 25, "Lahore"];
let zipped = zipArrays(keys, values);
console.log(zipped);
let unzipped = unzipArrays(zipped);
console.log(unzipped);`,
wrong: `Functon zipArys(arr1, arr2) {
  let reslt = []
  let Lenght = Math.Min(arr1.Lenght, arr2.Lenght)
  For (let i = 0 i < Lenght; i++) {
    reslt.Pus([arr1[i], arr2[i]])
  }
  Retrun reslt;
}
functon unzipArys(arr) {
  Let Frst = []
  Let Scnd = []
  For (let i = 0 i < arr.Lenght; i++) {
    Frst.Pus(arr[i][0])
    Scnd.Pus(arr[i][1])
  }
  retun [Frst, Scnd];
}
let Kys = ["name", "age", "city"]
let Vlus = ["Ali", 25, "Lahore"]
let Zipd = zipArys(Kys, Vlus)
consol.log(Zipd)
let Unzipd = unzipArys(Zipd)
Console.log(Unzipd;`,
totalMistakes: 46,
hint: "Fix: Functon→function, zipArys→zipArrays, reslt→result, Lenght→length, Math.Min→Math.min, arr1.Lenght→arr1.length, arr2.Lenght→arr2.length, For→for, missing semicolons in for loops, reslt.Pus→result.push, Retrun→return, functon→function, unzipArys→unzipArrays, Let→let, Frst→first, Scnd→second, arr.Lenght→arr.length, Pus→push, retun→return, Kys→keys, Vlus→values, Zipd→zipped, consol.log, Unzipd→unzipped, Console→console, missing closing parenthesis."
},


// ── H89 ──
{
correct: `function makeCounter(start, step) {
  let count = start;
  return {
    increment: function() {
      count = count + step;
      return count;
    },
    decrement: function() {
      count = count - step;
      return count;
    },
    reset: function() {
      count = start;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}
let counter1 = makeCounter(0, 1);
let counter2 = makeCounter(10, 5);
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter1.reset());`,
wrong: `Functon makeCunter(strt, stp) {
  let coutn = strt
  Retrun {
    incremnt: Functon() {
      coutn = coutn + stp
      retun coutn
    }
    decremnt: Functon() {
      coutn = coutn - stp
      Retrun coutn
    }
    Rst: functon() {
      coutn = strt
      retun coutn
    }
    getValu: functon() {
      Retrun coutn
    }
  }
}
Let cunter1 = makeCunter(0, 1)
let cunter2 = makeCunter(10, 5)
consol.log(cunter1.incremnt())
Console.log(cunter1.incremnt())
console.Log(cunter2.incremnt())
console.log(cunter2.decremnt())
console.log(cunter1.Rst();`,
totalMistakes: 47,
hint: "Fix: Functon→function, makeCunter→makeCounter, strt→start, stp→step, coutn→count, Retrun→return, incremnt→increment, retun→return, missing commas after function blocks, decremnt→decrement, Rst→reset, functon→function, getValu→getValue, Let→let, cunter1→counter1, cunter2→counter2, missing semicolons, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H90 ──
{
correct: `function parseQueryString(url) {
  let result = {};
  let queryStart = url.indexOf("?");
  if (queryStart === -1) {
    return result;
  }
  let query = url.slice(queryStart + 1);
  let pairs = query.split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    let key = pair[0];
    let value = pair[1];
    result[key] = value;
  }
  return result;
}
let url1 = "https://example.com?name=Ali&age=25&city=Lahore";
let url2 = "https://example.com/about";
let params1 = parseQueryString(url1);
let params2 = parseQueryString(url2);
console.log(params1);
console.log(params2);
console.log(params1["name"]);`,
wrong: `Functon parseQryStr(url) {
  let reslt = {}
  let qryStrt = url.indexof("?")
  IF (qryStrt === -1) {
    Retrun reslt
  }
  let Qry = url.Slce(qryStrt + 1)
  let Prs = Qry.Splt("&")
  For (let i = 0 i < Prs.Lenght; i++) {
    let Pr = Prs[i].Splt("=")
    let Ky = Pr[0]
    let Vlu = Pr[1]
    reslt[Ky] = Vlu
  }
  retun reslt;
}
Let url1 = "https://example.com?name=Ali&age=25&city=Lahore"
Let url2 = "https://example.com/about"
let Params1 = parseQryStr(url1)
let Params2 = parseQryStr(url2)
consol.log(Params1)
Console.log(Params2)
console.Log(Params1["name"];`,
totalMistakes: 46,
hint: "Fix: Functon→function, parseQryStr→parseQueryString, reslt→result, qryStrt→queryStart, url.indexof→url.indexOf, IF→if, Retrun→return, missing semicolons, Qry→query, url.Slce→url.slice, Prs→pairs, Qry.Splt→query.split, For→for, missing semicolon in for loop, Prs.Lenght→pairs.length, Pr→pair, Ky→key, Vlu→value, retun→return, Let→let, Params1→params1, Params2→params2, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H91 ──
{
correct: `function treeNode(value) {
  return {
    value: value,
    left: null,
    right: null
  };
}
function insert(node, value) {
  if (node === null) {
    return treeNode(value);
  }
  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }
  return node;
}
function inorder(node) {
  if (node === null) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}
let root = null;
root = insert(root, 10);
root = insert(root, 5);
root = insert(root, 15);
root = insert(root, 3);
inorder(root);`,
wrong: `Functon treeNod(Valu) {
  Retrun {
    Valu: Valu,
    Lft: Null,
    Rght: Null
  }
}
functon insrt(nod, Valu) {
  IF (nod === Null) {
    Retrun treeNod(Valu)
  }
  IF (Valu < nod.Valu) {
    nod.Lft = insrt(nod.Lft, Valu)
  } Else {
    nod.Rght = insrt(nod.Rght, Valu)
  }
  retun nod;
}
Functon inordr(nod) {
  IF (nod === Null) retun
  inordr(nod.Lft)
  consol.log(nod.Valu)
  inordr(nod.Rght)
}
Let Rot = Null
Rot = insrt(Rot, 10)
Rot = insrt(Rot, 5)
Rot = insrt(Rot, 15)
Rot = insrt(Rot, 3)
inordr(Rot;`,
totalMistakes: 48,
hint: "Fix: Functon→function, treeNod→treeNode, Valu→value, Retrun→return, Lft→left, Null→null, Rght→right, missing semicolons, functon→function, insrt→insert, nod→node, IF→if, Else→else, retun→return, inordr→inorder, Let→let, Rot→root, consol.log, missing closing parenthesis."
},


// ── H92 ──
{
correct: `class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  area() {
    return 0.5 * this.base * this.height;
  }
}
let c = new Circle("red", 7);
let t = new Triangle("blue", 6, 4);
console.log(c.area());
console.log(t.area());
console.log(c.getColor());`,
wrong: `Clas Shpe {
  Constructr(colr) {
    this.colr = colr
  }
  getColr() {
    Retrun this.colr
  }
  Ara() {
    retun 0
  }
}
Clas Circl Extends Shpe {
  Constructr(colr, radus) {
    Supr(colr)
    this.radus = radus
  }
  Ara() {
    Retrun Math.Pi * this.radus * this.radus
  }
}
class Triangl Extends Shpe {
  constructr(colr, Bas, Hght) {
    Supr(colr)
    this.Bas = Bas
    this.Hght = Hght
  }
  Ara() {
    retun 0.5 * this.Bas * this.Hght
  }
}
Let C = New Circl("red", 7)
let T = New Triangl("blue", 6, 4)
consol.log(C.Ara())
Console.log(T.Ara())
console.Log(C.getColr();`,
totalMistakes: 49,
hint: "Fix: Clas→class, Shpe→Shape, Constructr→constructor, colr→color, missing semicolons, Retrun→return, Ara→area, retun→return, Circl→Circle, Extends→extends, radus→radius, Supr→super, Math.Pi→Math.PI, Triangl→Triangle, constructr→constructor, Bas→base, Hght→height, Let→let, C→c, New→new, T→t, consol.log, Console→console, console.Log, getColr→getColor, missing closing parenthesis."
},


// ── H93 ──
{
correct: `function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
function anagramGroups(words) {
  let groups = {};
  for (let i = 0; i < words.length; i++) {
    let key = words[i].split("").sort().join("");
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(words[i]);
  }
  return groups;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
let wordList = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagramGroups(wordList));`,
wrong: `Functon longstCommonPrefx(strs) {
  IF (strs.Lenght === 0) retun ""
  let Prefx = strs[0]
  For (let i = 1 i < strs.Lenght; i++) {
    Whle (strs[i].indexof(Prefx) !== 0) {
      Prefx = Prefx.Slce(0, Prefx.Lenght - 1)
      IF (Prefx === "") retun ""
    }
  }
  Retrun Prefx;
}
functon anagramGrps(Wrds) {
  let Grps = {}
  For (let i = 0 i < Wrds.Lenght; i++) {
    let Ky = Wrds[i].Splt("").Srt().Jon("")
    IF (!Grps[Ky]) {
      Grps[Ky] = []
    }
    Grps[Ky].Pus(Wrds[i])
  }
  retun Grps;
}
consol.log(longstCommonPrefx(["flower", "flow", "flight"]))
Let wrdList = ["eat", "tea", "tan", "ate", "nat", "bat"]
Console.log(anagramGrps(wrdList);`,
totalMistakes: 47,
hint: "Fix: Functon→function, longstCommonPrefx→longestCommonPrefix, IF→if, strs.Lenght→strs.length, retun→return, Prefx→prefix, For→for, missing semicolons in for loops, Whle→while, strs[i].indexof→strs[i].indexOf, Slce→slice, Retrun→return, functon→function, anagramGrps→anagramGroups, Wrds→words, Grps→groups, Ky→key, Splt→split, Srt→sort, Jon→join, Pus→push, consol.log, Let→let, wrdList→wordList, Console→console, missing closing parenthesis."
},


// ── H94 ──
{
correct: `function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    let results = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(function(value) {
        results[i] = value;
        count++;
        if (count === promises.length) {
          resolve(results);
        }
      }).catch(function(error) {
        reject(error);
      });
    }
  });
}
function delay(ms, value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(value);
    }, ms);
  });
}
let p1 = delay(100, "first");
let p2 = delay(200, "second");
let p3 = delay(50, "third");
promiseAll([p1, p2, p3]).then(function(results) {
  console.log(results);
});`,
wrong: `Functon promseAll(promses) {
  Retrun New Promse(Functon(resolv, rejct) {
    let resalts = []
    let coutn = 0
    For (let i = 0 i < promses.Lenght; i++) {
      promses[i].Then(Functon(Valu) {
        resalts[i] = Valu
        coutn++
        IF (coutn === promses.Lenght) {
          resolv(resalts)
        }
      }).Catch(Functon(Eror) {
        rejct(Eror)
      })
    }
  })
}
functon Dely(Ms, Valu) {
  Retrun New Promse(Functon(resolv) {
    setTimeot(Functon() {
      resolv(Valu)
    }, Ms)
  })
}
let P1 = Dely(100, "first")
let P2 = Dely(200, "second")
let P3 = Dely(50, "third")
promseAll([P1, P2, P3]).Then(Functon(resalts) {
  consol.log(resalts)
};`,
totalMistakes: 48,
hint: "Fix: Functon→function, promseAll→promiseAll, promses→promises, Retrun→return, New→new, Promse→Promise, resolv→resolve, rejct→reject, resalts→results, coutn→count, For→for, missing semicolons, Lenght→length, Then→then, Valu→value, IF→if, Catch→catch, Eror→error, functon→function, Dely→delay, Ms→ms, setTimeot→setTimeout, P1→p1, P2→p2, P3→p3, consol.log, missing closing brace."
},


// ── H95 ──
{
correct: `class ObservableArray {
  constructor() {
    this.items = [];
    this.listeners = [];
  }
  onChange(listener) {
    this.listeners.push(listener);
  }
  notify(action, item) {
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i](action, item);
    }
  }
  push(item) {
    this.items.push(item);
    this.notify("add", item);
  }
  remove(index) {
    let removed = this.items.splice(index, 1)[0];
    this.notify("remove", removed);
    return removed;
  }
  size() {
    return this.items.length;
  }
}
let arr = new ObservableArray();
arr.onChange(function(action, item) {
  console.log(action, item);
});
arr.push(10);
arr.push(20);
arr.remove(0);
console.log(arr.size());`,
wrong: `Clas ObservbleArry {
  Constructr() {
    this.Itms = []
    this.Listnrs = []
  }
  onChng(listnr) {
    this.Listnrs.Pus(listnr)
  }
  Notfy(Actn, Itm) {
    For (let i = 0 i < this.Listnrs.Lenght; i++) {
      this.Listnrs[i](Actn, Itm)
    }
  }
  Pus(Itm) {
    this.Itms.Pus(Itm)
    this.Notfy("add", Itm)
  }
  Remov(Indx) {
    let Rmvd = this.Itms.Splce(Indx, 1)[0]
    this.Notfy("remove", Rmvd)
    retun Rmvd
  }
  Siz() {
    Retrun this.Itms.Lenght
  }
}
Let Arr = New ObservbleArry()
Arr.onChng(Functon(Actn, Itm) {
  consol.log(Actn, Itm)
})
Arr.Pus(10)
Arr.Pus(20)
Arr.Remov(0)
Console.log(Arr.Siz();`,
totalMistakes: 49,
hint: "Fix: Clas→class, ObservbleArry→ObservableArray, Constructr→constructor, Itms→items, Listnrs→listeners, onChng→onChange, listnr→listener, Pus→push, Notfy→notify, Actn→action, Itm→item, For→for, missing semicolons in for loop, Lenght→length, Remov→remove, Indx→index, Rmvd→removed, Splce→splice, retun→return, Siz→size, Retrun→return, Let→let, Arr→arr, New→new, Functon→function, consol.log, Console→console, missing closing parenthesis."
},


// ── H96 ──
{
correct: `function compose(...fns) {
  return function(value) {
    let result = value;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}
function trim(str) {
  return str.trim();
}
function toLower(str) {
  return str.toLowerCase();
}
function removeSpaces(str) {
  return str.replace(/ /g, "_");
}
function addPrefix(str) {
  return "user_" + str;
}
let formatUsername = compose(addPrefix, removeSpaces, toLower, trim);
console.log(formatUsername("  Ali Khan  "));
console.log(formatUsername("  Sara Ahmed  "));`,
wrong: `Functon composse(...fns) {
  Retrun Functon(Valu) {
    let reslt = Valu
    For (let i = fns.Lenght - 1; i >= 0; i--) {
      reslt = fns[i](reslt)
    }
    retun reslt
  }
}
functon Trim(str) {
  Retrun str.Trm()
}
Functon toLwr(str) {
  retun str.toLowerCse()
}
functon remveSpces(str) {
  Retrun str.Replce(/ /g, "_")
}
Functon addPrefx(str) {
  retun "user_" + str
}
Let formatUsrnme = composse(addPrefx, remveSpces, toLwr, Trim)
consol.log(formatUsrnme("  Ali Khan  "))
Console.log(formatUsrnme("  Sara Ahmed  ";`,
totalMistakes: 46,
hint: "Fix: Functon→function, composse→compose, Retrun→return, Valu→value, reslt→result, For→for, fns.Lenght→fns.length, missing semicolons, retun→return, functon→function, Trim→trim, str.Trm→str.trim, toLwr→toLower, toLowerCse→toLowerCase, remveSpces→removeSpaces, str.Replce→str.replace, addPrefx→addPrefix, Let→let, formatUsrnme→formatUsername, consol.log, Console→console, missing closing parenthesis."
},


// ── H97 ──
{
correct: `class EventCalendar {
  constructor() {
    this.events = {};
  }
  addEvent(date, event) {
    if (!this.events[date]) {
      this.events[date] = [];
    }
    this.events[date].push(event);
  }
  getEvents(date) {
    return this.events[date] || [];
  }
  removeEvent(date, event) {
    if (!this.events[date]) return;
    let index = this.events[date].indexOf(event);
    if (index !== -1) {
      this.events[date].splice(index, 1);
    }
  }
  getAllDates() {
    return Object.keys(this.events);
  }
}
let cal = new EventCalendar();
cal.addEvent("2025-01-01", "New Year Party");
cal.addEvent("2025-01-01", "Family Lunch");
cal.addEvent("2025-12-25", "Christmas");
console.log(cal.getEvents("2025-01-01"));
console.log(cal.getAllDates());`,
wrong: `Clas EventCalendr {
  Constructr() {
    this.Evnts = {}
  }
  addEvnt(Dat, evnt) {
    IF (!this.Evnts[Dat]) {
      this.Evnts[Dat] = []
    }
    this.Evnts[Dat].Pus(evnt)
  }
  getEvnts(Dat) {
    Retrun this.Evnts[Dat] || []
  }
  removeEvnt(Dat, evnt) {
    IF (!this.Evnts[Dat]) retun
    let Indx = this.Evnts[Dat].indexof(evnt)
    IF (Indx !== -1) {
      this.Evnts[Dat].Splce(Indx, 1)
    }
  }
  getAllDtes() {
    Retrun Objct.keys(this.Evnts)
  }
}
Let Cal = New EventCalendr()
Cal.addEvnt("2025-01-01", "New Year Party")
Cal.addEvnt("2025-01-01", "Family Lunch")
Cal.addEvnt("2025-12-25", "Christmas")
consol.log(Cal.getEvnts("2025-01-01"))
Console.log(Cal.getAllDtes();`,
totalMistakes: 47,
hint: "Fix: Clas→class, EventCalendr→EventCalendar, Constructr→constructor, Evnts→events, addEvnt→addEvent, Dat→date, evnt→event, IF→if, missing semicolons, Pus→push, Retrun→return, getEvnts→getEvents, removeEvnt→removeEvent, retun→return, Indx→index, indexof→indexOf, Splce→splice, getAllDtes→getAllDates, Objct→Object, Let→let, Cal→cal, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H98 ──
{
correct: `function lruCache(capacity) {
  let cache = {};
  let order = [];
  return {
    get: function(key) {
      if (cache[key] === undefined) return -1;
      let idx = order.indexOf(key);
      order.splice(idx, 1);
      order.push(key);
      return cache[key];
    },
    put: function(key, value) {
      if (cache[key] !== undefined) {
        let idx = order.indexOf(key);
        order.splice(idx, 1);
      } else if (order.length === capacity) {
        let oldest = order.shift();
        delete cache[oldest];
      }
      cache[key] = value;
      order.push(key);
    }
  };
}
let lru = lruCache(3);
lru.put("a", 1);
lru.put("b", 2);
lru.put("c", 3);
console.log(lru.get("a"));
lru.put("d", 4);
console.log(lru.get("b"));`,
wrong: `Functon lruCche(capacty) {
  let Cche = {}
  let Ordr = []
  Retrun {
    Gt: Functon(Ky) {
      IF (Cche[Ky] === Undefind) retun -1
      let Idx = Ordr.indexof(Ky)
      Ordr.Splce(Idx, 1)
      Ordr.Pus(Ky)
      retun Cche[Ky]
    }
    Pt: Functon(Ky, Valu) {
      IF (Cche[Ky] !== Undefind) {
        let Idx = Ordr.indexof(Ky)
        Ordr.Splce(Idx, 1)
      } Else IF (Ordr.Lenght === capacty) {
        let Oldst = Ordr.Shft()
        Delet Cche[Oldst]
      }
      Cche[Ky] = Valu
      Ordr.Pus(Ky)
    }
  }
}
Let Lru = lruCche(3)
Lru.Pt("a", 1)
Lru.Pt("b", 2)
Lru.Pt("c", 3)
consol.log(Lru.Gt("a"))
Lru.Pt("d", 4)
Console.log(Lru.Gt("b";`,
totalMistakes: 48,
hint: "Fix: Functon→function, lruCche→lruCache, capacty→capacity, Cche→cache, Ordr→order, Retrun→return, Gt→get, Ky→key, IF→if, Undefind→undefined, retun→return, Ordr.indexof→order.indexOf, Splce→splice, Pus→push, missing commas between object methods, missing semicolons, Pt→put, Valu→value, Else→else, Lenght→length, Oldst→oldest, Shft→shift, Delet→delete, Let→let, Lru→lru, consol.log, Console→console, missing closing parenthesis."
},


// ── H99 ──
{
correct: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
function countSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  let result = [];
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  return result;
}
let arr1 = [5, 2, 8, 1, 9];
let arr2 = [4, 2, 2, 8, 3, 3, 1];
console.log(insertionSort(arr1));
console.log(countSort(arr2));`,
wrong: `Functon insertionSrt(arr) {
  For (let i = 1 i < arr.Lenght; i++) {
    let Ky = arr[i]
    let J = i - 1
    Whle (J >= 0 && arr[J] > Ky) {
      arr[J + 1] = arr[J]
      J--
    }
    arr[J + 1] = Ky
  }
  Retrun arr;
}
functon cuntSort(arr) {
  let Mx = Math.Mx(...arr)
  Let coutn = New Arry(Mx + 1).Fil(0)
  For (let i = 0 i < arr.Lenght; i++) {
    coutn[arr[i]]++
  }
  let reslt = []
  For (let i = 0 i <= Mx; i++) {
    Whle (coutn[i] > 0) {
      reslt.Pus(i)
      coutn[i]--
    }
  }
  retun reslt;
}
let arr1 = [5, 2, 8, 1, 9]
Let arr2 = [4, 2, 2, 8, 3, 3, 1]
consol.log(insertionSrt(arr1))
Console.log(cuntSort(arr2);`,
totalMistakes: 46,
hint: "Fix: Functon→function, insertionSrt→insertionSort, For→for, missing semicolons in for loops, arr.Lenght→arr.length, Ky→key, J→j, Whle→while, missing semicolons, Retrun→return, functon→function, cuntSort→countSort, Mx→max, Math.Mx→Math.max, Let→let, coutn→count, New→new, Arry→Array, Fil→fill, reslt→result, Pus→push, retun→return, arr2 Let→let, consol.log, Console→console, missing closing parenthesis."
},


// ── H100 ──
{
correct: `class StateMachine {
  constructor(states, initial) {
    this.states = states;
    this.current = initial;
    this.history = [];
  }
  transition(action) {
    let currentState = this.states[this.current];
    if (!currentState) {
      return "Invalid state";
    }
    let next = currentState[action];
    if (!next) {
      return "Invalid action";
    }
    this.history.push(this.current);
    this.current = next;
    return this.current;
  }
  getHistory() {
    return this.history;
  }
  getCurrent() {
    return this.current;
  }
}
let states = {
  idle: { start: "running" },
  running: { pause: "paused", stop: "idle" },
  paused: { resume: "running", stop: "idle" }
};
let machine = new StateMachine(states, "idle");
console.log(machine.transition("start"));
console.log(machine.transition("pause"));
console.log(machine.transition("resume"));
console.log(machine.getHistory());`,
wrong: `Clas StatMachine {
  Constructr(Stts, initl) {
    this.Stts = Stts
    this.Currnt = initl
    this.Histy = []
  }
  Transiion(Actn) {
    let currntStt = this.Stts[this.Currnt]
    IF (!currntStt) {
      Retrun "Invalid state"
    }
    let Nxt = currntStt[Actn]
    IF (!Nxt) {
      retun "Invalid action"
    }
    this.Histy.Pus(this.Currnt)
    this.Currnt = Nxt
    Retrun this.Currnt
  }
  getHisty() {
    retun this.Histy
  }
  getCurrnt() {
    Retrun this.Currnt
  }
}
let Stts = {
  idle: { strt: "running" }
  running: { paus: "paused", stp: "idle" }
  paused: { resme: "running", stp: "idle" }
}
let machne = New StatMachine(Stts, "idle")
consol.log(machne.Transiion("start"))
Console.log(machne.Transiion("pause"))
console.Log(machne.Transiion("resume"))
console.log(machne.getHisty();`,
totalMistakes: 50,
hint: "Fix: Clas→class, StatMachine→StateMachine, Constructr→constructor, Stts→states, initl→initial, Currnt→current, Histy→history, missing semicolons, Transiion→transition, Actn→action, currntStt→currentState, IF→if, Retrun→return, Nxt→next, retun→return, Pus→push, getHisty→getHistory, getCurrnt→getCurrent, strt→start, paus→pause, stp→stop, resme→resume, missing commas after state objects, machne→machine, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H101 ──
{
correct: `function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] < nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum = currentSum + nums[i];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));`,
wrong: `Functon twoSum(Nums, Targt) {
  let Mp = {}
  For (let i = 0 i < Nums.Lenght; i++) {
    let complemnt = Targt - Nums[i]
    IF (Mp[complemnt] !== Undefind) {
      Retrun [Mp[complemnt], i]
    }
    Mp[Nums[i]] = i
  }
  retun []
}
functon maxSubArry(Nums) {
  Let maxSom = Nums[0]
  Let currntSom = Nums[0]
  For (let i = 1 i < Nums.Lenght; i++) {
    IF (currntSom + Nums[i] < Nums[i]) {
      currntSom = Nums[i]
    } Else {
      currntSom = currntSom + Nums[i]
    }
    IF (currntSom > maxSom) {
      maxSom = currntSom
    }
  }
  Retrun maxSom;
}
consol.log(twoSum([2, 7, 11, 15], 9))
Console.log(maxSubArry([-2, 1, -3, 4, -1, 2, 1, -5, 4];`,
totalMistakes: 47,
hint: "Fix: Functon→function, Nums→nums, Targt→target, Mp→map, For→for, missing semicolons in for loops, Lenght→length, complemnt→complement, IF→if, Undefind→undefined, Retrun→return, missing semicolons, retun→return, functon→function, maxSubArry→maxSubArray, Let→let, maxSom→maxSum, currntSom→currentSum, Else→else, consol.log, Console→console, missing closing parenthesis."
},


// ── H102 ──
{
correct: `class Validator {
  constructor() {
    this.errors = [];
  }
  required(value, field) {
    if (!value || value.trim() === "") {
      this.errors.push(field + " is required");
    }
    return this;
  }
  minLength(value, field, min) {
    if (value.length < min) {
      this.errors.push(field + " must be at least " + min + " characters");
    }
    return this;
  }
  maxLength(value, field, max) {
    if (value.length > max) {
      this.errors.push(field + " must be at most " + max + " characters");
    }
    return this;
  }
  isValid() {
    return this.errors.length === 0;
  }
  getErrors() {
    return this.errors;
  }
}
let v = new Validator();
v.required("Ali", "name").minLength("Ali", "name", 5);
console.log(v.isValid());
console.log(v.getErrors());`,
wrong: `Clas Validtr {
  Constructr() {
    this.Errs = []
  }
  Requird(Valu, Fild) {
    IF (!Valu || Valu.Trm() === "") {
      this.Errs.Pus(Fild + " is required")
    }
    Retrun this
  }
  minLenght(Valu, Fild, Min) {
    IF (Valu.Lenght < Min) {
      this.Errs.Pus(Fild + " must be at least " + Min + " characters")
    }
    retun this
  }
  maxLenght(Valu, Fild, Mx) {
    IF (Valu.Lenght > Mx) {
      this.Errs.Pus(Fild + " must be at most " + Mx + " characters")
    }
    Retrun this
  }
  isVlid() {
    retun this.Errs.Lenght === 0
  }
  getErrs() {
    Retrun this.Errs
  }
}
Let V = New Validtr()
V.Requird("Ali", "name").minLenght("Ali", "name", 5)
consol.log(V.isVlid())
Console.log(V.getErrs();`,
totalMistakes: 48,
hint: "Fix: Clas→class, Validtr→Validator, Constructr→constructor, Errs→errors, Requird→required, Valu→value, Fild→field, IF→if, Trm→trim, Pus→push, missing semicolons, Retrun→return, minLenght→minLength, Lenght→length, Min→min, retun→return, maxLenght→maxLength, Mx→max, isVlid→isValid, getErrs→getErrors, Let→let, V→v, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H103 ──
{
correct: `function slidingWindow(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }
  return maxSum;
}
function twoPointers(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}
let nums = [2, 1, 5, 1, 3, 2];
console.log(slidingWindow(nums, 3));
let sorted = [1, 2, 3, 4, 6];
console.log(twoPointers(sorted, 6));`,
wrong: `Functon slidngWindow(arr, K) {
  let maxSom = 0
  Let windowSom = 0
  For (let i = 0 i < K; i++) {
    windowSom = windowSom + arr[i]
  }
  maxSom = windowSom
  For (let i = K i < arr.Lenght; i++) {
    windowSom = windowSom + arr[i] - arr[i - K]
    IF (windowSom > maxSom) {
      maxSom = windowSom
    }
  }
  Retrun maxSom;
}
functon twoPontrs(arr, Targt) {
  let Lft = 0
  let Rght = arr.Lenght - 1
  Whle (Lft < Rght) {
    let Som = arr[Lft] + arr[Rght]
    IF (Som === Targt) retun [Lft, Rght]
    IF (Som < Targt) Lft++
    Else Rght--
  }
  retun []
}
Let Nums = [2, 1, 5, 1, 3, 2]
consol.log(slidngWindow(Nums, 3))
Let Sortd = [1, 2, 3, 4, 6]
Console.log(twoPontrs(Sortd, 6);`,
totalMistakes: 46,
hint: "Fix: Functon→function, slidngWindow→slidingWindow, K→k, maxSom→maxSum, Let→let, windowSom→windowSum, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Retrun→return, functon→function, twoPontrs→twoPointers, Targt→target, Lft→left, Rght→right, Whle→while, Som→sum, retun→return, Else→else, Nums→nums, consol.log, Sortd→sorted, Console→console, missing closing parenthesis."
},


// ── H104 ──
{
correct: `class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }
  addTask(title, priority) {
    let task = {
      id: this.nextId,
      title: title,
      priority: priority,
      done: false
    };
    this.tasks.push(task);
    this.nextId++;
    return task;
  }
  completeTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        this.tasks[i].done = true;
        return "Task completed";
      }
    }
    return "Task not found";
  }
  getPending() {
    let pending = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (!this.tasks[i].done) {
        pending.push(this.tasks[i]);
      }
    }
    return pending;
  }
}
let tm = new TaskManager();
tm.addTask("Buy groceries", 1);
tm.addTask("Read book", 2);
tm.completeTask(1);
console.log(tm.getPending());`,
wrong: `Clas TaskMangr {
  Constructr() {
    this.Tsks = []
    this.nxtId = 1
  }
  addTsk(titl, priorit) {
    let Tsk = {
      Id: this.nxtId,
      titl: titl,
      priorit: priorit,
      Dne: Flase
    }
    this.Tsks.Pus(Tsk)
    this.nxtId++
    Retrun Tsk
  }
  completeTsk(Id) {
    For (let i = 0 i < this.Tsks.Lenght; i++) {
      IF (this.Tsks[i].Id === Id) {
        this.Tsks[i].Dne = Treu
        Retrun "Task completed"
      }
    }
    retun "Task not found"
  }
  getPndng() {
    let pndng = []
    For (let i = 0 i < this.Tsks.Lenght; i++) {
      IF (!this.Tsks[i].Dne) {
        pndng.Pus(this.Tsks[i])
      }
    }
    retun pndng;
  }
}
Let Tm = New TaskMangr()
Tm.addTsk("Buy groceries", 1)
Tm.addTsk("Read book", 2)
Tm.completeTsk(1)
consol.log(Tm.getPndng();`,
totalMistakes: 49,
hint: "Fix: Clas→class, TaskMangr→TaskManager, Constructr→constructor, Tsks→tasks, nxtId→nextId, addTsk→addTask, titl→title, priorit→priority, Tsk→task, Id→id, Dne→done, Flase→false, missing semicolons, Pus→push, Retrun→return, completeTsk→completeTask, For→for, missing semicolons in for loops, Lenght→length, IF→if, Treu→true, retun→return, getPndng→getPending, pndng→pending, Let→let, Tm→tm, New→new, consol.log, missing closing parenthesis."
},


// ── H105 ──
{
correct: `function generatePassword(length, useNumbers, useSymbols) {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (useNumbers) {
    chars = chars + "0123456789";
  }
  if (useSymbols) {
    chars = chars + "!@#$%^&*";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password = password + chars[index];
  }
  return password;
}
function checkStrength(password) {
  if (password.length < 6) return "Weak";
  if (password.length < 10) return "Medium";
  return "Strong";
}
let pass1 = generatePassword(8, true, false);
let pass2 = generatePassword(12, true, true);
console.log(pass1);
console.log(pass2);
console.log(checkStrength(pass1));
console.log(checkStrength(pass2));`,
wrong: `Functon genertePassword(Lenght, useNums, useSymbls) {
  let Chrs = "abcdefghijklmnopqrstuvwxyz"
  IF (useNums) {
    Chrs = Chrs + "0123456789"
  }
  IF (useSymbls) {
    Chrs = Chrs + "!@#$%^&*"
  }
  let passwrd = ""
  For (let i = 0 i < Lenght; i++) {
    let Indx = Math.Flor(Math.randm() * Chrs.Lenght)
    passwrd = passwrd + Chrs[Indx]
  }
  Retrun passwrd;
}
functon checkStrngh(passwrd) {
  IF (passwrd.Lenght < 6) retun "Weak"
  IF (passwrd.Lenght < 10) Retrun "Medium"
  retun "Strong"
}
let Pas1 = genertePassword(8, Treu, Flase)
let Pas2 = genertePassword(12, Treu, Treu)
consol.log(Pas1)
Console.log(Pas2)
console.Log(checkStrngh(Pas1))
console.log(checkStrngh(Pas2);`,
totalMistakes: 46,
hint: "Fix: Functon→function, genertePassword→generatePassword, Lenght→length, useNums→useNumbers, useSymbls→useSymbols, Chrs→chars, IF→if, missing semicolons, passwrd→password, For→for, missing semicolon in for loop, Indx→index, Math.Flor→Math.floor, Math.randm→Math.random, Chrs.Lenght→chars.length, Retrun→return, functon→function, checkStrngh→checkStrength, retun→return, Pas1→pass1, Pas2→pass2, Treu→true, Flase→false, consol.log, Console→console, console.Log, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 20 paragraphs (H106 - H125)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/


// ── H106 ──
{
correct: `function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
function isPalindrome(str) {
  let rev = reverseString(str);
  if (str === rev) {
    return true;
  }
  return false;
}
let word1 = reverseString("hello");
let word2 = reverseString("world");
console.log(word1);
console.log(word2);
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));`,
wrong: `Functon reversStrig(Str) {
  Let reversд = ""
  For (let i = Str.Lenght - 1 i >= 0; i--) {
    reversд = reversд + Str[i]
  }
  Retrun reversд
}
functon isPalndrome(Str) {
  let Rev = reversStrig(Str)
  IF (Str === Rev) {
    retun Treu
  }
  retun Flase
}
let Wrd1 = reversStrig("hello")
let Wrd2 = reversStrig("world")
consol.log(Wrd1)
Console.log(Wrd2)
console.Log(isPalndrome("racecar"))
console.log(isPalndrome("hello";`,
totalMistakes: 47,
hint: "Fix: Functon→function, reversStrig→reverseString, Str→str, Let→let, reversed spelling, For→for, missing semicolons in for loop, Lenght→length, Retrun→return, functon→function, isPalndrome→isPalindrome, Rev→rev, IF→if, retun→return, Treu→true, Flase→false, Wrd1→word1, Wrd2→word2, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H107 ──
{
correct: `const stack = [];
function push(item) {
  stack.push(item);
}
function pop() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack.pop();
}
function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
}
push(10);
push(20);
push(30);
console.log(peek());
console.log(pop());
console.log(stack);`,
wrong: `Const Stck = []
functon Pus(Itm) {
  Stck.pus(Itm)
}
functon Pop() {
  IF (Stck.Lenght === 0) {
    retun "Stack is empty"
  }
  Retrun Stck.Pop()
}
Functon Pek() {
  IF (Stck.Lenght === 0) {
    retun "Stack is empty"
  }
  Retrun Stck[Stck.Lenght - 1]
}
Pus(10)
Pus(20)
Pus(30)
consol.log(Pek())
Console.log(Pop())
console.Log(Stck;`,
totalMistakes: 46,
hint: "Fix: Const→const, Stck→stack, functon→function, Pus→push (function name), Itm→item, Stck.pus→stack.push, Pop→pop (function name), IF→if, Lenght→length, retun→return, Retrun→return, Stck.Pop→stack.pop, Functon→function, Pek→peek, missing semicolons, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H108 ──
{
correct: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
let sortedArr = [1, 3, 5, 7, 9, 11, 13];
let result1 = binarySearch(sortedArr, 7);
let result2 = binarySearch(sortedArr, 6);
console.log(result1);
console.log(result2);`,
wrong: `Functon binarySerch(Arr, Targt) {
  let Lft = 0
  let Rght = Arr.Lenght - 1
  Whle (Lft <= Rght) {
    let Mid = Math.Flor((Lft + Rght) / 2)
    IF (Arr[Mid] === Targt) {
      retun Mid
    }
    IF (Arr[Mid] < Targt) {
      Lft = Mid + 1
    } Else {
      Rght = Mid - 1
    }
  }
  retun -1
}
Let sortdArr = [1, 3, 5, 7, 9, 11, 13]
let Reslt1 = binarySerch(sortdArr, 7)
let Reslt2 = binarySerch(sortdArr, 6)
consol.log(Reslt1)
Console.log(Reslt2;`,
totalMistakes: 45,
hint: "Fix: Functon→function, binarySerch→binarySearch, Arr→arr, Targt→target, Lft→left, Rght→right, Lenght→length, Whle→while, Math.Flor→Math.floor, Mid→mid, IF→if, retun→return, Else→else, Let→let, sortdArr→sortedArr, Reslt1→result1, Reslt2→result2, missing semicolons, consol→console, Console→console, missing closing parenthesis."
},


// ── H109 ──
{
correct: `class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
let q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
console.log(q.front());
console.log(q.dequeue());
console.log(q.isEmpty());`,
wrong: `Clas Que {
  Constructr() {
    this.Itms = []
  }
  Enqueu(Itm) {
    this.Itms.Pus(Itm)
  }
  Dequeu() {
    IF (this.Itms.Lenght === 0) {
      retun "Queue is empty"
    }
    Retrun this.Itms.Shft()
  }
  Frnt() {
    IF (this.Itms.Lenght === 0) {
      retun "Queue is empty"
    }
    Retrun this.Itms[0]
  }
  isEmty() {
    retun this.Itms.Lenght === 0
  }
}
Let Q = New Que()
Q.Enqueu("A")
Q.Enqueu("B")
Q.Enqueu("C")
consol.log(Q.Frnt())
Console.log(Q.Dequeu())
console.Log(Q.isEmty();`,
totalMistakes: 48,
hint: "Fix: Clas→class, Que→Queue, Constructr→constructor, Itms→items, Enqueu→enqueue, Itm→item, Pus→push, Dequeu→dequeue, IF→if, Lenght→length, retun→return, Retrun→return, Shft→shift, Frnt→front, isEmty→isEmpty, Let→let, Q→q, New→new, missing semicolons, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H110 ──
{
correct: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let numbers = [64, 34, 25, 12, 22, 11, 90];
let sorted = bubbleSort(numbers);
console.log(sorted);
let numbers2 = [5, 1, 4, 2, 8];
console.log(bubbleSort(numbers2));`,
wrong: `Functon bubblSort(Arr) {
  let N = Arr.Lenght
  For (let i = 0 i < N - 1; i++) {
    For (let j = 0 j < N - i - 1; j++) {
      IF (Arr[j] > Arr[j + 1]) {
        let Tmp = Arr[j]
        Arr[j] = Arr[j + 1]
        Arr[j + 1] = Tmp
      }
    }
  }
  Retrun Arr
}
Let Numbrs = [64, 34, 25, 12, 22, 11, 90]
let Sortd = bubblSort(Numbrs)
consol.log(Sortd)
Let Numbrs2 = [5, 1, 4, 2, 8]
Console.log(bubblSort(Numbrs2);`,
totalMistakes: 46,
hint: "Fix: Functon→function, bubblSort→bubbleSort, Arr→arr, N→n, Lenght→length, For→for, missing semicolons in for loops, IF→if, Tmp→temp, Retrun→return, Let→let, Numbrs→numbers, Sortd→sorted, consol→console, Console→console, Numbrs2→numbers2, missing closing parenthesis."
},


// ── H111 ──
{
correct: `function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flattenArray(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
let nested = [1, [2, 3], [4, [5, 6]], 7];
let flat = flattenArray(nested);
console.log(flat);
let nested2 = [[1, 2], [3, [4, 5]]];
console.log(flattenArray(nested2));`,
wrong: `Functon flatnArray(Arr) {
  let Reslt = []
  For (let i = 0 i < Arr.Lenght; i++) {
    IF (Array.isArry(Arr[i])) {
      let Flt = flatnArray(Arr[i])
      For (let j = 0 j < Flt.Lenght; j++) {
        Reslt.Pus(Flt[j])
      }
    } Else {
      Reslt.Pus(Arr[i])
    }
  }
  Retrun Reslt
}
Let Nestd = [1, [2, 3], [4, [5, 6]], 7]
let Flt = flatnArray(Nestd)
consol.log(Flt)
Let Nestd2 = [[1, 2], [3, [4, 5]]]
Console.log(flatnArray(Nestd2);`,
totalMistakes: 47,
hint: "Fix: Functon→function, flatnArray→flattenArray, Arr→arr, Reslt→result, For→for, missing semicolons in for loops, Lenght→length, IF→if, Array.isArry→Array.isArray, Flt→flat, Pus→push, Else→else, Retrun→return, Let→let, Nestd→nested, consol→console, Nestd2→nested2, Console→console, missing closing parenthesis."
},


// ── H112 ──
{
correct: `class Calculator {
  constructor() {
    this.history = [];
  }
  add(a, b) {
    let result = a + b;
    this.history.push("add: " + result);
    return result;
  }
  subtract(a, b) {
    let result = a - b;
    this.history.push("sub: " + result);
    return result;
  }
  multiply(a, b) {
    let result = a * b;
    this.history.push("mul: " + result);
    return result;
  }
  getHistory() {
    return this.history;
  }
}
let calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 7));
console.log(calc.getHistory());`,
wrong: `Clas Calcultr {
  Constructr() {
    this.Histy = []
  }
  Ad(A, B) {
    let Reslt = A + B
    this.Histy.Pus("add: " + Reslt)
    Retrun Reslt
  }
  Subtrct(A, B) {
    let Reslt = A - B
    this.Histy.Pus("sub: " + Reslt)
    retun Reslt
  }
  Multply(A, B) {
    let Reslt = A * B
    this.Histy.Pus("mul: " + Reslt)
    Retrun Reslt
  }
  getHisty() {
    Retrun this.Histy
  }
}
Let Calc = New Calcultr()
consol.log(Calc.Ad(5, 3))
Console.log(Calc.Subtrct(10, 4))
console.Log(Calc.Multply(3, 7))
console.log(Calc.getHisty();`,
totalMistakes: 46,
hint: "Fix: Clas→class, Calcultr→Calculator, Constructr→constructor, Histy→history, Ad→add, A→a, B→b, Reslt→result, Pus→push, Retrun→return, Subtrct→subtract, retun→return, Multply→multiply, getHisty→getHistory, Let→let, Calc→calc, New→new, missing semicolons, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H113 ──
{
correct: `function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
function throttle(func, limit) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}
function sayHello() {
  console.log("Hello!");
}
let debouncedHello = debounce(sayHello, 300);
let throttledHello = throttle(sayHello, 1000);
debouncedHello();
throttledHello();
console.log("Functions created");`,
wrong: `Functon debounce(Func, Dely) {
  Let Timr;
  retun Functon() {
    clearTimout(Timr)
    Timr = setTimout(Func, Dely)
  }
}
functon throtl(Func, Limt) {
  Let lastCal = 0
  retun functon() {
    let Nw = Date.Nw()
    IF (Nw - lastCal >= Limt) {
      lastCal = Nw
      Func()
    }
  }
}
functon sayHelo() {
  consol.log("Hello!")
}
let debouncdHelo = debounce(sayHelo, 300)
let throtldHelo = throtl(sayHelo, 1000)
debouncdHelo()
throtldHelo()
Console.log("Functions created";`,
totalMistakes: 48,
hint: "Fix: Functon→function, Func→func, Dely→delay, Let→let, Timr→timer, retun→return, Functon→function (return), clearTimout→clearTimeout, setTimout→setTimeout, functon→function, throtl→throttle, Limt→limit, lastCal→lastCall, Nw→now, Date.Nw→Date.now, IF→if, sayHelo→sayHello, consol→console, debouncdHelo→debouncedHello, throtldHelo→throttledHello, missing semicolons, Console→console, missing closing parenthesis."
},


// ── H114 ──
{
correct: `function memoize(func) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = func(n);
    return cache[n];
  };
}
function slowSquare(n) {
  return n * n;
}
let fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5));
console.log(fastSquare(10));
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let memoFib = memoize(fibonacci);
console.log(memoFib(6));`,
wrong: `Functon memoze(Func) {
  let Cach = {}
  retun functon(N) {
    IF (Cach[N] !== Undefind) {
      Retrun Cach[N]
    }
    Cach[N] = Func(N)
    retun Cach[N]
  }
}
functon slowSquar(N) {
  retun N * N
}
Let fastSquar = memoze(slowSquar)
consol.log(fastSquar(5))
Console.log(fastSquar(5))
console.Log(fastSquar(10))
functon fibonci(N) {
  IF (N <= 1) retun N
  Retrun fibonci(N - 1) + fibonci(N - 2)
}
Let memoFib = memoze(fibonci)
console.log(memoFib(6);`,
totalMistakes: 45,
hint: "Fix: Functon→function, memoze→memoize, Func→func, Cach→cache, retun→return, functon→function (return), N→n, IF→if, Undefind→undefined, Retrun→return, slowSquar→slowSquare, Let→let, fastSquar→fastSquare, consol→console, Console→console, console.Log→console.log, fibonci→fibonacci, memoFib→memoFib (OK), missing semicolons, missing closing parenthesis."
},


// ── H115 ──
{
correct: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  emit(event, data) {
    if (this.events[event]) {
      for (let i = 0; i < this.events[event].length; i++) {
        this.events[event][i](data);
      }
    }
  }
  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(function(l) {
        return l !== listener;
      });
    }
  }
}
let emitter = new EventEmitter();
emitter.on("greet", function(name) { console.log("Hello " + name); });
emitter.emit("greet", "Ali");`,
wrong: `Clas EventEmttr {
  Constructr() {
    this.Evnts = {}
  }
  On(Evnt, Listnr) {
    IF (!this.Evnts[Evnt]) {
      this.Evnts[Evnt] = []
    }
    this.Evnts[Evnt].Pus(Listnr)
  }
  Emit(Evnt, Dat) {
    IF (this.Evnts[Evnt]) {
      For (let i = 0 i < this.Evnts[Evnt].Lenght; i++) {
        this.Evnts[Evnt][i](Dat)
      }
    }
  }
  Off(Evnt, Listnr) {
    IF (this.Evnts[Evnt]) {
      this.Evnts[Evnt] = this.Evnts[Evnt].filtr(functon(L) {
        retun L !== Listnr
      })
    }
  }
}
Let emittr = New EventEmttr()
emittr.On("greet", functon(Nme) { consol.log("Hello " + Nme) })
emittr.Emit("greet", "Ali";`,
totalMistakes: 49,
hint: "Fix: Clas→class, EventEmttr→EventEmitter, Constructr→constructor, Evnts→events, On→on, Evnt→event, Listnr→listener, IF→if, Pus→push, Emit→emit, Dat→data, For→for, missing semicolons, Lenght→length, Off→off, filtr→filter, functon→function, L→l, retun→return, Let→let, emittr→emitter, New→new, Nme→name, consol→console, missing closing parenthesis."
},


// ── H116 ──
{
correct: `function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
let original = { name: "Ali", address: { city: "Lahore", zip: "54000" } };
let copy = deepClone(original);
copy.address.city = "Karachi";
console.log(original.address.city);
console.log(copy.address.city);`,
wrong: `Functon depClone(Obj) {
  IF (Obj === Nul || typof Obj !== "object") {
    retun Obj
  }
  let Clon = {}
  For (let Ky in Obj) {
    IF (Obj.hasOwnProprty(Ky)) {
      Clon[Ky] = depClone(Obj[Ky])
    }
  }
  Retrun Clon
}
let orignal = { name: "Ali", adres: { cty: "Lahore", Zip: "54000" } }
let Cpy = depClone(orignal)
Cpy.adres.cty = "Karachi"
consol.log(orignal.adres.cty)
Console.log(Cpy.adres.cty;`,
totalMistakes: 46,
hint: "Fix: Functon→function, depClone→deepClone, Obj→obj, IF→if, Nul→null, typof→typeof, retun→return, Clon→clone, For→for, Ky→key, hasOwnProprty→hasOwnProperty, Retrun→return, orignal→original, adres→address, cty→city, Zip→zip, Cpy→copy, missing semicolons, consol→console, Console→console, missing closing parenthesis."
},


// ── H117 ──
{
correct: `function curry(func) {
  return function curried(a, b, c) {
    if (arguments.length >= func.length) {
      return func(a, b, c);
    }
    return function(d, e, f) {
      return curried(a, b, c, d, e, f);
    };
  };
}
function add3(a, b, c) {
  return a + b + c;
}
let curriedAdd = curry(add3);
console.log(curriedAdd(1, 2, 3));
console.log(curriedAdd(1)(2)(3));
function multiply3(a, b, c) {
  return a * b * c;
}
let curriedMul = curry(multiply3);
console.log(curriedMul(2, 3, 4));`,
wrong: `Functon Curry(Func) {
  retun functon Currid(A, B, C) {
    IF (arguemnts.Lenght >= Func.Lenght) {
      Retrun Func(A, B, C)
    }
    retun functon(D, E, F) {
      retun Currid(A, B, C, D, E, F)
    }
  }
}
functon add3(A, B, C) {
  Retrun A + B + C
}
Let curridAdd = Curry(add3)
consol.log(curridAdd(1, 2, 3))
Console.log(curridAdd(1)(2)(3))
functon multiply3(A, B, C) {
  retun A * B * C
}
Let curridMul = Curry(multiply3)
console.Log(curridMul(2, 3, 4);`,
totalMistakes: 47,
hint: "Fix: Functon→function, Curry→curry, Func→func, retun→return, functon→function, Currid→curried, A/B/C/D/E/F→a/b/c/d/e/f, IF→if, arguemnts→arguments, Lenght→length, Retrun→return, add3 args, Let→let, curridAdd→curriedAdd, consol→console, Console→console, multiply3 args, curridMul→curriedMul, console.Log→console.log, missing semicolons, missing closing parenthesis."
},


// ── H118 ──
{
correct: `class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    let node = { data: data, next: null };
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result = result + current.data + " ";
      current = current.next;
    }
    console.log(result);
  }
}
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();`,
wrong: `Clas LinkdList {
  Constructr() {
    this.Hed = Nul
    this.Siz = 0
  }
  Ad(Dat) {
    let Nod = { dat: Dat, Nxt: Nul }
    IF (this.Hed === Nul) {
      this.Hed = Nod
    } Else {
      let Currnt = this.Hed
      Whle (Currnt.Nxt !== Nul) {
        Currnt = Currnt.Nxt
      }
      Currnt.Nxt = Nod
    }
    this.Siz++
  }
  Prnt() {
    let Currnt = this.Hed
    let Reslt = ""
    Whle (Currnt !== Nul) {
      Reslt = Reslt + Currnt.dat + " "
      Currnt = Currnt.Nxt
    }
    consol.log(Reslt)
  }
}
Let Lst = New LinkdList()
Lst.Ad(1)
Lst.Ad(2)
Lst.Ad(3)
Lst.Prnt(;`,
totalMistakes: 50,
hint: "Fix: Clas→class, LinkdList→LinkedList, Constructr→constructor, Hed→head, Nul→null, Siz→size, Ad→add, Dat→data, Nod→node, dat→data, Nxt→next, IF→if, Else→else, Currnt→current, Whle→while, Prnt→print, Reslt→result, consol→console, Let→let, Lst→list, New→new, missing semicolons, missing closing parenthesis."
},


// ── H119 ──
{
correct: `function pipe(functions) {
  return function(value) {
    let result = value;
    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  };
}
function double(x) { return x * 2; }
function addTen(x) { return x + 10; }
function square(x) { return x * x; }
let transform = pipe([double, addTen, square]);
console.log(transform(3));
console.log(transform(5));
let transform2 = pipe([square, double]);
console.log(transform2(4));`,
wrong: `Functon Pipe(Funcs) {
  retun functon(Valu) {
    let Reslt = Valu
    For (let i = 0 i < Funcs.Lenght; i++) {
      Reslt = Funcs[i](Reslt)
    }
    Retrun Reslt
  }
}
functon Doubl(X) { retun X * 2 }
functon addTen(X) { retun X + 10 }
functon Squar(X) { retun X * X }
Let Transfm = Pipe([Doubl, addTen, Squar])
consol.log(Transfm(3))
Console.log(Transfm(5))
Let Transfm2 = Pipe([Squar, Doubl])
console.Log(Transfm2(4);`,
totalMistakes: 46,
hint: "Fix: Functon→function, Pipe→pipe, Funcs→functions, retun→return, functon→function, Valu→value, Reslt→result, For→for, missing semicolons in for loop, Lenght→length, Retrun→return, Doubl→double, X→x, Squar→square, Let→let, Transfm→transform, consol→console, Console→console, console.Log→console.log, Transfm2→transform2, missing closing parenthesis."
},


// ── H120 ──
{
correct: `function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));`,
wrong: `Functon mergSort(Arr) {
  IF (Arr.Lenght <= 1) {
    retun Arr
  }
  let Mid = Math.Flor(Arr.Lenght / 2)
  let Lft = mergSort(Arr.Slce(0, Mid))
  let Rght = mergSort(Arr.Slce(Mid))
  Retrun merg(Lft, Rght)
}
functon merg(Lft, Rght) {
  let Reslt = []
  let I = 0
  let J = 0
  Whle (I < Lft.Lenght && J < Rght.Lenght) {
    IF (Lft[I] <= Rght[J]) {
      Reslt.Pus(Lft[I])
      I++
    } Else {
      Reslt.Pus(Rght[J])
      J++
    }
  }
  retun Reslt.concate(Lft.Slce(I)).concate(Rght.Slce(J))
}
Let Arr2 = [38, 27, 43, 3, 9, 82, 10]
consol.log(mergSort(Arr2);`,
totalMistakes: 49,
hint: "Fix: Functon→function, mergSort→mergeSort, Arr→arr, IF→if, Lenght→length, retun→return, Mid→mid, Math.Flor→Math.floor, Slce→slice, Lft→left, Rght→right, Retrun→return, merg→merge, functon→function, Reslt→result, I→i, J→j, Whle→while, Pus→push, Else→else, concate→concat, Let→let, Arr2→arr, consol→console, missing semicolons, missing closing parenthesis."
},


// ── H121 ──
{
correct: `class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function insert(root, value) {
  if (root === null) {
    return new Tree(value);
  }
  if (value < root.value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }
  return root;
}
function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}
let root = new Tree(50);
root = insert(root, 30);
root = insert(root, 70);
root = insert(root, 20);
inOrder(root);`,
wrong: `Clas Tre {
  Constructr(Valu) {
    this.Valu = Valu
    this.Lft = Nul
    this.Rght = Nul
  }
}
functon insrt(Rot, Valu) {
  IF (Rot === Nul) {
    Retrun New Tre(Valu)
  }
  IF (Valu < Rot.Valu) {
    Rot.Lft = insrt(Rot.Lft, Valu)
  } Else {
    Rot.Rght = insrt(Rot.Rght, Valu)
  }
  retun Rot
}
functon inOrdr(Rot) {
  IF (Rot === Nul) retun
  inOrdr(Rot.Lft)
  consol.log(Rot.Valu)
  inOrdr(Rot.Rght)
}
let Rot = New Tre(50)
Rot = insrt(Rot, 30)
Rot = insrt(Rot, 70)
Rot = insrt(Rot, 20)
inOrdr(Rot;`,
totalMistakes: 48,
hint: "Fix: Clas→class, Tre→Tree, Constructr→constructor, Valu→value, Lft→left, Nul→null, Rght→right, functon→function, insrt→insert, Rot→root, IF→if, Retrun→return, New→new, Else→else, retun→return, inOrdr→inOrder, consol→console, missing semicolons, missing closing parenthesis."
},


// ── H122 ──
{
correct: `function promiseChain() {
  return new Promise(function(resolve, reject) {
    let value = 10;
    if (value > 5) {
      resolve(value);
    } else {
      reject("Too small");
    }
  });
}
promiseChain()
  .then(function(result) {
    console.log("Resolved:", result);
    return result * 2;
  })
  .then(function(doubled) {
    console.log("Doubled:", doubled);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });`,
wrong: `Functon promisChain() {
  retun New Promse(functon(Resolvе, Rejct) {
    let Valu = 10
    IF (Valu > 5) {
      Resolvе(Valu)
    } Else {
      Rejct("Too small")
    }
  })
}
promisChain()
  .Thn(functon(Reslt) {
    consol.log("Resolved:" Reslt)
    retun Reslt * 2
  })
  .Thn(functon(Doubld) {
    Console.log("Doubled:", Doubld)
  })
  .Cach(functon(Errr) {
    console.Log("Error:", Errr)
  })`,
totalMistakes: 46,
hint: "Fix: Functon→function, promisChain→promiseChain, retun→return, New→new, Promse→Promise, functon→function, Resolvе→resolve, Rejct→reject, Valu→value, IF→if, Else→else, Thn→then, Reslt→result, consol→console, missing comma in console.log, Doubld→doubled, Console→console, Cach→catch, Errr→error, console.Log→console.log, missing semicolons."
},


// ── H123 ──
{
correct: `function getType(value) {
  return typeof value;
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function isString(value) {
  return typeof value === "string";
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
console.log(getType(42));
console.log(getType("hello"));
console.log(getType(true));
console.log(getType(null));
console.log(isNumber(42));
console.log(isNumber("42"));
console.log(isString("hello"));
console.log(isObject({ a: 1 }));
console.log(isObject(null));`,
wrong: `Functon getTyp(Valu) {
  retun typof Valu
}
functon isNumbr(Valu) {
  retun typof Valu === "number" && !isNan(Valu)
}
functon isStrig(Valu) {
  retun typof Valu === "string"
}
functon isObjct(Valu) {
  retun typof Valu === "object" && Valu !== Nul
}
consol.log(getTyp(42))
Console.log(getTyp("hello"))
console.Log(getTyp(Treu))
console.log(getTyp(Nul))
consol.log(isNumbr(42))
Console.log(isNumbr("42"))
console.Log(isStrig("hello"))
console.log(isObjct({ a: 1 }))
consol.log(isObjct(Nul);`,
totalMistakes: 47,
hint: "Fix: Functon→function, getTyp→getType, Valu→value, retun→return, typof→typeof, functon→function, isNumbr→isNumber, isNan→isNaN, isStrig→isString, isObjct→isObject, Nul→null, consol→console, Console→console, console.Log→console.log, Treu→true, missing semicolons, missing closing parenthesis."
},


// ── H124 ──
{
correct: `function makeCounter(start) {
  let count = start || 0;
  return {
    increment: function() { count++; return count; },
    decrement: function() { count--; return count; },
    reset: function() { count = start || 0; return count; },
    getCount: function() { return count; }
  };
}
let counter1 = makeCounter(0);
let counter2 = makeCounter(10);
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter2.increment());
console.log(counter2.reset());
console.log(counter1.getCount());`,
wrong: `Functon makCountr(Strt) {
  let Cnt = Strt || 0
  retun {
    Incremnt: functon() { Cnt++; Retrun Cnt },
    Decremnt: functon() { Cnt--; retun Cnt },
    Rese: functon() { Cnt = Strt || 0; Retrun Cnt },
    getConnt: functon() { retun Cnt }
  }
}
Let Countr1 = makCountr(0)
Let Countr2 = makCountr(10)
consol.log(Countr1.Incremnt())
Console.log(Countr1.Incremnt())
console.Log(Countr1.Decremnt())
console.log(Countr2.Incremnt())
consol.log(Countr2.Rese())
Console.log(Countr1.getConnt();`,
totalMistakes: 46,
hint: "Fix: Functon→function, makCountr→makeCounter, Strt→start, Cnt→count, retun→return, Incremnt→increment, functon→function, Retrun→return, Decremnt→decrement, Rese→reset, getConnt→getCount, Let→let, Countr1→counter1, Countr2→counter2, consol→console, Console→console, console.Log→console.log, missing semicolons, missing closing parenthesis."
},


// ── H125 ──
{
correct: `function groupBy(arr, key) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let group = arr[i][key];
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(arr[i]);
  }
  return result;
}
function countBy(arr, key) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    let group = arr[i][key];
    counts[group] = (counts[group] || 0) + 1;
  }
  return counts;
}
let people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Umar", city: "Lahore" }
];
console.log(groupBy(people, "city"));
console.log(countBy(people, "city"));`,
wrong: `Functon grupBy(Arr, Ky) {
  let Reslt = {}
  For (let i = 0 i < Arr.Lenght; i++) {
    let Grup = Arr[i][Ky]
    IF (!Reslt[Grup]) {
      Reslt[Grup] = []
    }
    Reslt[Grup].Pus(Arr[i])
  }
  Retrun Reslt
}
functon countBy(Arr, Ky) {
  let Counts = {}
  For (let i = 0 i < Arr.Lenght; i++) {
    let Grup = Arr[i][Ky]
    Counts[Grup] = (Counts[Grup] || 0) + 1
  }
  retun Counts
}
let Peopl = [
  { Nme: "Ali", Cty: "Lahore" }
  { Nme: "Sara", Cty: "Karachi" }
  { Nme: "Umar", Cty: "Lahore" }
]
consol.log(grupBy(Peopl, "city"))
Console.log(countBy(Peopl, "city");`,
totalMistakes: 48,
hint: "Fix: Functon→function, grupBy→groupBy, Arr→arr, Ky→key, Reslt→result, For→for, missing semicolons in for loops, Lenght→length, Grup→group, IF→if, Pus→push, Retrun→return, functon→function, Counts→counts, retun→return, Peopl→people, Nme→name, Cty→city, missing commas after array objects, consol→console, Console→console, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 15 paragraphs (H126 - H140)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/


// ── H126 ──
{
correct: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}
let nums = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(nums));
let nums2 = [5, 3, 1, 4, 2];
console.log(quickSort(nums2));`,
wrong: `Functon qickSort(Arr) {
  IF (Arr.Lenght <= 1) {
    retun Arr
  }
  let Pivt = Arr[0]
  let Lft = []
  let Rght = []
  For (let i = 1 i < Arr.Lenght; i++) {
    IF (Arr[i] < Pivt) {
      Lft.Pus(Arr[i])
    } Else {
      Rght.Pus(Arr[i])
    }
  }
  retun qickSort(Lft).concate([Pivt]).concate(qickSort(Rght))
}
Let Nums = [3, 6, 8, 10, 1, 2, 1]
consol.log(qickSort(Nums))
Let Nums2 = [5, 3, 1, 4, 2]
Console.log(qickSort(Nums2);`,
totalMistakes: 46,
hint: "Fix: Functon→function, qickSort→quickSort, Arr→arr, IF→if, Lenght→length, retun→return, Pivt→pivot, Lft→left, Rght→right, For→for, missing semicolon in for loop, Pus→push, Else→else, concate→concat, Let→let, Nums→nums, consol→console, Nums2→nums2, Console→console, missing semicolons, missing closing parenthesis."
},


// ── H127 ──
{
correct: `class HashMap {
  constructor() {
    this.map = {};
    this.size = 0;
  }
  set(key, value) {
    if (!this.map[key]) {
      this.size++;
    }
    this.map[key] = value;
  }
  get(key) {
    return this.map[key];
  }
  has(key) {
    return this.map[key] !== undefined;
  }
  delete(key) {
    if (this.map[key]) {
      delete this.map[key];
      this.size--;
    }
  }
  getSize() {
    return this.size;
  }
}
let hm = new HashMap();
hm.set("name", "Ali");
hm.set("age", 25);
console.log(hm.get("name"));
console.log(hm.has("age"));
console.log(hm.getSize());`,
wrong: `Clas HashMp {
  Constructr() {
    this.Mp = {}
    this.Siz = 0
  }
  Se(Ky, Valu) {
    IF (!this.Mp[Ky]) {
      this.Siz++
    }
    this.Mp[Ky] = Valu
  }
  Ge(Ky) {
    Retrun this.Mp[Ky]
  }
  Has(Ky) {
    retun this.Mp[Ky] !== Undefind
  }
  Delet(Ky) {
    IF (this.Mp[Ky]) {
      delet this.Mp[Ky]
      this.Siz--
    }
  }
  getSiz() {
    Retrun this.Siz
  }
}
Let Hm = New HashMp()
Hm.Se("name", "Ali")
Hm.Se("age", 25)
consol.log(Hm.Ge("name"))
Console.log(Hm.Has("age"))
console.Log(Hm.getSiz();`,
totalMistakes: 48,
hint: "Fix: Clas→class, HashMp→HashMap, Constructr→constructor, Mp→map, Siz→size, Se→set, Ky→key, Valu→value, IF→if, Ge→get, Retrun→return, Has→has, retun→return, Undefind→undefined, Delet→delete, delet→delete, getSiz→getSize, Let→let, Hm→hm, New→new, missing semicolons, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H128 ──
{
correct: `function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(countVowels("Hello World"));`,
wrong: `Functon longstCommnPrefix(Strs) {
  IF (Strs.Lenght === 0) retun ""
  let Prefx = Strs[0]
  For (let i = 1 i < Strs.Lenght; i++) {
    Whle (Strs[i].indexof(Prefx) !== 0) {
      Prefx = Prefx.Slce(0, Prefx.Lenght - 1)
      IF (Prefx === "") retun ""
    }
  }
  Retrun Prefx
}
functon countVowls(Str) {
  let Vowls = "aeiou"
  let Cnt = 0
  For (let i = 0 i < Str.Lenght; i++) {
    IF (Vowls.indexof(Str[i].toLowercase()) !== -1) {
      Cnt++
    }
  }
  retun Cnt
}
consol.log(longstCommnPrefix(["flower", "flow", "flight"]))
Console.log(countVowls("Hello World");`,
totalMistakes: 47,
hint: "Fix: Functon→function, longstCommnPrefix→longestCommonPrefix, Strs→strs, IF→if, Lenght→length, retun→return, Prefx→prefix, For→for, missing semicolons in for loops, Whle→while, indexof→indexOf, Slce→slice, Retrun→return, functon→function, countVowls→countVowels, Str→str, Vowls→vowels, Cnt→count, toLowercase→toLowerCase, consol→console, Console→console, missing closing parenthesis."
},


// ── H129 ──
{
correct: `class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.print();
console.log(s.peek());
console.log(s.size());
s.pop();
s.print();`,
wrong: `Clas Stck {
  Constructr() {
    this.Itms = []
  }
  Pus(Elemnt) {
    this.Itms.Pus(Elemnt)
  }
  Pop() {
    IF (this.isEmty()) {
      retun "Underflow"
    }
    Retrun this.Itms.Pop()
  }
  Pek() {
    Retrun this.Itms[this.Itms.Lenght - 1]
  }
  isEmty() {
    retun this.Itms.Lenght === 0
  }
  Siz() {
    retun this.Itms.Lenght
  }
  Prnt() {
    consol.log(this.Itms)
  }
}
Let S = New Stck()
S.Pus(10)
S.Pus(20)
S.Pus(30)
S.Prnt()
Console.log(S.Pek())
console.Log(S.Siz())
S.Pop()
S.Prnt(;`,
totalMistakes: 48,
hint: "Fix: Clas→class, Stck→Stack, Constructr→constructor, Itms→items, Pus→push, Elemnt→element, Pop→pop (method names), IF→if, isEmty→isEmpty, retun→return, Retrun→return, Pek→peek, Lenght→length, Siz→size, Prnt→print, consol→console, Let→let, S→s, New→new, Console→console, console.Log→console.log, missing semicolons, missing closing parenthesis."
},


// ── H130 ──
{
correct: `function findDuplicates(arr) {
  let seen = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      duplicates.push(arr[i]);
    } else {
      seen[arr[i]] = true;
    }
  }
  return duplicates;
}
function removeDuplicates(arr) {
  let unique = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      unique.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return unique;
}
let arr = [1, 2, 3, 2, 4, 3, 5];
console.log(findDuplicates(arr));
console.log(removeDuplicates(arr));`,
wrong: `Functon findDuplcts(Arr) {
  let Sn = {}
  let Duplcts = []
  For (let i = 0 i < Arr.Lenght; i++) {
    IF (Sn[Arr[i]]) {
      Duplcts.Pus(Arr[i])
    } Else {
      Sn[Arr[i]] = Treu
    }
  }
  Retrun Duplcts
}
functon removDuplcts(Arr) {
  let Uniq = []
  let Sn = {}
  For (let i = 0 i < Arr.Lenght; i++) {
    IF (!Sn[Arr[i]]) {
      Uniq.Pus(Arr[i])
      Sn[Arr[i]] = Treu
    }
  }
  retun Uniq
}
Let Arr = [1, 2, 3, 2, 4, 3, 5]
consol.log(findDuplcts(Arr))
Console.log(removDuplcts(Arr);`,
totalMistakes: 46,
hint: "Fix: Functon→function, findDuplcts→findDuplicates, Arr→arr, Sn→seen, Duplcts→duplicates, For→for, missing semicolons in for loops, Lenght→length, IF→if, Pus→push, Else→else, Treu→true, Retrun→return, functon→function, removDuplcts→removeDuplicates, Uniq→unique, retun→return, Let→let, consol→console, Console→console, missing closing parenthesis."
},


// ── H131 ──
{
correct: `function parseJSON(str) {
  try {
    let result = JSON.parse(str);
    return result;
  } catch (error) {
    return null;
  }
}
function stringifyJSON(obj) {
  try {
    let result = JSON.stringify(obj, null, 2);
    return result;
  } catch (error) {
    return "Error";
  }
}
let jsonStr = '{"name":"Ali","age":25}';
let parsed = parseJSON(jsonStr);
console.log(parsed);
console.log(parsed.name);
let obj = { city: "Lahore", country: "Pakistan" };
let str = stringifyJSON(obj);
console.log(str);`,
wrong: `Functon parseJSN(Str) {
  Tri {
    let Reslt = JSON.Pars(Str)
    Retrun Reslt
  } Cach (Errr) {
    retun Nul
  }
}
functon stringfyJSON(Obj) {
  Tri {
    let Reslt = JSON.Stringfy(Obj, Nul, 2)
    retun Reslt
  } Cach (Errr) {
    retun "Error"
  }
}
let jsonStr = '{"name":"Ali","age":25}'
let Parsd = parseJSN(jsonStr)
consol.log(Parsd)
Console.log(Parsd.Nme)
let Obj = { cty: "Lahore", cuntry: "Pakistan" }
let Str = stringfyJSON(Obj)
console.Log(Str;`,
totalMistakes: 47,
hint: "Fix: Functon→function, parseJSN→parseJSON, Str→str, Tri→try, Reslt→result, JSON.Pars→JSON.parse, Retrun→return, Cach→catch, Errr→error, retun→return, Nul→null, functon→function, stringfyJSON→stringifyJSON, Obj→obj, JSON.Stringfy→JSON.stringify, Parsd→parsed, consol→console, Console→console, Parsd.Nme→parsed.name, cty→city, cuntry→country, console.Log→console.log, missing semicolons, missing closing parenthesis."
},


// ── H132 ──
{
correct: `function throttleAsync(func, limit) {
  let queue = [];
  let running = false;
  function runNext() {
    if (queue.length === 0) {
      running = false;
      return;
    }
    running = true;
    let next = queue.shift();
    next();
    setTimeout(runNext, limit);
  }
  return function(task) {
    queue.push(task);
    if (!running) {
      runNext();
    }
  };
}
function task1() { console.log("Task 1"); }
function task2() { console.log("Task 2"); }
function task3() { console.log("Task 3"); }
let run = throttleAsync(function() {}, 500);
run(task1);
run(task2);
run(task3);`,
wrong: `Functon throtlAsync(Func, Limt) {
  let Que = []
  let Runng = Flase
  functon runNxt() {
    IF (Que.Lenght === 0) {
      Runng = Flase
      retun
    }
    Runng = Treu
    let Nxt = Que.Shft()
    Nxt()
    setTimout(runNxt, Limt)
  }
  retun functon(Tsk) {
    Que.Pus(Tsk)
    IF (!Runng) {
      runNxt()
    }
  }
}
functon task1() { consol.log("Task 1") }
functon task2() { Console.log("Task 2") }
functon task3() { console.Log("Task 3") }
Let Run = throtlAsync(functon() {}, 500)
Run(task1)
Run(task2)
Run(task3;`,
totalMistakes: 46,
hint: "Fix: Functon→function, throtlAsync→throttleAsync, Func→func, Limt→limit, Que→queue, Runng→running, Flase→false, functon→function, runNxt→runNext, IF→if, Lenght→length, retun→return, Treu→true, Nxt→next, Shft→shift, setTimout→setTimeout, Tsk→task, Pus→push, consol→console, Console→console, console.Log→console.log, Let→let, Run→run, missing semicolons, missing closing parenthesis."
},


// ── H133 ──
{
correct: `class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }
  pop() {
    let top = this.stack.pop();
    if (top === this.getMin()) {
      this.minStack.pop();
    }
    return top;
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
}
let ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
console.log(ms.getMin());
ms.pop();
console.log(ms.top());`,
wrong: `Clas MinStck {
  Constructr() {
    this.Stck = []
    this.minStck = []
  }
  Pus(Val) {
    this.Stck.Pus(Val)
    IF (this.minStck.Lenght === 0 || Val <= this.getMin()) {
      this.minStck.Pus(Val)
    }
  }
  Pop() {
    let Tp = this.Stck.Pop()
    IF (Tp === this.getMin()) {
      this.minStck.Pop()
    }
    Retrun Tp
  }
  getMin() {
    Retrun this.minStck[this.minStck.Lenght - 1]
  }
  Tp() {
    retun this.Stck[this.Stck.Lenght - 1]
  }
}
Let Ms = New MinStck()
Ms.Pus(5)
Ms.Pus(3)
Ms.Pus(7)
consol.log(Ms.getMin())
Ms.Pop()
Console.log(Ms.Tp();`,
totalMistakes: 47,
hint: "Fix: Clas→class, MinStck→MinStack, Constructr→constructor, Stck→stack, minStck→minStack, Pus→push, Val→val, IF→if, Lenght→length, Pop→pop (method names), Tp→top (var and method), Retrun→return, retun→return, Let→let, Ms→ms, New→new, missing semicolons, consol→console, Console→console, missing closing parenthesis."
},


// ── H134 ──
{
correct: `function isBalanced(str) {
  let stack = [];
  let open = "({[";
  let close = ")}]";
  for (let i = 0; i < str.length; i++) {
    if (open.indexOf(str[i]) !== -1) {
      stack.push(str[i]);
    } else if (close.indexOf(str[i]) !== -1) {
      if (stack.length === 0) return false;
      let top = stack.pop();
      if (open.indexOf(top) !== close.indexOf(str[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isBalanced("({[]})"));
console.log(isBalanced("([)]"));
console.log(isBalanced("{[]}"));
console.log(isBalanced("(("));`,
wrong: `Functon isBalancd(Str) {
  let Stck = []
  let Opn = "({["
  let Cls = ")}]"
  For (let i = 0 i < Str.Lenght; i++) {
    IF (Opn.indexof(Str[i]) !== -1) {
      Stck.Pus(Str[i])
    } Else IF (Cls.indexof(Str[i]) !== -1) {
      IF (Stck.Lenght === 0) retun Flase
      let Tp = Stck.Pop()
      IF (Opn.indexof(Tp) !== Cls.indexof(Str[i])) {
        retun Flase
      }
    }
  }
  Retrun Stck.Lenght === 0
}
consol.log(isBalancd("({[]})"))
Console.log(isBalancd("([)]"))
console.Log(isBalancd("{[]}"))
console.log(isBalancd("((";`,
totalMistakes: 46,
hint: "Fix: Functon→function, isBalancd→isBalanced, Str→str, Stck→stack, Opn→open, Cls→close, For→for, missing semicolons in for loop, Lenght→length, IF→if, indexof→indexOf, Pus→push, Else→else, retun→return, Flase→false, Tp→top, Stck.Pop→stack.pop, Retrun→return, consol→console, Console→console, console.Log→console.log, missing closing parentheses."
},


// ── H135 ──
{
correct: `function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
function makeMultiplier(x) {
  return function(y) {
    return x * y;
  };
}
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}
let add5 = makeAdder(5);
let double = makeMultiplier(2);
let add5ThenDouble = compose(double, add5);
console.log(add5(3));
console.log(double(4));
console.log(add5ThenDouble(3));
let triple = makeMultiplier(3);
console.log(triple(7));`,
wrong: `Functon makeAddr(X) {
  retun functon(Y) {
    Retrun X + Y
  }
}
functon makeMutiplr(X) {
  retun functon(Y) {
    retun X * Y
  }
}
functon Compos(F, G) {
  retun functon(X) {
    Retrun F(G(X))
  }
}
Let add5 = makeAddr(5)
Let Doubl = makeMutiplr(2)
Let add5ThnDoubl = Compos(Doubl, add5)
consol.log(add5(3))
Console.log(Doubl(4))
console.Log(add5ThnDoubl(3))
Let Tripl = makeMutiplr(3)
console.log(Tripl(7);`,
totalMistakes: 45,
hint: "Fix: Functon→function, makeAddr→makeAdder, X/Y→x/y, retun→return, functon→function, Retrun→return, makeMutiplr→makeMultiplier, Compos→compose, F/G→f/g, Let→let, Doubl→double, add5ThnDoubl→add5ThenDouble, consol→console, Console→console, console.Log→console.log, Tripl→triple, missing semicolons, missing closing parenthesis."
},


// ── H136 ──
{
correct: `class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }
  hasVertex(vertex) {
    return this.adjacencyList[vertex] !== undefined;
  }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("B", "C");
console.log(g.getNeighbors("B"));
console.log(g.hasVertex("A"));`,
wrong: `Clas Grph {
  Constructr() {
    this.adjLst = {}
  }
  addVrtx(Vrtx) {
    IF (!this.adjLst[Vrtx]) {
      this.adjLst[Vrtx] = []
    }
  }
  addEdg(V1, V2) {
    this.adjLst[V1].Pus(V2)
    this.adjLst[V2].Pus(V1)
  }
  getNighbrs(Vrtx) {
    Retrun this.adjLst[Vrtx]
  }
  hasVrtx(Vrtx) {
    retun this.adjLst[Vrtx] !== Undefind
  }
}
Let G = New Grph()
G.addVrtx("A")
G.addVrtx("B")
G.addVrtx("C")
G.addEdg("A", "B")
G.addEdg("B", "C")
consol.log(G.getNighbrs("B"))
Console.log(G.hasVrtx("A");`,
totalMistakes: 47,
hint: "Fix: Clas→class, Grph→Graph, Constructr→constructor, adjLst→adjacencyList, addVrtx→addVertex, Vrtx→vertex, IF→if, addEdg→addEdge, V1/V2→v1/v2, Pus→push, getNighbrs→getNeighbors, Retrun→return, hasVrtx→hasVertex, retun→return, Undefind→undefined, Let→let, G→g, New→new, missing semicolons, consol→console, Console→console, missing closing parenthesis."
},


// ── H137 ──
{
correct: `function trie() {
  let root = {};
  function insert(word) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true;
  }
  function search(word) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return node.isEnd === true;
  }
  return { insert, search };
}
let t = trie();
t.insert("apple");
t.insert("app");
console.log(t.search("apple"));
console.log(t.search("app"));
console.log(t.search("ap"));`,
wrong: `Functon Trie() {
  let Rot = {}
  functon Insrt(Wrd) {
    let Nod = Rot
    For (let i = 0 i < Wrd.Lenght; i++) {
      let Chr = Wrd[i]
      IF (!Nod[Chr]) {
        Nod[Chr] = {}
      }
      Nod = Nod[Chr]
    }
    Nod.isEnd = Treu
  }
  functon Serch(Wrd) {
    let Nod = Rot
    For (let i = 0 i < Wrd.Lenght; i++) {
      let Chr = Wrd[i]
      IF (!Nod[Chr]) retun Flase
      Nod = Nod[Chr]
    }
    retun Nod.isEnd === Treu
  }
  retun { Insrt, Serch }
}
Let T = Trie()
T.Insrt("apple")
T.Insrt("app")
consol.log(T.Serch("apple"))
Console.log(T.Serch("app"))
console.Log(T.Serch("ap");`,
totalMistakes: 48,
hint: "Fix: Functon→function, Trie→trie, Rot→root, functon→function, Insrt→insert, Wrd→word, Nod→node, For→for, missing semicolons in for loops, Lenght→length, Chr→char, IF→if, Treu→true, Serch→search, retun→return, Flase→false, Let→let, T→t, missing semicolons, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H138 ──
{
correct: `function asyncWaterfall(tasks, callback) {
  let index = 0;
  function next(err, result) {
    if (err) {
      callback(err);
      return;
    }
    if (index >= tasks.length) {
      callback(null, result);
      return;
    }
    let task = tasks[index];
    index++;
    task(result, next);
  }
  next(null, undefined);
}
asyncWaterfall([
  function(data, next) { next(null, data + 1); },
  function(data, next) { next(null, data * 2); },
  function(data, next) { next(null, data - 3); }
], function(err, result) {
  console.log(result);
});`,
wrong: `Functon asyncWaterfal(Tsks, Callbck) {
  let Indx = 0
  functon Nxt(Err, Reslt) {
    IF (Err) {
      Callbck(Err)
      retun
    }
    IF (Indx >= Tsks.Lenght) {
      Callbck(Nul, Reslt)
      retun
    }
    let Tsk = Tsks[Indx]
    Indx++
    Tsk(Reslt, Nxt)
  }
  Nxt(Nul, Undefind)
}
asyncWaterfal([
  functon(Dat, Nxt) { Nxt(Nul, Dat + 1) },
  functon(Dat, Nxt) { Nxt(Nul, Dat * 2) },
  functon(Dat, Nxt) { Nxt(Nul, Dat - 3) }
], functon(Err, Reslt) {
  consol.log(Reslt)
};`,
totalMistakes: 46,
hint: "Fix: Functon→function, asyncWaterfal→asyncWaterfall, Tsks→tasks, Callbck→callback, Indx→index, functon→function, Nxt→next (inner function), Err→err, Reslt→result, IF→if, retun→return, Lenght→length, Nul→null, Tsk→task, Undefind→undefined, Dat→data, consol→console, missing semicolons, missing closing parenthesis."
},


// ── H139 ──
{
correct: `class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  sort() {
    this.values.sort(function(a, b) {
      return a.priority - b.priority;
    });
  }
  dequeue() {
    return this.values.shift();
  }
  peek() {
    return this.values[0];
  }
  isEmpty() {
    return this.values.length === 0;
  }
}
let pq = new PriorityQueue();
pq.enqueue("low task", 3);
pq.enqueue("high task", 1);
pq.enqueue("mid task", 2);
console.log(pq.peek());
console.log(pq.dequeue());
console.log(pq.isEmpty());`,
wrong: `Clas PrioritiQue {
  Constructr() {
    this.Vals = []
  }
  Enqueu(Val, Priorit) {
    this.Vals.Pus({ Val, Priorit })
    this.Srt()
  }
  Srt() {
    this.Vals.Srt(functon(A, B) {
      retun A.Priorit - B.Priorit
    })
  }
  Dequeu() {
    Retrun this.Vals.Shft()
  }
  Pek() {
    retun this.Vals[0]
  }
  isEmty() {
    retun this.Vals.Lenght === 0
  }
}
Let Pq = New PrioritiQue()
Pq.Enqueu("low task", 3)
Pq.Enqueu("high task", 1)
Pq.Enqueu("mid task", 2)
consol.log(Pq.Pek())
Console.log(Pq.Dequeu())
console.Log(Pq.isEmty();`,
totalMistakes: 48,
hint: "Fix: Clas→class, PrioritiQue→PriorityQueue, Constructr→constructor, Vals→values, Enqueu→enqueue, Val→val, Priorit→priority, Pus→push, Srt→sort (method names), functon→function, A/B→a/b, retun→return, Dequeu→dequeue, Retrun→return, Shft→shift, Pek→peek, isEmty→isEmpty, Lenght→length, Let→let, Pq→pq, New→new, missing semicolons, consol→console, Console→console, console.Log→console.log, missing closing parenthesis."
},


// ── H140 ──
{
correct: `function observerPattern() {
  let subscribers = {};
  function subscribe(event, callback) {
    if (!subscribers[event]) {
      subscribers[event] = [];
    }
    subscribers[event].push(callback);
  }
  function publish(event, data) {
    if (!subscribers[event]) return;
    for (let i = 0; i < subscribers[event].length; i++) {
      subscribers[event][i](data);
    }
  }
  function unsubscribe(event, callback) {
    if (!subscribers[event]) return;
    subscribers[event] = subscribers[event].filter(function(cb) {
      return cb !== callback;
    });
  }
  return { subscribe, publish, unsubscribe };
}
let obs = observerPattern();
obs.subscribe("click", function(d) { console.log("Handler 1:", d); });
obs.subscribe("click", function(d) { console.log("Handler 2:", d); });
obs.publish("click", "button pressed");`,
wrong: `Functon observrPattrn() {
  let Subscrbs = {}
  functon Subscrbe(Evnt, Callbck) {
    IF (!Subscrbs[Evnt]) {
      Subscrbs[Evnt] = []
    }
    Subscrbs[Evnt].Pus(Callbck)
  }
  functon Publsh(Evnt, Dat) {
    IF (!Subscrbs[Evnt]) retun
    For (let i = 0 i < Subscrbs[Evnt].Lenght; i++) {
      Subscrbs[Evnt][i](Dat)
    }
  }
  functon Unsuscrbe(Evnt, Callbck) {
    IF (!Subscrbs[Evnt]) retun
    Subscrbs[Evnt] = Subscrbs[Evnt].filtr(functon(Cb) {
      retun Cb !== Callbck
    })
  }
  retun { Subscrbe, Publsh, Unsuscrbe }
}
Let Obs = observrPattrn()
Obs.Subscrbe("click", functon(D) { consol.log("Handler 1:", D) })
Obs.Subscrbe("click", functon(D) { Console.log("Handler 2:", D) })
Obs.Publsh("click", "button pressed";`,
totalMistakes: 49,
hint: "Fix: Functon→function, observrPattrn→observerPattern, Subscrbs→subscribers, functon→function, Subscrbe→subscribe, Evnt→event, Callbck→callback, IF→if, Pus→push, Publsh→publish, Dat→data, retun→return, For→for, missing semicolons, Lenght→length, Unsuscrbe→unsubscribe, filtr→filter, Cb→cb, Obs→obs, Let→let, D→d, consol→console, Console→console, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 35 paragraphs (H141 - H175)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/


// ── H141 ──
{
correct: `function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}
function averageArray(arr) {
  let sum = sumArray(arr);
  return sum / arr.length;
}
let numbers = [10, 20, 30, 40, 50];
let total = sumArray(numbers);
let average = averageArray(numbers);
console.log("Total:", total);
console.log("Average:", average);
console.log(numbers.length);`,
wrong: `Functon sumArry(arr) {
  Let totl = 0
  For (let i = 0 i < arr.Lenght; i++) {
    totl = totl + arr[i]
  }
  Retrun totl;
}
functon avergeArray(arr) {
  let Som = sumArry(arr)
  retun Som / arr.Lenght;
}
let Numbrs = [10, 20, 30, 40, 50]
let Totl = sumArry(Numbrs)
let Avrge = avergeArray(Numbrs)
consol.log("Total:" Totl);
Console.log("Average:", Avrge)
console.Log(Numbrs.Lenght;`,
totalMistakes: 47,
hint: "Fix: Functon→function, sumArry→sumArray, Let→let, totl→total, For→for, missing semicolon in for loop, arr.Lenght→arr.length, missing semicolons, Retrun→return, functon→function, avergeArray→averageArray, Som→sum, retun→return, Numbrs→numbers, Totl→total, Avrge→average, consol.log, missing comma in console.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H142 ──
{
correct: `class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());`,
wrong: `Clas Stck {
  Constructr() {
    this.Itms = []
  }
  Psh(elemnt) {
    this.Itms.Pus(elemnt)
  }
  Pop() {
    IF (this.Itms.Lenght === 0) {
      retun "Stack is empty"
    }
    Retrun this.Itms.Pop()
  }
  Pek() {
    retun this.Itms[this.Itms.Lenght - 1]
  }
  IsEmpty() {
    Retrun this.Itms.Lenght === 0
  }
}
Let Stk = New Stck()
Stk.Psh(10)
Stk.Psh(20)
Stk.Psh(30)
consol.log(Stk.Pek())
Console.log(Stk.Pop())
console.Log(Stk.IsEmpty();`,
totalMistakes: 48,
hint: "Fix: Clas→class, Stck→Stack, Constructr→constructor, Itms→items, Psh→push, Pus→push, IF→if, Lenght→length, retun→return, missing semicolons, Retrun→return, Pop→pop (method call), Pek→peek, IsEmpty→isEmpty, Let→let, Stk→stack, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H143 ──
{
correct: `function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
let result1 = fibonacci(5);
let result2 = fibonacci(10);
let result3 = fibonacci(0);
console.log(result1);
console.log(result2);
console.log(result3);`,
wrong: `Functon fibonci(n) {
  IF (n <= 0) retun 0
  IF (n === 1) Retrun 1
  let A = 0
  Let B = 1
  For (let i = 2 i <= n; i++) {
    let Tmp = A + B
    A = B
    B = Tmp
  }
  retun B;
}
let Rslt1 = fibonci(5)
let Rslt2 = fibonci(10)
Let Rslt3 = fibonci(0)
consol.log(Rslt1)
Console.log(Rslt2)
console.Log(Rslt3;`,
totalMistakes: 46,
hint: "Fix: Functon→function, fibonci→fibonacci, IF→if, retun→return, missing semicolons, Retrun→return, A→a, B→b, Let→let, For→for, missing semicolon in for loop, Tmp→temp, Rslt1→result1, Rslt2→result2, Rslt3→result3, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H144 ──
{
correct: `const obj = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "white"
};
function describecar(car) {
  return car.brand + " " + car.model + " (" + car.year + ")";
}
let description = describeCar(obj);
console.log(description);
obj.color = "black";
console.log(obj.color);
let keys = Object.keys(obj);
let values = Object.values(obj);
console.log(keys);
console.log(values);`,
wrong: `Const Obj = {
  Brnd: "Toyota",
  Modl: "Corolla",
  Yr: 2022
  colr: "white"
}
Functon describCar(car) {
  retun car.Brnd + " " + car.Modl + " (" + car.Yr + ")"
}
let Descr = describCar(Obj)
consol.log(Descr)
Obj.colr = "black"
Console.log(Obj.colr)
let Kys = Objct.keys(Obj)
let Vls = Objct.Values(Obj)
console.Log(Kys)
console.log(Vls;`,
totalMistakes: 45,
hint: "Fix: Const→const, Obj→obj, Brnd→brand, Modl→model, Yr→year, missing semicolon after year, colr→color, missing closing brace semicolon, Functon→function, describCar→describeCar, retun→return, Descr→description, consol.log, missing semicolons, Console→console, Kys→keys, Objct→Object, Vls→values, Object.Values→Object.values, console.Log, missing closing parenthesis."
},


// ── H145 ──
{
correct: `function removeduplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;
}
let nums = [1, 2, 2, 3, 3, 4];
let unique = removeDuplicates(nums);
console.log(unique);
let nested = [[1, 2], [3, 4], [5]];
console.log(flattenArray(nested));`,
wrong: `Functon removDuplictes(arr) {
  let Uniq = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (Uniq.IndexOf(arr[i]) === -1) {
      Uniq.Pus(arr[i])
    }
  }
  Retrun Uniq;
}
functon flatnArray(arr) {
  Let Rslt = []
  For (let i = 0 i < arr.Lenght; i++) {
    Rslt = Rslt.Conct(arr[i])
  }
  retun Rslt
}
let Nums = [1, 2, 2, 3, 3, 4]
let Uniq = removDuplictes(Nums)
consol.log(Uniq)
let Nestd = [[1, 2], [3, 4], [5]]
Console.log(flatnArray(Nestd);`,
totalMistakes: 48,
hint: "Fix: Functon→function, removDuplictes→removeDuplicates, Uniq→unique, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, IndexOf→indexOf, Pus→push, Retrun→return, functon→function, flatnArray→flattenArray, Let→let, Rslt→result, Conct→concat, retun→return, Nums→nums, consol.log, Console→console, missing closing parenthesis."
},


// ── H146 ──
{
correct: `class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
let queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.size());`,
wrong: `Clas Que {
  Constructr() {
    this.Itms = []
  }
  Enque(elemnt) {
    this.Itms.Pus(elemnt)
  }
  Deque() {
    IF (this.Itms.Lenght === 0) {
      retun "Queue is empty"
    }
    Retrun this.Itms.Shft()
  }
  Frnt() {
    retun this.Itms[0]
  }
  Sze() {
    Retrun this.Itms.Lenght
  }
}
let Que = New Que()
Que.Enque("first")
Que.Enque("second")
Que.Enque("third")
consol.log(Que.Frnt())
Console.log(Que.Deque())
console.Log(Que.Sze();`,
totalMistakes: 47,
hint: "Fix: Clas→class, Que→Queue (class name), Constructr→constructor, Itms→items, Enque→enqueue, Pus→push, IF→if, Lenght→length, retun→return, missing semicolons, Retrun→return, Shft→shift, Frnt→front, Sze→size, let Que→let queue, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H147 ──
{
correct: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
let sorted = [1, 3, 5, 7, 9, 11, 13];
let index1 = binarySearch(sorted, 7);
let index2 = binarySearch(sorted, 4);
console.log(index1);
console.log(index2);`,
wrong: `Functon binarySrch(arr, Targt) {
  Let Lft = 0
  let Rght = arr.Lenght - 1
  Whle (Lft <= Rght) {
    let Mid = Math.Flor((Lft + Rght) / 2)
    IF (arr[Mid] === Targt) retun Mid
    IF (arr[Mid] < Targt) Lft = Mid + 1
    Else Rght = Mid - 1
  }
  retun -1
}
Let Sortd = [1, 3, 5, 7, 9, 11, 13]
let Indx1 = binarySrch(Sortd, 7)
let Indx2 = binarySrch(Sortd, 4)
consol.log(Indx1)
Console.log(Indx2;`,
totalMistakes: 46,
hint: "Fix: Functon→function, binarySrch→binarySearch, Targt→target, Let→let, Lft→left, Rght→right, arr.Lenght→arr.length, Whle→while, Mid→mid, Math.Flor→Math.floor, IF→if, retun→return, Else→else, missing semicolons, Sortd→sorted, Indx1→index1, Indx2→index2, consol.log, Console→console, missing closing parenthesis."
},


// ── H148 ──
{
correct: `function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
  }
  return result.join(" ");
}
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}
let sentence = "hello world from javascript";
console.log(capitalizeWords(sentence));
console.log(truncateString(sentence, 10));`,
wrong: `Functon capitalzeWords(str) {
  let Wrds = str.Splt(" ")
  let Rslt = []
  For (let i = 0 i < Wrds.Lenght; i++) {
    let Wrd = Wrds[i]
    let capitlzed = Wrd[0].toUppercse() + Wrd.Slce(1)
    Rslt.Pus(capitlzed)
  }
  Retrun Rslt.Jon(" ");
}
functon truncteString(str, maxLenght) {
  IF (str.Lenght > maxLenght) {
    retun str.Slce(0, maxLenght) + "..."
  }
  retun str;
}
Let sentce = "hello world from javascript"
consol.log(capitalzeWords(sentce))
Console.log(truncteString(sentce, 10);`,
totalMistakes: 48,
hint: "Fix: Functon→function, capitalzeWords→capitalizeWords, Wrds→words, str.Splt→str.split, Rslt→result, For→for, missing semicolon in for loop, Wrds.Lenght→words.length, Wrd→word, capitlzed→capitalized, toUppercse→toUpperCase, Wrd.Slce→word.slice, Rslt.Pus→result.push, Retrun→return, Rslt.Jon→result.join, functon→function, truncteString→truncateString, maxLenght→maxLength, IF→if, str.Lenght→str.length, retun→return, str.Slce→str.slice, Let→let, sentce→sentence, consol.log, Console→console, missing closing parenthesis."
},


// ── H149 ──
{
correct: `class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance = this.balance - amount;
    return this.balance;
  }
  getBalance() {
    return this.balance;
  }
}
let account = new BankAccount("Ahmed", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.owner);`,
wrong: `Clas BankAccnt {
  Constructr(Ownr, Blnce) {
    this.Ownr = Ownr
    this.Blnce = Blnce
  }
  Deposet(Amnt) {
    this.Blnce = this.Blnce + Amnt
    Retrun this.Blnce
  }
  Withdrow(Amnt) {
    IF (Amnt > this.Blnce) {
      retun "Insufficient funds"
    }
    this.Blnce = this.Blnce - Amnt
    Retrun this.Blnce
  }
  getBlnce() {
    retun this.Blnce
  }
}
Let Accnt = New BankAccnt("Ahmed", 1000)
Accnt.Deposet(500)
Accnt.Withdrow(200)
consol.log(Accnt.getBlnce())
Console.log(Accnt.Ownr;`,
totalMistakes: 46,
hint: "Fix: Clas→class, BankAccnt→BankAccount, Constructr→constructor, Ownr→owner, Blnce→balance, Deposet→deposit, Amnt→amount, Retrun→return, missing semicolons, Withdrow→withdraw, IF→if, retun→return, getBlnce→getBalance, Let→let, Accnt→account, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H150 ──
{
correct: `function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let data = [3, 1, 4, 1, 5, 9, 2, 6, 1];
console.log(countOccurrences(data, 1));
console.log(findMin(data));`,
wrong: `Functon countOccurncs(arr, Valu) {
  let coutn = 0
  For (let i = 0 i < arr.Lenght; i++) {
    IF (arr[i] === Valu) {
      coutn++
    }
  }
  Retrun coutn;
}
functon findMn(arr) {
  Let Mn = arr[0]
  For (let i = 1 i < arr.Lenght; i++) {
    IF (arr[i] < Mn) {
      Mn = arr[i]
    }
  }
  retun Mn
}
Let Dat = [3, 1, 4, 1, 5, 9, 2, 6, 1]
consol.log(countOccurncs(Dat, 1))
Console.log(findMn(Dat);`,
totalMistakes: 46,
hint: "Fix: Functon→function, countOccurncs→countOccurrences, Valu→value, coutn→count, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Retrun→return, functon→function, findMn→findMin, Let→let, Mn→min, retun→return, Dat→data, consol.log, Console→console, missing closing parenthesis."
},


// ── H151 ──
{
correct: `function mergeObjects(obj1, obj2) {
  let result = {};
  let keys1 = Object.keys(obj1);
  for (let i = 0; i < keys1.length; i++) {
    result[keys1[i]] = obj1[keys1[i]];
  }
  let keys2 = Object.keys(obj2);
  for (let i = 0; i < keys2.length; i++) {
    result[keys2[i]] = obj2[keys2[i]];
  }
  return result;
}
let person1 = { name: "Ali", age: 25 };
let person2 = { city: "Lahore", job: "Dev" };
let merged = mergeObjects(person1, person2);
console.log(merged);
console.log(merged.name);
console.log(merged.city);`,
wrong: `Functon mergeObjcts(obj1, obj2) {
  let Rslt = {}
  let Kys1 = Objct.keys(obj1)
  For (let i = 0 i < Kys1.Lenght; i++) {
    Rslt[Kys1[i]] = obj1[Kys1[i]]
  }
  let Kys2 = Objct.keys(obj2)
  For (let i = 0 i < Kys2.Lenght; i++) {
    Rslt[Kys2[i]] = obj2[Kys2[i]]
  }
  Retrun Rslt;
}
Let persn1 = { Nam: "Ali", Ag: 25 }
let persn2 = { Cty: "Lahore", Jb: "Dev" }
let Mergd = mergeObjcts(persn1, persn2)
consol.log(Mergd)
Console.log(Mergd.Nam)
console.Log(Mergd.Cty;`,
totalMistakes: 47,
hint: "Fix: Functon→function, mergeObjcts→mergeObjects, Rslt→result, Kys1→keys1, Objct→Object, For→for, missing semicolons in for loops, Lenght→length, missing semicolons, Kys2→keys2, Retrun→return, Let→let, persn1→person1, Nam→name, Ag→age, persn2→person2, Cty→city, Jb→job, Mergd→merged, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H152 ──
{
correct: `function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/ /g, "");
  let reversed = "";
  for (let i = clean.length - 1; i >= 0; i--) {
    reversed = reversed + clean[i];
  }
  return clean === reversed;
}
function wordCount(str) {
  let words = str.split(" ");
  return words.length;
}
let test1 = "racecar";
let test2 = "hello";
let test3 = "A man a plan a canal Panama";
console.log(isPalindrome(test1));
console.log(isPalindrome(test2));
console.log(wordCount(test3));`,
wrong: `Functon isPalindrom(str) {
  let Cln = str.toLowerCse().replce(/ /g, "")
  let Revrd = ""
  For (let i = Cln.Lenght - 1; i >= 0; i--) {
    Revrd = Revrd + Cln[i]
  }
  Retrun Cln === Revrd;
}
functon wrdCount(str) {
  Let Wrds = str.Splt(" ")
  retun Wrds.Lenght
}
let Tst1 = "racecar"
Let Tst2 = "hello"
let Tst3 = "A man a plan a canal Panama"
consol.log(isPalindrom(Tst1))
Console.log(isPalindrom(Tst2))
console.Log(wrdCount(Tst3);`,
totalMistakes: 45,
hint: "Fix: Functon→function, isPalindrom→isPalindrome, Cln→clean, toLowerCse→toLowerCase, replce→replace, missing semicolons, Revrd→reversed, For→for, Cln.Lenght→clean.length, Retrun→return, functon→function, wrdCount→wordCount, Let→let, Wrds→words, str.Splt→str.split, retun→return, Wrds.Lenght→words.length, Tst1→test1, Tst2→test2, Tst3→test3, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H153 ──
{
correct: `class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    let node = { data: data, next: null };
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  getSize() {
    return this.size;
  }
}
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.getSize());`,
wrong: `Clas LnkdList {
  Constructr() {
    this.Hed = Nul
    this.Sze = 0
  }
  Ad(Dat) {
    let Nod = { Dat: Dat, Nxt: Nul }
    IF (this.Hed === Nul) {
      this.Hed = Nod
    } Else {
      let Currnt = this.Hed
      Whle (Currnt.Nxt !== Nul) {
        Currnt = Currnt.Nxt
      }
      Currnt.Nxt = Nod
    }
    this.Sze++
  }
  getSze() {
    Retrun this.Sze
  }
}
Let Lst = New LnkdList()
Lst.Ad(1)
Lst.Ad(2)
Lst.Ad(3)
consol.log(Lst.getSze();`,
totalMistakes: 48,
hint: "Fix: Clas→class, LnkdList→LinkedList, Constructr→constructor, Hed→head, Nul→null, Sze→size, Ad→add, Dat→data, Nod→node, Nxt→next, IF→if, Else→else, Currnt→current, Whle→while, missing semicolons, Retrun→return, getSze→getSize, Let→let, Lst→list, New→new, consol.log, missing closing parenthesis."
},


// ── H154 ──
{
correct: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let unsorted = [64, 34, 25, 12, 22, 11, 90];
let sorted = bubbleSort(unsorted);
console.log(sorted);
console.log(sorted[0]);
console.log(sorted[sorted.length - 1]);`,
wrong: `Functon bublSort(arr) {
  Let N = arr.Lenght
  For (let i = 0 i < N - 1; i++) {
    For (let j = 0 j < N - i - 1; j++) {
      IF (arr[j] > arr[j + 1]) {
        let Tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = Tmp
      }
    }
  }
  Retrun arr;
}
let Unsortd = [64, 34, 25, 12, 22, 11, 90]
let Sortd = bublSort(Unsortd)
consol.log(Sortd)
Console.log(Sortd[0])
console.Log(Sortd[Sortd.Lenght - 1];`,
totalMistakes: 46,
hint: "Fix: Functon→function, bublSort→bubbleSort, Let→let, N→n, arr.Lenght→arr.length, For→for, missing semicolons in for loops, IF→if, Tmp→temp, missing semicolons, Retrun→return, Unsortd→unsorted, Sortd→sorted, consol.log, Console→console, console.Log, Sortd.Lenght→sorted.length, missing closing parenthesis."
},


// ── H155 ──
{
correct: `function debounce(func, delay) {
  let timer = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, delay);
  };
}
function greet() {
  console.log("Hello!");
}
let debouncedGreet = debounce(greet, 300);
debouncedGreet();
debouncedGreet();
debouncedGreet();
console.log("Calls made");
console.log(typeof debouncedGreet);`,
wrong: `Functon debounc(Func, Dlay) {
  let Timr = Nul
  retun Functon() {
    IF (Timr !== Nul) {
      clearTimout(Timr)
    }
    Timr = setTimout(Func, Dlay)
  }
}
functon greet() {
  consol.log("Hello!")
}
let debouncedGret = debounc(greet, 300)
debouncedGret()
debouncedGret()
debouncedGret()
Console.log("Calls made")
console.Log(Typof debouncedGret;`,
totalMistakes: 45,
hint: "Fix: Functon→function, debounc→debounce, Func→func, Dlay→delay, Timr→timer, Nul→null, retun→return (missing semicolon on return), Functon→function (inner), IF→if, clearTimout→clearTimeout, setTimout→setTimeout, functon→function, consol.log, debouncedGret→debouncedGreet, missing semicolons, Console→console, console.Log, Typof→typeof, missing closing parenthesis."
},


// ── H156 ──
{
correct: `class Calculator {
  constructor() {
    this.history = [];
  }
  add(a, b) {
    let result = a + b;
    this.history.push("add: " + result);
    return result;
  }
  subtract(a, b) {
    let result = a - b;
    this.history.push("sub: " + result);
    return result;
  }
  multiply(a, b) {
    let result = a * b;
    this.history.push("mul: " + result);
    return result;
  }
  getHistory() {
    return this.history;
  }
}
let calc = new Calculator();
calc.add(5, 3);
calc.subtract(10, 4);
calc.multiply(2, 6);
console.log(calc.getHistory());`,
wrong: `Clas Calcultr {
  Constructr() {
    this.Hstry = []
  }
  Ad(A, B) {
    let Rslt = A + B
    this.Hstry.Pus("add: " + Rslt)
    Retrun Rslt
  }
  Subtrct(A, B) {
    let Rslt = A - B
    this.Hstry.Pus("sub: " + Rslt)
    retun Rslt
  }
  Multply(A, B) {
    Let Rslt = A * B
    this.Hstry.Pus("mul: " + Rslt)
    Retrun Rslt
  }
  getHstry() {
    retun this.Hstry
  }
}
Let Calc = New Calcultr()
Calc.Ad(5, 3)
Calc.Subtrct(10, 4)
Calc.Multply(2, 6)
consol.log(Calc.getHstry();`,
totalMistakes: 47,
hint: "Fix: Clas→class, Calcultr→Calculator, Constructr→constructor, Hstry→history, Ad→add, A→a, B→b, Rslt→result, Pus→push, Retrun→return, missing semicolons, Subtrct→subtract, retun→return, Multply→multiply, Let→let, getHstry→getHistory, Let→let, Calc→calc, New→new, consol.log, missing closing parenthesis."
},


// ── H157 ──
{
correct: `function groupBy(arr, key) {
  let groups = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let groupKey = item[key];
    if (groups[groupKey] === undefined) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
  }
  return groups;
}
let students = [
  { name: "Ali", grade: "A" },
  { name: "Sara", grade: "B" },
  { name: "Omar", grade: "A" }
];
let grouped = groupBy(students, "grade");
console.log(grouped);
console.log(grouped["A"].length);`,
wrong: `Functon grupBy(arr, Ky) {
  let Grps = {}
  For (let i = 0 i < arr.Lenght; i++) {
    let Itm = arr[i]
    let grupKy = Itm[Ky]
    IF (Grps[grupKy] === Undefind) {
      Grps[grupKy] = []
    }
    Grps[grupKy].Pus(Itm)
  }
  Retrun Grps
}
let studnts = [
  { Nam: "Ali", Grd: "A" }
  { Nam: "Sara", Grd: "B" },
  { Nam: "Omar", Grd: "A" }
]
let Grupd = grupBy(studnts, "grade")
consol.log(Grupd)
Console.log(Grupd["A"].Lenght;`,
totalMistakes: 48,
hint: "Fix: Functon→function, grupBy→groupBy, Ky→key, Grps→groups, For→for, missing semicolon in for loop, arr.Lenght→arr.length, Itm→item, grupKy→groupKey, IF→if, Undefind→undefined, Pus→push, missing semicolons, Retrun→return, studnts→students, Nam→name, Grd→grade, missing comma after first object, Grupd→grouped, consol.log, Console→console, Lenght→length, missing closing parenthesis."
},


// ── H158 ──
{
correct: `function throttle(func, limit) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}
let callCount = 0;
function increment() {
  callCount++;
}
let throttled = throttle(increment, 100);
throttled();
throttled();
throttled();
console.log(callCount);
console.log(typeof throttled);`,
wrong: `Functon throttl(Func, Limt) {
  let lastCll = 0
  retun Functon() {
    let Nw = Dte.now()
    IF (Nw - lastCll >= Limt) {
      lastCll = Nw
      Func()
    }
  }
}
let callCnt = 0
functon incremnt() {
  callCnt++
}
Let Thrtld = throttl(incremnt, 100)
Thrtld()
Thrtld()
Thrtld()
consol.log(callCnt)
Console.log(Typof Thrtld;`,
totalMistakes: 46,
hint: "Fix: Functon→function, throttl→throttle, Func→func, Limt→limit, lastCll→lastCall, retun→return, Functon→function (inner), Nw→now, Dte→Date, IF→if, missing semicolons, functon→function, incremnt→increment, callCnt→callCount, Let→let, Thrtld→throttled, throttl→throttle, consol.log, Console→console, Typof→typeof, missing closing parenthesis."
},


// ── H159 ──
{
correct: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  emit(event, data) {
    if (!this.events[event]) return;
    let listeners = this.events[event];
    for (let i = 0; i < listeners.length; i++) {
      listeners[i](data);
    }
  }
}
let emitter = new EventEmitter();
emitter.on("greet", function(name) {
  console.log("Hello, " + name);
});
emitter.emit("greet", "Ali");
emitter.emit("greet", "Sara");`,
wrong: `Clas EvntEmtr {
  Constructr() {
    this.Evnts = {}
  }
  On(Evnt, Lstnr) {
    IF (!this.Evnts[Evnt]) {
      this.Evnts[Evnt] = []
    }
    this.Evnts[Evnt].Pus(Lstnr)
  }
  Emit(Evnt, Dat) {
    IF (!this.Evnts[Evnt]) retun
    Let Lstnrs = this.Evnts[Evnt]
    For (let i = 0 i < Lstnrs.Lenght; i++) {
      Lstnrs[i](Dat)
    }
  }
}
Let emtr = New EvntEmtr()
emtr.On("greet", Functon(Nam) {
  consol.log("Hello, " + Nam)
})
emtr.Emit("greet", "Ali")
emtr.Emit("greet", "Sara";`,
totalMistakes: 47,
hint: "Fix: Clas→class, EvntEmtr→EventEmitter, Constructr→constructor, Evnts→events, On→on, Evnt→event, Lstnr→listener, IF→if, Pus→push, missing semicolons, Emit→emit, Dat→data, retun→return, Let→let, Lstnrs→listeners, For→for, missing semicolon in for loop, Lstnrs.Lenght→listeners.length, Let→let, emtr→emitter, New→new, Functon→function, Nam→name, consol.log, Emit→emit, missing closing parenthesis."
},


// ── H160 ──
{
correct: `function memoize(func) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    let result = func(n);
    cache[n] = result;
    return result;
  };
}
function slowSquare(n) {
  return n * n;
}
let fastSquare = memoize(slowSquare);
console.log(fastSquare(5));
console.log(fastSquare(5));
console.log(fastSquare(10));
console.log(fastSquare(10));`,
wrong: `Functon memoiz(Func) {
  let Cach = {}
  retun Functon(N) {
    IF (Cach[N] !== Undefind) {
      Retrun Cach[N]
    }
    let Rslt = Func(N)
    Cach[N] = Rslt
    Retrun Rslt
  }
}
functon slowSqre(N) {
  retun N * N
}
Let fastSqre = memoiz(slowSqre)
consol.log(fastSqre(5))
Console.log(fastSqre(5))
console.Log(fastSqre(10))
console.log(fastSqre(10);`,
totalMistakes: 46,
hint: "Fix: Functon→function, memoiz→memoize, Func→func, Cach→cache, retun→return, Functon→function (inner), N→n, IF→if, Undefind→undefined, Retrun→return, Rslt→result, missing semicolons, functon→function, slowSqre→slowSquare, Let→let, fastSqre→fastSquare, memoiz→memoize, slowSqre→slowSquare, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H161 ──
{
correct: `function parseCSV(csvString) {
  let lines = csvString.split("\n");
  let headers = lines[0].split(",");
  let result = [];
  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(",");
    let obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    result.push(obj);
  }
  return result;
}
let csv = "name,age\nAli,25\nSara,30";
let parsed = parseCSV(csv);
console.log(parsed);
console.log(parsed[0].name);`,
wrong: `Functon parsCSV(csvStirng) {
  let Lns = csvStirng.Splt("\n")
  let Hdrs = Lns[0].Splt(",")
  let Rslt = []
  For (let i = 1 i < Lns.Lenght; i++) {
    let Vls = Lns[i].Splt(",")
    let Obj = {}
    For (let j = 0 j < Hdrs.Lenght; j++) {
      Obj[Hdrs[j]] = Vls[j]
    }
    Rslt.Pus(Obj)
  }
  Retrun Rslt
}
let Csv = "name,age\nAli,25\nSara,30"
let Parsd = parsCSV(Csv)
consol.log(Parsd)
Console.log(Parsd[0].Nam;`,
totalMistakes: 47,
hint: "Fix: Functon→function, parsCSV→parseCSV, csvStirng→csvString, Lns→lines, Splt→split, Hdrs→headers, Rslt→result, For→for, missing semicolons in for loops, Lenght→length, Vls→values, Obj→obj, Pus→push, Retrun→return, missing semicolons, Csv→csv, Parsd→parsed, consol.log, Console→console, Nam→name, missing closing parenthesis."
},


// ── H162 ──
{
correct: `class ShoppingCart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }
  addItem(name, price, qty) {
    this.items.push({ name: name, price: price, qty: qty });
  }
  setDiscount(percent) {
    this.discount = percent;
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i].price * this.items[i].qty;
    }
    return total * (1 - this.discount / 100);
  }
}
let cart = new ShoppingCart();
cart.addItem("Book", 500, 2);
cart.addItem("Pen", 50, 5);
cart.setDiscount(10);
console.log(cart.getTotal());`,
wrong: `Clas ShpngCrt {
  Constructr() {
    this.Itms = []
    this.Discnt = 0
  }
  addItm(Nam, Prc, Qty) {
    this.Itms.Pus({ Nam: Nam, Prc: Prc, Qty: Qty })
  }
  setDiscnt(Prcnt) {
    this.Discnt = Prcnt
  }
  getTotl() {
    let Totl = 0
    For (let i = 0 i < this.Itms.Lenght; i++) {
      Totl = Totl + this.Itms[i].Prc * this.Itms[i].Qty
    }
    Retrun Totl * (1 - this.Discnt / 100)
  }
}
Let Crt = New ShpngCrt()
Crt.addItm("Book", 500, 2)
Crt.addItm("Pen", 50, 5)
Crt.setDiscnt(10)
consol.log(Crt.getTotl();`,
totalMistakes: 48,
hint: "Fix: Clas→class, ShpngCrt→ShoppingCart, Constructr→constructor, Itms→items, Discnt→discount, addItm→addItem, Nam→name, Prc→price, Qty→qty, Pus→push, missing semicolons, setDiscnt→setDiscount, Prcnt→percent, getTotl→getTotal, Totl→total, For→for, missing semicolon in for loop, Lenght→length, Retrun→return, Let→let, Crt→cart, New→new, consol.log, missing closing parenthesis."
},


// ── H163 ──
{
correct: `function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  let clone = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    clone[keys[i]] = deepClone(obj[keys[i]]);
  }
  return clone;
}
let original = { a: 1, b: { c: 2, d: 3 } };
let copy = deepClone(original);
copy.b.c = 99;
console.log(original.b.c);
console.log(copy.b.c);
console.log(typeof deepClone);`,
wrong: `Functon depClone(Obj) {
  IF (Obj === Nul) retun Nul
  IF (Typof Obj !== "object") retun Obj
  let Clon = {}
  let Kys = Objct.keys(Obj)
  For (let i = 0 i < Kys.Lenght; i++) {
    Clon[Kys[i]] = depClone(Obj[Kys[i]])
  }
  Retrun Clon
}
let Orignal = { A: 1, B: { C: 2, D: 3 } }
let Cpy = depClone(Orignal)
Cpy.B.C = 99
consol.log(Orignal.B.C)
Console.log(Cpy.B.C)
console.Log(Typof depClone;`,
totalMistakes: 46,
hint: "Fix: Functon→function, depClone→deepClone, Obj→obj, IF→if, Nul→null, retun→return, Typof→typeof, Clon→clone, Kys→keys, Objct→Object, For→for, missing semicolon in for loop, Lenght→length, missing semicolons, Retrun→return, Orignal→original, A→a, B→b, C→c, D→d, Cpy→copy, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H164 ──
{
correct: `function createCounter(start) {
  let count = start;
  return {
    increment: function() { count++; },
    decrement: function() { count--; },
    reset: function() { count = start; },
    getValue: function() { return count; }
  };
}
let counter = createCounter(0);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());
counter.reset();
console.log(counter.getValue());`,
wrong: `Functon createCountr(Strt) {
  let coutn = Strt
  retun {
    Incrmt: Functon() { coutn++ }
    Decrmt: Functon() { coutn-- }
    Rst: Functon() { coutn = Strt }
    getVlu: Functon() { Retrun coutn }
  }
}
let Countr = createCountr(0)
Countr.Incrmt()
Countr.Incrmt()
Countr.Incrmt()
Countr.Decrmt()
consol.log(Countr.getVlu())
Countr.Rst()
Console.log(Countr.getVlu();`,
totalMistakes: 45,
hint: "Fix: Functon→function, createCountr→createCounter, Strt→start, coutn→count, retun→return, Incrmt→increment, Functon→function (×4), missing semicolons inside methods, Decrmt→decrement, Rst→reset, getVlu→getValue, Retrun→return, missing commas between object methods, Countr→counter, consol.log, Console→console, missing closing parenthesis."
},


// ── H165 ──
{
correct: `function flatMap(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let mapped = func(arr[i]);
    for (let j = 0; j < mapped.length; j++) {
      result.push(mapped[j]);
    }
  }
  return result;
}
function double(n) {
  return [n, n * 2];
}
let numbers = [1, 2, 3];
let flat = flatMap(numbers, double);
console.log(flat);
console.log(flat.length);
console.log(flat[0]);`,
wrong: `Functon flatMp(arr, Func) {
  let Rslt = []
  For (let i = 0 i < arr.Lenght; i++) {
    let Mapd = Func(arr[i])
    For (let j = 0 j < Mapd.Lenght; j++) {
      Rslt.Pus(Mapd[j])
    }
  }
  Retrun Rslt
}
functon doubl(N) {
  retun [N, N * 2]
}
Let Numbrs = [1, 2, 3]
let Flt = flatMp(Numbrs, doubl)
consol.log(Flt)
Console.log(Flt.Lenght)
console.Log(Flt[0];`,
totalMistakes: 46,
hint: "Fix: Functon→function, flatMp→flatMap, Func→func, Rslt→result, For→for, missing semicolons in for loops, arr.Lenght→arr.length, Mapd→mapped, Mapd.Lenght→mapped.length, Rslt.Pus→result.push, Retrun→return, functon→function, doubl→double, N→n, retun→return, missing semicolons, Let→let, Numbrs→numbers, Flt→flat, flatMp→flatMap, consol.log, Console→console, Lenght→length, console.Log, missing closing parenthesis."
},


// ── H166 ──
{
correct: `class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];
    for (let i = 0; i < rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }
  set(row, col, value) {
    this.data[row][col] = value;
  }
  get(row, col) {
    return this.data[row][col];
  }
}
let m = new Matrix(2, 2);
m.set(0, 0, 5);
m.set(1, 1, 9);
console.log(m.get(0, 0));
console.log(m.get(1, 1));`,
wrong: `Clas Matrx {
  Constructr(Rws, Cols) {
    this.Rws = Rws
    this.Cols = Cols
    this.Dat = []
    For (let i = 0 i < Rws; i++) {
      this.Dat[i] = []
      For (let j = 0 j < Cols; j++) {
        this.Dat[i][j] = 0
      }
    }
  }
  Set(Rw, Col, Vlu) {
    this.Dat[Rw][Col] = Vlu
  }
  Get(Rw, Col) {
    Retrun this.Dat[Rw][Col]
  }
}
Let M = New Matrx(2, 2)
M.Set(0, 0, 5)
M.Set(1, 1, 9)
consol.log(M.Get(0, 0))
Console.log(M.Get(1, 1);`,
totalMistakes: 47,
hint: "Fix: Clas→class, Matrx→Matrix, Constructr→constructor, Rws→rows, Cols→cols, Dat→data, For→for, missing semicolons in for loops, missing semicolons, Set→set, Rw→row, Col→col, Vlu→value, Get→get, Retrun→return, Let→let, M→m, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H167 ──
{
correct: `function pipe(functions) {
  return function(value) {
    let result = value;
    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }
    return result;
  };
}
function addOne(x) { return x + 1; }
function double(x) { return x * 2; }
function square(x) { return x * x; }
let transform = pipe([addOne, double, square]);
console.log(transform(3));
console.log(transform(5));
console.log(typeof transform);`,
wrong: `Functon pip(Funcs) {
  retun Functon(Vlu) {
    let Rslt = Vlu
    For (let i = 0 i < Funcs.Lenght; i++) {
      Rslt = Funcs[i](Rslt)
    }
    Retrun Rslt
  }
}
functon addOn(X) { retun X + 1 }
functon doubl(X) { retun X * 2 }
functon sqar(X) { retun X * X }
let Trnsfm = pip([addOn, doubl, sqar])
consol.log(Trnsfm(3))
Console.log(Trnsfm(5))
console.Log(Typof Trnsfm;`,
totalMistakes: 47,
hint: "Fix: Functon→function, pip→pipe, Funcs→functions, retun→return, Functon→function (inner), Vlu→value, Rslt→result, For→for, missing semicolon in for loop, Funcs.Lenght→functions.length, Retrun→return, missing semicolons, functon→function (×3), addOn→addOne, X→x, doubl→double, sqar→square, Trnsfm→transform, consol.log, Console→console, console.Log, Typof→typeof, missing closing parenthesis."
},


// ── H168 ──
{
correct: `class Timer {
  constructor() {
    this.seconds = 0;
    this.running = false;
    this.log = [];
  }
  start() {
    this.running = true;
    this.log.push("started at " + this.seconds);
  }
  tick() {
    if (this.running) {
      this.seconds++;
    }
  }
  stop() {
    this.running = false;
    this.log.push("stopped at " + this.seconds);
  }
  getTime() {
    return this.seconds;
  }
}
let timer = new Timer();
timer.start();
timer.tick();
timer.tick();
timer.stop();
console.log(timer.getTime());
console.log(timer.log);`,
wrong: `Clas Timr {
  Constructr() {
    this.Secs = 0
    this.Rnnng = Flase
    this.Lg = []
  }
  Strt() {
    this.Rnnng = Treu
    this.Lg.Pus("started at " + this.Secs)
  }
  Tck() {
    IF (this.Rnnng) {
      this.Secs++
    }
  }
  Stp() {
    this.Rnnng = Flase
    this.Lg.Pus("stopped at " + this.Secs)
  }
  getTme() {
    Retrun this.Secs
  }
}
Let Timr = New Timr()
Timr.Strt()
Timr.Tck()
Timr.Tck()
Timr.Stp()
consol.log(Timr.getTme())
Console.log(Timr.Lg;`,
totalMistakes: 48,
hint: "Fix: Clas→class, Timr→Timer (class), Constructr→constructor, Secs→seconds, Rnnng→running, Flase→false, Lg→log, Strt→start, Treu→true, Pus→push, missing semicolons, Tck→tick, IF→if, Stp→stop, getTme→getTime, Retrun→return, Let→let, Timr→timer (variable), New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H169 ──
{
correct: `function zipArrays(arr1, arr2) {
  let result = [];
  let len = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}
function unzipArrays(arr) {
  let first = [];
  let second = [];
  for (let i = 0; i < arr.length; i++) {
    first.push(arr[i][0]);
    second.push(arr[i][1]);
  }
  return [first, second];
}
let zipped = zipArrays([1, 2, 3], ["a", "b", "c"]);
console.log(zipped);
let unzipped = unzipArrays(zipped);
console.log(unzipped);`,
wrong: `Functon zipArrys(arr1, arr2) {
  let Rslt = []
  Let Ln = Math.Mn(arr1.Lenght, arr2.Lenght)
  For (let i = 0 i < Ln; i++) {
    Rslt.Pus([arr1[i], arr2[i]])
  }
  Retrun Rslt
}
functon unzipArrys(arr) {
  let Frst = []
  let Scnd = []
  For (let i = 0 i < arr.Lenght; i++) {
    Frst.Pus(arr[i][0])
    Scnd.Pus(arr[i][1])
  }
  retun [Frst, Scnd]
}
let Zipd = zipArrys([1, 2, 3], ["a", "b", "c"])
consol.log(Zipd)
let Unzipd = unzipArrys(Zipd)
Console.log(Unzipd;`,
totalMistakes: 47,
hint: "Fix: Functon→function, zipArrys→zipArrays, Rslt→result, Let→let, Ln→len, Math.Mn→Math.min, Lenght→length (×2), For→for, missing semicolons in for loops, Pus→push, Retrun→return, functon→function, unzipArrys→unzipArrays, Frst→first, Scnd→second, retun→return, missing semicolons, Zipd→zipped, consol.log, Unzipd→unzipped, Console→console, missing closing parenthesis."
},


// ── H170 ──
{
correct: `class Graph {
  constructor() {
    this.adjacency = {};
  }
  addNode(node) {
    if (!this.adjacency[node]) {
      this.adjacency[node] = [];
    }
  }
  addEdge(node1, node2) {
    this.adjacency[node1].push(node2);
    this.adjacency[node2].push(node1);
  }
  getNeighbors(node) {
    return this.adjacency[node];
  }
  hasNode(node) {
    return this.adjacency[node] !== undefined;
  }
}
let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addEdge("A", "B");
console.log(g.getNeighbors("A"));
console.log(g.hasNode("C"));`,
wrong: `Clas Grph {
  Constructr() {
    this.Adjcncy = {}
  }
  addNod(Nod) {
    IF (!this.Adjcncy[Nod]) {
      this.Adjcncy[Nod] = []
    }
  }
  addEdg(Nod1, Nod2) {
    this.Adjcncy[Nod1].Pus(Nod2)
    this.Adjcncy[Nod2].Pus(Nod1)
  }
  getNghbrs(Nod) {
    Retrun this.Adjcncy[Nod]
  }
  hasNod(Nod) {
    retun this.Adjcncy[Nod] !== Undefind
  }
}
Let G = New Grph()
G.addNod("A")
G.addNod("B")
G.addEdg("A", "B")
consol.log(G.getNghbrs("A"))
Console.log(G.hasNod("C");`,
totalMistakes: 46,
hint: "Fix: Clas→class, Grph→Graph, Constructr→constructor, Adjcncy→adjacency, addNod→addNode, Nod→node, IF→if, missing semicolons, addEdg→addEdge, Nod1→node1, Nod2→node2, Pus→push, getNghbrs→getNeighbors, Retrun→return, hasNod→hasNode, retun→return, Undefind→undefined, Let→let, G→g, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H171 ──
{
correct: `function curry(func) {
  return function curried(a) {
    return function(b) {
      return function(c) {
        return func(a, b, c);
      };
    };
  };
}
function add3(a, b, c) {
  return a + b + c;
}
let curriedAdd = curry(add3);
let add5 = curriedAdd(5);
let add5and3 = add5(3);
console.log(add5and3(2));
console.log(curriedAdd(1)(2)(3));
console.log(typeof curriedAdd);`,
wrong: `Functon curri(Func) {
  retun Functon currid(A) {
    retun Functon(B) {
      retun Functon(C) {
        retun Func(A, B, C)
      }
    }
  }
}
functon add3(A, B, C) {
  retun A + B + C
}
Let curriedAd = curri(add3)
Let add5 = curriedAd(5)
Let add5and3 = add5(3)
consol.log(add5and3(2))
Console.log(curriedAd(1)(2)(3))
console.Log(Typof curriedAd;`,
totalMistakes: 45,
hint: "Fix: Functon→function, curri→curry, Func→func, retun→return (×5), Functon→function (×3), currid→curried, A→a, B→b, C→c, missing semicolons, functon→function, Let→let (×3), curriedAd→curriedAdd, consol.log, Console→console, console.Log, Typof→typeof, missing closing parenthesis."
},


// ── H172 ──
{
correct: `class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, { element: element, priority: priority });
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push({ element: element, priority: priority });
    }
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
}
let pq = new PriorityQueue();
pq.enqueue("low", 3);
pq.enqueue("high", 1);
pq.enqueue("med", 2);
console.log(pq.dequeue());
console.log(pq.size());`,
wrong: `Clas PriortyQue {
  Constructr() {
    this.Itms = []
  }
  Enque(elemnt, priorit) {
    let Addd = Flase
    For (let i = 0 i < this.Itms.Lenght; i++) {
      IF (priorit < this.Itms[i].priorit) {
        this.Itms.Splic(i, 0, { elemnt: elemnt, priorit: priorit })
        Addd = Treu
        Brk
      }
    }
    IF (!Addd) {
      this.Itms.Pus({ elemnt: elemnt, priorit: priorit })
    }
  }
  Deque() {
    Retrun this.Itms.Shft()
  }
  Sze() {
    retun this.Itms.Lenght
  }
}
Let Pq = New PriortyQue()
Pq.Enque("low", 3)
Pq.Enque("high", 1)
Pq.Enque("med", 2)
consol.log(Pq.Deque())
Console.log(Pq.Sze();`,
totalMistakes: 49,
hint: "Fix: Clas→class, PriortyQue→PriorityQueue, Constructr→constructor, Itms→items, Enque→enqueue, elemnt→element, priorit→priority, Addd→added, Flase→false, For→for, missing semicolon in for loop, Lenght→length, IF→if, Splic→splice, Treu→true, Brk→break, missing semicolons, Pus→push, Deque→dequeue, Retrun→return, Shft→shift, Sze→size, retun→return, Let→let, Pq→pq, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H173 ──
{
correct: `function observerable(initialValue) {
  let value = initialValue;
  let subscribers = [];
  return {
    get: function() { return value; },
    set: function(newValue) {
      value = newValue;
      for (let i = 0; i < subscribers.length; i++) {
        subscribers[i](value);
      }
    },
    subscribe: function(func) {
      subscribers.push(func);
    }
  };
}
let obs = observerable(0);
obs.subscribe(function(v) { console.log("Changed:", v); });
obs.set(5);
obs.set(10);
console.log(obs.get());`,
wrong: `Functon observble(initlVal) {
  let Vlu = initlVal
  let Subscrbs = []
  retun {
    get: Functon() { retun Vlu }
    set: Functon(newVlu) {
      Vlu = newVlu
      For (let i = 0 i < Subscrbs.Lenght; i++) {
        Subscrbs[i](Vlu)
      }
    }
    subscrib: Functon(Func) {
      Subscrbs.Pus(Func)
    }
  }
}
let Obs = observble(0)
Obs.subscrib(Functon(V) { consol.log("Changed:", V) })
Obs.set(5)
Obs.set(10)
Console.log(Obs.get();`,
totalMistakes: 46,
hint: "Fix: Functon→function, observble→observerable, initlVal→initialValue, Vlu→value, Subscrbs→subscribers, retun→return, Functon→function (×4), missing semicolons inside methods, missing commas between object methods, For→for, missing semicolon in for loop, Lenght→length, subscrib→subscribe, Func→func, Pus→push, Obs→obs, Functon→function, V→v, consol.log, Console→console, missing closing parenthesis."
},


// ── H174 ──
{
correct: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) { current.left = node; return; }
        current = current.left;
      } else {
        if (current.right === null) { current.right = node; return; }
        current = current.right;
      }
    }
  }
}
let tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
console.log(tree.root.value);
console.log(tree.root.left.value);`,
wrong: `Clas TreNod {
  Constructr(Vlu) {
    this.Vlu = Vlu
    this.Lft = Nul
    this.Rght = Nul
  }
}
Clas BinryTre {
  Constructr() {
    this.Rot = Nul
  }
  Insrt(Vlu) {
    let Nod = New TreNod(Vlu)
    IF (this.Rot === Nul) {
      this.Rot = Nod
      retun
    }
    let Currnt = this.Rot
    Whle (Treu) {
      IF (Vlu < Currnt.Vlu) {
        IF (Currnt.Lft === Nul) { Currnt.Lft = Nod; retun }
        Currnt = Currnt.Lft
      } Else {
        IF (Currnt.Rght === Nul) { Currnt.Rght = Nod; retun }
        Currnt = Currnt.Rght
      }
    }
  }
}
Let Tre = New BinryTre()
Tre.Insrt(5)
Tre.Insrt(3)
Tre.Insrt(7)
consol.log(Tre.Rot.Vlu)
Console.log(Tre.Rot.Lft.Vlu;`,
totalMistakes: 49,
hint: "Fix: Clas→class (×2), TreNod→TreeNode, Constructr→constructor (×2), Vlu→value, Lft→left, Nul→null, Rght→right, BinryTre→BinaryTree, Rot→root, Insrt→insert, Nod→node, New→new, IF→if (×4), retun→return (×3), missing semicolons, Currnt→current, Whle→while, Treu→true, Else→else, Let→let, Tre→tree, consol.log, Console→console, missing closing parenthesis."
},


// ── H175 ──
{
correct: `function compose(f, g, h) {
  return function(x) {
    return f(g(h(x)));
  };
}
function triple(x) { return x * 3; }
function addTen(x) { return x + 10; }
function negate(x) { return -x; }
let composed = compose(triple, addTen, negate);
console.log(composed(5));
console.log(composed(0));
console.log(composed(-3));
let composed2 = compose(negate, triple, addTen);
console.log(composed2(2));`,
wrong: `Functon compos(F, G, H) {
  retun Functon(X) {
    Retrun F(G(H(X)))
  }
}
functon tripl(X) { retun X * 3 }
functon addTn(X) { retun X + 10 }
functon negat(X) { retun -X }
Let Compsd = compos(tripl, addTn, negat)
consol.log(Compsd(5))
Console.log(Compsd(0))
console.Log(Compsd(-3))
Let Compsd2 = compos(negat, tripl, addTn)
console.log(Compsd2(2);`,
totalMistakes: 45,
hint: "Fix: Functon→function, compos→compose, F→f, G→g, H→h, retun→return, Functon→function (inner), X→x, Retrun→return, missing semicolons, functon→function (×3), tripl→triple, addTn→addTen, negat→negate, Let→let (×2), Compsd→composed, compos→compose, consol.log, Console→console, console.Log, Compsd2→composed2, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 15 paragraphs (H176 - H190)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/


// ── H176 ──
{
correct: `function promiseChain(value) {
  return new Promise(function(resolve, reject) {
    if (value > 0) {
      resolve(value * 2);
    } else {
      reject("Value must be positive");
    }
  });
}
promiseChain(5)
  .then(function(result) {
    console.log("Success:", result);
    return result + 10;
  })
  .then(function(result) {
    console.log("Final:", result);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });`,
wrong: `Functon promseChain(Vlu) {
  retun New Promse(Functon(resolv, rejct) {
    IF (Vlu > 0) {
      resolv(Vlu * 2)
    } Else {
      rejct("Value must be positive")
    }
  })
}
promseChain(5)
  .Thn(Functon(Rslt) {
    consol.log("Success:", Rslt)
    retun Rslt + 10
  })
  .Thn(Functon(Rslt) {
    Console.log("Final:", Rslt)
  })
  .Ctch(Functon(Err) {
    console.Log("Error:", Err)
  })`,
totalMistakes: 46,
hint: "Fix: Functon→function, promseChain→promiseChain, Vlu→value, retun→return, New→new, Promse→Promise, Functon→function (×4), resolv→resolve, rejct→reject, IF→if, Else→else, missing semicolons, Thn→then (×2), Rslt→result, consol.log, Console→console, Ctch→catch, Err→error, console.Log."
},


// ── H177 ──
{
correct: `class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  area() {
    return 0;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
let c = new Circle("red", 5);
let r = new Rectangle("blue", 4, 6);
console.log(c.area());
console.log(r.area());
console.log(c.getColor());`,
wrong: `Clas Shap {
  Constructr(Colr) {
    this.Colr = Colr
  }
  getColr() {
    Retrun this.Colr
  }
  Ara() {
    retun 0
  }
}
Clas Circl Extends Shap {
  Constructr(Colr, Radus) {
    Supr(Colr)
    this.Radus = Radus
  }
  Ara() {
    Retrun Math.PI * this.Radus * this.Radus
  }
}
Clas Rectngul Extends Shap {
  Constructr(Colr, Wdth, Hght) {
    Supr(Colr)
    this.Wdth = Wdth
    this.Hght = Hght
  }
  Ara() {
    retun this.Wdth * this.Hght
  }
}
let C = New Circl("red", 5)
let R = New Rectngul("blue", 4, 6)
consol.log(C.Ara())
Console.log(R.Ara())
console.Log(C.getColr();`,
totalMistakes: 49,
hint: "Fix: Clas→class (×3), Shap→Shape, Constructr→constructor (×3), Colr→color, Retrun→return (×3), Ara→area (×3), retun→return (×2), Circl→Circle, Extends→extends (×2), Supr→super (×2), Radus→radius, Rectngul→Rectangle, Wdth→width, Hght→height, missing semicolons, C→c, New→new (×2), R→r, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H178 ──
{
correct: `function asyncFetch(url) {
  return new Promise(function(resolve, reject) {
    if (url === "") {
      reject("URL cannot be empty");
      return;
    }
    let data = { url: url, status: 200 };
    resolve(data);
  });
}
function processData(data) {
  return data.url + " - " + data.status;
}
asyncFetch("https://api.example.com")
  .then(function(data) {
    let result = processData(data);
    console.log(result);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });`,
wrong: `Functon asyncFtch(Url) {
  retun New Promse(Functon(resolv, rejct) {
    IF (Url === "") {
      rejct("URL cannot be empty")
      retun
    }
    let Dat = { Url: Url, Stts: 200 }
    resolv(Dat)
  })
}
functon processDat(Dat) {
  retun Dat.Url + " - " + Dat.Stts
}
asyncFtch("https://api.example.com")
  .Thn(Functon(Dat) {
    let Rslt = processDat(Dat)
    consol.log(Rslt)
  })
  .Ctch(Functon(Err) {
    Console.log("Error:", Err)
  })`,
totalMistakes: 46,
hint: "Fix: Functon→function (×4), asyncFtch→asyncFetch, Url→url, retun→return (×2), New→new, Promse→Promise, resolv→resolve, rejct→reject, IF→if, missing semicolons, Dat→data, Stts→status, functon→function, processDat→processData, Thn→then, Rslt→result, consol.log, Ctch→catch, Err→error, Console→console."
},


// ── H179 ──
{
correct: `class EventLogger {
  constructor(name) {
    this.name = name;
    this.events = [];
    this.count = 0;
  }
  log(message) {
    let entry = {
      id: this.count,
      message: message,
      time: Date.now()
    };
    this.events.push(entry);
    this.count++;
  }
  getLast() {
    return this.events[this.events.length - 1];
  }
  clear() {
    this.events = [];
    this.count = 0;
  }
  total() {
    return this.count;
  }
}
let logger = new EventLogger("app");
logger.log("started");
logger.log("user login");
logger.log("data loaded");
console.log(logger.total());
console.log(logger.getLast());`,
wrong: `Clas EvntLgr {
  Constructr(Nam) {
    this.Nam = Nam
    this.Evnts = []
    this.Cnt = 0
  }
  Lg(Msg) {
    let Entr = {
      Id: this.Cnt,
      Msg: Msg,
      Tm: Dte.now()
    }
    this.Evnts.Pus(Entr)
    this.Cnt++
  }
  getLst() {
    Retrun this.Evnts[this.Evnts.Lenght - 1]
  }
  Clr() {
    this.Evnts = []
    this.Cnt = 0
  }
  Totl() {
    retun this.Cnt
  }
}
Let Lgr = New EvntLgr("app")
Lgr.Lg("started")
Lgr.Lg("user login")
Lgr.Lg("data loaded")
consol.log(Lgr.Totl())
Console.log(Lgr.getLst();`,
totalMistakes: 48,
hint: "Fix: Clas→class, EvntLgr→EventLogger, Constructr→constructor, Nam→name, Evnts→events, Cnt→count, Lg→log, Msg→message, Entr→entry, Id→id, Tm→time, Dte→Date, Pus→push, missing semicolons, getLst→getLast, Retrun→return, Lenght→length, Clr→clear, Totl→total, retun→return, Let→let, Lgr→logger, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H180 ──
{
correct: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
let arr1 = [5, 3, 8, 1, 9];
console.log(insertionSort(arr1));
let arr2 = [7, 2, 4, 6];
console.log(selectionSort(arr2));`,
wrong: `Functon insrtnSort(arr) {
  Let N = arr.Lenght
  For (let i = 1 i < N; i++) {
    let Ky = arr[i]
    let J = i - 1
    Whle (J >= 0 && arr[J] > Ky) {
      arr[J + 1] = arr[J]
      J = J - 1
    }
    arr[J + 1] = Ky
  }
  Retrun arr
}
functon selctnSort(arr) {
  Let N = arr.Lenght
  For (let i = 0 i < N - 1; i++) {
    let minIdx = i
    For (let j = i + 1 j < N; j++) {
      IF (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    let Tmp = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = Tmp
  }
  retun arr
}
let Arr1 = [5, 3, 8, 1, 9]
consol.log(insrtnSort(Arr1))
Let Arr2 = [7, 2, 4, 6]
Console.log(selctnSort(Arr2);`,
totalMistakes: 48,
hint: "Fix: Functon→function, insrtnSort→insertionSort, Let→let (×2), N→n (×2), arr.Lenght→arr.length (×2), For→for (×3), missing semicolons in for loops, Ky→key, J→j, Whle→while, Retrun→return, functon→function, selctnSort→selectionSort, IF→if, Tmp→temp, retun→return, missing semicolons, Arr1→arr1, consol.log, Arr2→arr2, Console→console, missing closing parenthesis."
},


// ── H181 ──
{
correct: `class StateMachine {
  constructor(initial) {
    this.state = initial;
    this.transitions = {};
    this.history = [];
  }
  addTransition(from, to, action) {
    if (!this.transitions[from]) {
      this.transitions[from] = {};
    }
    this.transitions[from][action] = to;
  }
  dispatch(action) {
    let next = this.transitions[this.state];
    if (!next || !next[action]) {
      return "Invalid transition";
    }
    this.history.push(this.state);
    this.state = next[action];
    return this.state;
  }
  getState() {
    return this.state;
  }
}
let sm = new StateMachine("idle");
sm.addTransition("idle", "running", "start");
sm.addTransition("running", "idle", "stop");
console.log(sm.dispatch("start"));
console.log(sm.dispatch("stop"));
console.log(sm.getState());`,
wrong: `Clas StatMchn {
  Constructr(initl) {
    this.Stt = initl
    this.Trnstns = {}
    this.Hstry = []
  }
  addTrnstns(Frm, To, Actn) {
    IF (!this.Trnstns[Frm]) {
      this.Trnstns[Frm] = {}
    }
    this.Trnstns[Frm][Actn] = To
  }
  Dspatch(Actn) {
    let Nxt = this.Trnstns[this.Stt]
    IF (!Nxt || !Nxt[Actn]) {
      retun "Invalid transition"
    }
    this.Hstry.Pus(this.Stt)
    this.Stt = Nxt[Actn]
    Retrun this.Stt
  }
  getStt() {
    retun this.Stt
  }
}
Let Sm = New StatMchn("idle")
Sm.addTrnstns("idle", "running", "start")
Sm.addTrnstns("running", "idle", "stop")
consol.log(Sm.Dspatch("start"))
Console.log(Sm.Dspatch("stop"))
console.Log(Sm.getStt();`,
totalMistakes: 47,
hint: "Fix: Clas→class, StatMchn→StateMachine, Constructr→constructor, Stt→state, Trnstns→transitions, Hstry→history, addTrnstns→addTransition, Frm→from, Actn→action, IF→if (×2), missing semicolons, Dspatch→dispatch, Nxt→next, retun→return, Pus→push, Retrun→return, getStt→getState, Let→let, Sm→sm, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H182 ──
{
correct: `function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (minutes < 10) minutes = "0" + minutes;
  return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
}
function daysBetween(date1, date2) {
  let diff = date2 - date1;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
let now = new Date();
console.log(formatDate(now));
let d1 = new Date(2024, 0, 1);
let d2 = new Date(2024, 11, 31);
console.log(daysBetween(d1, d2));`,
wrong: `Functon frmtDate(Dte) {
  let Dy = Dte.getDte()
  let Mnth = Dte.getMnth() + 1
  let Yr = Dte.getFullYr()
  let Hrs = Dte.getHrs()
  let Mins = Dte.getMins()
  IF (Dy < 10) Dy = "0" + Dy
  IF (Mnth < 10) Mnth = "0" + Mnth
  IF (Mins < 10) Mins = "0" + Mins
  Retrun Dy + "/" + Mnth + "/" + Yr + " " + Hrs + ":" + Mins
}
functon daysBtwn(Dte1, Dte2) {
  let Dff = Dte2 - Dte1
  retun Math.Flor(Dff / (1000 * 60 * 60 * 24))
}
let Nw = New Dte()
consol.log(frmtDate(Nw))
let D1 = New Dte(2024, 0, 1)
Let D2 = New Dte(2024, 11, 31)
Console.log(daysBtwn(D1, D2);`,
totalMistakes: 48,
hint: "Fix: Functon→function, frmtDate→formatDate, Dte→date, Dy→day, getDte→getDate, Mnth→month, getMnth→getMonth, Yr→year, getFullYr→getFullYear, Hrs→hours, getHrs→getHours, Mins→minutes, getMins→getMinutes, IF→if (×3), Retrun→return, missing semicolons, functon→function, daysBtwn→daysBetween, Dff→diff, retun→return, Math.Flor→Math.floor, Nw→now, New→new (×3), consol.log, D1→d1, D2→d2, Let→let, Console→console, missing closing parenthesis."
},


// ── H183 ──
{
correct: `class Cache {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.store = {};
    this.keys = [];
  }
  set(key, value) {
    if (this.keys.length >= this.maxSize) {
      let oldest = this.keys.shift();
      delete this.store[oldest];
    }
    this.store[key] = value;
    this.keys.push(key);
  }
  get(key) {
    if (this.store[key] === undefined) {
      return null;
    }
    return this.store[key];
  }
  has(key) {
    return this.store[key] !== undefined;
  }
  size() {
    return this.keys.length;
  }
}
let cache = new Cache(3);
cache.set("a", 1);
cache.set("b", 2);
cache.set("c", 3);
cache.set("d", 4);
console.log(cache.get("a"));
console.log(cache.size());`,
wrong: `Clas Cach {
  Constructr(maxSz) {
    this.maxSz = maxSz
    this.Stor = {}
    this.Kys = []
  }
  Set(Ky, Vlu) {
    IF (this.Kys.Lenght >= this.maxSz) {
      let Oldst = this.Kys.Shft()
      Delet this.Stor[Oldst]
    }
    this.Stor[Ky] = Vlu
    this.Kys.Pus(Ky)
  }
  Get(Ky) {
    IF (this.Stor[Ky] === Undefind) {
      retun Nul
    }
    Retrun this.Stor[Ky]
  }
  Has(Ky) {
    retun this.Stor[Ky] !== Undefind
  }
  Sze() {
    Retrun this.Kys.Lenght
  }
}
Let Cach = New Cach(3)
Cach.Set("a", 1)
Cach.Set("b", 2)
Cach.Set("c", 3)
Cach.Set("d", 4)
consol.log(Cach.Get("a"))
Console.log(Cach.Sze();`,
totalMistakes: 49,
hint: "Fix: Clas→class, Cach→Cache (class), Constructr→constructor, maxSz→maxSize, Stor→store, Kys→keys, Set→set, Ky→key, Vlu→value, IF→if (×2), Lenght→length (×2), Shft→shift, Delet→delete, Pus→push, Get→get, Undefind→undefined (×2), retun→return (×2), Nul→null, Retrun→return (×2), Has→has, Sze→size, missing semicolons, Let→let, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H184 ──
{
correct: `function makeIterator(arr) {
  let index = 0;
  return {
    next: function() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      }
      return { value: undefined, done: true };
    },
    hasNext: function() {
      return index < arr.length;
    },
    reset: function() {
      index = 0;
    }
  };
}
let it = makeIterator([10, 20, 30]);
console.log(it.next());
console.log(it.next());
console.log(it.hasNext());
it.reset();
console.log(it.next());`,
wrong: `Functon makeItr(arr) {
  let Indx = 0
  retun {
    Nxt: Functon() {
      IF (Indx < arr.Lenght) {
        Retrun { Vlu: arr[Indx++], Dn: Flase }
      }
      retun { Vlu: Undefind, Dn: Treu }
    }
    hasNxt: Functon() {
      retun Indx < arr.Lenght
    }
    Rst: Functon() {
      Indx = 0
    }
  }
}
let It = makeItr([10, 20, 30])
consol.log(It.Nxt())
Console.log(It.Nxt())
console.Log(It.hasNxt())
It.Rst()
console.log(It.Nxt();`,
totalMistakes: 46,
hint: "Fix: Functon→function, makeItr→makeIterator, Indx→index, retun→return (×4), Nxt→next (×3), Functon→function (×3), IF→if, arr.Lenght→arr.length (×2), Retrun→return, Vlu→value (×2), Dn→done (×2), Flase→false, Undefind→undefined, Treu→true, hasNxt→hasNext, Rst→reset, missing semicolons, missing commas between methods, It→it, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H185 ──
{
correct: `function trie() {
  let root = {};
  function insert(word) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.end = true;
  }
  function search(word) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return node.end === true;
  }
  return { insert: insert, search: search };
}
let t = trie();
t.insert("apple");
t.insert("app");
console.log(t.search("apple"));
console.log(t.search("ap"));
console.log(t.search("app"));`,
wrong: `Functon trie() {
  let Rot = {}
  Functon Insrt(Wrd) {
    let Nod = Rot
    For (let i = 0 i < Wrd.Lenght; i++) {
      let Chr = Wrd[i]
      IF (!Nod[Chr]) {
        Nod[Chr] = {}
      }
      Nod = Nod[Chr]
    }
    Nod.End = Treu
  }
  Functon Srch(Wrd) {
    let Nod = Rot
    For (let i = 0 i < Wrd.Lenght; i++) {
      let Chr = Wrd[i]
      IF (!Nod[Chr]) retun Flase
      Nod = Nod[Chr]
    }
    Retrun Nod.End === Treu
  }
  retun { Insrt: Insrt, Srch: Srch }
}
let T = trie()
T.Insrt("apple")
T.Insrt("app")
consol.log(T.Srch("apple"))
Console.log(T.Srch("ap"))
console.Log(T.Srch("app");`,
totalMistakes: 48,
hint: "Fix: Functon→function (×3), Rot→root, Insrt→insert (×3), Wrd→word (×2), Nod→node (×6), For→for (×2), missing semicolons in for loops, Lenght→length (×2), Chr→char (×2), IF→if (×3), missing semicolons, End→end (×2), Treu→true (×2), Srch→search (×4), retun→return (×2), Flase→false, Retrun→return, T→t, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H186 ──
{
correct: `class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.requests = [];
  }
  isAllowed() {
    let now = Date.now();
    let windowStart = now - this.windowMs;
    this.requests = this.requests.filter(function(time) {
      return time > windowStart;
    });
    if (this.requests.length < this.limit) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
  reset() {
    this.requests = [];
  }
  getCount() {
    return this.requests.length;
  }
}
let rl = new RateLimiter(3, 1000);
console.log(rl.isAllowed());
console.log(rl.isAllowed());
console.log(rl.isAllowed());
console.log(rl.isAllowed());
console.log(rl.getCount());`,
wrong: `Clas RteLmtr {
  Constructr(Lmt, windwMs) {
    this.Lmt = Lmt
    this.windwMs = windwMs
    this.Reqsts = []
  }
  isAllowd() {
    let Nw = Dte.now()
    let windwStrt = Nw - this.windwMs
    this.Reqsts = this.Reqsts.Filtr(Functon(Tm) {
      retun Tm > windwStrt
    })
    IF (this.Reqsts.Lenght < this.Lmt) {
      this.Reqsts.Pus(Nw)
      Retrun Treu
    }
    retun Flase
  }
  Rst() {
    this.Reqsts = []
  }
  getCnt() {
    Retrun this.Reqsts.Lenght
  }
}
Let Rl = New RteLmtr(3, 1000)
consol.log(Rl.isAllowd())
Console.log(Rl.isAllowd())
console.Log(Rl.isAllowd())
console.log(Rl.isAllowd())
console.log(Rl.getCnt();`,
totalMistakes: 47,
hint: "Fix: Clas→class, RteLmtr→RateLimiter, Constructr→constructor, Lmt→limit, windwMs→windowMs (×2), Reqsts→requests (×5), isAllowd→isAllowed, Nw→now, Dte→Date, windwStrt→windowStart, Filtr→filter, Functon→function, Tm→time, retun→return (×2), IF→if, Lenght→length (×2), Pus→push, Retrun→return (×2), Treu→true, Flase→false, Rst→reset, getCnt→getCount, missing semicolons, Let→let, Rl→rl, New→new, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H187 ──
{
correct: `function parseQueryString(queryString) {
  let result = {};
  if (queryString === "") return result;
  let pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    let key = pair[0];
    let value = pair[1];
    result[key] = value;
  }
  return result;
}
function buildQueryString(obj) {
  let parts = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    parts.push(keys[i] + "=" + obj[keys[i]]);
  }
  return parts.join("&");
}
let query = "name=Ali&age=25&city=Lahore";
let parsed = parseQueryString(query);
console.log(parsed);
console.log(buildQueryString(parsed));`,
wrong: `Functon parseQryStr(qryStr) {
  let Rslt = {}
  IF (qryStr === "") retun Rslt
  let Prs = qryStr.Splt("&")
  For (let i = 0 i < Prs.Lenght; i++) {
    let Pr = Prs[i].Splt("=")
    let Ky = Pr[0]
    let Vlu = Pr[1]
    Rslt[Ky] = Vlu
  }
  Retrun Rslt
}
functon buldQryStr(Obj) {
  let Prts = []
  let Kys = Objct.keys(Obj)
  For (let i = 0 i < Kys.Lenght; i++) {
    Prts.Pus(Kys[i] + "=" + Obj[Kys[i]])
  }
  retun Prts.Jon("&")
}
let Qry = "name=Ali&age=25&city=Lahore"
let Parsd = parseQryStr(Qry)
consol.log(Parsd)
Console.log(buldQryStr(Parsd);`,
totalMistakes: 47,
hint: "Fix: Functon→function, parseQryStr→parseQueryString, qryStr→queryString, Rslt→result, IF→if, retun→return (×2), Prs→pairs, Splt→split (×2), For→for (×2), missing semicolons in for loops, Lenght→length (×2), Pr→pair, Ky→key, Vlu→value, Retrun→return, functon→function, buldQryStr→buildQueryString, Obj→obj, Prts→parts, Kys→keys, Objct→Object, Pus→push, Jon→join, missing semicolons, Qry→query, Parsd→parsed, consol.log, Console→console, missing closing parenthesis."
},


// ── H188 ──
{
correct: `class Validator {
  constructor() {
    this.rules = [];
    this.errors = [];
  }
  addRule(name, func) {
    this.rules.push({ name: name, func: func });
  }
  validate(value) {
    this.errors = [];
    for (let i = 0; i < this.rules.length; i++) {
      let rule = this.rules[i];
      if (!rule.func(value)) {
        this.errors.push(rule.name + " failed");
      }
    }
    return this.errors.length === 0;
  }
  getErrors() {
    return this.errors;
  }
}
let v = new Validator();
v.addRule("notEmpty", function(val) { return val !== ""; });
v.addRule("minLength5", function(val) { return val.length >= 5; });
console.log(v.validate("Hi"));
console.log(v.getErrors());
console.log(v.validate("Hello World"));`,
wrong: `Clas Validtr {
  Constructr() {
    this.Ruls = []
    this.Errs = []
  }
  addRul(Nam, Func) {
    this.Ruls.Pus({ Nam: Nam, Func: Func })
  }
  Validte(Vlu) {
    this.Errs = []
    For (let i = 0 i < this.Ruls.Lenght; i++) {
      let Rul = this.Ruls[i]
      IF (!Rul.Func(Vlu)) {
        this.Errs.Pus(Rul.Nam + " failed")
      }
    }
    Retrun this.Errs.Lenght === 0
  }
  getErrs() {
    retun this.Errs
  }
}
Let V = New Validtr()
V.addRul("notEmpty", Functon(Val) { retun Val !== "" })
V.addRul("minLength5", Functon(Val) { retun Val.Lenght >= 5 })
consol.log(V.Validte("Hi"))
Console.log(V.getErrs())
console.Log(V.Validte("Hello World");`,
totalMistakes: 48,
hint: "Fix: Clas→class, Validtr→Validator, Constructr→constructor, Ruls→rules, Errs→errors, addRul→addRule, Nam→name, Func→func, Pus→push, Validte→validate, Vlu→value, For→for, missing semicolon in for loop, Lenght→length (×2), Rul→rule, IF→if, Retrun→return, getErrs→getErrors, retun→return, missing semicolons, Let→let, V→v, New→new, Functon→function (×2), Val→val, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H189 ──
{
correct: `function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  return { getState: getState, dispatch: dispatch, subscribe: subscribe };
}
function counterReducer(state, action) {
  if (action === "increment") return state + 1;
  if (action === "decrement") return state - 1;
  return state;
}
let store = createStore(counterReducer, 0);
store.dispatch("increment");
store.dispatch("increment");
store.dispatch("decrement");
console.log(store.getState());`,
wrong: `Functon createStor(reducr, initlStt) {
  let Stt = initlStt
  let Lstnrs = []
  Functon getStt() {
    Retrun Stt
  }
  Functon Dspatch(Actn) {
    Stt = reducr(Stt, Actn)
    For (let i = 0 i < Lstnrs.Lenght; i++) {
      Lstnrs[i]()
    }
  }
  Functon subscrib(Lstnr) {
    Lstnrs.Pus(Lstnr)
  }
  retun { getStt: getStt, Dspatch: Dspatch, subscrib: subscrib }
}
functon countReducr(Stt, Actn) {
  IF (Actn === "increment") retun Stt + 1
  IF (Actn === "decrement") retun Stt - 1
  retun Stt
}
Let Stor = createStor(countReducr, 0)
Stor.Dspatch("increment")
Stor.Dspatch("increment")
Stor.Dspatch("decrement")
consol.log(Stor.getStt();`,
totalMistakes: 47,
hint: "Fix: Functon→function (×4), createStor→createStore, reducr→reducer, initlStt→initialState, Stt→state (×6), Lstnrs→listeners (×4), getStt→getState (×2), Retrun→return, Dspatch→dispatch (×4), Actn→action (×3), For→for, missing semicolon in for loop, Lenght→length, subscrib→subscribe (×2), Lstnr→listener, Pus→push, retun→return (×4), functon→function, countReducr→counterReducer, IF→if (×2), missing semicolons, Let→let, Stor→store, consol.log, missing closing parenthesis."
},


// ── H190 ──
{
correct: `class VirtualDOM {
  constructor() {
    this.tree = null;
    this.patches = [];
  }
  createElement(tag, props, children) {
    return { tag: tag, props: props, children: children };
  }
  diff(oldNode, newNode) {
    if (!oldNode) return { type: "ADD", node: newNode };
    if (!newNode) return { type: "REMOVE" };
    if (oldNode.tag !== newNode.tag) return { type: "REPLACE", node: newNode };
    return { type: "UPDATE", props: newNode.props };
  }
  render(node) {
    this.tree = node;
    return "rendered: " + node.tag;
  }
}
let vdom = new VirtualDOM();
let div = vdom.createElement("div", { id: "app" }, []);
let span = vdom.createElement("span", { class: "text" }, []);
console.log(vdom.render(div));
console.log(vdom.diff(div, span));
console.log(vdom.diff(null, div));`,
wrong: `Clas VirtulDOM {
  Constructr() {
    this.Tre = Nul
    this.Patchs = []
  }
  creatElem(Tg, Prps, Chldren) {
    Retrun { Tg: Tg, Prps: Prps, Chldren: Chldren }
  }
  Dff(oldNod, newNod) {
    IF (!oldNod) retun { Typ: "ADD", Nod: newNod }
    IF (!newNod) retun { Typ: "REMOVE" }
    IF (oldNod.Tg !== newNod.Tg) retun { Typ: "REPLACE", Nod: newNod }
    retun { Typ: "UPDATE", Prps: newNod.Prps }
  }
  Rendr(Nod) {
    this.Tre = Nod
    Retrun "rendered: " + Nod.Tg
  }
}
Let Vdom = New VirtulDOM()
let Div = Vdom.creatElem("div", { Id: "app" }, [])
let Spn = Vdom.creatElem("span", { Cls: "text" }, [])
consol.log(Vdom.Rendr(Div))
Console.log(Vdom.Dff(Div, Spn))
console.Log(Vdom.Dff(Nul, Div);`,
totalMistakes: 48,
hint: "Fix: Clas→class, VirtulDOM→VirtualDOM, Constructr→constructor, Tre→tree, Nul→null, Patchs→patches, creatElem→createElement, Tg→tag (×6), Prps→props (×4), Chldren→children (×2), Retrun→return (×3), Dff→diff (×3), oldNod→oldNode, newNod→newNode, IF→if (×3), retun→return (×4), Typ→type (×4), Nod→node (×4), Rendr→render, missing semicolons, Let→let, Vdom→vdom, New→new, Div→div, Spn→span, Id→id, Cls→class, consol.log, Console→console, console.Log, missing closing parenthesis."
},


/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H191 - H200)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/


// ── H191 ──
{
correct: `function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
function isPalindrome(str) {
  let rev = reverseString(str);
  if (str === rev) {
    return true;
  }
  return false;
}
let word1 = reverseString("hello");
let word2 = reverseString("world");
console.log(word1);
console.log(word2);
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));`,
wrong: `Functon reverseStrin(str) {
  Let reversed = ""
  For (let i = str.Lenght - 1 i >= 0; i--) {
    reversed = reversed + str[i]
  }
  Retrun reversed;
}
functon isPalndrome(str) {
  let Rev = reverseStrin(str)
  IF (str === Rev) {
    Retrun Treu;
  }
  retun Flase;
}
let Wrd1 = reverseStrin("hello")
Let Wrd2 = reverseStrin("world")
consol.log(Wrd1)
Console.log(Wrd2)
console.Log(isPalndrome("racecar"))
console.log(isPalndrome("hello";`,
totalMistakes: 47,
hint: "Fix: Functon→function, reverseStrin→reverseString, Let→let, missing semicolons, For→for, str.Lenght→str.length, missing semicolon in for loop condition, Retrun→return, functon→function, isPalndrome→isPalindrome, Rev→rev, IF→if, Treu→true, retun→return, Flase→false, Wrd1→word1, Wrd2→word2, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H192 ──
{
correct: `const students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Usman", marks: 78 },
  { name: "Ayesha", marks: 95 }
];
function getTopStudent(arr) {
  let top = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].marks > top.marks) {
      top = arr[i];
    }
  }
  return top;
}
function getAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].marks;
  }
  return total / arr.length;
}
let topStudent = getTopStudent(students);
let average = getAverage(students);
console.log(topStudent);
console.log(average);`,
wrong: `Const studnts = [
  { Nam: "Ali", Mrks: 85 },
  { Nam: "Sara", Mrks: 92 }
  { Nam: "Usman", Mrks: 78 },
  { Nam: "Ayesha", Mrks: 95 }
]
functon getTopStudnt(arr) {
  let Top = arr[0]
  For (let i = 1 i < arr.Lenght; i++) {
    IF (arr[i].Mrks > Top.Mrks) {
      Top = arr[i]
    }
  }
  Retrun Top;
}
Functon getAverag(arr) {
  Let totl = 0
  For (let i = 0 i < arr.Lenght; i++) {
    totl = totl + arr[i].Mrks
  }
  retun totl / arr.Lenght;
}
let topStudnt = getTopStudnt(studnts)
Let averge = getAverag(studnts)
consol.log(topStudnt)
Console.log(averge;`,
totalMistakes: 48,
hint: "Fix: Const→const, studnts→students, Nam→name, Mrks→marks, missing comma after second element, functon→function, getTopStudnt→getTopStudent, Top→top, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Retrun→return, Functon→function, getAverag→getAverage, Let→let, totl→total, retun→return, averge→average, topStudnt→topStudent, consol.log, Console→console, missing closing parenthesis."
},


// ── H193 ──
{
correct: `function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
function countWords(str) {
  let words = str.split(" ");
  return words.length;
}
function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let sentence = "hello world from javascript";
console.log(countVowels(sentence));
console.log(countWords(sentence));
console.log(capitalizeFirst(sentence));`,
wrong: `Functon countVwels(str) {
  let Vowls = "aeiouAEIOU"
  Let Cnt = 0
  For (let i = 0 i < str.Lenght; i++) {
    IF (Vowls.Incldes(str[i])) {
      Cnt++
    }
  }
  Retrun Cnt;
}
functon countWrds(str) {
  Let Wrds = str.Splt(" ")
  retun Wrds.Lenght;
}
Functon capitlizeFirst(str) {
  retun str[0].toUperCase() + str.Slce(1)
}
let Sentenc = "hello world from javascript"
consol.log(countVwels(Sentenc))
Console.log(countWrds(Sentenc))
console.Log(capitlizeFirst(Sentenc);`,
totalMistakes: 46,
hint: "Fix: Functon→function, countVwels→countVowels, Vowls→vowels, Let→let, Cnt→count, For→for, missing semicolons, str.Lenght→str.length, IF→if, Vowls.Incldes→vowels.includes, Retrun→return, functon→function, countWrds→countWords, Wrds→words, str.Splt→str.split, Wrds.Lenght→words.length, retun→return, capitlizeFirst→capitalizeFirst, toUperCase→toUpperCase, str.Slce→str.slice, Sentenc→sentence, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H194 ──
{
correct: `class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = [];
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    this.transactions.push("Deposit: " + amount);
    return this.balance;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance = this.balance - amount;
    this.transactions.push("Withdraw: " + amount);
    return this.balance;
  }
  getHistory() {
    return this.transactions;
  }
}
let account = new BankAccount("Ali", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance);
console.log(account.getHistory());`,
wrong: `Clas BankAccnt {
  Constructr(Ownr, Balanc) {
    this.Ownr = Ownr
    this.Balanc = Balanc
    this.transctins = []
  }
  Depost(Amnt) {
    this.Balanc = this.Balanc + Amnt
    this.transctins.Pus("Deposit: " + Amnt)
    Retrun this.Balanc
  }
  Withdaw(Amnt) {
    IF (Amnt > this.Balanc) {
      retun "Insufficient funds"
    }
    this.Balanc = this.Balanc - Amnt
    this.transctins.Pus("Withdraw: " + Amnt)
    Retrun this.Balanc
  }
  getHisty() {
    retun this.transctins
  }
}
Let accnt = New BankAccnt("Ali", 1000)
accnt.Depost(500)
accnt.Withdaw(200)
consol.log(accnt.Balanc)
Console.log(accnt.getHisty();`,
totalMistakes: 48,
hint: "Fix: Clas→class, BankAccnt→BankAccount, Constructr→constructor, Ownr→owner, Balanc→balance, missing semicolons, transctins→transactions, Depost→deposit, Amnt→amount, Pus→push, Retrun→return, Withdaw→withdraw, IF→if, retun→return, getHisty→getHistory, Let→let, accnt→account, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H195 ──
{
correct: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let nums = [64, 34, 25, 12, 22, 11, 90];
let sorted = bubbleSort(nums);
console.log(sorted);
console.log(linearSearch(sorted, 25));
console.log(linearSearch(sorted, 100));`,
wrong: `Functon bubblSort(arr) {
  Let N = arr.Lenght
  For (let i = 0 i < N - 1; i++) {
    For (let j = 0 j < N - i - 1; j++) {
      IF (arr[j] > arr[j + 1]) {
        let Tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = Tmp
      }
    }
  }
  Retrun arr;
}
functon linerSearch(arr, Targt) {
  For (let i = 0 i < arr.Lenght; i++) {
    IF (arr[i] === Targt) {
      retun i
    }
  }
  retun -1;
}
let Nums = [64, 34, 25, 12, 22, 11, 90]
Let Sortd = bubblSort(Nums)
consol.log(Sortd)
Console.log(linerSearch(Sortd, 25))
console.Log(linerSearch(Sortd, 100);`,
totalMistakes: 46,
hint: "Fix: Functon→function, bubblSort→bubbleSort, Let→let, N→n, arr.Lenght→arr.length, For→for, missing semicolons in for loops (i and j conditions), IF→if, Tmp→temp, missing semicolons, Retrun→return, functon→function, linerSearch→linearSearch, Targt→target, retun→return, Nums→nums, Sortd→sorted, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H196 ──
{
correct: `function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
function throttle(func, limit) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}
function handleSearch() {
  console.log("Searching...");
}
function handleScroll() {
  console.log("Scrolling...");
}
let debouncedSearch = debounce(handleSearch, 300);
let throttledScroll = throttle(handleScroll, 1000);
debouncedSearch();
throttledScroll();
console.log("Functions created");`,
wrong: `Functon debonc(Fnc, Dely) {
  let Timr;
  retun functon() {
    clearTimout(Timr)
    Timr = setTimout(Fnc, Dely)
  }
}
functon Throtle(Fnc, Limt) {
  Let lastCal = 0
  retun Functon() {
    let Nw = Date.Nw()
    IF (Nw - lastCal >= Limt) {
      lastCal = Nw
      Fnc()
    }
  }
}
Functon handleSerch() {
  consol.log("Searching...")
}
functon handleScrol() {
  Console.log("Scrolling...")
}
let deboncedSerch = debonc(handleSerch, 300)
Let throledScrol = Throtle(handleScrol, 1000)
deboncedSerch()
throledScrol()
console.Log("Functions created";`,
totalMistakes: 47,
hint: "Fix: Functon→function, debonc→debounce, Fnc→func, Dely→delay, retun→return, functon→function, clearTimout→clearTimeout, Timr→timer, setTimout→setTimeout, Throtle→throttle, Limt→limit, Let→let, lastCal→lastCall, Date.Nw→Date.now, Nw→now, IF→if, handleSerch→handleSearch, consol.log, handleScrol→handleScroll, Console→console, deboncedSerch→debouncedSearch, throledScrol→throttledScroll, console.Log, missing semicolons throughout, missing closing parenthesis."
},


// ── H197 ──
{
correct: `function mergeObjects(obj1, obj2) {
  let result = {};
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  for (let i = 0; i < keys1.length; i++) {
    result[keys1[i]] = obj1[keys1[i]];
  }
  for (let i = 0; i < keys2.length; i++) {
    result[keys2[i]] = obj2[keys2[i]];
  }
  return result;
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let user = { name: "Ali", age: 25 };
let address = { city: "Lahore", country: "Pakistan" };
let merged = mergeObjects(user, address);
let clone = deepClone(merged);
clone.name = "Sara";
console.log(merged);
console.log(clone);`,
wrong: `Functon mergeObjcts(Obj1, Obj2) {
  let Rslt = {}
  Let Kys1 = Objct.keys(Obj1)
  let Kys2 = Objct.keys(Obj2)
  For (let i = 0 i < Kys1.Lenght; i++) {
    Rslt[Kys1[i]] = Obj1[Kys1[i]]
  }
  For (let i = 0 i < Kys2.Lenght; i++) {
    Rslt[Kys2[i]] = Obj2[Kys2[i]]
  }
  Retrun Rslt;
}
functon depClone(Obj) {
  retun JSON.Pars(JSON.Strngify(Obj))
}
let Usr = { Nam: "Ali", Ag: 25 }
Let Adres = { Cty: "Lahore", Cntry: "Pakistan" }
let Mergd = mergeObjcts(Usr, Adres)
Let Clon = depClone(Mergd)
Clon.Nam = "Sara"
consol.log(Mergd)
Console.log(Clon;`,
totalMistakes: 48,
hint: "Fix: Functon→function, mergeObjcts→mergeObjects, Obj1→obj1, Obj2→obj2, Rslt→result, Let→let, Kys1→keys1, Objct→Object, Kys2→keys2, For→for, missing semicolons in for loops, Kys1.Lenght→keys1.length, Kys2.Lenght→keys2.length, missing semicolons, Retrun→return, functon→function, depClone→deepClone, Obj→obj, retun→return, JSON.Pars→JSON.parse, JSON.Strngify→JSON.stringify, Usr→user, Nam→name, Ag→age, Adres→address, Cty→city, Cntry→country, Mergd→merged, Clon→clone, consol.log, Console→console, missing closing parenthesis."
},


// ── H198 ──
{
correct: `function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let inner = flattenArray(arr[i]);
      for (let j = 0; j < inner.length; j++) {
        result.push(inner[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
let nested = [1, [2, 3], [4, [5, 6]], 7];
let flat = flattenArray(nested);
console.log(flat);
let withDups = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(withDups));`,
wrong: `Functon flatnArray(arr) {
  Let Rslt = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (Arry.isArry(arr[i])) {
      let Innr = flatnArray(arr[i])
      For (let j = 0 j < Innr.Lenght; j++) {
        Rslt.Pus(Innr[j])
      }
    } Else {
      Rslt.Pus(arr[i])
    }
  }
  Retrun Rslt;
}
functon removDuplcts(arr) {
  let Uniq = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (Uniq.indexof(arr[i]) === -1) {
      Uniq.Pus(arr[i])
    }
  }
  retun Uniq;
}
let Nestd = [1, [2, 3], [4, [5, 6]], 7]
Let Flt = flatnArray(Nestd)
consol.log(Flt)
let withDups = [1, 2, 2, 3, 3, 4, 5, 5]
Console.log(removDuplcts(withDups);`,
totalMistakes: 47,
hint: "Fix: Functon→function, flatnArray→flattenArray, Let→let, Rslt→result, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Arry→Array, isArry→isArray, Innr→inner, Innr.Lenght→inner.length, Pus→push, Else→else, Retrun→return, functon→function, removDuplcts→removeDuplicates, Uniq→unique, Uniq.indexof→unique.indexOf, retun→return, Nestd→nested, Flt→flat, consol.log, Console→console, missing closing parenthesis."
},


// ── H199 ──
{
correct: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  emit(event, data) {
    if (!this.events[event]) {
      return false;
    }
    for (let i = 0; i < this.events[event].length; i++) {
      this.events[event][i](data);
    }
    return true;
  }
  off(event) {
    delete this.events[event];
    return this;
  }
}
let emitter = new EventEmitter();
emitter.on("login", function(data) {
  console.log("User logged in:", data);
});
emitter.emit("login", "Ali");
emitter.off("login");
console.log(emitter.events);`,
wrong: `Clas EventEmttr {
  Constructr() {
    this.Evnts = {}
  }
  On(Evnt, Listnr) {
    IF (!this.Evnts[Evnt]) {
      this.Evnts[Evnt] = []
    }
    this.Evnts[Evnt].Pus(Listnr)
    Retrun this
  }
  Emit(Evnt, Dat) {
    IF (!this.Evnts[Evnt]) {
      retun Flase
    }
    For (let i = 0 i < this.Evnts[Evnt].Lenght; i++) {
      this.Evnts[Evnt][i](Dat)
    }
    Retrun Treu
  }
  Off(Evnt) {
    Delet this.Evnts[Evnt]
    retun this
  }
}
Let Emtr = New EventEmttr()
Emtr.On("login", Functon(Dat) {
  consol.log("User logged in:", Dat)
})
Emtr.Emit("login", "Ali")
Emtr.Off("login")
Console.log(Emtr.Evnts;`,
totalMistakes: 49,
hint: "Fix: Clas→class, EventEmttr→EventEmitter, Constructr→constructor, Evnts→events, On→on, Evnt→event, Listnr→listener, IF→if, missing semicolons, Pus→push, Retrun→return, Emit→emit, Dat→data, retun→return, Flase→false, For→for, missing semicolon in for loop, this.Evnts[Evnt].Lenght→this.events[event].length, Treu→true, Off→off, Delet→delete, Let→let, Emtr→emitter, New→new, Functon→function, consol.log, Console→console, missing closing parenthesis."
},


// ── H200 ──
{
correct: `function memoize(fn) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let memoFib = memoize(fibonacci);
console.log(memoFib(10));
console.log(memoFib(15));
console.log(memoFib(20));
function square(n) {
  return n * n;
}
let memoSquare = memoize(square);
console.log(memoSquare(5));
console.log(memoSquare(10));`,
wrong: `Functon memize(Fn) {
  let Cach = {}
  retun Functon(N) {
    IF (Cach[N] !== Undefind) {
      Retrun Cach[N]
    }
    Cach[N] = Fn(N)
    Retrun Cach[N]
  }
}
functon fibonacc(N) {
  IF (N <= 1) {
    retun N
  }
  retun fibonacc(N - 1) + fibonacc(N - 2)
}
Let memFib = memize(fibonacc)
consol.log(memFib(10))
Console.log(memFib(15))
console.Log(memFib(20))
Functon squar(N) {
  retun N * N
}
let memSqr = memize(squar)
consol.log(memSqr(5))
Console.log(memSqr(10);`,
totalMistakes: 46,
hint: "Fix: Functon→function, memize→memoize, Fn→fn, Cach→cache, retun→return, N→n throughout, IF→if, Undefind→undefined, Retrun→return, missing semicolons, functon→function, fibonacc→fibonacci, Let→let, memFib→memoFib, consol.log, Console→console, console.Log, squar→square, memSqr→memoSquare, missing closing parenthesis."
},

/* ── Paragraph Mistakes — Hard JavaScript Data ──
   Hard: 45-50 mistakes per code
   Total: 10 paragraphs (H191 - H200)

   'correct' field = poora sahi code (jo user ko likhna chahiye)
   'wrong'   field = galat version (jo abhi code mein hai)

   type:
     'case'    = wrong case (Let → let, Function → function)
     'spelling'= spelling galat (fucntion → function, retrun → return)
     'missing' = semicolon, colon, bracket, parenthesis ghayab hai
     'extra'   = extra character ya symbol jo hona nahi chahiye
*/



// ── H191 ──
{
correct: `function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}
function isPalindrome(str) {
  let rev = reverseString(str);
  if (str === rev) {
    return true;
  }
  return false;
}
let word1 = reverseString("hello");
let word2 = reverseString("world");
console.log(word1);
console.log(word2);
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));`,
wrong: `Functon reverseStrin(str) {
  Let reversed = ""
  For (let i = str.Lenght - 1 i >= 0; i--) {
    reversed = reversed + str[i]
  }
  Retrun reversed;
}
functon isPalndrome(str) {
  let Rev = reverseStrin(str)
  IF (str === Rev) {
    Retrun Treu;
  }
  retun Flase;
}
let Wrd1 = reverseStrin("hello")
Let Wrd2 = reverseStrin("world")
consol.log(Wrd1)
Console.log(Wrd2)
console.Log(isPalndrome("racecar"))
console.log(isPalndrome("hello";`,
totalMistakes: 47,
hint: "Fix: Functon→function, reverseStrin→reverseString, Let→let, missing semicolons, For→for, str.Lenght→str.length, missing semicolon in for loop condition, Retrun→return, functon→function, isPalndrome→isPalindrome, Rev→rev, IF→if, Treu→true, retun→return, Flase→false, Wrd1→word1, Wrd2→word2, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H192 ──
{
correct: `const students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Usman", marks: 78 },
  { name: "Ayesha", marks: 95 }
];
function getTopStudent(arr) {
  let top = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].marks > top.marks) {
      top = arr[i];
    }
  }
  return top;
}
function getAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i].marks;
  }
  return total / arr.length;
}
let topStudent = getTopStudent(students);
let average = getAverage(students);
console.log(topStudent);
console.log(average);`,
wrong: `Const studnts = [
  { Nam: "Ali", Mrks: 85 },
  { Nam: "Sara", Mrks: 92 }
  { Nam: "Usman", Mrks: 78 },
  { Nam: "Ayesha", Mrks: 95 }
]
functon getTopStudnt(arr) {
  let Top = arr[0]
  For (let i = 1 i < arr.Lenght; i++) {
    IF (arr[i].Mrks > Top.Mrks) {
      Top = arr[i]
    }
  }
  Retrun Top;
}
Functon getAverag(arr) {
  Let totl = 0
  For (let i = 0 i < arr.Lenght; i++) {
    totl = totl + arr[i].Mrks
  }
  retun totl / arr.Lenght;
}
let topStudnt = getTopStudnt(studnts)
Let averge = getAverag(studnts)
consol.log(topStudnt)
Console.log(averge;`,
totalMistakes: 48,
hint: "Fix: Const→const, studnts→students, Nam→name, Mrks→marks, missing comma after second element, functon→function, getTopStudnt→getTopStudent, Top→top, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Retrun→return, Functon→function, getAverag→getAverage, Let→let, totl→total, retun→return, averge→average, topStudnt→topStudent, consol.log, Console→console, missing closing parenthesis."
},


// ── H193 ──
{
correct: `function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
function countWords(str) {
  let words = str.split(" ");
  return words.length;
}
function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
let sentence = "hello world from javascript";
console.log(countVowels(sentence));
console.log(countWords(sentence));
console.log(capitalizeFirst(sentence));`,
wrong: `Functon countVwels(str) {
  let Vowls = "aeiouAEIOU"
  Let Cnt = 0
  For (let i = 0 i < str.Lenght; i++) {
    IF (Vowls.Incldes(str[i])) {
      Cnt++
    }
  }
  Retrun Cnt;
}
functon countWrds(str) {
  Let Wrds = str.Splt(" ")
  retun Wrds.Lenght;
}
Functon capitlizeFirst(str) {
  retun str[0].toUperCase() + str.Slce(1)
}
let Sentenc = "hello world from javascript"
consol.log(countVwels(Sentenc))
Console.log(countWrds(Sentenc))
console.Log(capitlizeFirst(Sentenc);`,
totalMistakes: 46,
hint: "Fix: Functon→function, countVwels→countVowels, Vowls→vowels, Let→let, Cnt→count, For→for, missing semicolons, str.Lenght→str.length, IF→if, Vowls.Incldes→vowels.includes, Retrun→return, functon→function, countWrds→countWords, Wrds→words, str.Splt→str.split, Wrds.Lenght→words.length, retun→return, capitlizeFirst→capitalizeFirst, toUperCase→toUpperCase, str.Slce→str.slice, Sentenc→sentence, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H194 ──
{
correct: `class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    this.transactions = [];
  }
  deposit(amount) {
    this.balance = this.balance + amount;
    this.transactions.push("Deposit: " + amount);
    return this.balance;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance = this.balance - amount;
    this.transactions.push("Withdraw: " + amount);
    return this.balance;
  }
  getHistory() {
    return this.transactions;
  }
}
let account = new BankAccount("Ali", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance);
console.log(account.getHistory());`,
wrong: `Clas BankAccnt {
  Constructr(Ownr, Balanc) {
    this.Ownr = Ownr
    this.Balanc = Balanc
    this.transctins = []
  }
  Depost(Amnt) {
    this.Balanc = this.Balanc + Amnt
    this.transctins.Pus("Deposit: " + Amnt)
    Retrun this.Balanc
  }
  Withdaw(Amnt) {
    IF (Amnt > this.Balanc) {
      retun "Insufficient funds"
    }
    this.Balanc = this.Balanc - Amnt
    this.transctins.Pus("Withdraw: " + Amnt)
    Retrun this.Balanc
  }
  getHisty() {
    retun this.transctins
  }
}
Let accnt = New BankAccnt("Ali", 1000)
accnt.Depost(500)
accnt.Withdaw(200)
consol.log(accnt.Balanc)
Console.log(accnt.getHisty();`,
totalMistakes: 48,
hint: "Fix: Clas→class, BankAccnt→BankAccount, Constructr→constructor, Ownr→owner, Balanc→balance, missing semicolons, transctins→transactions, Depost→deposit, Amnt→amount, Pus→push, Retrun→return, Withdaw→withdraw, IF→if, retun→return, getHisty→getHistory, Let→let, accnt→account, New→new, consol.log, Console→console, missing closing parenthesis."
},


// ── H195 ──
{
correct: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let nums = [64, 34, 25, 12, 22, 11, 90];
let sorted = bubbleSort(nums);
console.log(sorted);
console.log(linearSearch(sorted, 25));
console.log(linearSearch(sorted, 100));`,
wrong: `Functon bubblSort(arr) {
  Let N = arr.Lenght
  For (let i = 0 i < N - 1; i++) {
    For (let j = 0 j < N - i - 1; j++) {
      IF (arr[j] > arr[j + 1]) {
        let Tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = Tmp
      }
    }
  }
  Retrun arr;
}
functon linerSearch(arr, Targt) {
  For (let i = 0 i < arr.Lenght; i++) {
    IF (arr[i] === Targt) {
      retun i
    }
  }
  retun -1;
}
let Nums = [64, 34, 25, 12, 22, 11, 90]
Let Sortd = bubblSort(Nums)
consol.log(Sortd)
Console.log(linerSearch(Sortd, 25))
console.Log(linerSearch(Sortd, 100);`,
totalMistakes: 46,
hint: "Fix: Functon→function, bubblSort→bubbleSort, Let→let, N→n, arr.Lenght→arr.length, For→for, missing semicolons in for loops (i and j conditions), IF→if, Tmp→temp, missing semicolons, Retrun→return, functon→function, linerSearch→linearSearch, Targt→target, retun→return, Nums→nums, Sortd→sorted, consol.log, Console→console, console.Log, missing closing parenthesis."
},


// ── H196 ──
{
correct: `function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
function throttle(func, limit) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}
function handleSearch() {
  console.log("Searching...");
}
function handleScroll() {
  console.log("Scrolling...");
}
let debouncedSearch = debounce(handleSearch, 300);
let throttledScroll = throttle(handleScroll, 1000);
debouncedSearch();
throttledScroll();
console.log("Functions created");`,
wrong: `Functon debonc(Fnc, Dely) {
  let Timr;
  retun functon() {
    clearTimout(Timr)
    Timr = setTimout(Fnc, Dely)
  }
}
functon Throtle(Fnc, Limt) {
  Let lastCal = 0
  retun Functon() {
    let Nw = Date.Nw()
    IF (Nw - lastCal >= Limt) {
      lastCal = Nw
      Fnc()
    }
  }
}
Functon handleSerch() {
  consol.log("Searching...")
}
functon handleScrol() {
  Console.log("Scrolling...")
}
let deboncedSerch = debonc(handleSerch, 300)
Let throledScrol = Throtle(handleScrol, 1000)
deboncedSerch()
throledScrol()
console.Log("Functions created";`,
totalMistakes: 47,
hint: "Fix: Functon→function, debonc→debounce, Fnc→func, Dely→delay, retun→return, functon→function, clearTimout→clearTimeout, Timr→timer, setTimout→setTimeout, Throtle→throttle, Limt→limit, Let→let, lastCal→lastCall, Date.Nw→Date.now, Nw→now, IF→if, handleSerch→handleSearch, consol.log, handleScrol→handleScroll, Console→console, deboncedSerch→debouncedSearch, throledScrol→throttledScroll, console.Log, missing semicolons throughout, missing closing parenthesis."
},


// ── H197 ──
{
correct: `function mergeObjects(obj1, obj2) {
  let result = {};
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  for (let i = 0; i < keys1.length; i++) {
    result[keys1[i]] = obj1[keys1[i]];
  }
  for (let i = 0; i < keys2.length; i++) {
    result[keys2[i]] = obj2[keys2[i]];
  }
  return result;
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let user = { name: "Ali", age: 25 };
let address = { city: "Lahore", country: "Pakistan" };
let merged = mergeObjects(user, address);
let clone = deepClone(merged);
clone.name = "Sara";
console.log(merged);
console.log(clone);`,
wrong: `Functon mergeObjcts(Obj1, Obj2) {
  let Rslt = {}
  Let Kys1 = Objct.keys(Obj1)
  let Kys2 = Objct.keys(Obj2)
  For (let i = 0 i < Kys1.Lenght; i++) {
    Rslt[Kys1[i]] = Obj1[Kys1[i]]
  }
  For (let i = 0 i < Kys2.Lenght; i++) {
    Rslt[Kys2[i]] = Obj2[Kys2[i]]
  }
  Retrun Rslt;
}
functon depClone(Obj) {
  retun JSON.Pars(JSON.Strngify(Obj))
}
let Usr = { Nam: "Ali", Ag: 25 }
Let Adres = { Cty: "Lahore", Cntry: "Pakistan" }
let Mergd = mergeObjcts(Usr, Adres)
Let Clon = depClone(Mergd)
Clon.Nam = "Sara"
consol.log(Mergd)
Console.log(Clon;`,
totalMistakes: 48,
hint: "Fix: Functon→function, mergeObjcts→mergeObjects, Obj1→obj1, Obj2→obj2, Rslt→result, Let→let, Kys1→keys1, Objct→Object, Kys2→keys2, For→for, missing semicolons in for loops, Kys1.Lenght→keys1.length, Kys2.Lenght→keys2.length, missing semicolons, Retrun→return, functon→function, depClone→deepClone, Obj→obj, retun→return, JSON.Pars→JSON.parse, JSON.Strngify→JSON.stringify, Usr→user, Nam→name, Ag→age, Adres→address, Cty→city, Cntry→country, Mergd→merged, Clon→clone, consol.log, Console→console, missing closing parenthesis."
},


// ── H198 ──
{
correct: `function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let inner = flattenArray(arr[i]);
      for (let j = 0; j < inner.length; j++) {
        result.push(inner[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
let nested = [1, [2, 3], [4, [5, 6]], 7];
let flat = flattenArray(nested);
console.log(flat);
let withDups = [1, 2, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(withDups));`,
wrong: `Functon flatnArray(arr) {
  Let Rslt = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (Arry.isArry(arr[i])) {
      let Innr = flatnArray(arr[i])
      For (let j = 0 j < Innr.Lenght; j++) {
        Rslt.Pus(Innr[j])
      }
    } Else {
      Rslt.Pus(arr[i])
    }
  }
  Retrun Rslt;
}
functon removDuplcts(arr) {
  let Uniq = []
  For (let i = 0 i < arr.Lenght; i++) {
    IF (Uniq.indexof(arr[i]) === -1) {
      Uniq.Pus(arr[i])
    }
  }
  retun Uniq;
}
let Nestd = [1, [2, 3], [4, [5, 6]], 7]
Let Flt = flatnArray(Nestd)
consol.log(Flt)
let withDups = [1, 2, 2, 3, 3, 4, 5, 5]
Console.log(removDuplcts(withDups);`,
totalMistakes: 47,
hint: "Fix: Functon→function, flatnArray→flattenArray, Let→let, Rslt→result, For→for, missing semicolons in for loops, arr.Lenght→arr.length, IF→if, Arry→Array, isArry→isArray, Innr→inner, Innr.Lenght→inner.length, Pus→push, Else→else, Retrun→return, functon→function, removDuplcts→removeDuplicates, Uniq→unique, Uniq.indexof→unique.indexOf, retun→return, Nestd→nested, Flt→flat, consol.log, Console→console, missing closing parenthesis."
},


// ── H199 ──
{
correct: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
  }
  emit(event, data) {
    if (!this.events[event]) {
      return false;
    }
    for (let i = 0; i < this.events[event].length; i++) {
      this.events[event][i](data);
    }
    return true;
  }
  off(event) {
    delete this.events[event];
    return this;
  }
}
let emitter = new EventEmitter();
emitter.on("login", function(data) {
  console.log("User logged in:", data);
});
emitter.emit("login", "Ali");
emitter.off("login");
console.log(emitter.events);`,
wrong: `Clas EventEmttr {
  Constructr() {
    this.Evnts = {}
  }
  On(Evnt, Listnr) {
    IF (!this.Evnts[Evnt]) {
      this.Evnts[Evnt] = []
    }
    this.Evnts[Evnt].Pus(Listnr)
    Retrun this
  }
  Emit(Evnt, Dat) {
    IF (!this.Evnts[Evnt]) {
      retun Flase
    }
    For (let i = 0 i < this.Evnts[Evnt].Lenght; i++) {
      this.Evnts[Evnt][i](Dat)
    }
    Retrun Treu
  }
  Off(Evnt) {
    Delet this.Evnts[Evnt]
    retun this
  }
}
Let Emtr = New EventEmttr()
Emtr.On("login", Functon(Dat) {
  consol.log("User logged in:", Dat)
})
Emtr.Emit("login", "Ali")
Emtr.Off("login")
Console.log(Emtr.Evnts;`,
totalMistakes: 49,
hint: "Fix: Clas→class, EventEmttr→EventEmitter, Constructr→constructor, Evnts→events, On→on, Evnt→event, Listnr→listener, IF→if, missing semicolons, Pus→push, Retrun→return, Emit→emit, Dat→data, retun→return, Flase→false, For→for, missing semicolon in for loop, this.Evnts[Evnt].Lenght→this.events[event].length, Treu→true, Off→off, Delet→delete, Let→let, Emtr→emitter, New→new, Functon→function, consol.log, Console→console, missing closing parenthesis."
},


// ── H200 ──
{
correct: `function memoize(fn) {
  let cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let memoFib = memoize(fibonacci);
console.log(memoFib(10));
console.log(memoFib(15));
console.log(memoFib(20));
function square(n) {
  return n * n;
}
let memoSquare = memoize(square);
console.log(memoSquare(5));
console.log(memoSquare(10));`,
wrong: `Functon memize(Fn) {
  let Cach = {}
  retun Functon(N) {
    IF (Cach[N] !== Undefind) {
      Retrun Cach[N]
    }
    Cach[N] = Fn(N)
    Retrun Cach[N]
  }
}
functon fibonacc(N) {
  IF (N <= 1) {
    retun N
  }
  retun fibonacc(N - 1) + fibonacc(N - 2)
}
Let memFib = memize(fibonacc)
consol.log(memFib(10))
Console.log(memFib(15))
console.Log(memFib(20))
Functon squar(N) {
  retun N * N
}
let memSqr = memize(squar)
consol.log(memSqr(5))
Console.log(memSqr(10);`,
totalMistakes: 46,
hint: "Fix: Functon→function, memize→memoize, Fn→fn, Cach→cache, retun→return, N→n throughout, IF→if, Undefind→undefined, Retrun→return, missing semicolons, functon→function, fibonacc→fibonacci, Let→let, memFib→memoFib, consol.log, Console→console, console.Log, squar→square, memSqr→memoSquare, missing closing parenthesis."
},

  ],
};
