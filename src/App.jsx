import './App.css'
import Board from './components/Board'

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <h1 className='font-bold text-4xl p-10'>Minesweeper</h1>
      <Board />
    </div>
  )
}

export default App
