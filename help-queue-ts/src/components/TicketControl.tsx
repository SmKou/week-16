import { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketIF from './interfaces';

/*
const data = [
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
    }];
*/

function TicketControl(): JSX.Element {
    const [formVisibleOnPage, setFormVisible] = useState(false); 
    const [buttonText, setButtonText] = useState("");
    const updateButtonText = (b: boolean) => setButtonText(b ? "Return to Ticket List" : "Add Ticket")
    const [mainTicketList, setTicketList] = useState<TicketIF[]>([])
    const updateTicketList = (newTicket: TicketIF) => {
        setTicketList(mainTicketList.concat(newTicket));
        setFormVisible(false);
    }

    return <>
        { formVisibleOnPage ? 
            <NewTicketForm onsubmit={updateTicketList} />
            : <TicketList ticketList={mainTicketList} />
        }
        <button onClick={() => {
            setFormVisible(!formVisibleOnPage);
            updateButtonText(formVisibleOnPage);
        }}>{ buttonText }</button>
    </> as JSX.Element;
}

export default TicketControl;