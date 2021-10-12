import './Title.css'

function Title(props) {
    return (
        <h2 className="specialTitle">
            {props.name}
        </h2>
    )
}

export default Title
