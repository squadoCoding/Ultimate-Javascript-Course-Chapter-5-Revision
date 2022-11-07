// Chapter-5: Arrays
// Arrays in javascript are used to store a set of values under a single name.Unlike c/c++ languages in javascript we can store different types of data in an array
// Creating an array
// const myArray = [true, "good boy", 56, null];
// console.log(myArray);

// Accessing array elements
// console.log(myArray[0]);
// console.log(myArray[2]);

// Arrays are mutabke in javascript so we can change the indexes of arrays directly unlike strings.
// myArray[3] = "hellow";
// console.log(myArray);

// In javascript arrays are objects
// console.log(typeof myArray);

// Array properties and methods
// const nums = [4, 43, 89, 12, 34, 23];

// console.log(nums.length);
// console.log(nums.toString());// actual array will not be affected
// console.log(nums.join("-"));// actual array will not be affected
// console.log(nums.pop());// actual array will be affected
// console.log(nums.shift());// actual array will be affected
// console.log(nums.push(7));// actual array will be affected
// console.log(nums.unshift(18));// actual array will be affected
// console.log(nums.slice(2, 5));// actual array will not be affected
// console.log(nums.slice(3));// actual array will not be affected
// console.log(nums.splice(1, 2, 45, 72, 3));// actual array will be affected
// delete nums[2];
// console.log(nums);
// console.log(nums.sort());// actual array will be affected
// const compare = (a, b) => {
// return a - b;// arrange numbers in accending oredr
// return b - a;// arrange numbers in descending oredr
// }
// console.log(nums.sort(compare));

// const nums2 = [56, 32, 71];
// const nums3 = [5, 34, 21];
// console.log(nums.concat(nums2, nums3));// new array will be returned and actual array will not be chandged
// console.log(nums.reverse());// actual array will be changed

// Looping through arrays
// Javascript provides many additional loops to loop through arrays or objects.We can loop through arrays using the classicle for loop or while loop and do-while loops in javascript but we have some great alternatives to minimize the effort to loop through arrays.

const myNums = [2, 35, 78, 10, 43];

// forEach loops: forEach() loop performs the given operations for each element in the array.
// myNums.forEach((num, index, array) => {
//   num += 2;
//   console.log(num);
//   console.log(index);
//   console.log(array);
// });

// map: This method also executes the given operations on all the elements of the array but the differene is that this method creates a new array created with all the elements we returne frem the callback function().
// In the following example we are creating an array which contains the double of each element of "myNums"
// const newNumsArr = myNums.map((num, index, array) => {
//   return num * 2;
// });

// console.log(newNumsArr);

// filter method is used to check a particular condition for each element in the array, if the condition is false then that element will be removed and the elements for which the condition is true that elements will be added to an array and that array will be returned (note that origional array will not be affected);
// const lessThan40 = myNums.filter((num, index, arr) => {
//   return num <= 40;
// });
// console.log(lessThan40);

// reduce: This method is used to reduce an array to form a single value.
// const addition = myNums.reduce((previousNum, currentNumber, currentIndex, arr) => {
//   return previousNum + currentNumber;
// });

// console.log(addition);

// There is an Array.from() method in javascript which is used to convert objects in arrays
// console.log(Array.from("Siddhant"));
// // This wil only work on iterable objects
// console.log(Array.from({
//   name: "Siddhant",
//   class: 8,
//   favFood: "Good foor good life"
// }));

// for of loop is used to loop through arrays, as we know that arrays are also objects so we can eacily loop through arrays using for of loops as arrays are iterable
for(let num of myNums){
  console.log(num);
}

// for in loop can be used to get kees{indexes} from an array
for(let index in myNums){
  console.log(index);
}