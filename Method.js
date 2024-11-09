const a = 'Hello, World!';
console.log(a.length); // 문자열 길이, 13
console.log(a.split(",")); // 특정 문자열 기준으로 나누기, ['Hello', 'World']
console.log(a.startsWith("Hello")); // 특정 문자열로 시작하는지 확인, true
console.log(a.endsWith("World")); // 특정 문자열로 끝나는지 확인, true
console.log(a.includes("llo,")); // 특정 문자열을 포함하는지 확인, true
console.log(a.indexOf("World")); // 특정 문자열의 시작 위치 확인, 7
console.log(a.lastIndexOf("l")); // 특정 문자열의 마지막 위치 확인, 10
// 특정 문자열을 다른 문자열로 대체, Hello, JavaScript!
console.log(a.replace("Wolrd", "JavaScript"));
console.log(a.toUpperCase()); // 대문자로 변환, HELLO, WORLD!
console.log(a.toLowerCase()); // 소문자로 변환, hello, world!
console.log(a.trim()); // 양쪽 공백 제거, Hello, World!
console.log(a.concat("!!")); // 문자열 연결, Hello, World!!!

console.log(typeof true); // boolean
console.log(typeof 2147383648n); // bigint
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol('symbol')); // symbol