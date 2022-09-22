const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.words.split(" ");
    console.log(wordArray);
}

initGame();