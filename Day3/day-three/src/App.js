import "./App.css";
import BigCard from "./components/Card/Card";
import { Card } from "./components/Card/Card";

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
