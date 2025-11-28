import { useState } from "react";

function App02_5() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState({
        writer: "",
        content: "",
    });

    const handleOnChange = (e) => {
        const { name, value: inputValue } = e.target;
        setValue({
            ...value,
            [name]: inputValue,
        });
    }
    const handleOnClick = () => {
        const todo = {
            // wtiter: writer,
            // content: value,
            ...value,
            writeDate: new Date().toLocaleString(),
        }
        setTodos([...todos, todo]);

        setValue({
        writer: "",
        content: "",
    });
    }
return <>
    <div>
        <input type="text" name="writer" value={value.writer} onChange={handleOnChange} placeholder="작성자" />
        <input type="text" name="content" value={value.content} onChange={handleOnChange} placeholder="내용" />
        <button onClick={handleOnClick}>등록</button>
    </div>
    <ul>
        {
            todos.map(todo => <li>작성자 : {todo.writer}, 내용 : {todo.content}, 작성일자 : {todo.writeDate} </li>)
        }
    </ul>
</>
}
export default App02_5;