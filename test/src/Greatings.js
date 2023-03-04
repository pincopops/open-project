function Greatings (props) {
    return (
        <>
        <h2>{props.name ? `Hello, ${props.name}` : "Hello, guest"}</h2>
        </>
    )
}

export default Greatings;