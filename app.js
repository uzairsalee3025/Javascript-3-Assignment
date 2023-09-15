// arr.pop();
// arr.push("addd", "adddd");
// arr.shift();
// arr.unshift("addif", 23);
// var car = arr.slice(0,4)
// console.log(car)

// var arr = ["add", "del", 2, "ahmed", "ammar", true, "assalam", "kchbh" ,"asasas"];

// arr.splice(2,4);

// console.log(arr);

// var secArr = [];
// secArr[0] = 2;
// secArr[1] = 2;
// secArr[2] = 2;
// secArr[3] = 2;
// secArr[4] = 2;

// console.log(secArr);

// Answer No 1
var studentName = [];
// Answer No 2
// bola hai ke chordo
// Answer No 3
var studentName2 = ["Uzair Saleem"];
console.log(studentName2);
// Answer No 4
var studentNo = [20];
console.log(studentNo);
// Answer No 5
var studentBoolean = [true];
console.log(studentBoolean);
// Answer No 6
var studentMixed = ["ahmed", 19, true];
console.log(studentMixed);
// Answer No 7
// var educationPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS" , "M" , "Phil" , "PhD"];
// document.write(educationPakistan)
// Answer No 8
var studentName = ["Uzair", "Ahmed", "Usama"];
var sutdentPercentage = [320, 230, 480];
var per1 = (sutdentPercentage[0] / 500) * 100;
var per2 = (sutdentPercentage[1] / 500) * 100;
var per3 = (sutdentPercentage[2] / 500) * 100;

document.write(
  "Score of " +
    studentName[0] +
    " is " +
    sutdentPercentage[0] +
    " Percentage: " +
    per1 +
    "%"
);
document.write(
  "Score of " +
    studentName[1] +
    " is " +
    sutdentPercentage[1] +
    " Percentage: " +
    per2 +
    "%"
);
document.write(
  "Score of " +
    studentName[2] +
    " is " +
    sutdentPercentage[2] +
    " Percentage: " +
    per3 +
    "%"
);

// Answer No 10
var studentScore = [320, 230, 480, 120];
var sort = studentScore.sort();
console.log(sort);

// Answer No 11
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

var selectedCities = [];

selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);

console.log("Selected Cities:", selectedCities);

// Answer No 12
var arr = ["This", " " , "is", " " , "my", " " , "cat"];
var singleString = arr.join("");
console.log(singleString);

// Answer No 13
// Create a new empty array
var fifoArray = [];

// Store values in FIFO order
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");

// Access values in FIFO order
var firstValue = fifoArray.shift(); // Removes and returns the first value
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();

console.log(firstValue); // "First"
console.log(secondValue); // "Second"
console.log(thirdValue); // "Third"

// Answer No 14
var lifoArray = [];

lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");

var lastValue = lifoArray.pop(); 
var secondLastValue = lifoArray.pop();
var thirdLastValue = lifoArray.pop();

console.log(lastValue); 
console.log(secondLastValue);
console.log(thirdLastValue);

// Answer No 15
// Define an array of phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the dropdown/select menu
document.write('<label for="manufacturer">Select a Manufacturer:</label>');
document.write('<select id="manufacturer">');

for (var i = 0; i < manufacturers.length; i++) {
  document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>');
