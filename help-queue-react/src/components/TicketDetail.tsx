import { TicketIF } from '../Modules/interfaces';
import { formStr } from '../Modules/functions';

interface Props {
    ticket: TicketIF
}

function TicketDetail(props: Props) {
    const { ticket } = props;
    return <>
        <h3>Ticket Details</h3>
        <p>{ticket.location} - {formStr(ticket.names, " and ")}</p>
        <p><em>{ticket.issue}</em></p>
    </>
}

export default TicketDetail;