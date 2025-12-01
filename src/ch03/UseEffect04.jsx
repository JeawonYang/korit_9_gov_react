import { useEffect, useState } from "react";

function UseEffect04() {

    // num 상태
    // num 상태의 제곱 값을 화면에 출력하시오
    // 단 처음 num이 0일 때에는
    // '숫자를 증가시켜 결과를 확인하세요.'
    // 라는 안내 메시지를 alert로 출력하기.


    const [num, setNum] = useState(0);
    const [square , setSquare] = useState(0);
    const [isZero, setZero] = useState(true);
    

    useEffect(() => {
        setSquare(num ** 2);
    }, [num]);

    useEffect(() => {
        setZero(square === 0);
    }, [square]);

    useEffect(() =>{
        if (isZero) {
            setTimeout(() => {
                alert ("숫자를 증가시켜 결과를 확인하세요.");
            }, 100);
        }
    },[isZero]) 

    const handleOnClick = (value) => {
        if(value < 0 && num < 1) {
            return;
        }
        setNum(num + value);
    }
    

    return <>
        <h2>{num}</h2>
        <h2>{square}</h2>
        <button onClick={() => handleOnClick(1)}>1증가</button>
        <button onClick={() => handleOnClick(-1)}>1감소</button>
    </>
}

export default UseEffect04;