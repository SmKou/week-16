import { TicketIF } from "../Modules/interfaces"
import { formStr } from "../Modules/functions"

interface Props {
    ticket: TicketIF,
    selectTicket: () => void,
    deleteTicket: () => void
}

function Ticket(props: Props) {
    return <div className="ticket" id={props.ticket.id}>
        <div onClick={() => props.selectTicket()}>
            <h3>{props.ticket.location} - {formStr(props.ticket.names, " and ")}</h3>
            <p><em>{props.ticket.issue}</em></p>
        </div>
        <button onClick={() => props.deleteTicket()}>[X]</button>
    </div>
}

export default Ticket;