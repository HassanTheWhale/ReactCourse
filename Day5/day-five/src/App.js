import "./App.css";
import { useState } from "react";
import Title from "./components/Title/Title";
import Card, { BigCard } from "./components/Card/Card";

function App() {
  const [input, setInput] = useState("");
  const [whales, setWhales] = useState([]);
  const [bigCard, setBigCard] = useState({ name: "N/A", id: "N/A" });
  function inputOnChange(props) {
    setInput(props.target.value);
  }
  function addToList() {
    if (input === "") return;
    whales.push({
      name: input,
      id: "Card" + whales.length,
    });
    setWhales([...whales]);
    setInput("");
  }
  function remove(x) {
    let newWhales = whales.filter((result) => result.id !== x.id);
    setWhales(newWhales);
  }
  function show(x) {
    setBigCard({ name: x.name, id: x.id });
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="center">
            <Title name="Whale's Store" small="Best Store Every 🐳"></Title>
          </div>
          <div className="form center">
            <h4>Whales Name:</h4>
            <input type="text" value={input} onChange={inputOnChange} />
            <br />
            <button onClick={addToList}>Add Whale</button>
          </div>
          <hr />
          <div className="center">
            <Title name="MyWhales" small="🐳🐳🐳"></Title>
          </div>
          <div className="BigCard">
            <BigCard object={bigCard} />;
          </div>
          <div className="cards">
            {whales.map((x, i) => {
              return (
                <Card
                  key={"keyCard" + i}
                  object={x}
                  func={remove}
                  funcShow={show}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
