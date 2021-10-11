import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './comp/MyNav';
import MyCarousel from './comp/MyCarousel';

function App() {
  return (
    <>
      <MyNav />
      <div className="mb-5"></div>
      <MyCarousel />
    </>
    
  );
}

export default App;
