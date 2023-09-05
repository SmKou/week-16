import { Component } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }

    render() {
        return <></>
    }
}

export default TicketControl;