
import './main.css';
import Listing from './components/Listing';
import { dataItems } from './components/data';

function App() {
  return (
    <div className="App">
      <Listing items={dataItems} />
    </div>
  );
}

export default App;
