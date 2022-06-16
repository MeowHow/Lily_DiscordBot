/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "你先學學看peko",
	description: "地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send('HA↘HA↙HA↖HA↗');
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
