/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
module.exports = new Command({
	name: "不給糖就搗蛋",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (15 - 1 + 1) + 1)
			if(config.LockID.indexOf(message.author.id)!=-1)
			{
				rndInt = 12;
			}

			if(rndInt <= 5) {
				message.channel.send(":heart:搗～蛋～:heart:");
			} else if (rndInt > 5 && rndInt <= 10) { 
				message.channel.send(":candy:糖果～糖果～:candy:");
			} else if (rndInt > 10 && rndInt <= 12) {
				message.channel.send("https://tenor.com/SxzM.gif");
			} else {
				message.channel.send("導彈發...等等，企鵝還在養\n https://tenor.com/QoOR.gif");
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
