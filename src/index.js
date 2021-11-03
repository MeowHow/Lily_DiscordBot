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

/*
console.log(message.content); //用這方式看表符ID
console.log(client.emojis.array()); //表符清單
message.channel.send('<:3x:902518306056065075>');

//撈頻道
guild.channels.array().filter(c => c.name === 'General')
console.log(message.guild.channels.array().filter(c => c.name === 'botCreate_私密小聚會'));

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