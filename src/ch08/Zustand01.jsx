/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useName } from "./store/zustandStore";  
// Zustand 전역 상태 훅 import (zustandStore.js 에 정의됨)

// -----------------------------------------------------
// 🔥 Zustand vs useState 차이 설명
// useState를 사용하면 하위 컴포넌트(Box1 -> Box2 -> Box3)까지
// props로 계속 값을 "전달"해야 한다 (Prop Drilling 문제)
//
// 하지만 Zustand는 전역 상태를 만들기 때문에
// 어떤 컴포넌트든 바로 가져다 사용할 수 있다.
// 즉, Box3에서 props 없이도 상태를 사용할 수 있게 된다!
// -----------------------------------------------------

function Zustand01() {
    // 지역 상태: useState 사용하면 props로 전달해야 함
    const [ name1, setName1 ] = useState("김준일");

    // Zustand 전역 상태: 어떤 컴포넌트든 직접 접근 가능
    // name, setName 은 zustandStore.js 에서 전역으로 생성됨
    const { name, setName } = useName();   
    console.log(name);

    // 지역 상태 변경 핸들러
    const handleOnChange1 = (e) => {
        setName1(e.target.value);
    };

    // 전역 상태 변경 핸들러 (Zustand)
    const handleOnChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            {/* useState 상태 */}
            <h1>{name1}</h1>

            {/* 지역 상태 변경 */}
            <input 
                type="text" 
                value={name1} 
                onChange={handleOnChange1}
            />

            {/* 전역 상태 변경 */}
            <input 
                type="text" 
                value={name} 
                onChange={handleOnChange}
            />

            {/* 지역 상태는 props로 계속 전달해야 함 */}
            <Box1 name1={name1} />
        </>
    );
}

// ---------------------------------------------
// Box1 → Box2 → Box3 : props 전달 계속됨
// (useState 방식의 한계: Prop Drilling)
// ---------------------------------------------
function Box1({ name1 }) {
    return (
        <div>
            <Box2 name1={name1} />
        </div>
    );
}

function Box2({ name1 }) {
    return (
        <div>
            <Box3 name1={name1} />
        </div>
    );
}

function Box3({ name1 }) {
    // Zustand 전역 상태는 props 없이도 여기서 직접 꺼내 쓸 수 있음
    const { name } = useName();

    return (
        <div>
            {/* useState로 내려온 값 */}
            {name1}

            <div>
                {/* Zustand 전역 상태 */}
                {name}
            </div>
        </div>
    );
}

export default Zustand01;