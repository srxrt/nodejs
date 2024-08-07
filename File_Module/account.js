const moment = require("moment");
class Account {
	#amount;
	#account_id;
	constructor(name, amount, accountId) {
		this.#amount = amount;
		this.name = name;
		this.#account_id = accountId;
	}

	tellMeBalance() {
		console.log("Sizning hisobingizdagi qoldiq: ", this.#amount);
		return this.#amount;
	}
	withdrawMoney(amount) {
		if (this.#amount > amount) {
			this.#amount -= amount;
			console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}`);
		} else {
			console.log("Sizning balansingizdagi pul yetarli emas: $", this.#amount);
		}
	}

	makeDeposit(amount) {
		this.#amount += amount;
		console.log("Hisobingiz toldirildi: $", this.#amount);
	}

	giveMeDetails() {
		console.log(
			`Salom hurmatli ${this.name}. Sizning hisobingiz $${
				this.#amount
			} ga teng.`
		);
		console.log("Hisob raqamingiz:", this.#account_id);
	}

	static tellMeAboutClass() {
		console.log("Bu class accountlarni yasash uchun xizmat qiladi");
	}

	static tellMeTime() {
		console.log("Hozirgi vaqt: ", moment().format("YYYY MM DD HH:mm:ss"));
	}
}

module.exports = Account;
