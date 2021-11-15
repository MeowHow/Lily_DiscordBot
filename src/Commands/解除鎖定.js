/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
    name: "解鎖",
    description: "特定身分，使用鎖定強制讓特定地雷出現",
    async run(message, args, client) {
        try {
            //反應區
            let getID = message.author.id;
            let nickname = message.author.nickname;
            if (config.LockID.indexOf(getID) != -1) {
                message.channel.send(nickname+'解除鎖定!');
                config.LockID.pop(getID);
            }

        } catch (error) {
            message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
            console.log(error);
        }
    }
});
