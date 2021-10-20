import "./App.css";
import { useState, useEffect } from "react";

function App() {
  function external(x) {
    x("121");
  }

  function internal(y) {
    console.log(y);
  }

  // way 1
  function a() {
    console.log("Calling A");
  }

  // way 2
  let b = function () {
    console.log("Calling B");
  };

  // way 3
  let c = () => {
    console.log("Calling C");
  };

  useEffect(a, []);
  useEffect(b, []);
  useEffect(c, []);
  useEffect(() => external(internal), []);
  useEffect(() => console.log("These functions will not re-render"), []);

  const [votes, setVotes] = useState(0);

  function increaseTotal() {
    setVotes(votes + 1);
  }

  const [myCat, setMyCat] = useState({});

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://thatcopy.pw/catapi/rest/");
      let json = await res.json();
      console.log(json);
      setMyCat(json);
    }
    fetchData();
  }, []);

  return (
    <>
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

  console.log(props.title + ": " + counter + "\n------------------------");
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
