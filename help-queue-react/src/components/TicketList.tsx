import { TicketIF } from '../Modules/interfaces';
import Ticket from './Ticket';

interface Props {
    ticketList: TicketIF[],
    changeTicket: (id: string) => void
}

function TicketList(props: Props) {
    return <>
        {props.ticketList.map((ticket: TicketIF) => <Ticket
            selectTicket={() => props.changeTicket(ticket.id)}
            ticket={{
                names: ticket.names,
                location: ticket.location,
                issue: ticket.issue,
                id: ticket.id
            } as TicketIF}
        />)}
    </>
}

export default TicketList;