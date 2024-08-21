// Obtém os elementos do DOM
const catcher = document.getElementById('catcher');
const ball = document.getElementById('ball');
const gameArea = document.getElementById('gameArea');

// Configurações do jogo
const gameWidth = gameArea.clientWidth;
const gameHeight = gameArea.clientHeight;
const catcherWidth = catcher.clientWidth;
const catcherHeight = catcher.clientHeight;
const ballDiameter = ball.clientWidth;

// Inicializa a posição da bola
let ballX = Math.random() * (gameWidth - ballDiameter);
let ballY = 0;
let ballSpeed = 2;

// Inicializa a posição do catcher
let catcherX = (gameWidth - catcherWidth) / 2;

// Movimenta o catcher com o mouse
document.addEventListener('mousemove', (event) => {
    catcherX = Math.min(Math.max(event.clientX - gameArea.offsetLeft - (catcherWidth / 2), 0), gameWidth - catcherWidth);
    catcher.style.left = `${catcherX}px`;
});

// Atualiza o jogo
function updateGame() {
    ballY += ballSpeed;
    if (ballY > gameHeight) {
        ballY = 0;
        ballX = Math.random() * (gameWidth - ballDiameter);
    }
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // Checa se a bola foi pega
    if (ballY + ballDiameter > gameHeight - catcherHeight &&
        ballX + ballDiameter > catcherX &&
        ballX < catcherX + catcherWidth) {
        ballY = 0;
        ballX = Math.random() * (gameWidth - ballDiameter);
        ballSpeed += 0.1; // Aumenta a velocidade da bola
    }

    requestAnimationFrame(updateGame);
}

// Inicia o jogo
updateGame();
