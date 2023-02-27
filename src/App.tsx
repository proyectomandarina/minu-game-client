import Game from "./components/Game"
// import Home from "./pages/Home"
import Round from "./pages/Round"

function App() {
  return (
    <Game>
      <Round roundNumber={1}></Round>
    </Game>
  )
}

export default App
