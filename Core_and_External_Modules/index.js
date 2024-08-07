// Module packages: CORE Packages
// node +Enter => Tabx2 =>Shows the core packages

/*
setTimeout(function () {
	//delays for the given amount of time
	console.log("The Dark Knight Rises");
}, 5000);
let number = 0;
setInterval(function () {
	//repeats the function every given amount of time
	console.log("Hisob", number);
	number++;
}, 1000);

// file system
const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

console.log("=======================================================");
fs.writeFileSync("./input.txt", `${data} \n\t\t\t\t\t\t\t\t\t\t\t by Bane`);

const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);
*/

//External packages

/*
const moment = require("moment");
//const time = moment().format("YYYY-MM-DD");
//const time = moment().format();
//console.log(time);

setInterval(() => {
	const time = moment().format();
	console.log("Hozirgi vaqt: ", time);
}, 5000);
*/

/*
// inquirer package => terminal bn bogliq activitylar ucun iwlatiladi
// inquirer/prompts@latest, node v20.13.1

const prompts = require("@inquirer/prompts");
prompts
	.input({ message: "raqamni kiriting:" })
	.then((answer) => {
		console.log("man kiritgan raqam qiymati: ", answer);
	})
	.catch((err) => console.log(err));
*/

/*
// inquirer v8.2.0, node v16.7.0
const inquirer = require("inquirer");
inquirer
	.prompt([{ type: "input", name: "raqam", message: "raqamni  kiriting" }])
	.then((answer) => {
		console.log("man kiritgan raqam qiymati: ", answer.raqam);
	})
	.catch((err) => console.log(err));
*/

/*
// validator
const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
// const test = validator.isInt("100");
const test = validator.isIP("192.168.219.108");
console.log("Test:", test);
*/

//uuid => generates random strings that can be used as an id

const { v4: uuidv4 } = require("uuid");
const random = uuidv4(); // creates random string;
console.log("random", random);

const chalk = require("chalk"); //brings stylist to the terminal
const log = console.log;
log(chalk.blue("my random uuid is: ") + chalk.yellow(random) + chalk.red(" !"));
