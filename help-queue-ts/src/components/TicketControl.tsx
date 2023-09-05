import { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

function TicketControl(): JSX.Element {
    const [formVisibleOnPage, setFormVisible] = useState(false); 
    const [buttonText, setButtonText] = useState("");
    const updateButtonText = (b: boolean) => setButtonText(b ? "Return to Ticket List" : "Add Ticket")

    return <>
        { formVisibleOnPage ? 
            <NewTicketForm />
            : <TicketList />
        }
        <button onClick={() => {
            setFormVisible(!formVisibleOnPage);
            updateButtonText(formVisibleOnPage);
        }
        }>{ buttonText }</button>
    </> as JSX.Element;
}

export default TicketControl;