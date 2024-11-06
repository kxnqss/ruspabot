const mineflayer = require('mineflayer');
const radarPlugin = require('mineflayer-radar')(mineflayer);

// Create a bot instance with a specified username
const bot = mineflayer.createBot({
    username: 'Player52', // Replace with your desired username
    host: "cazzosburra1.aternos.me",
    port: 41898
});

// Radar options
const options = {
    host: 'localhost', // Replace with your server's IP address
    port: 0,         // Replace with your server's port
};

// Install the radar plugin
radarPlugin(bot, options);

// Event listener for when the bot spawns
bot.on('spawn', () => {
    console.log('Bot has spawned!');
});

// Event listener for errors
bot.on('error', (err) => {
    console.error(`Error: ${err}`);
});

// Event listener for when the bot disconnects
bot.on('end', () => {
    console.log('Bot has disconnected from the server.');
});