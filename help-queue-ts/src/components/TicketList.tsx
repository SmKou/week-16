import Ticket from './Ticket';
import TicketIF from './interfaces';

interface Props {
    ticketList: TicketIF[],
    changeSelectedTicket: (id: string) => void
}

function TicketList(props: Props): JSX.Element {
    const { ticketList, changeSelectedTicket } = props;
    return <>
        {ticketList.map((ticket) => <Ticket
            clickTicket={() => changeSelectedTicket(ticket.id)}
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            id={ticket.id}
            key={ticket.id}
        />)}
    </> as JSX.Element
}

export default TicketList;