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

//Checks and returns invalid cards into an array.

let invalidCard = [];
const findInvalidCards = arr => {
    if(validCred(arr) === false) {
        invalidCard.push(arr);
    }
};

//Identifies credit card companies and returns in an array.

let invalidCompany = [];
const idInvalidCardCompanies = arr => {
    const firstLetter = arr.map(currentValue => {
        return currentValue[0];
    });
    for(let i =0; i < firstLetter.length; i++) {
        if (firstLetter[i] === 3) {
            let amex ='Amex'
            invalidCompany.push(amex);
    0    } else if (firstLetter[i] === 4) {
        let visa = "Visa";
        invalidCompany.push(visa)
    } else if (firstLetter[i] === 5) {
        let masterCard = 'MasterCard';
        invalidCompany.push(masterCard);
    } else if (firstLetter[i] === 6) {
        let discover = 'Discover';
        invalidCompany.push(discover);
    } else {
        return 'Company not found';
    }

    
    }

};
