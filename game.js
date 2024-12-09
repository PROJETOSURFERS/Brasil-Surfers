const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
};

let isLeft = false;
let isRight = false;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        isLeft = true;
    }
    if (event.key === "ArrowRight") {
        isRight = true;
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        isLeft = false;
    }
    if (event.key === "ArrowRight") {
        isRight = false;
    }
});

function movePlayer() {
    if (isLeft && player.x > 0) {
        player.dx = -player.speed;
    } else if (isRight && player.x + player.width < canvas.width) {
        player.dx = player.speed;
    } else {
        player.dx = 0;
    }

    player.x += player.dx;
}

function drawPlayer() {
    ctx.fillStyle = "#ffcc00";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    clearCanvas();
    movePlayer();
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

gameLoop();
