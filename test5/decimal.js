function solution(decimal) {
    const stack = [];

    while (decimal > 0) {
        const remainder = decimal % 2;
        stack.push(remainder);
        decimal = Math.floor(decimal / 2);
    }

    let binary = '';
    while (stack.length > 0 ) {
        binary += stack.pop(); // join() 메서드로 쉽게 문자열을 합칠 수도 있음.
    }

    return binary;
}