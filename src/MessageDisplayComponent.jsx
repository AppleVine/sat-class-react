
export default function MessageDisplayComponent(props){
    return (
        <div>
            {props.message && (
                <h1>{props.message}</h1>
            )}

            {/* {props.message ? (
                <h1>{props.message}</h1>
            ) :
            (
                <h1>No message found!</h1>
            )} */}


        </div>
    )
}
