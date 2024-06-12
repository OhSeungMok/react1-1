
export default function WarningBanner(props) {
    if(!props.warning) {
        return null;
    }
    return(
        <div>경고!</div>
    )
    
}