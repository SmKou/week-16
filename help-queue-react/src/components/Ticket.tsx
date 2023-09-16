import { TicketIF } from "../Modules/interfaces"
import { formStr } from "../Modules/functions"

interface Props {
    ticket: TicketIF,
    selectTicket: (id: string) => void
}

function Ticket(props: Props) {
    return <div onClick={() => props.selectTicket(props.ticket.id)}>
        <h3>{props.ticket.location} - {formStr(props.ticket.names, " and ")}</h3>
        <p><em>{props.ticket.issue}</em></p>
        <hr />
    </div>
}

export default Ticket;