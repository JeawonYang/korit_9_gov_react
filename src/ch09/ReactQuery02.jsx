import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

/**
 * =====================================================================
 * 📌 axios 기본 설정
 * =====================================================================
 */
const api = axios.create({
    baseURL: "http://localhost:8080",
});

/**
 * =====================================================================
 * 📌 axios 요청 인터셉터
 * =====================================================================
 */
api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("AccessToken");
    if (!!accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

/**
 * =====================================================================
 * 📘 커스텀 React Query 훅: useDataQuery(index)
 * =====================================================================
 */
function useDataQuery(index) {
    return useQuery({
        queryKey: ["data", index],
        queryFn: async () =>
            await api.get("/api/security/data", {
                params: { index },
            }),
        gcTime: 1000 * 10,
        staleTime: 1000 * 10,
    });
}

/**
 * =====================================================================
 * 📘 ReactQuery02
 * =====================================================================
 */
function ReactQuery02() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <IndexShowBox1 />
        </QueryClientProvider>
    );
}

/**
 * =====================================================================
 * 📘 IndexShowBox1
 * =====================================================================
 * ⚡ 핵심: dataQuery.isLoading || <IndexShowBox2 />
 *
 * OR( || ) 연산은 왼쪽이 true면 오른쪽을 실행하지 않고 종료함.
 * → 즉, 로딩 중에는 IndexShowBox2가 렌더링 ❌ (mount 안 됨)
 *
 * 로딩이 끝나서 isLoading === false가 되는 순간
 * true || 컴포넌트 → false || 컴포넌트 로 바뀜
 * → 오른쪽이 실행되어 IndexShowBox2가 처음으로 "마운트" 됨
 *
 * 즉, "데이터가 로딩 완료된 후에만 Box2를 화면에 추가한다"는 의미.
 *
 * 🧠 마운트 과정
 * ----------------------------
 * 처음:   isLoading = true
 * 결과:   true  || <IndexShowBox2 />  → true  (Box2 렌더되지 않음)
 *
 * 나중:   isLoading = false
 * 결과:   false || <IndexShowBox2 /> → <IndexShowBox2 /> (처음 렌더됨)
 *
 * 그래서 데이터가 로딩될 때는 Box2가 없음,
 * 로딩이 끝나면 “갑자기 화면에 등장(mount)” 하는 것처럼 보임.
 * =====================================================================
 */
function IndexShowBox1() {
    const [index, setIndex] = useState("0");
    const [indexParam, setIndexParam] = useState("0");

    const dataQuery = useDataQuery(indexParam);

    const handleOnClick = () => {
        setIndexParam(index);
    };

    const queryClient = useQueryClient();
    console.log(queryClient.getQueryCache());

    return (
        <div>
            {/* index 입력 */}
            <input
                type="text"
                value={index}
                onChange={(e) => setIndex(e.target.value)}
            />

            <button onClick={handleOnClick}>확인</button>

            {/* 데이터 표시 */}
            <h1>{dataQuery.isLoading ? "로딩중..." : dataQuery.data?.data}</h1>

            {/* 
                🔥 OR 조건부 렌더링 핵심 설명:

                dataQuery.isLoading === true → "true || 컴포넌트" 이므로 true 반환,
                IndexShowBox2 는 렌더되지 않음.

                dataQuery.isLoading === false → "false || 컴포넌트" 이므로
                컴포넌트가 반환되어 Box2가 화면에 그때 처음 렌더됨(mount).
            */}
            {dataQuery.isLoading || <IndexShowBox2 />}
        </div>
    );
}

/**
 * =====================================================================
 * 📘 IndexShowBox2
 * =====================================================================
 */
function IndexShowBox2() {
    const dataQuery = useDataQuery("0");

    return (
        <div>
            <h2>{dataQuery.isLoading ? "로딩중..." : dataQuery.data?.data}</h2>
        </div>
    );
}

export default ReactQuery02;
