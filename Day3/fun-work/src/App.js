import "./App.css";
import Title from './components/Title/Title'
import Card from './components/Card/Card'
import data from './data/MyDaya.json'

function App() {
  // data.map(x => console.log(x))
  return <>
    <div className="container">
      <Title name="My List"/>
      {data.map(x => <Card data={x}/>)}
    </div>
  </>;
}

export default App;
