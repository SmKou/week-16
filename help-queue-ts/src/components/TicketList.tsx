import { useState } from 'react';
import Ticket from './Ticket';

interface TicketObj {
    location: string;
    names: Array<string>;
    issue: string;
}

function TicketList(): JSX.Element {
    const [ticketList, setTicketList] = useState<TicketObj[]>([
        {
            names: ["Thato", "Haley"],
            location: "3A",
            issue: "Firebase won't save record. Help."
        },
        {
            names: ["Sleater", "Kinney"],
            location: "4B",
            issue: "Prop types are throwing an error."
        },
        {
            names: ["Imani", "Jacob"],
            location: "9F",
            issue: "Child component isn't rendering."
        }]);
    return <>
        {ticketList.map((ticket, index) => <Ticket
            names={ticket.names.join(" and ")}
            location={ticket.location}
            issue={ticket.issue}
            key={index}
        />)}
    </> as JSX.Element
}

export default TicketList;