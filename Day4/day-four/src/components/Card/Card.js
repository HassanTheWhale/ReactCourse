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
  // console.log(props);
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

export function LovelyCard(props) {
  let theme = "amazingLogo";
  if (props.myClass === "amazingLogoReverse") theme = "amazingLogoReverse";
  return (
    <>
      <div className={props.theme + " lovelyCard"}>
        <img src={props.src} className={theme} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <div className="right-flex">
            <h4>Distance: {props.distance}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCard;
