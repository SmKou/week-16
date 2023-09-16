import { TicketIF } from "../Modules/interfaces"
import { formStr } from "../Modules/functions"

interface Props {
    ticket: TicketIF,
    selectTicket: (id: string) => void
}

function Ticket(props: Props) {
    return <div className="ticket" id={props.ticket.id} onClick={() => props.selectTicket(props.ticket.id)}>
        <h3>{props.ticket.location} - {formStr(props.ticket.names, " and ")}</h3>
        <p><em>{props.ticket.issue}</em></p>
    </div>
}

export default Ticket;