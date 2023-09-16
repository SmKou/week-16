interface Props {
    submitHandler: (e: any) => void,
    buttonText: string
}

function ReusableForm(props: Props) {
    return <form onSubmit={props.submitHandler}>
        <input type='text' name='names' placeholder='Pair Names' />
        <input type='text' name='location' placeholder='Location' />
        <textarea name='issue' placeholder='Describe your issue.' />
        <input type='submit' value={props.buttonText} />
    </form>
}

export default ReusableForm;