import ticketImg from '../img/tickets.png';

function Header() {
    return <>
        <h1>Help Queue</h1>
        <img src={ticketImg} alt="An image of tickets" />
    </>
}

export default Header;