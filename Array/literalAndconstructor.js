// 리터럴을 이용하는 방법
const arr = [0,0,0,0,0,0];

// 배열 생성자를 이용하는 방법
const arr1 = new Array(6); // [undefined, undefined, ...]
const arr2 = [...new Array(6)].map((_, i) => i + 1); // [1,2,3,4,5,6]

// Array.fill() 함수를 이용하는 방법
const arr3 = new Array(6).fill(0); // [0,0,0,0,0,0]