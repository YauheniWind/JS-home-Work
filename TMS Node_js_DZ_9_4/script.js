let i = 1;
alert('Hi! Let\s play the game.');
let user_one = prompt('Choose a color:');
let limit = +prompt('limit of attempts:')

while (true) {
    let user_two = prompt('Guess the color:');

    if (user_one == user_two && i <= limit) {
        alert(`You won on the ${i} try`);
        break
    } else if (i == limit) {
        alert(`Your atttempt: ${i}`);
        alert('You crossed the limit of the attempts. You lose!')
        break;
    } else {
        alert(`Your attempts: ${i}`);
        alert('Try again');
    }
    i += 1
}