import { TicketIF } from '../Modules/interfaces';
import Ticket from './Ticket';

interface Props {
    ticketList: TicketIF[],
    changeTicket: (id: string) => void,
    delete: (id: string) => void
}

function TicketList(props: Props) {
    return <>
        {props.ticketList.map((ticket: TicketIF) => <Ticket
            key={ticket.id}
            selectTicket={() => props.changeTicket(ticket.id)}
            deleteTicket={() => props.delete(ticket.id)}
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