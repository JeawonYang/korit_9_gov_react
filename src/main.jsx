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
    "promise01" : <Promise01 />,
    "calculator" : <Calculator />,
    // "ch01_1" : <h1>ch01_1 렌더링</h1>,
    // "ch01_2" : BoxComponent(),
    // "ch01_3" : <BoxComponent />,
    // "ch01_4" : <BoxComponent></BoxComponent>,
} 
const currentApp = "axios02";

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
