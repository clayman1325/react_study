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
  const cols     = [0,0,0,0,0,1,1,1,1,0,0,0,0,1]
  const board    = []
  let rowCounter = 0

  while (rowCounter < BOARD_HEIGHT) {
    board.push([...cols])
    rowCounter++
  }
  return board
}

function update() {
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
        console.log("test", y, x)
        context.fillStyle = 'red'
        context.fillRect(x,y,1,1)
      }
    })
  })
}

update()