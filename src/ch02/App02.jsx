import { use, useState } from "react";
import "./style.css";

function App02() {
    const [ name , setName ] = useState("default name");  // input의 value 값이 변하면 동작
    const [ name2, setName2 ] = useState(""); // 확인 버튼을 눌렀을 때 동작
    const [ age , setAge ] = useState("default age");
    const [ age2 , setAge2 ] = useState("");
    

    const data = {
        title : "리액트 기초 시작",
        nameValue : "기본 이름",
        age : "0",
    }

    const handleNameInputOnChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeInputOnChange = (event) => {
        setAge(event.target.value);
    }

    const handleOkOnClick = () => {
        setName2(name);
        setAge2(age); 
        setName("");
        setAge("");
    }

    const handleResetOnClick = () => {
        setName(name);
        setAge(age);
        setName2("");
        setAge2("");
    }

    

    return <div className="main-box">
        <div className="title-box">
            <h1>제목 : {data.title}</h1>
        </div>
        <div className="input-box">
            <input type="text" Value={name} onChange={handleNameInputOnChange}/>
            <input type="text" Value={age} onChange={handleAgeInputOnChange} />
        </div>
        <div className="button-box">
            <button onClick = { handleOkOnClick }>확인</button>
            <button onClick={ handleResetOnClick }>초기화</button>
        </div>
        <div className="display-box">
            <ul>
                <li>이름 : {name2}</li>
                <li>나이 : {age2}</li>
            </ul>
        </div>
    </div>
}

export default App02;