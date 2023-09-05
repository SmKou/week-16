import Ticket from './Ticket';
import TicketIF from './interfaces';

interface Props {
    ticketList: Array<TicketIF>
}

function TicketList(props: Props): JSX.Element {
    return <>
        {props.ticketList.map((ticket) => <Ticket
            names={ticket.names.join(" and ")}
            location={ticket.location}
            issue={ticket.issue}
            key={ticket.id}
        />)}
    </> as JSX.Element
}

export default TicketList;