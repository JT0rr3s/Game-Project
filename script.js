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

let leftPosition = 0;
let topPosition = 0;
let currentInterval = 0;
let isInverse = false;
let isLeft = false;
let food1 = 0;
let food2 = 0;
let currentScore = 0;


// function draw() {
//     if (head.isTouching(food)) {
//     
//     }
// }




// Function for food
const myFood = () => {
    food.style.gridRowStart = Math.floor(Math.random() * 40);
    food1 = food.style.gridRowStart;
    console.log(food1);
    food.style.gridColumnStart = Math.floor(Math.random() * 40);
    food2 = food.style.gridRowStart;
    
}
myFood();

const sameLocation = () => {
if (leftPosition == food1 && topPosition == food2) {
        currentScore++;
        score.innerHTML += currentScore;
        console.log(score.innerHTML);
    }else {
        
    }
}
sameLocation();

      
// Function for the incremented number of moves
const myMove = () => {
    
    if(!isInverse && isLeft) {
        leftPosition++;
        console.log(leftPosition);
    } 
    else if (isInverse && isLeft) {
        leftPosition--;
        console.log(leftPosition);
    }
    else if (!isInverse && !isLeft) {
        topPosition++;
        console.log(topPosition);
    }
    else {
        topPosition--;
        console.log(topPosition);
}
}


   // Functions for each buttons pressed.
const up = () => {
    isInverse = true;
    isLeft = false;
    myMove();
    head.style.top = topPosition + "px";
    console.log(head.style.top);
}

const right = () => {
    isInverse = false;
    isLeft = true;
    myMove();
    head.style.left = leftPosition + "px";
}

const down = () => {
    isInverse = false;
    isLeft = false;
    myMove();
    head.style.top = topPosition + "px";
}

const left = () => {
    isInverse = true;
    isLeft = true;
    myMove();
    head.style.left = leftPosition + "px";
}



// Events from the arrow key buttons pressed.

const control = (e) => {
    if (e.keyCode === 39) {
        clearInterval(currentInterval);
        currentInterval = setInterval(right, 9);
    }else if (e.keyCode === 38) {
        clearInterval(currentInterval);
        currentInterval = setInterval(up, 9);
    }else if (e.keyCode === 37) {
        clearInterval(currentInterval);
        currentInterval = setInterval(left, 9);
    }else if (e.keyCode === 40) {
        clearInterval(currentInterval);
        currentInterval = setInterval(down, 9);
    }
    }

// Arrow key buttons pressed on the keyboard.
document.addEventListener("keyup", control);


// Buttons pressed using the mouse.
upBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(up, 9);
})

rightBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(right, 9);
})

downBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(down, 9);
})

leftBtn.addEventListener("click", () => {
    clearInterval(currentInterval);
    currentInterval = setInterval(left, 9);
})












    




