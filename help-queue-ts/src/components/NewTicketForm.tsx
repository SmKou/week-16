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

    return <form onSubmit={getFormData}>
        <input type='text' name='names' placeholder='Pair Names' />
        <input type='text' name='location' placeholder='Location' />
        <textarea name='issue' placeholder='Describe your issue.' />
        <input type='submit' value='Help!' />
    </form> as JSX.Element
}

export default NewTicketForm;