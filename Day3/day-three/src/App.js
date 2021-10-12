import "./App.css";
import BigCard, { Card, LovelyCard } from "./components/Card/Card";
import p1 from "./imgs/p1.png";
import p2 from "./imgs/p2.png";
import p3 from "./imgs/p3.png";
import p4 from "./imgs/p4.png";

function App() {
  return (
    <>
      <div className="center p-3">
        <img
          className="amazingLogo"
          src="https://cdn.discordapp.com/attachments/884950893391380483/897116803245940756/72.png"
          alt="logo"
        />
      </div>

      <div className="flex">
        <LovelyCard
          name="Name 1"
          desc="Desc 1"
          distance="1KM"
          theme="dark"
          myClass="amazingLogoReverse"
          src={p1}
        />
        <LovelyCard
          name="Name 2"
          desc="Desc 2"
          distance="201KM"
          theme="light"
          src={p2}
        />
      </div>

      <div className="flex">
        <LovelyCard
          name="Name 3"
          desc="Desc 3"
          distance="100KM"
          theme=""
          src={p3}
        />
        <LovelyCard
          name="Name 4"
          desc="Desc 4"
          distance="N/A"
          theme="dark"
          myClass="amazingLogoReverse"
          src={p4}
        />
      </div>

      <BigCard
        title="Hello World"
        text="Hello World, We are students in the react course that is presented by the amazing Teacher Eng. Manawer Al-Azmi."
        src="https://wallpaperaccess.com/full/3865610.jpg"
      />

      <div style={{ backgroundColor: "#000000", padding: 10 }}>
        <Card
          title="First"
          theme="dark"
          src="https://wallpaperaccess.com/full/3865610.jpg"
          text="Hello World, We are students in the react course that is presented by the amazing Teacher Eng. Manawer Al-Azmi."
        />
      </div>

      <Card
        title="Second"
        theme="light"
        text="Hello World, We are students in the react course that is presented by the amazing Teacher Eng. Manawer Al-Azmi."
      />
      <Card
        title="Third"
        text="Hello World, We are students in the react course that is presented by the amazing Teacher Eng. Manawer Al-Azmi."
      />
    </>
  );
}

export default App;
