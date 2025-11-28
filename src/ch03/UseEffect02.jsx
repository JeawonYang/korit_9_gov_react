function UseEffect02() {

    let v = undefined;

    const useState = (initValue) => {
        v = initValue;
        const setter = (value) => {
            v = value;
        }
        return [ v, setter];
    }

    const Component = () => {
        const [ num, setNum] = useState(0);
        console.log(num);

        const onClick = () => {
            setNum(num + 1);
            console(num);0
        }
        return <>
        <div><h1>num = {num}</h1></div>
        <button onClick={onClick}></button>
        </>

    }

    Component();
}


export default UseEffect02;