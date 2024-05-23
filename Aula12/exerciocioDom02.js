// document.addEventListener('DOMContentLoaded', (event) => {
//     let counter = 0;

//     let clickButton = document.getElementById('click-button');
//     let counterDisplay = document.getElementById('counter');
//     clickButton.addEventListener('click', () => {
//     counter++;
//     counterDisplay.textContent = counter;
// });
// });


document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;

    let clickButton = document.getElementById('click-button');
    let counterDisplay = document.getElementById('counter');
    let messagesDisplay = document.getElementById('messages');

    clickButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;

        if (counter % 50 === 0) {
            const message = document.createElement('p');
            message.textContent = `Você atingiu ${counter} cliques!`;
            messagesDisplay.appendChild(message);
        }
    });
});