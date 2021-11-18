/** @format */

const config = require("../Data/config.json");
const Event = require("../Structures/Event.js");
const cmdlist = require("../Data/cmdlist.json");
const Plist = require("../Data/Plist.json");
const cmd_config = require("../Data/cmd_config.json");
const cmd_list = require("../Data/cmd_list.json");
var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;
var glory = false;

module.exports = new Event("messageCreate", (client, message) => {
	
	try {
		if (message.author.bot) return;
		if (message.content.startsWith(config.prefix)) {
			const temp = message.content.substring(config.prefix.length);
			let order = new Array();
			order = temp.split(' ');
			command = client.commands.find(cmd => cmd.name == order[0]);
			if (!command) {
				return;
			}
			command.run(message, temp, client);
			return;
		}
		else {
			const args = message.content.replace(/ /g, "");
			
			for (let i = 0; i < Plist.length; i++) {
				if (args == Plist[i]) {
					return;
				}
			}
			if(args.indexOf("NTR欠砍") != -1 || args.indexOf("讓我砍砍") != -1) {
				if(message.author.id == config.MeowHowID) {
					message.channel.send('https://tenor.com/baz4u.gif');
				}
			} else if(args.indexOf("好冷") != -1 || args.indexOf("變冷") != -1 || args.indexOf("天涼") != -1){
				message.channel.send({
					files: [
						"./Source/好冷.png"
					]
				});
			} else if(args.indexOf("==") != -1){
				message.channel.send({
					files: [
						"./Source/真的.png"
					]
				});
			} 

			switch (args) {
				case '蘭尾掰掰':
						case '蘭尾88':
							case '蘭尾再見':
						message.reply('我們晚點見:heart:');
					break;

				default:
					break;
			}
			
			let command;
			if(cmd_config[args]) {
				//單詞雷
				command = client.commands.find(cmd => cmd.name == cmd_config[args].type);
				command.run(message, args, client);
			}
			else {
				//包含雷
				for (let T in Object.keys(cmd_list)) {
					if(args.indexOf(Object.keys(cmd_list)[T]) != -1){
						command = client.commands.find(cmd => cmd.name == cmd_list[Object.keys(cmd_list)[T]].type);
						
						command.run(message, Object.keys(cmd_list)[T], client);
					}
				}
			}


			for (let i = 0; i < cmdlist.length; i++) {
				if (args.indexOf(cmdlist[i]) > -1) {
					command = client.commands.find(cmd => cmd.name == cmdlist[i]);
					command.run(message, cmdlist[i].toString(), client);
					return;
				}
			}
			command = client.commands.find(cmd => cmd.name == args);
			if (!command) {
				return;
			}
			command.run(message, args, client);
		}
	}
	catch (e) {
		message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
		console.log(e);
	}
});
