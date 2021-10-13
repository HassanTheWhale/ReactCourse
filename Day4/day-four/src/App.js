import "./App.css";
import { useState } from "react";

import BigCard, { Card, LovelyCard } from "./components/Card/Card";
import p1 from "./imgs/p1.png";
import p2 from "./imgs/p2.png";

function App() {
  let langs = [
    { name: "JS", text: "JavaScript" },
    { name: "HTML", text: "HyperTextMarkupLanguage" },
    { name: "CSS", text: "Casecading Style Sheet" },
  ];

  let [counter, setCount] = useState(0);
  function increase() {
    setCount(counter++);
  }

  function decrease() {
    setCount(counter--);
  }

  function reset() {
    setCount(0);
  }

  function set() {
    setCount(document.getElementById("number").value);
  }

  return (
    <>
      <div className="center p-3">
        <img
          className="amazingLogo"
          src="https://cdn.discordapp.com/attachments/884950893391380483/897116803245940756/72.png"
          alt="logo"
        />
      </div>
      <div className="p-3">
        <input type="number" id="number" />
        <button onClick={set}>set</button>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
        <p>{counter}</p>
      </div>
      <div className="flex">
        {langs.map((x) => (
          <Card key={x.name} title={x.name} text={x.text} />
        ))}
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

      <BigCard
        title="Hello World"
        text="Hello World, We are students in the react course that is presented by the amazing Teacher Eng. Manawer Al-Azmi."
        src="https://wallpaperaccess.com/full/3865610.jpg"
      />
    </>
  );
}

export default App;
