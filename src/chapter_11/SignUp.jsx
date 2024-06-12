import { useState } from "react"

export default function SignUp() {
    const [name, setName] = useState("")
    const [gender, setGender] = useState('남자')
    const [test, setTest] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleChangeTest = (e) => {
        setTest(e.target.value)
    }

    const handleSubmit = (e) => {
        alert(`이름 : ${name}, 성별 : ${gender}, 테스트 : ${test}`)
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름 : <input type="text" placeholder="이름을 입력하세요." value={name} onChange={handleChangeName}/>
            </label>
            <br/>
            <label>
                성별 : 
                <select>
                    <option value={gender} onChange={handleChangeGender}>여성</option>
                    <option value={gender} onChange={handleChangeGender} selected>남성</option>
                </select>
            </label>
            <br/>
            <label>
            텍스트 입력 : 
            <br/>
            <textarea value={test} onChange={handleChangeTest} placeholder="본문을 입력하세요."></textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}