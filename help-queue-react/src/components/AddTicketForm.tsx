import ReusableForm from "./ReusableForm"
import { v4 } from 'uuid'
import TicketIF from '../Modules/interfaces'
import splitStr from '../Modules/functions'

interface Props {
    submitHandler: (ticket: TicketIF) => void
}

function AddTicketForm(props: Props) {
    const getFormData = (e: any) => {
        e.preventDefault();
        props.submitHandler({
            location: e.target.location.value,
            names: splitStr(e.target.names.value),
            issue: e.target.issue.value,
            id: v4()
        } as TicketIF);
    }
    return <ReusableForm submitHandler={getFormData} buttonText="Help!" />
}

export default AddTicketForm;