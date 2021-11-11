/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "呼叫保護協會",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send("左線預備～阿苗(-wO)▄︻┻┳═一\n右線預備～冬喵(-wO)▄︻┻┳═一\n全線預備～白弓(-wO)▄︻┻┳═一\n等候命令");
			config.fire = true;
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
