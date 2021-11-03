/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	try {
		console.log("Bot is ready");
	} catch(err) {
		console.log(err);
	}
});
