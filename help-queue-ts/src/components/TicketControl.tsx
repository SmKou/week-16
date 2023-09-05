import { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import TicketIF from './interfaces';

function TicketControl(): JSX.Element {
    const [formVisibleOnPage, setFormVisible] = useState(false); 

    const [buttonText, setButtonText] = useState("Add Ticket");
    const updateButtonText = (b: boolean) => setButtonText(b ? "Return to Ticket List" : "Add Ticket")

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

    const [selectedTicket, setSelectedTicket] = useState<TicketIF>({} as TicketIF);
    const updateSelectTicket = (id: string) => {
        const ticket = mainTicketList.filter(ticket => ticket.id === id)[0];
        setSelectedTicket(ticket);
    }

    return <>
        {Object.keys(selectedTicket).length !== 0 ?
            <TicketDetail ticket={selectedTicket} deleteTicket={deleteTicket} />
            : formVisibleOnPage ? 
                <NewTicketForm onsubmit={updateTicketList} />
                : <TicketList ticketList={mainTicketList} changeSelectedTicket={updateSelectTicket} />
        }
        <button onClick={() => {
            if (Object.keys(selectedTicket).length !== 0) {
                setFormVisible(false);
                setSelectedTicket({} as TicketIF);
            }
            else
                setFormVisible(!formVisibleOnPage);
            updateButtonText(formVisibleOnPage);
        }}>{ buttonText }</button>
    </> as JSX.Element;
}

export default TicketControl;