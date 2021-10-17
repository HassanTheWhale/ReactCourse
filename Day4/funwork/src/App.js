import "./App.css";
import Title from "./components/Title/Title"
import Card from "./components/Card/Card"
import {useState} from "react"
import myData from "./data/MyDaya.json"

function App() {
  const [bill, setBill] = useState([]);
  const [price, setPrice] = useState(0);
  
  return <>
    <section className="container">
      {/* left section */}
      <section className="col-left">
        <div className="center">
          <Title name="Menu" small="Best Food Ever" />
        </div>
        <div>
         {myData.map((x, i) =>{return <Card key={"Menu"+i} object={x} func={function add(){
           let myBill = [...bill];
           myBill.push(x);
           setBill(myBill);
           setPrice(price+x.price)}
           }/>})}
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
              {bill.map((x,i) =>{return <tr key={"bill"+i}>
                <td>{x.name}</td>
                  <td>{x.price}</td>
                  <td>
                    <span 
                      style={{
                        cursor: "pointer"
                      }}
                      onClick={
                        function remove() {
                          setPrice(price-x.price)
                          let myBill = [...bill];
                          myBill.splice(i, 1)
                          setBill(myBill)
                        }
                    }>
                      ❌
                    </span>
                  </td>
                </tr>})}
              <tr key="price" className="bold">
                <td>Total Price</td>
                <td>{price} &nbsp; KWD</td>
                <td></td>
              </tr>
              </tbody>
            </table>
        </div>
      </section>
    </section>
  </>;
}

export default App;
