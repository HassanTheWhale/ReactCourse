import "./card.css";
import CardParagraph from "./CardParagraph";

export function Card(props) {
  let theme = "";
  if (props.theme === "light") theme = "light";
  else if (props.theme === "dark") theme = "dark";
  return (
    <div className={"card " + theme}>
      <h1 className="center">{props.title}</h1>
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
        <h2 className="center">{props.title}</h2>
        <CardParagraph text={props.text} />
      </div>
    </div>
  );
}

export default BigCard;
