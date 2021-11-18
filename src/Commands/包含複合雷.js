/** @format */

const Command = require("../Structures/Command.js");
const cmd_list = require("../Data/cmd_list.json");

module.exports = new Command({
	name: "doubleL",
	description: "通用指令雷",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send(cmd_list[args].msgA);
			message.channel.send({
				files: [
					cmd_list[args].msgB
				]
			});
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
