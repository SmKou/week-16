import { useState } from 'react';
import Buttons from '../Components/Buttons';
import AddTicketForm from '../Components/AddTicketForm';
import EditTicketForm from '../Components/EditTicketForm';
import TicketDetail from '../Components/TicketDetail';
import TicketList from '../Components/TicketList';
import { TicketIF } from '../Modules/interfaces';

enum Pages {
    Add = 'add',
    Edit = 'edit',
    Detail = 'detail',
    List = 'list'
}

function TicketControl() { 
    const [page, setPage] = useState(Pages.List);
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
        setPage(Pages.Detail);
    }
    const goToEdit = () => setPage(Pages.Edit)
    const editTicket = (ticket: TicketIF) => {
        const index = ticketList.findIndex(lastTicket => lastTicket.id === ticket.id);
        ticketList[index] = ticket;
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
        case Pages.Add:
            return <>
                <AddTicketForm submitHandler={updateTicketList} />
                <Buttons buttons={[buttons.List]} />
            </>
        case Pages.Edit:
            return <>
                <EditTicketForm ticket={selectedTicket} submitHandler={editTicket} />
                <Buttons buttons={[ buttons.List, buttons.Add, buttons.Delete ]} />
            </>
        case Pages.Detail:
            return <>
                <TicketDetail ticket={selectedTicket} />
                <Buttons buttons={[ buttons.Add, buttons.Edit, buttons.Delete, buttons.List ]} />
            </>
        default:
            return <>
                <TicketList ticketList={ticketList} changeTicket={updateSelectedTicket} delete={deleteTicket} />
                <Buttons buttons={[buttons.Add]} />
            </>
    }
}

export default TicketControl;