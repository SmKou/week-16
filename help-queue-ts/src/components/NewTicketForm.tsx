import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import TicketIF from './interfaces';

interface Props {
    onsubmit: (newTicket: TicketIF) => void
}

const splitString = (s: string): string[] => s.toString().split(/[\s,]+/);

function NewTicketForm(props: Props): JSX.Element {
    const getFormData = (e: any) => {
        e.preventDefault();
        const names = splitString(e.target.names.value);
        props.onsubmit({
            location: e.target.location.value,
            names: names,
            issue: e.target.issue.value,
            id: v4()
        } as TicketIF);
    }

    return <ReusableForm submitFormHandler={getFormData} buttonText={"Help!"} /> as JSX.Element
}

export default NewTicketForm;