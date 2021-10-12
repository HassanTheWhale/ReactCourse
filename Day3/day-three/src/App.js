import "./App.css";
import BigCard from "./components/Card/Card";
import { Card } from "./components/Card/Card";

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
        src="https://wallpaperaccess.com/full/3865610.jpg"
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

export default App;
