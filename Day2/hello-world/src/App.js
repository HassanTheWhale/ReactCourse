import './App.css';

function App() {
  return (
    <>
      <Card title="First" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime quisquam minima amet, non cum numquam ab quasi itaque inventore architecto ipsam qui laudantium rerum rem soluta in consequuntur sequi, mollitia reprehenderit repellendus! Totam nemo mollitia nihil dignissimos ullam explicabo sint libero quaerat maxime dolorem, itaque quod dolorum error? Voluptatem." />
      <Card title="Second" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime quisquam minima amet, non cum numquam ab quasi itaque inventore architecto ipsam qui laudantium rerum rem soluta in consequuntur sequi, mollitia reprehenderit repellendus! Totam nemo mollitia nihil dignissimos ullam explicabo sint libero quaerat maxime dolorem, itaque quod dolorum error? Voluptatem."/>
      <Card title="Third" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime quisquam minima amet, non cum numquam ab quasi itaque inventore architecto ipsam qui laudantium rerum rem soluta in consequuntur sequi, mollitia reprehenderit repellendus! Totam nemo mollitia nihil dignissimos ullam explicabo sint libero quaerat maxime dolorem, itaque quod dolorum error? Voluptatem."/>
    </>
  );
}

function Card(props) {
  console.log(props)
  return <div className="Card">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <div className="">
        {/* print special chars */}
        {/* {"{}"} */}
      </div>
    </div>
  
}

export default App;
