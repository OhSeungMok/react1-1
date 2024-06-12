export default function SplitPane(props) {
    return(
        <div className="SplitPane">
            <div className="Split-left">
                {props.left}
            </div>
            <div className="Split-right">
                {props.right}
            </div>
        </div>
    )
}