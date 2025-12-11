import { useState } from "react";
import UserInfoBox from "./UserInfoBox";
import { useUserInfo } from "./store/zustandStore";

function Zustand02() {
    /**
     * 사용자 정보를 입력받은 후 확인을 눌렀을때 UserInfoBox 컴포넌트에서 출력
     */

    const [ user, setUser ] = useState({
        username : "",
        email : "",
        phone : "",

    });

    const { setUserInfo } = useUserInfo();

    const handleOnChange1 = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        });
    }

    const handleOnClick = () => {
        setUserInfo(user);
    }

    return <div>
        <div>
            <input type="text" value={user.username} name="username" placeholder="사용자이름" onChange={handleOnChange1} />
            <input type="text" value={user.email} name="email" placeholder="이메일" onChange={handleOnChange1} />
            <input type="text" value={user.phone} name="phone" placeholder="연락처" onChange={handleOnChange1} />
            <button onClick={handleOnClick}>확인</button>
        </div>
        <UserInfoBox />
    </div>
}

export default Zustand02;