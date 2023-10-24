import './App.css';
import PageLeft from './component/pageLeft.js';
import PageRight from './component/pageRight.js';


function App() {
  return (
    <div className="App">
      <div className="AppBox">
        <PageLeft />
        <PageRight />
      </div>
    </div>
  );
}

export default App;
