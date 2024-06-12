export default function Greeting(props) {
    if(props.isLogin) {
        return <p>환영합니다.</p>
    } else{
        return <p>로그인해 주세용.</p>
    }
}