import { v4 } from 'uuid';
import { TicketIF } from '../Modules/interfaces';
import { splitStr } from '../Modules/functions';
import { getValidInput } from '../Modules/validation';
import ReusableForm from "./ReusableForm";

interface Props {
    submitHandler: (ticket: TicketIF) => void
}

function AddTicketForm(props: Props) {
    const getFormData = (e: any) => {
        e.preventDefault();
        const ticket = getValidInput({
            location: e.target.location.value,
            names: splitStr(e.target.names.value),
            issue: e.target.issue.value,
            id: v4()
        });
        props.submitHandler(ticket);
    }
    return <ReusableForm submitHandler={getFormData} buttonText="Help!" />
}

export default AddTicketForm;