const names = ["Thato", "Haley"];

function Ticket(props) {
    return <>
        <h3>{props.location} - {...props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
    </>
}

export default Ticket;