/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
let time = 0,Nowtime,cooling = 900000;
module.exports = new Command({
	name: "超位魔法",
	description: "",
	async run(message, args, client) {
		try {
			//反應區
				if(config.GodID.indexOf(message.author.id) != -1) {
					let dt = new Date();
					Nowtime = dt.getTime();
					if(Nowtime - time > cooling) {
						message.channel.send('確認神格，準備施術。');
						message.channel.send({
							files: [
								"./Source/超位魔法.gif"
							]
						});
						time = Nowtime;
					} else {
						let Milliseconds = (cooling - (Nowtime - time)); // /60000
						let seconds = Math.floor(Milliseconds/1000); 
						let minutes = Math.floor(seconds/60); 
						seconds = seconds - (minutes * 60);  
						message.channel.send('冷卻中，剩餘時間' + minutes + ':' + seconds);
						console.log();
					}
				} else {
					message.channel.send('信仰之力不足，神格不明，術式中止。');
				}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
