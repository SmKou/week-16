import PropTypes from 'prop-types';

function Ticket(props) {
    return <>
        <h3>{props.location} - {props.names.join(", ")}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
    </>
}

Ticket.propTypes = {
    names: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string.isRequired
}

// import PropTypes from 'prop-types'
// propertyName: PropTypes.propertyType
// deprecated - React suggests using Typescript
// https://github.com/facebook/prop-types

export default Ticket;