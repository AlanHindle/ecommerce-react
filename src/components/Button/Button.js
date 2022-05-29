const Button = (props) => {
    return <buton onClick={props.handleClick} styles={{color: 'red'}}>
        {props.label}
    </buton>
}

export default Button;