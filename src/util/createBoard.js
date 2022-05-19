export default (row, col, bombs) => {
  let board = []
  let mineLocation = []

  // Create Blank Board

  // x = column
  for (let x = 0; x < row; x++) {
    let subCol = []
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false
      })
    }
    board.push(subCol)
  }

  // Randomize Bomb Placement
  let bombsCount = 0
  while (bombsCount < bombs) {
    let x = randomNum(0, row - 1)
    let y = randomNum(0, col - 1)

    if (board[x][y].value === 0) {
      board[x][y].value = 'X'
      mineLocation.push([x, y])
      bombsCount++
    }
  }

  // Add Numbers
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (board[r][c].value === 'X') {
        continue
      }

      // Top
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Top Right
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Right
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Bottom Right
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Bottom
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Bottom Left
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Left
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }

      // Top Left
      if (r > 0 && board[r - 1][c].value === 'X') {
        board[r][c].value++
      }
    }
  }
}