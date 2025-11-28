import { useState } from "react";

function UseEffect01() {
    let [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const [result , setResult] = useState(0);
    
    const handleNum1OnClick = () => {
        setNum1(num1 + 1);
        num1 += 1;
        console.log(num1);  
        console.log(num2);
        setResult(num1 + num2);
    }
    
    const handleNum2OnClick = () => {
        setNum2(num2 + 1);
        setResult(num1 + num2);
    }

    return <>
        <button onClick={handleNum1OnClick}>num1 = {num1}</button>
        <button onClick={handleNum2OnClick}>num2 = {num2}</button>
        <h1>{num1} + {num2} = {result}</h1>
    </>
}

export default UseEffect01;