const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const tableSize = 20
const delay = 100

const lightGreen = '#25b336'
const darkGreen = '#13611d'
const red = '#d62424'
const backgroundColor = '#eee'


var snake = new Snake()
var apple = new Apple()
apple.spawnApple(snake.corp)

setInterval( function() {

    snake.update()

    if (snake.x == apple.x && snake.y == apple.y) { // Collision snake-apple
        snake.addCorp()
        apple.spawnApple(snake.corp)
    }

    drawGrid()
    
    for (let i in snake.corp) {
        draw(snake.corp[i].x, snake.corp[i].y, snake.color)
    }

    draw(snake.x, snake.y, snake.head)
    draw(apple.x, apple.y, apple.color)
}, delay)
 
window.onkeydown = function(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
        snake.dir = e.keyCode - 37  // Permet de return une valeur entre 0 et 3
    }
}


function draw(x, y, color) {
    /*  Affiche un rectangle
        Param : x, x -> int 
                color -> couleur
    */
    const size = 28
    const padding = 2
    ctx.fillStyle = color
    ctx.fillRect((size+padding)*x, (size+padding)*y, size, size)
}

function drawGrid() {
    /*  Affiche la grille du plateau de jeu
    */ 
    for (let i=0; i<tableSize; i++) {
        for (let j=0; j<tableSize; j++){
            draw( i, j, backgroundColor) // Pour i et j < 20 dessin d'un rect de couleur 
        }
    }
}
