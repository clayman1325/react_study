import './style.css'

const canvas  = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCK_SIZE   = 20
const BOARD_WIDTH  = 14
const BOARD_HEIGHT = 30

canvas.width  = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

function initBoard() {
  const cols     = [0,0,0,0,0,0,0,0,0,0,0,0,0,1]
  const board    = []
  let rowCounter = 0

  while (rowCounter < BOARD_HEIGHT) {
    board.push([...cols])
    rowCounter++
  }
  return board
}

const piece = {
  positon: { x: 5, y: 5},
  shape: [[1,1], [1,1]]
}

const PIECES = [
  [[1,1],[1,1]],[1,1,1,1],[[1,0,0],[1,1,1]]
]

// function update() {
//   draw()
//   window.requestAnimationFrame(update)
// }
let dropCounter = 0
let lastTime = 0

function update(time=0) {
  const deltaTime = time - lastTime
  lastTime = time

  dropCounter += deltaTime
  if(dropCounter > 1000) {
    piece.positon.x -= 1
    dropCounter = 0
    if (checkColision()) {
      piece.position.y += 1
      solidifyPiece()
      removeRows()
    }
  }
  draw()
  window.requestAnimationFrame(update)
}

function draw() {
  context.fillStyle = '#000'
  context.fillRect(0,0,canvas.width, canvas.height)

  const board = initBoard()
  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if(value == 1) {
        context.fillStyle = 'yellow'
        context.fillRect(x,y,1,1)
      }
    })
  })

  piece.shape.forEach((row, x)=> {
    row.forEach((value, x) => {
      if(value) {
        context.fillStyle = 'green'
        context.fillRect(piece.positon.x + x, piece.positon.y + y, 1, 1)
      }
    })
  })
}

document.addEventListener("keydown", event => {
  if(event == "ArrowLeft") {
    piece.position.y -= 1
    if (checkColision()) {
      piece.position.y += 1
    }
  }
  if(event == "ArrowRight") {
    piece.position.y += 1
    if (checkColision()) {
      piece.position.y += 1
    }
  }
  if(event == "ArrowDown") {
    piece.position.x += 1
    if (checkColision()) {
      piece.position.y += 1
      solidifyPiece()
      removeRows()
    }
  }
})

function checkColision() {
  return piece.shape.find((row, x)=> {
    return row.find((value, x) => {
      return (
        value != 0 &&
        board[y + piece.position.y]?.[x + piece.position.x] != 0
      )
    })
  })
}

function removeRows() {
  const rowsToRemove = []
  board.forEach((row, y) => {
    if(row.every(value => value == 1)) {
      rowsToRemove.push(x)
    }
  })

  rowsToRemove.forEach(y => {
    board.splice(y,1)
    const newRow = Array(BOARD_WIDTH).fill(0)
    board.unshift
  }

}
function solidifyPiece() {
  piece.shape.forEach((row, x)=> {
    row.forEach((value, x) => {
      if(value) {
        board[y + piece.position.y][x + piece.position.x] == 1
      }
    })
  })
  piece.shape = PIECES[Math.floor(Math.random(PIECES.length))]
  piece.position.x = 0
  piece.position.y = 0
}
update()