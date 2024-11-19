const arr = [1,2,3,4,5];
arr.splice(2,0,9999); // [1,2,9999,3,4,5]

const arr2 = [1,2,3,4,5];
const removedElements = arr.splice(2,2); // [3,4]
console.log(arr); // [1,2,5]