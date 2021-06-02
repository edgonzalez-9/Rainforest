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
      <body>
        <MainProducts products={Products}/>
      </body>
    </div>
  );
}

export default App;
