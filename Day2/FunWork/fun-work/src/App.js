import './App.css';

function App() {
  return (
    <>
      <Header src="https://cdn.discordapp.com/attachments/884950893391380483/897116803245940756/72.png" name="TheWhale" />
      <Body />
      <Footer />
    </>
  );
}

function Header(props) {
  return (
    <div className="header">
      <div className="content">
        <img src={props.src} alt={props.name} />
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

function Body(props) {
  return (
      <div className="body">
        <h2>My Hobbies</h2>
        <Card title="Programming" src="https://cdn.discordapp.com/attachments/884950893391380483/897117403383742484/undraw_programming_2svr.svg" text="This is the txt" />
        <Card title="Sleeping" src="https://cdn.discordapp.com/attachments/884950893391380483/897117620430589962/undraw_Loading_re_5axr.svg" text="This is the txt" />
        <Card title="Eating" src="https://cdn.discordapp.com/attachments/884950893391380483/897117219169894400/undraw_Hamburger_8ge6.svg" text="This is the txt"  />
      </div>
    );
}

function Footer(props) {
  return (
    <div className="footer">
      Copyright 2021. Made with <span>❤</span> by H. TheWhale 🐳.
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt={props.src}/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default App;
