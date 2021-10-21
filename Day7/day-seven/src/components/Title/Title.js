import './Title.css'

function Title(props) {
    return (
        <h2 className="specialTitle">
            {props.name}
            <small>{props.small}</small>
        </h2>
    )
}

export default Title
