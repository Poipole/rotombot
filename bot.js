const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	switch (message.content) {
		case prefix + 'rotom':
			message.channel.send('Rotom is an open source Discord bot made by Radiating#9066! It is still in early development, so feel free to send him a message if you have any recommendations/feedback. Github page: https://github.com/Poipole/rotombot');
			break;
		case prefix + 'ping':
			message.channel.send('pong!');
			break;
		case prefix + 'pineapple':
			message.channel.send('Pineapple pizza is the best pizza!');
			break;
		case prefix + 'fusions':
			message.channel.send('http://pokefusion.japeal.com/');
			break;
		case prefix + 'soap':
			message.channel.send('**Read the pins!**');
			break;
		case prefix + 'soapy':
			message.channel.send('https://cdn.discordapp.com/attachments/387711694270496772/388361762036121610/moretears.png');
			break;
		
		case 'ayy':
			message.channel.send('lmao');
			break;
	}
});

//Test Features! ^^^
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
