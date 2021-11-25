/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "蘭尾，叫人",
	description: "人多勢眾",
	async run(message, args, client) {
		try {
			//反應區
			let doraHD = '<:dora1:902521311589445702>';
			let doraLD = '<:744064866477670500:913381488265932800>';
			let doraS = '<:__:913382055453261845>';
			let doras_1 = doraHD + doraLD + doraHD + doraLD + doraHD;
			let doras_2 = doraLD + doraHD + doraLD + doraHD+ doraLD;
			message.channel.send(doras_1 + '\n' + doras_2 + '\n' + doras_1);
			
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
