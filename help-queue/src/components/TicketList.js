import Ticket from './Ticket';

const mainTicketList = [
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
    }
]

function TicketList() {
    return <>
        {mainTicketList.map((ticket, index) => <Ticket
            names={ticket.names.join(" and ")}
            location={ticket.location}
            issue={ticket.issue}
            key={index}
        />)}
    </>

}

export default TicketList;