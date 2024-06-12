import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function Calculator(props) {
    const [temperature, setTemperature] = useState(24)
    const [scale, setScale] = useState('C')

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale('C')
    } 
    const handleFagreheitChange = (temperature) => {
        setTemperature(temperature)
        setScale('F')
    } 
    const celsius = scale === 'F' ? tryConvert(temperature, toCelsius) : temperature
    const fagreheit = scale === 'C' ? tryConvert(temperature, toFahereheit) : temperature

    return(
        <>
        <TemperatureInput scale='C' temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
        <TemperatureInput scale='F' temperature={fagreheit} onTemperatureChange={handleFagreheitChange}/>
        <BoilingVerdict celsius={celsius} />
        </>
    )
}
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahereheit) { //파씨 변환
    return(
        (fahereheit - 32) * 1.8
    )
}
function toFahereheit(Celsius) { //섭씨 변환
    return(
        (Celsius * 1.8) + 32 
    )
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return('')
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000)/1000
    return(
        rounded.toString()
    )
}