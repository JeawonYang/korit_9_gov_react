/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";

/* --------------------------------------------------------------------------- */
/* box1 : 고정 박스 (CSS 기본 속성 예시)                                        */
/* --------------------------------------------------------------------------- */
const box1 = css`
    width: 100px;                /* 가로 크기 100px */
    height: 100px;               /* 세로 크기 100px */
    background-color: black;     /* 배경색 검정 */
`;

/* --------------------------------------------------------------------------- */
/* box2 : 함수형 스타일                                                        */
/* --------------------------------------------------------------------------- */
const box2 = () => css`
    width: 100px;
    height: 100px;
    background-color: blue;     /* 파란 박스 */
`;

/* --------------------------------------------------------------------------- */
/* box3 : 동적 스타일 (props 기반)                                             */
/* --------------------------------------------------------------------------- */
const box3 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color}; /* 전달받은 색으로 배경색 변경 */
`;

/* --------------------------------------------------------------------------- */
/* box4 : 좌우 이동 박스                                                       */
/* --------------------------------------------------------------------------- */
const box4 = (left) => css`
    width: 100px;
    height: 100px;
    background-color: green;

    position: relative;
    /* 
       relative: 자기 원래 위치를 기준으로 이동.
       left/top/right/bottom 값이 자신 기준으로 적용됨.
       실제 레이아웃 흐름은 유지되지만 시각적으로만 이동됨.
    */

    left: ${left}px;
    /* 
       left: 요소를 오른쪽으로 이동시키는 위치 속성.
       px 단위 필수. 숫자만 넣으면 적용되지 않음.
    */

    transition: left 1s ease-in-out;
    /* 
       transition: CSS 속성이 변경될 때 애니메이션을 적용.
       left 값이 변할 때 1초 동안 천천히 이동하도록 설정.
    */
`;

/* --------------------------------------------------------------------------- */
/* container : 전체 영역을 감싸는 컨테이너                                     */
/* --------------------------------------------------------------------------- */
const container = css`
    display: flex;                /* 내부 요소를 flexbox로 배치 */
    flex-direction: column;       /* 세로 방향으로 배치 */

    align-items: center;          /* 가로축 기준 중앙 정렬 */

    margin: 10px auto;            /* 위아래 10px, 좌우는 자동으로 가운데 정렬 */
    padding: 20px;                /* 내부 여백 20px */

    box-sizing: border-box;       
    /* 
       border-box: width, height 계산 시 padding, border 포함.
       CSS 크기 계산이 직관적이도록 만드는 속성.
    */

    border: 1px solid #222;       /* 테두리 1px */

    width: 500px;                 /* 고정 가로 크기 */
    height: 650px;                /* 고정 높이 */
`;

/* --------------------------------------------------------------------------- */
/* buttonController : 방향키 UI 영역                                           */
/* --------------------------------------------------------------------------- */
const buttonController = css`
    display: flex;
    flex-direction: column;       /* 상-중-하 구조 */

    width: 150px;
    height: 150px;
`;

/* 위쪽 버튼 영역 */
const controllerTop = css`
    display: flex;
    justify-content: center;      /* 가운데 정렬 */
    flex-grow: 1;                 /* 공간을 동일하게 나눔 */
`;

/* 중간(좌/우) 버튼 영역 */
const controllerMiddle = css`
    display: flex;
    justify-content: space-between; /* 왼쪽, 오른쪽 끝으로 배치 */
    flex-grow: 1;
`;

/* 아래 버튼 영역 */
const controllerBottom = css`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

/* 방향 버튼 스타일 */
const button = css`
    width: 50px;
    height: 50px;
`;

/* --------------------------------------------------------------------------- */
/* 박스가 움직이는 영역                                                        */
/* --------------------------------------------------------------------------- */
const boxContainer = css`
    position: relative;
    /* 
       내부 요소가 absolute 위치를 사용할 수 있도록 기준점 제공.
    */

    margin-top: 20px;
    border: 1px solid #222;

    width: 100%;
    flex-grow: 1; /* 남는 공간을 모두 차지 */
`;

/* --------------------------------------------------------------------------- */
/* 움직이는 박스                                                               */
/* --------------------------------------------------------------------------- */
const movingBox = (position) => css`
    position: absolute;
    /* 
       absolute: boxContainer(부모)의 위치를 기준으로 이동.
       top/left가 부모 기준으로 적용됨.
    */

    /* (% 이동) - (px 보정) 으로 박스의 실제 정중앙 느낌을 맞춤 */
    top: calc(${position.top}% - ${position.top}px);
    left: calc(${position.left}% - ${position.left}px);

    width: 100px;
    height: 100px;
    background-color: blue;

    transition: all 1s ease-in-out;
    /*
        모든 위치(top, left) 변경을 1초 동안 부드럽게 애니메이션 처리.
    */
`;

/* --------------------------------------------------------------------------- */
/* React Component                                                             */
/* --------------------------------------------------------------------------- */
function Css02() {

    /* 색 변경용 state */
    const [ color, setColor ] = useState("#000000");

    /* box4 좌우 이동 상태 */
    const [ left, setLeft ] = useState(0);

    /* movingBox 상하좌우 이동 상태 */
    const [ position, setPosition ] = useState({
        top: 0,
        left: 0,
    });

    /* 오른쪽 → 왼쪽 이동 */
    const handleMoveOnClick = () => {
        setLeft(left === 0 ? 700 : 0);
    };

    /* 상/하/좌/우 버튼 클릭 처리 */
    const handleMoveButtonOnClick = (e) => {

        const positionValue = {
            hight: 0,   // 위(top)
            low: 100,   // 아래(top)
            left: 0,    // 왼쪽(left)
            right: 100, // 오른쪽(left)
        };

        if (["hight", "low"].includes(e.target.id)) {
            // 위/아래 이동
            setPosition({
                ...position,
                top: positionValue[e.target.id],
            });
        } else {
            // 좌/우 이동
            setPosition({
                ...position,
                left: positionValue[e.target.id],
            });
        }
    };

    /* ----------------------------------------------------------------------- */
    /* 렌더링                                                                  */
    /* ----------------------------------------------------------------------- */
    return <>
        {/* box3 색 변경 버튼 */}
        <button onClick={() => setColor("red")}>빨</button>
        <button onClick={() => setColor("orange")}>주</button>
        <button onClick={() => setColor("yellow")}>노</button>

        <div css={box1}></div>
        <div css={box2()}></div>
        <div css={box3(color)}></div>

        {/* box4 좌우 이동 */}
        <button onClick={handleMoveOnClick}>이동</button>
        <div css={box4(left)}></div>

        {/* 상/하/좌/우 이동 컨트롤러 */}
        <div css={container}>
            <div css={buttonController}>
                <div css={controllerTop}>
                    <button id="hight" css={button} onClick={handleMoveButtonOnClick}>상</button>
                </div>
                <div css={controllerMiddle}>
                    <button id="left" css={button} onClick={handleMoveButtonOnClick}>좌</button>
                    <button id="right" css={button} onClick={handleMoveButtonOnClick}>우</button>
                </div>
                <div css={controllerBottom}>
                    <button id="low" css={button} onClick={handleMoveButtonOnClick}>하</button>
                </div>
            </div>

            {/* 움직이는 박스 */}
            <div css={boxContainer}>
                <div css={movingBox(position)}></div>
            </div>
        </div>
    </>;
}

export default Css02;
