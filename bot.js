const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!rotom') {
    	message.channel.send('Rotom is an open source Discord bot made by Radiating#9066! It is still in early development, so feel free to send him a message if you have any recommendations/feedback. Github page: https://github.com/Poipole/rotombot');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!snow') {
    	message.channel.send('https://youtu.be/T8cLW0Lckhc');
  	}
});

client.on('message', message => {
    if (message.content === 'ayy') {
    	message.channel.send('lmao');
  	}
});
//Test Features! ^^^

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
