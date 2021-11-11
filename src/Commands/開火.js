/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "開火",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			if(config.fire) {
				message.channel.send("阿苗(-wO)▄︻┻┳═一 - - - -\n冬喵(-wO)▄︻┻┳═一 - - - -\n白弓(-wO)▄︻┻┳═一 - - - -");
				config.fire = false;
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
