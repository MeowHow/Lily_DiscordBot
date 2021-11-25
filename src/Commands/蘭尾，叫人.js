/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "蘭尾，叫人",
	description: "人多勢眾",
	async run(message, args, client) {
		try {
			//反應區
			let dora = '<:dora1:902521311589445702>';
			let doras = dora + dora + dora +dora + dora;
			message.channel.send(doras + '\n' + doras + '\n' + doras);
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
