/*
const calculate = require("./hisob");

const result1 = calculate.kopaytirish(80, 30);
console.log("Natija: ", result1);

const result2 = calculate.bolish(80, 20);
console.log("Natija2: ", result2);

const result3 = calculate.qoshish(80, 30);
console.log("Natija3: ", result3);

const result4 = calculate.ayirish(80, 30);
console.log("Natija4: ", result4);

// console.log(require("module").wrapper);
// console.log(arguments);
*/

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

const myAccount = new Account("Martin", 300000, 83902420934290);
myAccount.giveMeDetails();
myAccount.makeDeposit(1000000);
myAccount.withdrawMoney(240000);
myAccount.makeDeposit(640000);
