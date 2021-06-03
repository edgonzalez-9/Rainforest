import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainProducts from './Containers/MainProducts';
import Products from './Data';

function App() {
  return (
    <div className="App" style={{backgroundImage: `URL(https://wallpaperaccess.com/full/19921.jpg)`}}>
      <header className="App-header">
        <h1 style={{margin: `20px`}}>Rainforest</h1>
      </header>
      <div style={{height: `90vh`}}>
        <MainProducts products={Products}/>
      </div>
    </div>
  );
}

export default App;
