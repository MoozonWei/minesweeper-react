import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [boardRow, setBoardRow] = useState(15)
  const [boardCol, setBoardCol] = useState(15)
  const [mineNum, setMineNum] = useState(50)
  return (
    <div className="App h-screen flex flex-col items-center">
      <h1 className='font-bold text-4xl p-10'>MINESWEEPER</h1>
      <h2 className='flex gap-3'>
        <span>ROW: {boardRow}</span>
        <span>COL: {boardCol}</span>
        <span>MINE: {mineNum}</span>
      </h2>
      <Board boardRow={boardRow} boardCol={boardCol} mineNum={mineNum} />
    </div>
  )
}

export default App
