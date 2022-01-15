/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "亂數測試",
    description: "",
    async run(message, args, client) {
        try {
            /*
            let rndInt = Math.floor(Math.random() * 100)
            message.channel.send('你骰出了：' + rndInt);
            if (rndInt <= 15) {
                message.channel.send('卡姆被爆炸');
            } else if (rndInt <= 75) {
                message.channel.send('大家被爆炸');
            } else {
                message.channel.send('膛炸');
            }
            */
        } catch (error) {
            message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
            console.log(error);
        }
    }
});
