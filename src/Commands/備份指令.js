/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
const backup = require('discord-backup');

module.exports = new Command({
    name: "備份伺服器",
    description: "特定身分，可使用備份",
    async run(message, args, client) {
        try {
            //反應區
            let getID = message.author.id;
            backup.setStorageFolder(process.cwd() + "/Backups/");
            if (getID == config.MeowHowID || getID == config.MouseID) {
                backup.create(message.guild).then((backupData) => {
                    console.log(backupData.id); 
                    console.log(process.cwd() + "/Backups/");
                });
            } else {
                message.channel.send("暫無權限")
            }

        } catch (error) {
            message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
            console.log(error);
        }
    }
});
