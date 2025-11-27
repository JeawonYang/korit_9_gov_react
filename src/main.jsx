import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';
import Counter from './ch02/Counter';
import App02_2 from './ch02/App02_2';


const appObj = {
    "ch01" :  <App01 />,
    "ch02" :  <App02 />,
    "ch02_2" :  <App02_2 />,
    "counter" :  <Counter />,
    // "ch01_1" : <h1>ch01_1 렌더링</h1>,
    // "ch01_2" : BoxComponent(),
    // "ch01_3" : <BoxComponent />,
    // "ch01_4" : <BoxComponent></BoxComponent>,
} 
const currentApp = "ch02_2";

const root = document.getElementById('root');
createRoot(root).render(appObj[currentApp]);

// function BoxComponent() {
//     // return <div>{TitleComponent()}</div>
//     // return <div><TitleComponent title = "타이틀" title2 = "타이틀2"/></div>
//     return <div>{TitleComponent({title : "타이틀", title : "타이틀2"})}</div>
// }

// // function TitleComponent(props) {
// //     console.log(props.title);
// //     console.log(props.title2);
// //     return <h1></h1>
// // }

// function TitleComponent(obj) {
//     console.log(obj.title);
//     console.log(obj.title2);
//     return <h1>{obj.title2}</h1>
// }
