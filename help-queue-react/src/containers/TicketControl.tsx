import { useState } from 'react'
import TicketIF from './Interfaces'
import Buttons from '../components/Buttons'

enum Pages {
    Add = 'add',
    Edit = 'edit',
    Detail = 'detail',
    List = 'list'
}

function TicketControl(): JSX.Element { 
    const [page, setPage] = useState('');
    const [ticketList, setTicketList] = useState<TicketIF[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<TicketIF>({} as TicketIF);

    const goToAdd = () => setPage(Pages.Add)
    const updateTicketList = (ticket: TicketIF) => {
        setTicketList(ticketList.concat(ticket));
        setPage(Pages.List);
    }
    const updateSelectedTicket = (id: string) => {
        const ticket = ticketList.filter(ticket => ticket.id === id)[0];
        setSelectedTicket(ticket);

    }
    const goToEdit = () => setPage(Pages.Edit)
    const editTicket = (ticket: TicketIF) => {
        const id = ticketList.indexOf((ticket: TicketIF) => ticket.id === id);
        ticketList[id] = ticket;
        setSelectedTicket({} as TicketIF);
        setPage(Pages.List);
    }
    const goToList = () => setPage(Pages.List)
    const deleteTicket = (id: string) => {
        const modList = ticketList.filter(ticket => ticket.id !== id);
        setTicketList(modList);
        setSelectedTicket({} as TicketIF);
        setPage(Pages.List);
    }

    const buttons = {
        Add: { text: 'Add Ticket', action: goToAdd },
        Edit: { text: 'Edit Ticket', action: goToEdit },
        Delete: { text: 'Delete Ticket', action: () => deleteTicket(selectedTicket.id) },
        List: { text: 'Return to List', action: goToList }
    }

    switch (page) {
        case 'add':
            return <>
                <AddTicketForm submitHandler={updateTicketList} />
                <Buttons buttons={[buttons.List]} />
            </> as JSX.Element
        case 'edit':
            return <>
                <EditTicketForm ticket={selectedTicket} submitHandler={editTicket} />
                <Buttons buttons={[ buttons.List, buttons.Add, buttons.Delete ]} />
            </> as JSX.Element
        case 'detail':
            return <>
                <TicketDetail ticket={selectedTicket} />
                <Buttons buttons={[ buttons.Add, buttons.Edit, buttons.Delete, buttons.List ]} />
            </> as JSX.Element
        default:
            return <>
                <TicketList ticketList={ticketList} changeTicket={updateSelectedTicket} />
            </> as JSX.Element
    }
}

export default TicketControl;