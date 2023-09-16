interface Props {
    submitHandler: (e: any) => void,
    buttonText: string
}

function ReusableForm(props: Props) {
    return <form onSubmit={props.submitHandler}>
        <label>Student Names:</label>
        <input type='text' id='names' name='names' placeholder='Pair Names' />
        <label>Location:</label>
        <input type='text' name='location' placeholder='Location' />
        <label>Issue:</label>
        <textarea name='issue' placeholder='Describe your issue.' />
        <input type='submit' value={props.buttonText} />
    </form>
}

export default ReusableForm;