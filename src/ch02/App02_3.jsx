function App02_3() {
    const [todos, setTodos] = useState([]);

    return <>
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos}/>
    </>
}
function TodoInput({ todos, setTodos }) {
    const [value, setTodos] = useState("");

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }
    // 등록버튼 누르면 이 함수 동작
    const handleOnClick = () => {
        // todo 객체 생성
        const todo = {
            content: value,
            writeDate: new Date().toLocalString(),
        }
        setTodos([...todos, todo]);  // todo 배열에 추가
        setValue(""); // 입력창 초기화
    }

    return <div>
        <input type="text" value={value} onChange={handleOnChange} />
        <button onClick={handleOnClick}>등록</button>
    </div>
}

function TodoList({todos}) {
    return <ul>
        {
            todos.map(todo => <li>내용 : {todo.content} 작성일 : {todo.writeDate}</li>)
        }
    </ul>
}
export default App02_3;