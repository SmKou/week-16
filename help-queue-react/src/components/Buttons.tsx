import { makeKey } from "../Modules/functions"

interface Button {
    text: string,
    action: () => void
}

interface Props {
    buttons: Button[]
}

function Buttons(props: Props): JSX.Element {
    return <div className="buttons-nav">
        {props.buttons.map(button => <button id={makeKey(button.text)} onClick={button.action}>{button.text}</button>)}
    </div> as JSX.Element
}

export default Buttons;