const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //getting random number

        //shuffing  and swipping wordArray letters random
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        
    }
    document.getElementById('randomNames').innerHTML = wordArray;
    document.getElementById('realNames').innerHTML = randomObj.word;
    console.log(wordArray,randomObj.word);
}

initGame();