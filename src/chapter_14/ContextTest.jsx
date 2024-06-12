import { useContext } from "react"

const ThemeContext = React.createContext('light')

function App() {
    return(
        <ThemeContext.Provider value='dark'>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}
function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton(props) {
    return(
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}

// 올바른 사용법
useContect(MyContext)

// 잘못된 사용법
useContext(MyContext.Provider)
useContext(MyContext.Consumer)