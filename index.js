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
// Javascript provides many additional loops to loop through arrays or objects.
// I will continue revision tommorw