/** @format */

const Command = require("../Structures/Command.js");
const cmd_config = require("../Data/cmd_config.json");

module.exports = new Command({
	name: "replyF",
	description: "通用指令雷",
	async run(message, args, client) {
		try {
			//反應區
			message.reply({
				files: [
					cmd_config[args].msg
				]
			});
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
