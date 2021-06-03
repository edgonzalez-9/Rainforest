import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainProducts from './Containers/MainProducts';
import Products from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rainforest</h1>
      </header>
      <div style={{height: `90vh`}}>
        <MainProducts products={Products}/>
      </div>
    </div>
  );
}

export default App;
