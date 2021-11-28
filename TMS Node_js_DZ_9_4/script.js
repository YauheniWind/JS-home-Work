let i = 1;
alert('Hi! Let\s play the game. You have 3 attempts');
let user_one = prompt('Choose a color:');

while (true) {
    let user_two = prompt('Guess the color:');

    if (user_one == user_two && i <= 3) {
        alert(`You won on the ${i} try`);
        break
    } else if (i == 3) {
        alert(`Your atttempt: ${i}`);
        alert('You crossed the limit of the attempts. You lose!')
        break;
    } else if (user_two !== user_one) {
        alert(`Your attempts: ${i}`);
        alert('Try again');
    }
    i += 1
}