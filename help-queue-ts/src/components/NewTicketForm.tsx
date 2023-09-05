import { v4 } from 'uuid';
import TicketIF from './interfaces';

interface Props {
    onsubmit: (newTicket: TicketIF) => void
}

function NewTicketForm(props: Props): JSX.Element {
    const getFormData = (e: any) => {
        e.preventDefault();
        props.onsubmit({
            location: e.target.location.value,
            names: e.target.names.value,
            issue: e.target.issue.value,
            id: v4()
        } as TicketIF);
    }

    return <form onSubmit={getFormData}>
        <input type='text' name='names' placeholder='Pair Names' />
        <input type='text' name='location' placeholder='Location' />
        <textarea name='issue' placeholder='Describe your issue.' />
        <input type='submit' value='Help!' />
    </form> as JSX.Element
}

export default NewTicketForm;