function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

document.getElementById('roll-button').addEventListener('click', function() {
    const diceType = document.getElementById('dice-type').value;

    const result = rollDice(diceType);

    document.getElementById('roll-result').textContent = result;

    });

