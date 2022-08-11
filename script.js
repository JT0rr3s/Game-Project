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
const food = document.querySelector(".food");
const rightBtn = document.querySelector(".right-arrow");
const upBtn = document.querySelector(".top-arrow");
const downBtn = document.querySelector(".bottom-arrow");
const leftBtn = document.querySelector(".left-arrow");
const random = document.querySelector(".random");
const score = document.querySelector(".score");



let blockMovement = 15.5;
let leftPosition = 0;
let topPosition = 0;
let currentInterval = 0;
let isInverse = false;
let isLeft = false;
let foods = []; // [food => gridRowStart, food => gridColumnStart]
let currentScore = 0;
let snakeHead = []; // [snakeHeadY, snakeHeadX]
let snakeHeadY = 15;
let snakeHeadX = 15;

console.log(foods);
console.log(snakeHead);


// Function for food
const myFood = () => {
    food.style.gridRowStart = Math.floor(Math.random() * 40);
    foods.push(Number(food.style.gridRowStart));
    food.style.gridColumnStart = Math.floor(Math.random() * 40);
    foods.push(Number(food.style.gridColumnStart));  
}
myFood();

const currentPosition = () => {
    if (snakeHead.length != 0 && foods.length != 0 && snakeHead[0] == foods[0] && snakeHead[1] == snakeHead[1]) {
        currentScore++;
        score.innerHTML += currentScore;
    }{}
}
console.log(currentPosition);
  
// Function for the incremented number of moves
const myMove = () => {
    
    if(!isInverse && isLeft) {
        leftPosition++;
    } 
    else if (isInverse && isLeft) {
        leftPosition--;
    }
    else if (!isInverse && !isLeft) {
        topPosition++;  
    }
    else {
        topPosition--; 
}
}


   // Functions for each buttons pressed.
const up = () => {
    isInverse = true;
    isLeft = false;
    myMove();
    head.style.top = (topPosition * blockMovement) + "px";
    snakeHead.splice(0, 1, snakeHeadY -= 1); 
}

const right = () => {
    isInverse = false;
    isLeft = true;
    myMove();
    head.style.left = (leftPosition * blockMovement) + "px";
    snakeHead.splice(1, 1, snakeHeadX += 1);
}  

const down = () => {
    isInverse = false;
    isLeft = false;
    myMove();
    head.style.top = (topPosition * blockMovement) + "px";
    snakeHead.splice(0, 1, snakeHeadY += 1);
}

const left = () => {
    isInverse = true;
    isLeft = true;
    myMove();
    head.style.left = (leftPosition * blockMovement) + "px";
    snakeHead.splice(1, 1, snakeHeadX -= 1);
}


// Events from the arrow key buttons pressed.

const control = (e) => {
    if (e.keyCode === 39) {
        clearInterval(currentInterval);
        currentInterval = setInterval(right, 600);
    }else if (e.keyCode === 38) {
        clearInterval(currentInterval);
        currentInterval = setInterval(up, 600);
    }else if (e.keyCode === 37) {
        clearInterval(currentInterval);
        currentInterval = setInterval(left, 600);
    }else if (e.keyCode === 40) {
        clearInterval(currentInterval);
        currentInterval = setInterval(down, 600);
    }
}

// Arrow key buttons pressed on the keyboard.
document.addEventListener("keyup", control);


// Buttons pressed using the mouse.
upBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(up, 600);
})

rightBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(right, 600);
})

downBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(down, 600);
})

leftBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(left, 600);
})












    




