import Ticket from './Ticket';

function TicketList() {
    return <Ticket
        location="3A"
        names={["Thato", "Haley"]}
        issue="Firebase will not save record!"
    />
}

export default TicketList;