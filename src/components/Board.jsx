import React, { useEffect, useState } from 'react'
import createBoard from '../util/createBoard'
import revealZero from '../util/revealZero'
import Cell from './Cell'

export default function Board() {
  const [grid, setGrid] = useState([])
  useEffect(() => {
    function freshBoard() {
      const { board: newBoard } = createBoard(15, 15, 30)
      setGrid(newBoard)
    }
    freshBoard()
  }, [])

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
      console.log(newGrid[r][c])
      newGrid = revealZero(newGrid, r, c)
    } else {
      newGrid[r][c].revealed = true
    }
    setGrid(newGrid)
  }

  if (!grid) {
    return <div>Loading</div>
  }
  return <div className="flex-1 flex justify-center items-center gap-1">
    {
      grid.map((singleRow, rowNum) => {
        return (
          <div key={rowNum} className="flex flex-col gap-1">
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
  </div>
}
