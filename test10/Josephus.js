class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    // 이 문제에서는 큐의 크기를 알아야한다.
    size() {
        return this.rear - this.front;
    }

    pop() {
        return this.items[this.front++];
    }
}

function solution(N, K) {
    const queue = new Queue();

    // 1부터 N까지의 번호를 deque에 추가
    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }

    while(queue.size() > 1) {
        // deque에 하나의 요소가 남을 때까지
        for(let i = 0; i < K-1; i++) {
            queue.push(queue.pop()); // K번째 요소를 찾기 위해 앞에서부터 제거하고 뒤에 추가
        }
        queue.pop(); // K번째 요소를 제거
    }
    return queue.pop(); // 마지막으로 남은 요소 반환
}

console.log(solution(5,2)); // 3