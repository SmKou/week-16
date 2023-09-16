import ReusableForm from "./ReusableForm"
import TicketIF from '../Modules/interfaces'

interface Props {
    ticket: TicketIf,
    submitHandler: (ticket: TicketIF) => void
}

