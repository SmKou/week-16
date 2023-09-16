import { TicketIF } from './interfaces';

const randNames = ['Jane', 'Doe', 'John', 'Smith', 'Andy', 'Jackson'];

export const getValidInput = (ticket: TicketIF): TicketIF => {
    for (let i = 0; i < ticket.names.length; ++i)
        if (ticket.names[i].length === 0) {
            const index = Math.floor(Math.random() * randNames.length);
            ticket.names[i] = randNames[index];
        }
    if (!ticket.location)
        ticket.location = "1A";
    if (!ticket.issue)
        ticket.issue = "We're lonely.";
    return ticket;
}