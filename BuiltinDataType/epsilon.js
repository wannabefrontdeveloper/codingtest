// 앱실론 출력
console.log(Number.EPSILON);
let a = 0.1 + 0.1 + 0.1;
let b = 0.3;
console.log(a - b);
if (Math.abs(a-b) < Number.EPSILON) {
    console.log("a와 b는 같은 값입니다.");
} else {
    console.log("a와 b는 다른 값입니다.")
}