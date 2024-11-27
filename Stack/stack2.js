const stack = []; // 스택 초기화

function push(stack, item) {
    // 스택에 데이터를 추가하는 함수
    stack.push(item);
    console.log('데이터가 추가되었습니다.');
}

function pop(stack) {
    // 스택에서 데이터를 꺼내는 함수
    if (stack.length === 0) {
        console.log('스택이 비어 있습니다.');
        return null;
    } else {
        return stack.pop();
    }
}