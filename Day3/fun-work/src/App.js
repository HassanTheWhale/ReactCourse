import "./App.css";
import Title from './components/Title/Title'
import Card from './components/Card/Card'
import data from './data/MyDaya.json'

function App() {
  return <>
    <div className="container">
      <Title name="Sour Dough Factory" small="By Whale & his brothers"/>
      <div className="row">
       { data.map(x => <Card object={x} />) }
      </div>
    </div>
  </>;
}

export default App;
