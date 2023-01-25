import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pokemons/Home";
import View from "./pokemons/View";
import Type from "./pokemons/Type";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/view/:name" element={<View />} />
        <Route path="/type/:name" element={<Type />} />
      </Routes>
    </div>
  );
}

export default App;
