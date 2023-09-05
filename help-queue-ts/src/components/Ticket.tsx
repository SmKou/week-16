interface Props {
    location: string;
    names: string;
    issue: string;
    id: string,
    clickTicket: (id: string) => void
}

function Ticket(props: Props): JSX.Element {
    return <div onClick={ () => props.clickTicket(props.id) }>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
    </div> as JSX.Element
}

export default Ticket;