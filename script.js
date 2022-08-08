// Create multiple grid boxes? Or just one div? If yes, need to determine how many grid boxes and how small. DONE!
// Determine how large my game board will be. DONE!
// Need to figure out how to create the snake.
// Need to figure out how to start the movement of the snake.
// Need to figure out how to change directions (up, down, right, left). Figure out the addEventListeners that will be used
// Need to figure out how to provide both keyboard and mouse options. Start with mouse options first?
// Need to figure out how to continue the snakes motion depending on the direction that is selected.
// Need to determine how to randomly add food.
// Need to determine how to increase the snakes length when food is eaten.
// Need to figure out the collision situation.
        // 1. Collision if the snake runs into itself.
        // 2. Collision if the snake runs into the edge of the game board.
// Need to figure out what follows when a collision occurs.

const head = document.querySelector(".head");
const rightBtn = document.querySelector(".right-arrow");
const upBtn = document.querySelector(".top-arrow");
const downBtn = document.querySelector(".bottom-arrow");
const leftBtn = document.querySelector(".left-arrow");

let position = 0;
let currentInterval = 0;
let newPosition = 0;

// Function for the incremented number of moves
const myMove = () => {
    position++;
    position += 0;
}

// Functions for each buttons pressed.
const up = () => {
    myMove()
    head.style.bottom = position + "px";
    newPosition = head.style.bottom;
    console.log(newPosition);
}

const right = () => {
    myMove()
    head.style.left = position + "px";
    newPosition = head.style.left;
    console.log(newPosition);
}

const down = () => {
    myMove()
    head.style.top = position + "px";
    newPosition = head.style.top;
    console.log(newPosition);
}

const left = () => {
    myMove()
    head.style.right = position + "px";
    newPosition = head.style.right;
    console.log(newPosition);
}

// Events from the arrow key buttons pressed.

const control = (e) => {
    if (e.keyCode === 39) {
        clearInterval(currentInterval);
        newPosition;
        currentInterval = setInterval(right, 50);
        return currentInterval;
    }else if (e.keyCode === 38) {
        clearInterval(currentInterval);
        newPosition;
        currentInterval = setInterval(up, 50);
        return currentInterval;
    }else if (e.keyCode === 37) {
        clearInterval(currentInterval);
        newPosition;
        currentInterval = setInterval(left, 50);
    }else if (e.keyCode === 40) {
        clearInterval(currentInterval);
        newPosition;
        currentInterval = setInterval(down, 50);
    }
    }

// Arrow key buttons pressed on the keyboard.
document.addEventListener("keyup", control);


// Buttons pressed using the mouse.
upBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    newPosition;
    currentInterval = setInterval(up, 50);
})

rightBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    newPosition;
    currentInterval = setInterval(right, 50);
    })

downBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    newPosition;
    currentInterval = setInterval(down, 50);
})

leftBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    newPosition;
    currentInterval = setInterval(left, 50);
})










    




