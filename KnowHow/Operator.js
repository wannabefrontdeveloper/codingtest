// func 함수는 flag가 true면 실행
flag && func();

// 객체 병합에도 이용할 수 있음, showAddress가 true면 객체 병합
const makeCompany = (showAddress) => {
    return {
        name: 'GoldenRabbit',
        ...showAddress && { address: 'Seoul'}
        // showAddress가 true면 뒤 객체에 스프레드 연산자 적용
    };
};
console.log(makeCompany(false)); // {name: 'GoldenRabbit'}
console.log(makeCompany(true)); // {name: 'GoldenRabbit', address: 'Seoul'}

// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당된다.
const name = participantName || 'Guest';