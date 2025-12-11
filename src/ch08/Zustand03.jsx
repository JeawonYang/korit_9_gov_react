import { useState } from "react";
import { useUserInfoList } from "./store/zustandStore";
import UserInfoListBox from "./UserInfoListBox";

function Zustand03() {
    /**
     * =====================================================================
     * 📘 [3교시] Zustand 리스트 상태 관리 실습
     * =====================================================================
     * - 1교시: 단일 문자열(name) 전역 상태 관리
     * - 2교시: 한 명의 사용자 정보(userInfo) 객체 상태 관리
     * - 3교시: 여러 명의 사용자 정보를 배열(userInfoList)로 관리하는 단계
     *
     * ✔ 이 컴포넌트(Zustand03)의 핵심 흐름:
     *    1) input 입력값은 useState 로 "로컬 상태" user 에 임시 저장
     *    2) "추가" 버튼을 클릭하면 Zustand 전역 Store(userInfoList)에 push
     *    3) UserInfoListBox 컴포넌트는 props 없이 Zustand에서 리스트를 바로 읽어 렌더링
     *
     * ✔ 장점:
     *    - 입력하는 동안 불필요하게 전역 상태를 바꾸지 않음 (리렌더 감소)
     *    - 여러 컴포넌트가 userInfoList를 공유할 수 있음
     *    - props drilling 없이 전역 리스트를 손쉽게 렌더링 가능
     * =====================================================================
     */

    // -----------------------------------------------------------
    // 🔵 [로컬 입력 상태] — form 입력 시에만 필요한 임시 객체
    // -----------------------------------------------------------
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
    });

    // -----------------------------------------------------------
    // 🟢 [전역 리스트 Setter] — Zustand store에서 가져옴
    //    setUserInfoList(user)를 호출하면 전역 배열에 user 하나가 추가됨
    // -----------------------------------------------------------
    const { setUserInfoList } = useUserInfoList();

    // -----------------------------------------------------------
    // 🔵 입력 값 변경 시 로컬 상태 업데이트
    // name 속성(username/email/phone)에 따라 해당 key만 업데이트됨
    // -----------------------------------------------------------
    const handleOnChange1 = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // -----------------------------------------------------------
    // 🟢 "추가" 버튼 클릭 시 전역 상태(userInfoList)에 user 객체 push
    // UserInfoListBox는 전역 리스트를 자동으로 렌더링함
    // -----------------------------------------------------------
    const handleOnClick = () => {
        setUserInfoList(user);

        // 입력창 초기화(Optional)
        setUser({
            username: "",
            email: "",
            phone: "",
        });
    };

    // -----------------------------------------------------------
    // 🔵 JSX 구조:
    // - input 3개: username, email, phone 입력
    // - 버튼 클릭 시 리스트 추가
    // - UserInfoListBox는 전역 리스트를 map으로 출력
    // -----------------------------------------------------------
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={user.username}
                    name="username"
                    placeholder="사용자이름"
                    onChange={handleOnChange1}
                />

                <input
                    type="text"
                    value={user.email}
                    name="email"
                    placeholder="이메일"
                    onChange={handleOnChange1}
                />

                <input
                    type="text"
                    value={user.phone}
                    name="phone"
                    placeholder="연락처"
                    onChange={handleOnChange1}
                />

                <button onClick={handleOnClick}>추가</button>
            </div>

            {/* 
                🟢 props 없이도 자동 렌더링됨.
                UserInfoListBox는 전역 userInfoList를 읽어서 화면에 목록 출력.
            */}
            <UserInfoListBox />
        </div>
    );
}

export default Zustand03;