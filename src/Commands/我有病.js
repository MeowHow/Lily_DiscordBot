/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "我有病",
	description: "我有病地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.reply({
				files: [
					"./Source/Doctor.mov"
				]
			});
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
