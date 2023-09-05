interface Props {
    location: string;
    names: string;
    issue: string;
}

function Ticket(props: Props): JSX.Element {
    return <>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
    </> as JSX.Element
}

export default Ticket;