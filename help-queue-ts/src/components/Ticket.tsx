interface Props {
    location: string;
    names: string[];
    issue: string;
    id: string,
    clickTicket: (id: string) => void
}

const formString = (arr: string[], join: string): string => arr.join(join)

function Ticket(props: Props): JSX.Element {
    return <div onClick={ () => props.clickTicket(props.id) }>
        <h3>{props.location} - {formString(props.names, " and ")}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
    </div> as JSX.Element
}

export default Ticket;