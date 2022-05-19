import React, { useEffect, useState } from 'react'
import createBoard from '../util/createBoard'
import revealZero from '../util/revealZero'
import Cell from './Cell'

export default function Board({
  boardRow,
  boardCol,
  mineNum
}) {
  const [grid, setGrid] = useState([])
  function initializeGame() {
    function freshBoard() {
      const { board: newBoard } = createBoard(boardRow, boardCol, mineNum)
      setGrid(newBoard)
    }
    freshBoard()
  }
  useEffect(initializeGame, [])
  useEffect(() => {
    if (grid) {
      let count = 0
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j].revealed) count++
        }
      }
      if (count === (boardCol * boardRow - mineNum)) {
        let newGrid = JSON.parse(JSON.stringify(grid))
        newGrid = newGrid.map(row => {
          return row.map(e => {
            const tmp = e
            tmp.revealed = true
            return tmp
          })
        })
        setGrid(newGrid)
        alert('Win!')
      }
    }
  }, [grid])

  const updateFlag = (e, r, c) => {
    // make a deep clone
    const newGrid = JSON.parse(JSON.stringify(grid))
    newGrid[r][c].flagged = !grid[r][c].flagged
    setGrid(newGrid)
  }

  const revealCell = (e, r, c) => {
    if (grid[r][c].revealed) return true
    // make a deep clone
    let newGrid = JSON.parse(JSON.stringify(grid))
    if (newGrid[r][c].value === 'X') {
      alert('oooooooops')
      newGrid = newGrid.map(row => {
        return row.map(e => {
          const tmp = e
          tmp.revealed = true
          return tmp
        })
      })
    } else if (newGrid[r][c].value === 0) {
      newGrid = revealZero(newGrid, r, c)
    } else {
      newGrid[r][c].revealed = true
    }
    setGrid(newGrid)
  }

  if (!grid) {
    return <div>Loading</div>
  }
  return <div className="flex-1 flex flex-col justify-center items-center gap-1 p-10">
    {
      grid.map((singleRow, rowNum) => {
        return (
          <div key={rowNum} className="flex flex justify-center gap-1">
            {singleRow.map((singleBlock, colNum) => {
              return <Cell
                key={colNum}
                details={singleBlock}
                updateFlag={updateFlag}
                revealCell={revealCell}
              />
            })}
          </div>
        )
      })
    }
    <div className='w-full my-4 flex justify-between items-center'>
      <button
        className='p-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600'
        onClick={initializeGame}
      >
        RESTART
      </button>
      {/* <span>TIMER</span> */}
    </div>
  </div>
}
