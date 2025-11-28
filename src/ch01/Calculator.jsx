import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState("");  // 첫 번째 숫자
    const [num2, setNum2] = useState("");  // 두 번째 숫자
    const [operator, setOperator] = useState("");  // 연산자
    const [result, setResult] = useState(0);  // 결과

    const handleNumberClick = (number) => {
        if (operator === "") {
            setNum1(prev => prev + number);
        } else {
            setNum2(prev => prev + number);
        }
    };

    const handleOperatorClick = (operator) => {
        if (num1 === "") return;  // num1이 비어 있으면 연산자 클릭 방지
        setOperator(operator);
    };

    const handleBackSpace = () => {
        if (operator === "") {
            setNum1(prev => prev.slice(0, -1));
        } else {
            setNum2(prev => prev.slice(0, -1));
        }
    };

    const handleCalculate = () => {
        if (num1 === "") return;  // num1이 비어 있으면 계산하지 않음

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2 || num1);  // num2가 비어 있으면 num1을 사용

        let calculationResult;

        switch (operator) {
            case "+":
                calculationResult = n1 + n2;
                break;
            case "-":
                calculationResult = n1 - n2;
                break;
            case "*":
                calculationResult = n1 * n2;
                break;
            case "/":
                calculationResult = n1 / n2;
                break;
            default:
                calculationResult = n1;
        }

        setResult(calculationResult);
        setNum1(calculationResult.toString());
        setNum2("");  // num2 초기화
        setOperator("");  // 연산자 초기화
    };

    return (
        <div>
            <h2>{num1} {operator} {num2} = {result}</h2>
            <div>
                <button onClick={() => handleNumberClick("1")}>1</button>
                <button onClick={() => handleNumberClick("2")}>2</button>
                <button onClick={() => handleNumberClick("3")}>3</button>
                <button onClick={() => handleOperatorClick("+")}>+</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick("4")}>4</button>
                <button onClick={() => handleNumberClick("5")}>5</button>
                <button onClick={() => handleNumberClick("6")}>6</button>
                <button onClick={() => handleOperatorClick("-")}>-</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick("7")}>7</button>
                <button onClick={() => handleNumberClick("8")}>8</button>
                <button onClick={() => handleNumberClick("9")}>9</button>
                <button onClick={() => handleOperatorClick("*")}>*</button>
            </div>
            <div>
                <button onClick={() => handleNumberClick("0")}>0</button>
                <button onClick={handleBackSpace}><FontAwesomeIcon icon={faBackspace} /></button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleOperatorClick("/")}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
