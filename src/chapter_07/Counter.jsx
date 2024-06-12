import React, { useState, useEffect } from "react"

export default function Counter(props){
    const [ count, setCount ] = useState(0)

    useEffect(()=>{
        document.title = `총 ${count}번 클릭했습니다.`
    })

    return (<div>
        <p>총 {count}번 클릭했습니다.</p>

        <button onClick={() => setCount(count + 1)}>날 눌러!</button>
    </div>)
}