import { useState } from "react";
import "./App.css";
import Grpmembers from "./group2members";
import img from "./imagesss/download.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Group 2 members are:</h2>
      <Grpmembers />

      <img src={img} className="img"></img>
    </>
  );
}

export default App;
