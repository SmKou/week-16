import { makeKey } from "../Modules/functions"

interface Button {
    text: string,
    action: () => void
}

interface Props {
    buttons: Button[]
}

function Buttons(props: Props) {
    return <div className="buttons-nav">
        {props.buttons.map(button => <button key={makeKey(button.text)} onClick={button.action}>{button.text}</button>)}
    </div>
}

export default Buttons;