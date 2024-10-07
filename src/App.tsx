import "./App.css";
import { API_URL } from "./consts";

function App() {
  return (
    <>
      <p>Config from component {JSON.stringify(__CONFIG__)}</p>
      <br />
      <p>Config variable from constant file {API_URL}</p>
    </>
  );
}

export default App;
