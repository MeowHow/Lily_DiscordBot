/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "清單0測試",
	description: "地雷",
	async run(message, args, client) {
		try {
			//反應區
			// console.log('2');
			
			// const guild = client.guilds.cache.get('848514706972082256');

			// // Fetch and get the list named 'members'
			// guild.members.fetch().then(members =>
			// {
			// 	  // Loop through every members
			// 	members.forEach(member =>
			// 	{
			// 		console.log(member.user.username);
			// 		//console.log(member.user.id);
			// 	});
			// });

		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
