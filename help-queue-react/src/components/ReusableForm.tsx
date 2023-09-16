import { useState } from 'react';
import { TicketIF } from '../Modules/interfaces';
import { formStr } from '../Modules/functions';

interface Props {
    submitHandler: (e: any) => void,
    buttonText: string,
    ticket?: TicketIF
}

function ReusableForm(props: Props) {
    const { ticket } = props;
    const [names, setNames] = useState(ticket ? formStr(ticket.names, ", ") : "");
    const [location, setLocation] = useState(ticket ? ticket.location : "");
    const [issue, setIssue] = useState(ticket ? ticket.issue : "");

    return <form onSubmit={props.submitHandler}>
        <label>Student Names:</label>
        <input type='text' name='names' placeholder='Pair Names' value={names} onChange={e => setNames(e.target.value)} />
        <label>Location:</label>
        <input type='text' name='location' placeholder='Location' value={location} onChange={e => setLocation(e.target.value)} />
        <label>Issue:</label>
        <textarea name='issue' placeholder='Describe your issue.' value={issue} onChange={e => setIssue(e.target.value)} />
        <input type='submit' value={props.buttonText} />
    </form>
}

export default ReusableForm;