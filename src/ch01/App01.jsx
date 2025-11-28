import JSXStudy from "./JSXStudy";

function App01() {
    const currentComponent = "1";

    const conponentObj = {
        1: <JSXStudy />,
    }

    return conponentObj[currentComponent];
}

export default App01;