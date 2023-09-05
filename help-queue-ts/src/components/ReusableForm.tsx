interface Props {
    submitFormHandler: (e: any) => void,
    buttonText: string
}

function ReusableForm(props: Props): JSX.Element {
    return <form onSubmit={props.submitFormHandler}>
        <input type='text' name='names' placeholder='Pair Names' />
        <input type='text' name='location' placeholder='Location' />
        <textarea name='issue' placeholder='Describe your issue.' />
        <input type='submit' value={props.buttonText} />
    </form> as JSX.Element
}

export default ReusableForm;