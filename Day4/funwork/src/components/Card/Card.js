import './Card.css'

function Card(props) {
  let obj = props.object;
  return <>
    <div className="card center" id={obj.id} onClick={() => { props.func(obj.price) }}>
        <h3 className="title">{obj.name}</h3>
        <img src={obj.imgSrc} alt={obj.name} />
        <p>Price: {obj.price} KWD</p>
    </div>
  </>;
}

export default Card;
