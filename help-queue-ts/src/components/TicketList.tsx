import Ticket from './Ticket';
import TicketIF from './interfaces';

interface Props {
    ticketList: Array<TicketIF>,
    changeSelectedTicket: (id: string) => void
}

function TicketList(props: Props): JSX.Element {
    return <>
        {props.ticketList.map((ticket) => <Ticket
            clickTicket={props.changeSelectedTicket}
            names={ticket.names.join(" and ")}
            location={ticket.location}
            issue={ticket.issue}
            id={ticket.id}
            key={ticket.id}
        />)}
    </> as JSX.Element
}

export default TicketList;