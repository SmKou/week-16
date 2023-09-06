import ReusableForm from './ReusableForm';
import TicketIF from './interfaces';

interface Props {
    ticket: TicketIF
    onsubmit: (ticket: TicketIF) => void
}

const splitString = (s: string): string[] => s.toString().split(/[\s,]+/);

function EditTicketForm(props: Props): JSX.Element {
    const { ticket } = props;
    const getFormData = (e: any) => {
        e.preventDefault();
        const names = splitString(e.target.names.value);
        props.onsubmit({
            location: e.target.location.value,
            names: names,
            issue: e.target.issue.value,
            id: ticket.id
        } as TicketIF);
    }

    return <>
        <ReusableForm submitFormHandler={getFormData} buttonText="Update Ticket" />
    </> as JSX.Element
}

export default EditTicketForm;