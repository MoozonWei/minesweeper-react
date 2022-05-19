export default function revealZero(board, r, c) {
  const arr = JSON.parse(JSON.stringify(board))
  const [height, width] = [arr.length, arr[0].length]
  const path = new Array(height).fill(0).map(e => new Array(width).fill(true))
  // directions
  const directions = {
    top: [-1, 0],
    right: [0, 1],
    bottom: [1, 0],
    left: [0, -1]
  }
  const directions8 = {
    ...directions,
    topRight: [-1, 1],
    bottomRight: [1, 1],
    bottomLeft: [1, -1],
    topLeft: [-1, -1]
  }
  // reveal around
  function revealAroundNotZero(arr, x, y) {
    for (const key in directions8) {
      const [newX, newY] = [x + directions8[key][0], y + directions8[key][1]]
      if ((newX >= 0 && newX < height) && (newY >= 0 && newY < width) && arr[newX][newY].value !== 0) {
        arr[newX][newY].revealed = true
      }
    }
  }
  // dfs
  function dfs(arr, x, y) {
    // check all directions
    arr[x][y].revealed = true
    revealAroundNotZero(arr, x, y)
    path[x][y] = false
    for (const key in directions8) {
      const [newX, newY] = [x + directions8[key][0], y + directions8[key][1]]
      if ((newX >= 0 && newX < height) && (newY >= 0 && newY < width) && !arr[newX][newY].revealed) {
        if (arr[newX][newY].value === 0) {
          dfs(arr, newX, newY)
        }
      }
    }
  }
  dfs(arr, r, c)
  return arr
}