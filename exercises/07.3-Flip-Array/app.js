let arr = [45,67,87,23,5,32,60];

// Your code here

let initialValue = arr.length - 1;
let finalValue = 0;

for (let i = initialValue; i >= finalValue; i--) {
  arr.reverse(arr[i]);
}

console.log(arr); // [60, 32, 5, 23, 87, 67, 45]