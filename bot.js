const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    //no regrets
    client.user.setGame(`Test!`);
});

client.on('message', message => {
    if (message.content === '!rotom') {
    	message.channel.send('Rotom is an open source Discord bot made by Radiating#9066! It is still in early development, so feel free to send him a message if you have any recommendations/feedback. Github page: https://github.com/Poipole/rotombot');
  	}
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('pong!');
  	}
});

client.on('message', message => {
    if (message.content === '!pineapple') {
    	message.channel.send('Pineapple pizza is the best pizza!');
  	}
});

client.on('message', message => {
    if (message.content === 'ayy') {
    	message.channel.send('lmao');
  	}
});

client.on('message', message => {
    if (message.content === '!fusions') {
    	message.channel.send('http://pokefusion.japeal.com/');
  	}
});

client.on('message', message => {
    if (message.content === '!soap') {
    	message.channel.send('**Read the pins!**');
  	}
});

client.on('message', message => {
    if (message.content === '!soapy') {
    	message.channel.send('https://cdn.discordapp.com/attachments/387711694270496772/388361762036121610/moretears.png');
  	}
});

client.on('message', message => {
    if (message.content === '!bestpokemon') {
    	message.channel.send('Rotom is the best Pokémon!');
  	}
});

client.on('message', message => {
    if (message.content === '!thegays') {
    	message.channel.send('http://j.gifs.com/OY0VpE.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!fufu') {
    	message.channel.send('https://i.imgur.com/RXMDIv1.gif');
  	}
});


client.on('message', message => {
    if (message.content === '!disgusting') {
    	message.channel.send('https://i.imgur.com/cOzptAe.png');
  	}
});

client.on('message', message => {
    if (message.content === '!gaypowerlevel') {
    	message.channel.send('https://78.media.tumblr.com/0550f3c6a806b238fff1d87a5a9ae808/tumblr_inline_msaa8cAkb51qz4rgp.png');
  	}
});
//Test Features! ^^^

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
