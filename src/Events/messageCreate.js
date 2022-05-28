/** @format */

const config = require("../Data/config.json");
const Event = require("../Structures/Event.js");
const cmdlist = require("../Data/cmdlist.json");
const Plist = require("../Data/Plist.json");
const cmd_config = require("../Data/cmd_config.json");
const cmd_list = require("../Data/cmd_list.json");
const backup = require('discord-backup');
var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;
var glory = false;

var BackAdmID = "";
var confirmT = false; //伺服器載入確認
var backupID = ""; //backupID

module.exports = new Event("messageCreate", (client, message) => {
	
	try {
		if (message.author.bot) return;
		//console.log(message.content);
		//Math.floor(Math.random() * (max - min + 1) + min)
		//console.log(Math.floor(Math.random() * (1 - 0 + 1) + 0))
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
			
			//載入
			if(confirmT == true && message.author.id === BackAdmID && message.content == '確認'){
				backupID = "";
				BackAdmID = "";
				confirmT = false;
				/*
				backup.setStorageFolder(process.cwd() + "\\Backups");
				backup.fetch(backupID[1]).then(() => {
			
					backup.load(backupID[1], message.guild).then(() => {
			
						return message.author.send('Backup loaded successfully!');
				
					}).catch((err) => {
				
						if (err === 'No backup found')
							return message.channel.send(':x: No backup found for ID '+backupID[1]+'!');
						else
							return message.author.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));
				
					});
			
				}).catch((e) => {
					return message.channel.send(':x: No backup found for ID '+backupID[1]+'!');
				});
				*/
				console.log('123');
				return;
			}
			else if(confirmT == true && message.author.id === BackAdmID && message.content != '確認'){
				backupID = "";
				BackAdmID = "";
				confirmT = false;
				return message.channel.send('載入取消');
			}
			else if(message.content.indexOf("載入伺服器") == 0){
				backup.setStorageFolder(process.cwd() + "\\Backups");
				backupID = message.content.split(/\s/);
				backup.fetch(backupID[1]).then(() => {
					let getID = message.author.id;
					if (getID == config.MeowHowID || getID == config.MouseID){
						BackAdmID = getID;
						message.channel.send(':warning: 全部頻道、規則、設定將被清除並載入備份檔，請輸入"確認"來確定載入，或是輸入任何"確認"以外文字來取消。');
						confirmT = true;
						//console.log(backupID[1]);
						//console.log(BackAdmID);
					}
				}).catch((e) => {
					backupID = "";
					return message.channel.send(':x: No backup found for ID '+backupID[1]+'!');
				});
				return;
			}

			//骰子
			const dicetxt = message.content.toLowerCase();
			if(dicetxt.indexOf("1d20") == 0 || dicetxt.indexOf("1d100") == 0){
				let t = message.content.split(/\s/);
				//Math.floor(Math.random() * (max - min + 1) + min)
				if(t[0].toLowerCase() == "1d20") {
					let dice = Math.floor(Math.random() * (20 - 1 + 1) + 1);
					let txt = '';
					if(t.length > 1){
						txt = '#' + t[1] + '\n';
					}
					txt += t[0] + ' → ' + dice.toString();
					message.reply(txt);
				}
				else if(t[0].toLowerCase() == "1d100") {
					let dice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
					let txt = '';
					if(t.length > 1){
						txt = '#' + t[1] + '\n';
					}
					txt += t[0] + ' → ' + dice.toString();
					message.reply(txt);
				}
				return;
			}
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
			} else if(args.indexOf("==") != -1){
				message.channel.send({
					files: [
						"./Source/真的.png"
					]
				});
			} else if(args.indexOf("真的不對勁") != -1){
				message.channel.send({
					files: [
						"./Source/效率蘭警-特效.jpg"
					]
				});
			} else if(args.indexOf("不對勁") != -1){
				message.channel.send({
					files: [
						"./Source/效率蘭警.jpg"
					]
				});
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
