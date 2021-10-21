import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import myData from "./data/MyDaya.json";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

function App() {
  const [bill, setBill] = useState([]);
  const [price, setPrice] = useState(0);

  const [myCat, setMyCat] = useState({});

  console.log("main");

  useEffect(() => {
    // reFetch();
    ax();
  }, []);

  async function reFetch() {
    console.log("refetch");
    let res = await fetch("https://thatcopy.pw/catapi/rest/");
    let json = await res.json();
    setMyCat(json);
  }

  function ax() {
    axios.get("https://thatcopy.pw/catapi/rest/").then((res) => {
      setMyCat(res.data);
    });
  }

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 100,
    onRest: () => set(!flip),
  });
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <section className="container">
        {/* left section */}
        <section className="col-left">
          <animated.div style={props}>I will fade in</animated.div>
          <div className="center">
            <Title name="Menu" small="Best Food Ever" />
          </div>
          <Button color="success" onClick={reFetch}>
            Refresh!
          </Button>
          <img src={myCat.url} width="50%" alt="Cat" />
          <div>
            {myData.map((x, i) => {
              return (
                <Card
                  key={"Menu" + i}
                  object={x}
                  func={function add() {
                    let myBill = [...bill];
                    myBill.push(x);
                    setBill(myBill);
                    setPrice(price + x.price);
                  }}
                />
              );
            })}
          </div>
        </section>

        {/* right section */}
        <section className="col-right">
          <div className="center">
            <Title name="Your Bill" small="Pay before order :D" />
            <table className="billTable">
              <thead>
                <tr>
                  <th>Name Of Item</th>
                  <th>Price (KWD)</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {bill.map((x, i) => {
                  return (
                    <tr key={"bill" + i}>
                      <td>{x.name}</td>
                      <td>{x.price}</td>
                      <td>
                        <span
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={function remove() {
                            setPrice(price - x.price);
                            let myBill = [...bill];
                            myBill.splice(i, 1);
                            setBill(myBill);
                          }}
                        >
                          ❌
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <tr key="price" className="bold">
                  <td>Total Price</td>
                  <td>{price} &nbsp; KWD</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
