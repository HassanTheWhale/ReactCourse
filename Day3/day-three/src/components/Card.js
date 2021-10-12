import CardParagraph from "./CardParagraph";

export function Card(props) {
  console.log(props);
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      <CardParagraph text={props.text} />
    </div>
  );
}

function BigCard(props) {
  console.log(props);
  return (
    <div className="BigCard">
      <img src={props.src} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <CardParagraph text={props.text} />
      </div>
    </div>
  );
}

export default BigCard;
