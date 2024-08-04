//DICE ROLLER PROGRAM

function rollDice(){
    const numOfDIce = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < numOfDIce; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="assets/${value}.svg">`);
    }

    diceResult.textContent = `Dice : ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}