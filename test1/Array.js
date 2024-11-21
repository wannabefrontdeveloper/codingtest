// 버블 정렬을 활용한 방법
function bubbleSort(arr) {
const n = arr.length;
for ( let i = 0; i < n; i ++) {
    for(let j = 0; j < n-i -1; j++) {
        if (arr[j+1] < arr[j]) {
            const tmp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = tmp;
        }
    }
}
return arr;
}

//  sort() 함수를 활용한 방법
function doSort(arr) {
arr.sort((a, b) => a - b);
return arr;
};

function measureTime(callback ,arr) {
    const start = Date.now();
    const result = callback(arr);
    const end = Date.now();
    return [end - start, result];
};

let arr = Array.from({ length: 10000}, (_, k) => 10000 - k);

// 첫번째 코드 시간 측정
// 첫 번째 코드 실행 시간: 81ms
const [bubbleTime, bubbleResult] = measureTime(bubbleSort, arr);
console.log(`첫 번째 코드 실행 시간: ${bubbleTime}ms`)

// 두 번째 코드 시간 측정
// 두 번째 코드 실행 시간: 1ms
arr = Array.from({ length: 10000}, (_, k) => 10000 - k);
const [doSortTime, doSortResult] = measureTime(doSort, arr);
console.log(`두 번째 코드 실행 시간: ${doSortTime}ms`);
