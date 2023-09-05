import TicketIF from './interfaces';

interface Props {
    ticket: TicketIF
}

function TicketDetail(props: Props): JSX.Element {
    const { ticket } = props;
    return <>
        <h1>Ticket Details</h1>
        <h3>{ticket.location} - {ticket.names.join(" and ")}</h3>
        <p><em>{ticket.issue}</em></p>
        <hr />
    </> as JSX.Element
}

export default TicketDetail;