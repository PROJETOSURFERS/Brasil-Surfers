const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 60,
    width: 30,
    height: 30,
    speed: 5,
    color: "green"
};

let keys = {
    left: false,
    right: false
};

canvas.addEventListener("touchstart", (event) => {
    let touchX = event.touches[0].clientX;
    if (touchX < canvas.width / 2) {
        keys.left = true;
        keys.right = false;
    } else {
        keys.right = true;
        keys.left = false;
    }
});

canvas.addEventListener("touchend", () => {
    keys.left = false;
    keys.right = false;
});

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function movePlayer() {
    if (keys.left && player.x > 0) {
        player.x -= player.speed;