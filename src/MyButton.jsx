//import React from "react";
//굳이 REACT를 IMPORT할 필요는 없음
export default function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>삭제</button>
    )
}