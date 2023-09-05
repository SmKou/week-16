import Ticket from './Ticket';

function TicketList() {
    return <>
        <Ticket
            location="3A"
            names={["Thato", "Haley"]}
            issue="Firebase will not save record!"
        />
        <Ticket
            location="4B"
            names={["Sleater", "Kinney"]}
            issue="Prop types are throwing an error."
        />
    </>

}

export default TicketList;