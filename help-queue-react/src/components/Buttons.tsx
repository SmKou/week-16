interface Button {
    text: string,
    action: () => void
}

interface Props {
    buttons: Button[]
}

function Buttons(props: Props): JSX.Element {
    return <>
        {props.buttons.map(button => <button onClick={button.action}>{button.text}</button>)}
    </> as JSX.Element
}

export default Buttons;