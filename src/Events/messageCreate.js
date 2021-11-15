/** @format */

const config = require("../Data/config.json");
const Event = require("../Structures/Event.js");
const cmdlist = require("../Data/cmdlist.json");
const fs = require('fs');
var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;
var glory = false;

module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	const args = message.content.replace(/ /g, ""); 
	try {
		/*if (message.content.startsWith(config.prefix)) {
			const temp = message.content.substring(config.prefix.length);
			let order = new Array();
			order = temp.split(' ');
			const command = client.commands.find(cmd => cmd.name == order[0]);
			console.log(order);
			order.push(message.author.id);
			if (!command) return;

			command.run(message, order, client);
		}*/

		if(message.content.indexOf("ID確認") != -1 && message.content.startsWith(config.prefix)) {
			let order = new Array();
			order = message.content.split(' ');
			if(order.length == 3) {
				fs.readFile("./Data/BlueArchive.json", function (err, data) {
					if (err) {
						console.log("檔案讀取錯誤");
						return console.error(err);
					}
					Info = JSON.parse(data);
					Info[order[1]] = order[2];
					redata = JSON.stringify(Info);

					fs.writeFile("./Data/BlueArchive.json", redata, function (err) {
						if (err) {
							console.error(err);
						}
						console.log("蔚藍檔案ID新增");
						message.reply('紀錄成功，輸入「蔚藍檔案」來查看ID');
					})
				})
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
	  	
		let command = client.commands.find(cmd => cmd.name == args);

		if (!command) {
			for (let i = 0; i < cmdlist.length; i++) {
				if (args.indexOf(cmdlist[i]) > -1) {
					//let temp = cmdlist[i] + "L";
					command = client.commands.find(cmd => cmd.name == cmdlist[i]);
					command.run(message, cmdlist[i].toString(), client);
					return;
				}
			}
			return;
		}

		command.run(message, args, client);
	}
	catch (e) {
		message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
		console.log(e);
	}
});
