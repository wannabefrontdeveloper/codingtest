// 배열 병합
const evenNumbers = [2,4,6,8,10];
const oddNumbers = [1,3,5,7,9];
const numbers = [...evenNumbers, ...oddNumbers];
console.log(numbers); // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// 객체 병합
const person = {
    name: 'Jiwon Kim',
    familyName: 'Kim',
    givenName: 'Jiwon',
    country: 'USA',
};
const address = {
    country: 'Sounth Korea',
    city: 'Seoul',
};
const meerge = {...person, ...address};
console.log(merge);
// { name: 'Jiwon Kim', familyName: 'Kim', givenName: 'Jiwon', country: 'Sounth Korea', city: 'Seoul' }