/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
    name: "鎖定",
    description: "特定身分，使用鎖定強制讓特定地雷出現",
    async run(message, args, client) {
        try {

            let getID = message.author.id;
            //反應區
            if (config.LockID.indexOf(getID) == -1) {
                message.channel.send('鎖定目標!');
                config.LockID.push(getID);
            } else {
                message.channel.send("鎖定模式已經啟用")
            }
            if (message.author.id==config.XgID) {
                message.channel.send("茶几還想鎖定啊?，好啦給你鎖")
            }

        } catch (error) {
            message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
            console.log(error);
        }
    }
});
