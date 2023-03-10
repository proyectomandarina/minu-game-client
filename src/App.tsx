import Game from "./components/Game"
import EndGame from "./pages/EndGame"
import Home from "./pages/Home"
import Round from "./pages/Round"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Game>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/round/1" element={<Round roundNumber={1} />} />
          <Route path="/round/2" element={<Round roundNumber={2} />} />
          <Route path="/end" element={<EndGame />} />
        </Routes>
      </Router>
    </Game>
  )
}

export default App
