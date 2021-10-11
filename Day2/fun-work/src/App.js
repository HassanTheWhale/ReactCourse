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
        <h2>{props.name}</h2>
        <img src={props.src} alt={props.name} />
      </div>
    </div>
  );
}

function Body(props) {
  return (
      <div className="body">
        <div className="content">
          <h2 className="title center">My Hobbies</h2>
          <div className="flexCards">
            <Card title="💻 Programming 💻" src="https://cdn.discordapp.com/attachments/884950893391380483/897117403383742484/undraw_programming_2svr.svg" text="Programming was a hobby for me. Until.. I found myself a CS Student @ KU and an known freelancer. How amazing is that?" />
            <Card title="👀 Watching 👀" src="https://cdn.discordapp.com/attachments/884950893391380483/897120216000110732/undraw_cms_re_asu0.svg" text="Yes. I like to watch and hear anything. If we looked and heared enough, we would see the beauty of things!" />
            <Card title="🍗 Eating 🍗" src="https://cdn.discordapp.com/attachments/884950893391380483/897117219169894400/undraw_Hamburger_8ge6.svg" text="A simple man who spend his money on expensive food :D. The good mind is (in) the good stomach. Isn't that true?"  />
          </div>
        </div>
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
      <h2 className="center">{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default App;
