//import { useState } from "react"

const scaleName = {
    C : '섭씨',
    F : '화씨'
}

export default function TemperatureInput(props) {
    //const [temperature, setTemperature] = useState('')
    const handleChange = (e) => {
        //setTemperature(e.target.value)
        props.onTemperatureChange(e.target.value)
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위: {scaleName[props.scale]})</legend>
            {/* <input type="number" value={temperature}
            onChange={handleChange} /> */}
            <input type="number" value={props.temperature}
            onChange={handleChange} />
        </fieldset>
    )
}
