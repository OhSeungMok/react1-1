import { useState } from 'react';
import './Final.css';

export default function Final() {
    const [color, setColor] = useState("Purple");

    // setColor를 통해 입력값 받기 및 배경색 적용
    const changeText = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        document.documentElement.style.setProperty('--background-color', newColor);
    };

    return (
        // 전체 화면 구성
        <div style={{width: "100vw", height: "100vh", backgroundColor: color}}>
            {/* 위치 조정 */}
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex"}}>
                <label>Background Color : {color} </label>
                <input value={color} onChange={changeText} />
                {/* 입력 값 변경 시 배경색 즉시 적용 */}
            </div>
        </div>
    );
}