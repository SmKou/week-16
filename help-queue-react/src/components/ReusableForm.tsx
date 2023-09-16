interface Props {
    submitHandler: (e: any) => void,
    buttonText: string
}

function ReusableForm(props: Props) {
    return <form onSubmit={props.submitHandler}></form>
}

export default ReusableForm;