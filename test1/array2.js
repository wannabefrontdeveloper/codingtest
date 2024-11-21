function solution(arr) {
    const uniqueArr = [...new Set(arr)]; // 중복값 제거
    uniqueArr.sort((a, b) => b - a); // 내림차순 정렬
    return uniqueArr;
}