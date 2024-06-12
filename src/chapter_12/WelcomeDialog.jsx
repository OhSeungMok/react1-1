import FancyBorder from "./FancyBorder";

export default function WelcomeDialog() {
    return(
        <FancyBorder color='blue'>
            <h1 className="Dialog-title">어서오세요.</h1>
            <p className="Dialog-message">우리 사이트 방문을 환영합니다.</p>
        </FancyBorder>
    )
}