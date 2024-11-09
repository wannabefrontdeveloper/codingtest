console.log('typeof 10 = ', typeof 10); // 자연수, number
console.log('typeof -5 = ', typeof -5); // 정수, number
console.log(typeof 3.14); // 정수, number
console.log(typeof Infinity); // 무한
console.log(typeof NaN); // NaN

let a = 13;
let b = 4;

// 연산자
console.log(a + b); // 더하기, 17
console.log(a - b); // 빼기, 9
console.log(a * b); // 곱하기, 52
console.log(a / b); // 나누기, 3.25
console.log(a % b); // 모듈러 연산 (나머지), 1
console.log(-a); // 부호를 바꿈, -13

// 빌트인 함수
console.log(Math.abs(-a)); // 절대값, 13
console.log(Math.ceil(a/b)); // 올림, 4
console.log(Math.floor(a / b)); // 내림, 3
console.log(Math.round(a/b)); // 반올림, 3
console.log(Math.trunc(-a / b)); // 버림, -3 (내림의 경우 -4)
console.log(Math.pow(a,b)); // a의 b승, 28561

// 숫자 타입 비교 연산
console.log(a == b); //  같은 값인지 비교, false
console.log(a != b); //  같지 않은 값인지 비교, true
console.log(a > b); // 왼쪽 값이 더 큰지 비교, true
console.log(a < b); // 왼쪽 값이 더 작은지 비교 false,
console.log(a >= b); // 왼쪽 값이 더 크거나 같은지 비교, true,
console.log(a <= b); // 왼쪽 값이 더 작거나 같은지 비교, false

// 숫자 타입 비트 연산
console.log(a & b); // AND, 4
console.log(a | b); // OR, 13
console.log(a ^ b); // XOR, 9
console.log(~a); // NOT, -14
console.log(a << 2); // 왼쪽 시프트 (a에 2^2를 곱한 것과 동일), 52
console.log(a >> 1); // 오른쪽 시프트 (a에 2^1로 나눈것 과 동일), 6

// 숫자 타입 논리 연산
console.log( a && b); // 논리 연산 AND, 4
console.log(a || b); // 논리 연산 OR, 13
console.log(!a); // 논리 연산 NOT, false

// 숫자 타입 예외
console.log(a / 0); // Infinity
console.log(a % 0); // NaN
console.log(a / "string"); // NaN
console.log(a % "string"); // NaN
console.log(a / null); // Infinity
console.log(a % null); // NaN
console.log( a / undefined); // NaN
console.log( a % undefined); // NaN