import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';
import Counter from './ch02/Counter';
import App02_2 from './ch02/App02_2';
import App02_3 from './ch02/App02_3';
import App02_4 from './ch02/App02_4';
import App02_5 from './ch02/App02_5';
import Inputs from './ch02/Inputs';
import SearchName from './ch02/SearchName';
import UseEffect01 from './ch03/UseEffect01';
import UseEffect02 from './ch03/UseEffect02';
import UseEffect03 from './ch03/UseEffect03';
import UseEffect04 from './ch03/UseEffect04';
import Axios01 from './ch04/Axios01';
import Axios02 from './ch04/Axios02';
import Promise01 from './ch04/Promise01';
import Calculator from './ch01/Calculator';
import Axios03 from './ch04/Axios03';
import Axios04 from './ch04/Axios04';
import Axios05 from './ch04/Axios05';
import Axios06 from './ch04/Axios06';
import Auth01 from './ch05/Auth01';
import Auth02 from './ch05/Auth02';
import Router01 from './ch06/Router01';
import Router02 from './ch06/Router02';
import Router03 from './ch06/Router03';
import Router04 from './ch06/Router04';
import Router05 from './ch06/Router05';
import Css from './ch07/Css';
import Css01 from './ch07/Css01';
import Css02 from './ch07/Css02';


const appObj = {
    "ch01" :  <App01 />,
    "ch02" :  <App02 />,
    "ch02_2" :  <App02_2 />,
    "ch02_3" :  <App02_3 />,
    "ch02_4" :  <App02_4 />,
    "ch02_5" :  <App02_5 />,
    "inputs" : <Inputs />,
    "searchname" : <SearchName />,
    "counter" :  <Counter />,
    "useEffect01" : <UseEffect01 />,
    "useEffect02" : <UseEffect02 />,
    "useEffect03" : <UseEffect03 />,
    "useEffect04" : <UseEffect04 />,
    "axios01" : <Axios01 />,
    "axios02" : <Axios02 />,
    "axios03" : <Axios03 />,
    "axios04" : <Axios04 />,
    "axios05" : <Axios05 />,
    "axios06" : <Axios06 />,
    "promise01" : <Promise01 />,
    "calculator" : <Calculator />,
    "auth01" : <Auth01 />,
    "auth02" : <Auth02 />,
    "router01" : <Router01 />,
    "router02" : <Router02 />,
    "router03" : <Router03 />,
    "router04" : <Router04 />,
    "router05" : <Router05 />,
    "css" : <Css />,
    "css01" : <Css01 />,
    "css02" : <Css02 />,
    // "ch01_1" : <h1>ch01_1 렌더링</h1>,
    // "ch01_2" : BoxComponent(),
    // "ch01_3" : <BoxComponent />,
    // "ch01_4" : <BoxComponent></BoxComponent>,
} 
const currentApp = "css";

const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);

// function BoxComponent() {
//     // return <div>{TitleComponent()}</div>
//     // return <div><TitleComponent title = "타이틀" title2 = "타이틀2"/></div>
//     return <div>{TitleComponent({title : "타이틀", title : "타이틀2"})}</div>
// }

//  function TitleComponent(props) {
//     console.log(props.title);
//     console.log(props.title2);
//      return <h1></h1>
//  }

// function TitleComponent(obj) {
//     console.log(obj.title);
//     console.log(obj.title2);
//     return <h1>{obj.title2}</h1>
// }
