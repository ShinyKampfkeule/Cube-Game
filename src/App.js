import './App.css';
import {Routes, Route} from "react-router-dom"
import Game from "./routes/gameRoute";
import GameOver from "./routes/gameoverRoute";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/GameOver" element={<GameOver />} />
      </Routes>
    </div>
  )
}

export default App;