import { TicketIF } from '../Modules/interfaces';
import { splitStr } from '../Modules/functions';
import { getValidInput } from '../Modules/validation';
import ReusableForm from "./ReusableForm";

interface Props {
    ticket: TicketIF,
    submitHandler: (ticket: TicketIF) => void
}

function EditTicketForm(props: Props) {
    const { ticket } = props;
    const getFormData = (e: any) => {
        e.preventDefault();
        const editedTicket = getValidInput({
            location: e.target.location.value,
            names: splitStr(e.target.names.value),
            issue: e.target.issue.value,
            id: ticket.id
        });
        props.submitHandler(editedTicket);
    }

    return <ReusableForm ticket={ticket}  submitHandler={getFormData} buttonText="Update Ticket" />
}

export default EditTicketForm;