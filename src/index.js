/*
git remote -v //push位置
git add . --加入序列
git commit -m '' --確認
git push --上傳
git clean -fx --本機刪除忽略上傳的檔案
git rm --cached 檔名 --刪除檔案庫中忽略的檔案
git branch --查看分支 
git branch 分支名  --建立分支
git checkout 分支名 --切換分支
git merge 檔案 --合併分支檔案
git branch 分支名 –d --刪除分支
git branch 分支名 –D --強制刪除分支

const ALL_INTENTS = 
    (1 << 0) +  // GUILDS
    (1 << 1) +  // GUILD_MEMBERS
    (1 << 2) +  // GUILD_BANS
    (1 << 3) +  // GUILD_EMOJIS_AND_STICKERS
    (1 << 4) +  // GUILD_INTEGRATIONS
    (1 << 5) +  // GUILD_WEBHOOKS
    (1 << 6) +  // GUILD_INVITES
    (1 << 7) +  // GUILD_VOICE_STATES
    (1 << 8) +  // GUILD_PRESENCES
    (1 << 9) +  // GUILD_MESSAGES
    (1 << 10) + // GUILD_MESSAGE_REACTIONS
    (1 << 11) + // GUILD_MESSAGE_TYPING
    (1 << 12) + // DIRECT_MESSAGES
    (1 << 13) + // DIRECT_MESSAGE_REACTIONS
    (1 << 14);  // DIRECT_MESSAGE_TYPING

// Outputs 32767
console.log(ALL_INTENTS);
*/
//const Discord = require("discord.js");

/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const config = require("./Data/config.json");
require("dotenv").config();

const client = new Client();

client.login(process.env.MyTOKEN);
client.start();

var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;

client.on('messageCreate', async (message) => {
	//console.log(message.content); //用這方式看表符ID
	
	try {
		var mm = message.content;
		const args = message.content.replace(/ /g, ""); 
		//let megaT = mm.replace(/[-+/\'. %]/g, ""); 
		//console.log(megaT);
		
		switch(args)
		{
			case '為阿苗獻上禮炮':
			/*
				message.channel.send({
					files: [
						"./Source/禮炮.png"
					]
				});
			*/
			message.channel.send('又想壞壞？抱歉這裡只剩下一隻炸蝦。',{
				files: [
					"./Source/炸蝦.jpg"
				]
			});
		
			break;
		
			case '早安':
				message.channel.send({
					files: [
						"./Source/早安.jpg"
					]
				});
			break;
		
			case '恭迎犬哥':
				myDate = new Date();
				newTime = myDate.getMinutes();
				if(newTime - oldTime >= 1){
					message.channel.send({
						files: [
								"./Source/恭迎犬哥.png"
							]
						});
					oldTime = newTime;
				}
			break;
			
			case '上車':
				message.channel.send({
					files: [
						"./Source/上車囉.gif"
					]
				});
			break;
			/*
			case '?':
				
				message.channel.send({
					files: [
						"./Source/物理超渡.jpg"
					]
				});
				
			break;
			*/
			case '醒':
				message.channel.send('我還沒有圖片，但我建議你清醒。');
			break;
			
			case '晚安':
				message.channel.send('https://tenor.com/bKCsG.gif');
			break;
			
			case '睡覺':
				message.channel.send({
					files: [
						"./Source/睡覺.jpg"
					]
				});
			break;
			
			case '邪神日常':
				message.channel.send({
					files: [
						"./Source/日常.png"
					]
				});
			break;
			
			case '我們來聽聽蘭尾的意見。':
				message.channel.send('雖然人類的性癖是自由的，但是我還是建議你去看一下醫生。');
			break;
			
			case 'ชานมนุ่มๆอร้อยอร่อยจนให้อา':
				message.channel.send('媽，我要一杯');
				message.channel.send({
					files: [
						"./Source/媽.jpg"
					]
				});
			break;
			
			case '渣姆喵':
				message.channel.send({
					files: [
						"./Source/渣姆喵.png"
					]
				});
			break;

			case '我有病':
				message.reply({
					files: [
						"./Source/Doctor.mov"
					]
				});
			break;

			case '貓豪有病':
				message.channel.send({
					files: [
						"./Source/貓豪有病.png"
					]
				});
			break;
			
			case '讓我進去':
				message.channel.send('https://tenor.com/5LZw.gif');
			break;

			case '蘭尾掰掰':
				case '蘭尾88':
					case '蘭尾再見':
				message.reply('我們晚點見:heart:');
			break;

			case '生火':
				let rndInt = Math.floor(Math.random() * (100 - 1 + 1) + 1)
				if(rndInt <= 30) {
					message.channel.send("施放失敗，你的柴火咧？");
				} else if (rndInt > 30 && rndInt <= 50) { 
					message.channel.send("https://tenor.com/KXUt.gif");
				} else if (rndInt > 50 && rndInt <= 80) { 
					message.channel.send("https://tenor.com/bmDdl.gif");
				} else if (rndInt > 80 && rndInt <= 95){
					message.channel.send("https://tenor.com/tcfy.gif");
				} else {
					message.channel.send("https://tenor.com/4qZh.gif");
				}
			break;

			case '茶几不乖':
				message.channel.send({
					files: [
						"./Source/茶几不乖.png"
					]
				});
			break;

			case '我是窩體工程師嗎':
				let role01 = message.member.roles.cache.has(config.EngineerID);
				//console.log(role);
				if (role01) {
					message.reply('你是');
				} else {
					message.reply('你不是');
				}
			break;

			case '我是邪神信徒嗎':
				let role02 = message.member.roles.cache.has(config.CthulhuID);
				//console.log(role);
				if (role02) {
					message.reply({
						files: [
							"./Source/cthulhu.png"
						]
					});
				} else {
					message.reply('你不可見證吾主尊容');
				}
			break;

			case '轉吧':
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
			break;
				
			case '測試ing':
				//console.log(client.emojis.array()); //表符清單
				//message.channel.send('<:3x:902518306056065075>');
			break;

			case '測試ID':
				console.log(message.author.id);
			break;

			case '測試':
				//guild.channels.array().filter(c => c.name === 'General')
				//console.log(message.guild.channels.array().filter(c => c.name === 'botCreate_私密小聚會'));
			break;
		}
	}
	catch (e) {
		message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
		console.log(e);
	}
	
});
/*
//建立頻道
function makeChannel(message){
	NewArray = message.content.split('-');
	let name = "botCreate_" + NewArray[1];
	if(NewArray.length == 2) {
		NewArray[2] = 5;
	}
	
	message.guild.createChannel(name,{
		type: 'voice',
	}).then((channel) => {
		channel.setParent('579830645946056704');
		channel.setUserLimit(NewArray[2]) //限制人數上限
	})
}
*/
/*
//獲得頻道ID
console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        List all channels
        guild.channels.forEach((channel) => {
           console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
       })
   })
const localPNG = new Discord.Attachment('C:\Users\sssww\Desktop\bot\fku.png')
generalChannel.send(localPNG)
*/