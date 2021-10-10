import "./App.css";

function App() {
  return (
    <>
      <BigCard
        title="Hello World"
        text="Hello World, We are students in the react course that is presented by the amazing Teacher Eng. Manawer Al-Azmi"
        src="https://wallpaperaccess.com/full/3865610.jpg"
      />
      <Card
        title="First"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime quisquam minima amet, non cum numquam ab quasi itaque inventore architecto ipsam qui laudantium rerum rem soluta in consequuntur sequi, mollitia reprehenderit repellendus! Totam nemo mollitia nihil dignissimos ullam explicabo sint libero quaerat maxime dolorem, itaque quod dolorum error? Voluptatem."
      />
      <Card
        title="Second"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime quisquam minima amet, non cum numquam ab quasi itaque inventore architecto ipsam qui laudantium rerum rem soluta in consequuntur sequi, mollitia reprehenderit repellendus! Totam nemo mollitia nihil dignissimos ullam explicabo sint libero quaerat maxime dolorem, itaque quod dolorum error? Voluptatem."
      />
      <Card
        title="Third"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime quisquam minima amet, non cum numquam ab quasi itaque inventore architecto ipsam qui laudantium rerum rem soluta in consequuntur sequi, mollitia reprehenderit repellendus! Totam nemo mollitia nihil dignissimos ullam explicabo sint libero quaerat maxime dolorem, itaque quod dolorum error? Voluptatem."
      />
    </>
  );
}

function Card(props) {
  console.log(props);
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      {/* <p>{props.text}</p> */}
      <CardParagraph text={props.text} />
      <div className="">
        {/* print special chars */}
        {/* {"{}"} */}
      </div>
    </div>
  );
}

function CardParagraph(props) {
  console.log(props);
  return <p>{props.text}</p>;
}

function BigCard(props) {
  console.log(props);
  return (
    <div className="BigCard">
      <img src={props.src} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
export default App;
