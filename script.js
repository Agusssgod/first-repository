// Generar número aleatorio entre 1 y 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');

    if (isNaN(guess)) {
        message.textContent = "enter a number :3";
    } else if (guess < randomNumber) {
        message.textContent = "Too low. Try again!";
    } else if (guess > randomNumber) {
        message.textContent = "Too high. Try again!";
    } else {
        message.textContent = "yeahhh, you did it 💕";
    }
}
function toggleTheme() {
    document.body.classList.toggle('light-mode');
}
function cambiarTema() {
    document.body.classList.toggle('invertir-tema');
}

