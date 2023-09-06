import { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import EditTicketForm from './EditTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import TicketIF from './interfaces';

function TicketControl(): JSX.Element {
    const [formVisibleOnPage, setFormVisible] = useState(false); 

    const [buttonText, setButtonText] = useState("Add Ticket");
    const updateButtonText = (b: boolean) => setButtonText(b ? "Return to Ticket List" : "Add Ticket")
    const clickButton = () => {
        if (Object.keys(selectedTicket).length !== 0) {
            setFormVisible(false);
            setSelectedTicket({} as TicketIF);
        }
        else
            setFormVisible(!formVisibleOnPage);
        updateButtonText(formVisibleOnPage);
    }

    const [mainTicketList, setTicketList] = useState<TicketIF[]>([])
    const updateTicketList = (newTicket: TicketIF) => {
        setTicketList(mainTicketList.concat(newTicket));
        setFormVisible(false);
    }
    const deleteTicket = (id: string) => {
        const ticketList = mainTicketList.filter(ticket => ticket.id !== id);
        setTicketList(ticketList);
        setSelectedTicket({} as TicketIF);
    }
    const editTicket = () => setEditStatus(true)

    const [selectedTicket, setSelectedTicket] = useState<TicketIF>({} as TicketIF);
    const updateSelectTicket = (id: string) => {
        const ticket = mainTicketList.filter(ticket => ticket.id === id)[0];
        setSelectedTicket(ticket);
    }

    const [editStatus, setEditStatus] = useState(false);
    const updateEditedTicket = (ticket: TicketIF) => {
        const edited = mainTicketList.filter(ticket => ticket.id !== selectedTicket.id).concat(ticket);
        setTicketList(edited);
        setEditStatus(false);
        setSelectedTicket({} as TicketIF);
    }

    if (editStatus)
        return <>
            <EditTicketForm ticket={selectedTicket} onsubmit={updateEditedTicket} />
            <button onClick={clickButton}>{ buttonText }</button>
        </> as JSX.Element
    else if (Object.keys(selectedTicket).length !== 0)
        return <>
            <TicketDetail ticket={selectedTicket} deleteTicket={deleteTicket} editTicket={editTicket} />
            <button onClick={clickButton}>{ buttonText }</button>
        </> as JSX.Element
    else if (formVisibleOnPage)
        return <>
            <NewTicketForm onsubmit={updateTicketList} />
            <button onClick={clickButton}>{ buttonText }</button>
        </> as JSX.Element
    else
        return <>
            <TicketList ticketList={mainTicketList} changeSelectedTicket={updateSelectTicket} />
            <button onClick={clickButton}>{ buttonText }</button>
        </> as JSX.Element
}

export default TicketControl;