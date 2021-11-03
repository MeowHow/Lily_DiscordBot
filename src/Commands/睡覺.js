/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "睡覺",
	description: "睡覺地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send({
				files: [
					"./Source/睡覺.jpg"
				]
			});
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
