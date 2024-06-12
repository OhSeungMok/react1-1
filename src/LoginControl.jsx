import { useState } from "react";
import Greeting from "./Greeting";

export default function LoginControl(props) {
    const [isLogin, setIsLogin] = useState(false)

    const handleLoginClick = () => {
        setIsLogin(true)
    }

    const handleLogoutClick = () => {
        setIsLogin(false)
    }

    // let button
    // if (isLogin) {
    //     button = <LogoutButton onClick = {handleLogoutClick} />
    // } else {
    //     button = <LoginButton onClick = {handleLoginClick} />
    // }

    return (
        <div>
            <Greeting isLogin = {isLogin}/>
            {/* {button} */}
            {isLogin ? <LogoutButton onClick = {handleLogoutClick} />:<LoginButton onClick = {handleLoginClick} /> }
        </div>
    )
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    )
}
