import { useState } from "react";

function Inputs() {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (e) => {
        setFullName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    //컴포넌트의 핵심은 태그 
    return <>
        <input type="text" placeholder="이름" onChange={handleNameChange} />
        <input type="text" placeholder="나이" onChange={handleAgeChange} />
        <h2>이름 : {fullName} </h2>
        <h2>나이 : {age}</h2>
    </>
}

export default Inputs;