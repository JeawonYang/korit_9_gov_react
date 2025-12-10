import axios from "axios";
import { useEffect, useState } from "react";

function Auth02() {

    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
    });

    const [ inputMessage, setInputMessage ] = useState({
        username: "",
        password: "",
    });

    const [ signinButtonDisabled, setSigninButtonDisabled ] = useState({

    })

    const regexs = {
        username: {
            regex : /^[a-z0-9_-]{5,20}$/,
            message : "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
        },
        password: {
            regex : /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z0-9^A-Za-z0-9\W]{8,16}$/,
            message : "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요."
        },
    }

    useEffect(() => {
        const isBlank = Object.values(inputValue)
            .includes("");
        const isNotValid = Object.values(inputMessage)
            .map(message => !!message)
            .includes(true);
        setSigninButtonDisabled(isBlank || isNotValid);
    }, [inputValue]);

    const handleInputOnchange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        });

        if (regexs[e.target.name].regex.test(e.target.value)) {
            setInputMessage({
                ...inputMessage,
                [e.target.name] : "",
            });
        } else {
            setInputMessage ({
                ...inputMessage,
                [e.target.name]: regexs[e.target.name].message,
            });
        }
    }

    const handleSigninOnClick = () => {
        signinRequest();
    }

    const signinRequest = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/signin", inputValue);
            const {accessToken} = response.data;
            localStorage.setItem("AccessToken", accessToken);
            alert("로그인 성공!!");
            await getPrincipalRequest();
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const handleInputOnKeyDown = (e) => {
        if (e.key === "Enter") {
            signinRequest();
        }
    };

    const getPrincipalRequest = async () => {
        try {
            const resp = await axios.get("http://localhost:8080/api/auth/principal", {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("AccessToken")}`,
                },
            });
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }

    return <>
    <div> 
        <input type="text"
                name="username" 
                placeholder="USERNAME" 
                value={inputValue.username} 
                onChange={handleInputOnchange}/>
        <span>{inputMessage.username}</span>
    </div>
    <div>
        <input type="text" 
                name="password" 
                placeholder="PASSWORD" 
                value={inputValue.password}
                onKeyDown={handleInputOnKeyDown}
                onChange={handleInputOnchange}/>
        <span>{inputMessage.password}</span>
    </div>
    <button disabled={signinButtonDisabled} onClick={handleSigninOnClick}>LogIn</button>
    </>
}

export default Auth02;