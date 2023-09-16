import { TicketIF } from '../Modules/interfaces';
import { formStr } from '../Modules/functions';

interface Props {
    ticket: TicketIF
}

function TicketDetail(props: Props) {
    const { ticket } = props;
    return <>
        <h1>Ticket Details</h1>
        <h3>{ticket.location} - {formStr(ticket.names, " and ")}</h3>
        <p><em>{ticket.issue}</em></p>
        <hr />
    </>
}

export default TicketDetail;