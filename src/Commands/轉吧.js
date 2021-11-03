/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "轉吧",
	description: "轉吧地雷",
	async run(message, args, client) {
		try {
			//反應區
			let rndBc = Math.floor(Math.random() * (10 - 1 + 1) + 1)
				if(rndBc <= 9) {
					message.channel.send("轉吧！黑貓洗衣機");
					message.channel.send({
						files: [
							"./Source/轉吧01.gif"
						]
					});
				} else {
					message.channel.send("轉...！");
					message.channel.send({
						files: [
							"./Source/轉吧02.gif"
						]
					});
				}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
