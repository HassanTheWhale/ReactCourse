import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";

function App() {
  const [votes, setVotes] = useState(0);

  function increaseTotal() {
    setVotes(votes + 1);
  }

  const [myCat, setMyCat] = useState({});

  console.log("main");

  useEffect(() => {
    reFetch();
  }, []);

  async function reFetch() {
    console.log("refetch");
    let res = await fetch("https://thatcopy.pw/catapi/rest/");
    let json = await res.json();
    setMyCat(json);
  }

  return (
    <>
      <Button color="success" onClick={reFetch}>
        Refresh!
      </Button>

      <img src={myCat.url} width="50%" alt="Cat" />
      <h2 className="center">عدد الأصوات</h2>
      <h3 className="center">{votes}</h3>
      <div className="flex">
        <Card title="للي يستحق" total={increaseTotal} type="a" />
        <Card title="أعضاء جمعية مشرف" total={increaseTotal} type="b" />
        <Card title="ولد عمي" total={increaseTotal} type="c" />
      </div>
    </>
  );
}

function Card(props) {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
    // props.total();
  }

  console.log("----------------------");

  return (
    <>
      <div className="card">
        <div className="amazing">
          <div className={"head " + props.type}>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <h4>{props.title}</h4>
        <h5>{counter}</h5>
        <button onClick={increase}>Increase By 1</button>
      </div>
    </>
  );
}

export default App;
