const queue = [];

// 큐에 데이터 추가
queue.push(1);
queue.push(2);
queue.push(3);

// 큐의 맨 앞 데이터 제거
let firstItem = queue.shift();
console.log(firstItem); // 출력 : 1

// 큐에 데이터 추가
queue.push(4);
queue.push(5);

// 큐의 맨 앞 데이터 제거
firstItem = queue.shift();
console.log(firstItem); // 출력: 2