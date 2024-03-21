function checkForSpam(message) {
    const triger = ["spam", "sale"];
    let checkResult;
    for (let i = 0; i < triger.length; i++) {
        const sample = message.toLowerCase();
        checkResult = sample.includes(triger[i]);
        if(checkResult) {  
            break;         
        }
    }
    return checkResult;
}

//Just in case you want to do without arrays and variability in variables
/*
function checkForSpam(message) {
    const spam = "spam";
    const sale = "sale";
    const sample = message.toLowerCase();
    if(sample.includes(spam) || sample.includes(sale)) {
        return true;
    }else {
        return false;
    }
}
*/
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
