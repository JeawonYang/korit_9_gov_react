import { useState } from "react"; // React의 내장 훅인 useState를 불러옵니다. 상태 관리에 사용됩니다.

// 메인 부모 컴포넌트인 App02_2를 정의합니다.
function App02_2() {
    // name 상태 변수와 그를 업데이트할 setName 함수를 초기값 ""로 선언합니다. (사용자 입력 값)
    const [name, setName] = useState("");
    // age 상태 변수와 그를 업데이트할 setAge 함수를 초기값 ""로 선언합니다. (사용자 입력 값)
    const [age, setAge] = useState("");
    // 최종적으로 화면에 표시될 이름 상태 변수와 setDisplayName 함수를 선언합니다.
    const [displayName, setDisplayName] = useState("");
    // 최종적으로 화면에 표시될 나이 상태 변수와 setDisplayAge 함수를 선언합니다.
    const [displayAge, setDisplayAge] = useState("");
    
    // 컴포넌트의 UI를 반환합니다.
    return <div>
        {/* InputBox 컴포넌트를 렌더링하고, 입력 값(name, age)과 변경 함수(setName, setAge)를 Props로 전달합니다. */}
        <InputBox name={name} setName={setName} age={age} setAge={setAge} />
        {/* ButtonBox를 렌더링하고, 현재 입력 상태(name, age)와 화면 출력 상태 변경 함수를 전달합니다. */}
        <ButtonBox setDisplayName={setDisplayName} setDisplayAge={setDisplayAge} name={name} age={age} />
        {/* DisplayBox를 렌더링하고, 최종적으로 화면에 표시할 상태(displayName, displayAge)를 Props로 전달합니다. */}
        <DisplayBox displayName={displayName} displayAge={displayAge} />
    </div>
}

export default App02_2; // App02_2 컴포넌트를 이 모듈의 기본 내보내기(Export)로 지정합니다.

// InputBox 컴포넌트를 정의합니다. Props로 이름/나이 상태 값과 변경 함수를 받습니다 (여기서 객체 구조 분해 사용).
function InputBox({ name, setName, age, setAge }) {

    // 이름 입력 필드의 내용이 변경될 때 호출될 이벤트 핸들러를 정의합니다.
    const handleNameInputOnChange = (e) => {
        console.log(e.target.value); // 현재 입력된 값을 콘솔에 출력합니다.
        setName(e.target.value);     // App02_2의 name 상태를 현재 입력 값으로 업데이트합니다.
    }

    // 나이 입력 필드의 내용이 변경될 때 호출될 이벤트 핸들러를 정의합니다.
    const handleAgeInputOnChange = (e) => {
        console.log(e.target.value); // 현재 입력된 값을 콘솔에 출력합니다.
        setAge(e.target.value);      // App02_2의 age 상태를 현재 입력 값으로 업데이트합니다.
    }

    // InputBox의 UI를 반환합니다.
    return <div>
        {/* 이름 입력 필드: 현재 name 상태 값을 표시하고, 값이 바뀌면 handleNameInputOnChange 호출 */}
        <input type="text" value={name} onChange={handleNameInputOnChange} />
        {/* 나이 입력 필드: 현재 age 상태 값을 표시하고, 값이 바뀌면 handleAgeInputOnChange 호출 */}
        <input type="text" value={age} onChange={handleAgeInputOnChange} />
    </div>
}

// ButtonBox 컴포넌트를 정의합니다. Props로 버튼 클릭 시 사용할 함수와 현재 상태(name, age)를 받습니다.
function ButtonBox({ setDisplayName, setDisplayAge, name, age }) {

    // 버튼 클릭 시 호출될 이벤트 핸들러를 정의합니다.
    const handleOnClick = () => {
        setDisplayName(name); // 현재 입력된 name 상태를 화면 표시용 displayName 상태로 업데이트합니다.
        setDisplayAge(age);   // 현재 입력된 age 상태를 화면 표시용 displayAge 상태로 업데이트합니다.
    }

    // ButtonBox의 UI를 반환합니다.
    return <div className="button-box">
        {/* "확인" 버튼: 클릭 시 handleOnClick 함수를 호출합니다. */}
        <button onClick={handleOnClick}>확인</button>
    </div>
}

// DisplayBox 컴포넌트를 정의합니다. Props로 화면에 표시될 최종 이름과 나이 상태를 받습니다.
function DisplayBox({ displayName, displayAge }) {

    // DisplayBox의 UI를 반환합니다.
    return <div className="display-box">
        <ul>
            {/* displayName 상태 값을 목록 항목으로 표시합니다. */}
            <li>{displayName}</li>
            {/* displayAge 상태 값을 목록 항목으로 표시합니다. */}
            <li>{displayAge}</li>
        </ul>
    </div>
}