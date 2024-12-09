document.addEventListener('keydown', moveCharacter);

let character = document.getElementById('character');
let gameContainer = document.getElementById('game-container');
let characterSpeed = 10;

function moveCharacter(event) {
    let characterPosition = character.getBoundingClientRect();

    switch(event.key) {
        case 'ArrowLeft':
            if (characterPosition.left > 0) {
                character.style.left = `${characterPosition.left - characterSpeed}px`;
            }
            break;
        case 'ArrowRight':
            if (characterPosition.right < gameContainer.offsetWidth) {
                character.style.left = `${characterPosition.left + characterSpeed}px`;
            }
            break;
    }
}