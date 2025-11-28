// 문제
// input 하나를 만들고 입력된 이름과 값과 일치하는 나이를 h2 태그안에 출력하시오.
// 이름이 없으면 '값 없음'을 출력

import { useState } from "react";

function SearchName() {
    const profiles = [
        {
            name: "김준일",
            age : 32,
        },
        {
            name: "김준이",
            age : 33,
        },
        {
            name: "김준이",
            age : 36,
        },
        {
            name: "김준삼",
            age : 34,
        }
    ]

    const [result, setResult] = useState("찾은 결과 없음");
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
        setResult("찾은 결과 없음");

        // for (first find)
        for (let i = 0; i < profiles.length; i++) {
            const profile = profiles[i];
            if (profile.name === e.target.value) {
                setResult(profile.age);
                break;
            }
        }

        // foreach (last find)
            profiles.forEach((profile) => {
                if(profile === e.target.value) {
                    setResult(profile.age);
                }
            })

        // filter (인덱스 번호에 따라 달라짐 0이 아니라 length -1 이면 last find)
            const foundProfiles = profiles.filter((profile) => {
                return profile.name === e.target.value;
            })
            if (!!foundProfiles.length) {
                setResult(foundProfiles[0].age)
            }

        // find (first find)
            const foundProfile = profiles.find((profile) => {
                return profile.name === e.target.value;
            })
            if (!!foundProfile) {
                setResult(foundProfile.age)
            }
    }

    return <>
        <input type="text" value={inputValue} onChange={handleOnChange}/>
        <h2>나이 : {result} </h2>
    </>
}
export default SearchName;