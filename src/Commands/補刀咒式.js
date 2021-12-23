/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
let time = 0,Nowtime,cooling = 1200000;
module.exports = new Command({
	name: "茶几看招",
	description: "",
	async run(message, args, client) {
		try {
			//反應區
			let dt = new Date();
			Nowtime = dt.getTime();
			if(Nowtime - time > cooling) {
				message.channel.send('準備施術。');
				message.channel.send({
					files: [
						"./Source/茶几看招.gif"
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
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
