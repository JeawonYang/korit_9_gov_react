import { BrowserRouter, Link, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

function Router05() {
    return <BrowserRouter>
        <div>
            <Link to={"/p1/junil/32"}>p1</Link>
            <div></div>
            <Link to={"/p2/junyi/33"}>p2</Link>
        </div>
        <Routes>
            <Route path="/p1/:name/:age" element={<Page1 />} />
            <Route path="/p2/:name/:age" element={<Page2 />} />
        </Routes>
    </BrowserRouter>
}

function Page1 () {
    // const params = useParams();
    // console.log(params);
    const { name, age } = useParams();
    const { pathname } =useLocation();

    return <div>
        <h3>이름 : {name}</h3>
        <h3>나이 : {age}</h3>
        <h3>URL 주소 : {pathname}</h3>
    </div>
}

function Page2 () {
    // const location = useLocation();
    // console.log(location);
    const { name, age } = useParams();
    const { pathname } =useLocation();

    return <div>
        <h3>이름 : {name}</h3>
        <h3>나이 : {age}</h3>
        <h3>URL 주소 : {pathname}</h3>
    </div>
}
export default Router05;