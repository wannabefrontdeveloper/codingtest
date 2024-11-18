let a = 5;
let b = 10;
let temp;

// 교환 로직
temp = a;
a = b;
b = temp;

// 구조 분해 할당을 이용할 시
[a,b] = [b,a];