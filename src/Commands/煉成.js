/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "煉成",
	description: "煉金術",
	async run(message, args, client) {
		try {
			//反應區
			let head = ['<:dog_sad:902521311480385566>',
			'<:4ss:913332349025017857>',
			'<:698541545695084564:912881709681373234>',
			'<:718886762818175046:913330469947469824>',
			'<:744064866477670500:913382736339808288>',
			'<:595210285657227264:912879791340924938>',
			'<:__:913382055453261845>',
			'<:a21613204:902906267331334176>',
			'<:dog_sad:902521311480385566>',
			'<:grobot:902572394567331911>',
			'<:qqqq:913320542868746240>',
			'<:www:912883772876283995>',
			'<:ssssss:913324280425619497>'];
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (head.length - 0 + 1) + 0)
			let body = '<:428579938925543426:902521312491216906>';
			//let body = ['<:428579938925543426:902521312491216906>','<:__:902697838058827807>'];
			let foot = '<:__:906914064507211777>';
			message.channel.send(head[rndInt] + '\n' + body + '\n' + foot);
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
