import "./Card.css";

export function BigCard(props) {
  let obj = props.object;
  return (
    <div className="BigCard">
      <h3 className="title">Name: {obj.name}</h3>
      <p>ID: {obj.id}</p>
    </div>
  );
}

function Card(props) {
  let obj = props.object;
  return (
    <>
      <div
        className="card center"
        onClick={() => {
          props.funcShow(obj);
        }}
        id={props.id}
      >
        <h3 className="title">{obj.name}</h3>
        <p>ID: {obj.id}</p>
        <button
          onClick={() => {
            props.func(obj);
          }}
        >
          ❌ Remove ❌
        </button>
      </div>
    </>
  );
}

export default Card;
