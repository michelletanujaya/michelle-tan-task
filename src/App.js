import './App.css';
import Box from "./Box";

function App() {
  return (
    <div className="App">
        <div className="App-main">
          <div className="panel left-panel">
              <Box boxName="main" number="1"/>
              <Box boxName="desc" number="2"/>
          </div>
          <div className="panel right-panel">
              <Box boxName="small" number="3"/>
              <Box boxName="small" number="4"/>
              <Box boxName="small" number="5"/>
          </div>
        </div>
    </div>
  );
}

export default App;
