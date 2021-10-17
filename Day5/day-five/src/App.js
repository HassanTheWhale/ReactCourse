import "./App.css";
import { useState } from "react";
import Title from "./components/Title/Title";
import Card, { BigCard } from "./components/Card/Card";

function App() {
  const [input, setInput] = useState("");
  const [whales, setWhales] = useState([]);
  const [bigCard, setBigCard] = useState([]);
  function inputOnChange(props) {
    setInput(props.target.value);
  }
  function addToList() {
    if (input === "") return;
    let newWhales = [...whales];
    newWhales.push({ name: input, id: "Card" + (whales.length + 1) });
    setWhales(newWhales);
  }
  function remove(x) {
    let newWhales = [...whales];
    newWhales.splice(x.id, 1);
    setWhales(newWhales);
  }
  function show(x) {
    console.log(x);
    let newBigWhale = [{ name: x.name, id: x.id }];
    setBigCard(newBigWhale);
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
            {bigCard.map((x) => {
              return <BigCard object={x} />;
            })}
          </div>
          <div className="cards">
            {whales.map((x, i) => {
              return (
                <Card
                  key={"keyCard" + (i + 1)}
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
