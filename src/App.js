import "./App.css";
import Slides from "./Slides";

function App({ slides }) {
  return (
    <div className="App">
      <Slides slides={slides} />
    </div>
  );
}

export default App;
