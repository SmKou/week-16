import TicketIF from './interfaces';

interface Props {
    ticket: TicketIF,
    deleteTicket: (id: string) => void
}

const formString = (arr: string[], join: string): string => arr.join(join)

function TicketDetail(props: Props): JSX.Element {
    const { ticket, deleteTicket } = props;
    return <>
        <h1>Ticket Details</h1>
        <h3>{ticket.location} - {formString(ticket.names, " and ")}</h3>
        <p><em>{ticket.issue}</em></p>
        <button onClick={() => deleteTicket(ticket.id)}>Close Ticket</button>
        <hr />
    </> as JSX.Element
}

export default TicketDetail;