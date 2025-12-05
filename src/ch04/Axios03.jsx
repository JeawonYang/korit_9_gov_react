import axios from "axios";
import { useState } from "react";

function Axios03() {
    const [inputValue, setInputValue] = useState({
        username: "",
    });

    const [departments, setDepartments] = useState([]);

    const getUsersApi = async () => {
        try {
            const resp = await axios.get(
                "http://localhost:8080/servlet_study_war_exploded/departments",
                {
                    params: { username: inputValue.username },
                }
            );
            setDepartments(resp.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleInputOnKeyDown = (e) => {
        if (e.key === "Enter") {
            getUsersApi();
        }
    };

    const handleSearchOnClick = () => {
        getUsersApi();
    };

    return (
        <>
            <input
                type="text"
                name="username"
                value={inputValue.username}
                onChange={handleInputOnChange}
                onKeyDown={handleInputOnKeyDown}
            />
            <button onClick={handleSearchOnClick}>검색</button>

            <table>
                <thead>
                    <tr>
                        <th>departmentId</th>
                        <th>departmentCode</th>
                        <th>departmentName</th>
                    </tr>
                </thead>

                <tbody>
                    {departments.map((d) => (
                        <tr key={d.departmentId}>
                            <td>{d.departmentId}</td>
                            <td>{d.departmentCode}</td>
                            <td>{d.departmentName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Axios03;