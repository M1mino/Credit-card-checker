//Credit card verification feature. Returns True if the card is valid.
const validCred = card => {
    let shortCard = card;
    let shortCard1 = shortCard.pop();
    let reverseCard = [];
    for (let i = shortCard.length - 1; i >= 0; i--) {
        reverseCard.push(shortCard[i]);
    }
    let oddFilter = reverseCard.filter((_, index) => index%2 ===0);
    let oddFilter2 = [];
    for (let i = 0; i < oddFilter.length; i++) {
        oddFilter2.push(oddFilter[i] * 2);
    }
    let oddNumber = [];
    for(let i = 0; i < oddFilter2.length; i++) {
        if(oddFilter2[i] > 9) {
            oddNumber.push(oddFilter2[i] - 9);
        } else {
            oddNumber.push(oddFilter2[i]);
        }
    }
    let evenNumber = reverseCard.filter((_, index) => index%2 !== 0);
    const finalNumber = oddNumber.concat(evenNumber);
    const sumNumber = finalNumber.reduce((a,b) => a +b) + shortCard1;
    if (sumNumber % 10 === 0) {
        return true;
    } else {
        return false;
    }

    
};